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
      return toast.error("Please fill all fields, including an image file.", {
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
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.status === 201) {
        toast.success("Blog created successfully!", { autoClose: 1000 });
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        toast.error("Failed To Create The Blog", { autoClose: 900 });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#252537]">
      <div className="bg-[#2d2e3f] bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Blog Title */}
        <h2 className="text-xl font-semibold text-[#ff9800] mb-2">
          Blog Title
        </h2>
        <input
          type="text"
          className="w-full p-3 border-none rounded-md bg-[#3a3b4f] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff9800]"
          placeholder="Enter blog title..."
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        {/* Blog Content */}
        <h2 className="text-xl font-semibold text-[#ff9800] mt-4 mb-2">
          Blog Content
        </h2>
        <RichTextEditor
          setContent={(content) => setFormData({ ...formData, content })}
        />

        {/* Image Upload */}
        <h2 className="text-xl font-semibold text-[#ff9800] mt-4 mb-2">
          Upload Image
        </h2>
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 rounded-md border-none bg-[#3a3b4f] text-white focus:ring-2 focus:ring-[#ff9800]"
          onChange={handleImageChange}
        />

        {/* Image Preview */}
        {formData.imagePreview && (
          <div className="mt-4">
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            disabled={isLoading}
            onClick={handleCreate}
            className={`w-full sm:w-auto py-3 px-6 rounded-lg text-white font-medium transition ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#ff9800] hover:bg-[#ff7b00] shadow-lg"
            }`}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
