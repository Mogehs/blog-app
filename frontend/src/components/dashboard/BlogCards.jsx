import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import FroalaEditor from "react-froala-wysiwyg";
import DOMPurify from "dompurify";

const BLOG_API = import.meta.env.VITE_CREATE_BLOG_API_END_POINT;

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
  });

  // Fetch Blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BLOG_API}/get`);
        setBlogs(res?.data?.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Try again later.");
      }
    };
    fetchBlogs();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog._id);
    setFormData({
      image: blog.image || "",
      title: blog.title,
      content: blog.content,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BLOG_API}/delete/${id}`, { withCredentials: true });
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully!", { autoClose: 1000 });
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete the blog.");
    }
  };

  const handleSave = async () => {
    if (!formData.title || !formData.content || !formData.image) {
      toast.error("All fields, including the image, are required.", {
        autoClose: 1000,
      });
      return;
    }

    try {
      const res = await axios.put(
        `${BLOG_API}/update/${editingBlog}`,
        formData,
        { withCredentials: true }
      );
      setBlogs(
        blogs.map((blog) => (blog._id === editingBlog ? res.data : blog))
      );
      toast.success("Blog updated successfully!", { autoClose: 1000 });
      setEditingBlog(null);
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update the blog.");
    }
  };

  const handleCancel = () => {
    setEditingBlog(null);
  };

  return (
    <div className="p-8 bg-[#788673] min-h-[87.5vh]">
      <Link to="/dashboard/blog/create">
        <button className="relative min-w-[120px] px-4 py-3 text-white/70 rounded-md border border-white/10 bg-gradient-to-b from-[#47515c] to-[#0b151e] shadow-inner transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:scale-110 hover:-translate-y-1 hover:text-white my-5">
          Create Blog
        </button>
      </Link>
      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      {blogs.length === 0 ? (
        <p>No blogs available. Start creating one!</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <div className="text-gray-600 mb-4">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        DOMPurify.sanitize(blog.content)
                          .replace(/<[^>]+>/g, "")
                          .substring(0, 30) + "...",
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-[#0a2281] text-white px-4 py-2 rounded-md hover:cursor-pointer"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:cursor-pointer"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingBlog !== null && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#47515c] to-[#0b151e] bg-opacity-50 flex justify-center items-center py-8 overflow-hidden">
          <div className="bg-[#f3f4f6] w-full md:w-1/2 p-6 rounded-md shadow-lg max-h-screen h-[100%] overflow-y-auto">
            <h2 className="text-lg font-semibold">Upload Image</h2>
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 mt-2 rounded-md"
              onChange={handleImageChange}
            />

            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-40 object-cover rounded mt-2"
              />
            )}

            <h2 className="text-lg font-semibold mt-4">Blog Title</h2>
            <input
              type="text"
              className="w-full border p-2 mt-1 rounded-md"
              placeholder="Blog Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <h2 className="text-lg font-semibold mt-4">Blog Content</h2>
            <div className="border p-2 mt-1 rounded-md bg-white">
              <FroalaEditor
                model={formData.content}
                onModelChange={(content) =>
                  setFormData({ ...formData, content })
                }
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleSave}
                className="bg-[#2563eb] hover:cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-700 text-white hover:cursor-pointer px-4 py-2 rounded-md hover:bg-gray-900 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
