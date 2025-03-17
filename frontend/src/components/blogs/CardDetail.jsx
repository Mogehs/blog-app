import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import DOMPurify from "dompurify";

const API_ENDPOINT = import.meta.env.VITE_CREATE_BLOG_API_END_POINT;

const CardDetail = () => {
  const { id } = useParams(); // Get blog ID from URL params
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/get/${id}`, {
          withCredentials: true,
        });
        setBlog(response.data.post);
      } catch (err) {
        setError("Failed to fetch blog details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-10 mt-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        {/* Title & Description */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          {blog.title}
        </h2>
        <p className="mt-2 text-gray-600 text-center sm:text-lg">
          {blog.description}
        </p>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <img
            src={blog.image || "/card4.jpg"}
            alt="Blog"
            className="rounded-xl w-full sm:w-[80%] h-80 object-cover shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          {/* Introduce Section */}
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 group">
              Introduce
              <FaArrowRight className="text-gray-600 text-lg transition-transform duration-300 group-hover:translate-x-2" />
            </h2>
            <p className="text-lg font-medium text-gray-700">
              {blog.title || "Unknown Author"}
            </p>
          </div>

          {/* Description Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 group">
              Description
              <FaArrowRight className="text-gray-600 text-lg transition-transform duration-300 group-hover:translate-x-2" />
            </h2>
            <div
              className="mt-4 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content || ""),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
