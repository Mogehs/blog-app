import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RichTextEditor from "./RichTextEditor";
import axios from "axios";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageFile: null,
    imagePreview: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imageFile: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async () => {
    if (!formData.title || !formData.content || !formData.imageFile) {
      toast.error("Please fill all fields, including an image file.", {
        autoClose: 1000,
      });
    }
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("blog-photo", formData.imageFile);
    const BLOG_API = import.meta.env.VITE_CREATE_BLOG_API_END_POINT;
    try {
      setIsLoading(true);
      let res = await axios.post(`${BLOG_API}/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.status === 201) {
        setTimeout(() => navigate("/dashboard"), 1000);
        return toast.success("Blog created successfully!", { autoClose: 1000 });
      }
      return toast.error("Failed To Create The Blog", { autoClose: 900 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center bg-[#788673] min-h-screen">
      <div className="bg-[#f3f4f6] p-6 rounded-md shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <h2 className="text-lg font-semibold">Blog Title</h2>
        <input
          type="text"
          className="w-full border p-2 mt-1 rounded-md focus:ring focus:ring-blue-300"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <h2 className="text-lg font-semibold mt-4">Blog Content</h2>
        <RichTextEditor
          setContent={(content) => setFormData({ ...formData, content })}
        />

        <h2 className="text-lg font-semibold mt-4">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          className="w-full border p-2 mt-1 rounded-md focus:ring focus:ring-blue-300"
          onChange={handleImageChange}
          required
        />

        {formData.imagePreview && (
          <div className="mt-4">
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            disabled={isLoading}
            onClick={handleCreate}
            className={`py-2 px-4 rounded ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {isLoading ? " Creating...." : "Create"}
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition hover:cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
