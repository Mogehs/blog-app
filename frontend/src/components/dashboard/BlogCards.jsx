import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import FroalaEditor from "react-froala-wysiwyg";
import DOMPurify from "dompurify";

const BLOG_API = import.meta.env.VITE_CREATE_BLOG_API_END_POINT;
const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};
const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
  });

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
        {
          withCredentials: true,
        }
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
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <Link to="/dashboard/blog/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-5 hover:bg-blue-700">
          Create Blog
        </button>
      </Link>
      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      {blogs.length === 0 ? (
        <p className="text-center">No blogs available. Start creating one!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-2">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-300">
                {stripHtml(DOMPurify.sanitize(blog.content)).substring(0, 50) +
                  "..."}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {editingBlog !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4 transition-opacity duration-300]">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-3xl flex gap-6 transform scale-100 transition-transform duration-300">
            {/* Left Side - Image Upload & Preview */}
            <div className="w-1/2 flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Edit Blog
              </h2>

              <label className="block text-gray-600 font-medium mb-2">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border p-2 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
                onChange={handleImageChange}
              />
              {formData.image && (
                <div className="mt-3">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-52 object-cover rounded-md border shadow-sm"
                  />
                </div>
              )}
            </div>

            {/* Right Side - Title & Content Editor */}
            <div className="w-1/2 flex flex-col text-black">
              <label className="block text-gray-600 font-medium">
                Blog Title
              </label>
              <input
                type="text"
                className="w-full border p-3 mt-2 rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter blog title..."
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <label className="block mt-4 text-gray-600 font-medium">
                Blog Content
              </label>
              <div className="border p-2 mt-2 rounded-lg bg-white shadow-sm h-40 overflow-auto">
                <FroalaEditor
                  model={formData.content}
                  onModelChange={(content) =>
                    setFormData({ ...formData, content })
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={handleCancel}
                  className="px-5 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
