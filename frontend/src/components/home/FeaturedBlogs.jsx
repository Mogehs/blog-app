import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define an array of colors
  const badgeColors = [
    "bg-[#a66ded]",
    "bg-[#19d893]",
    "bg-[#ff2659]",
    "bg-[#ff9455]",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/post/get"
        );
        setBlogs(response.data.posts || []); // Ensure blogs is always an array
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center my-8 bg-[#eff3ff]">
      <h2 className="text-[#f09cb4] text-[20px]">Popular</h2>
      <h1 className="font-bold text-[25px] md:text-[1rem] lg:text-[1.5rem]">
        Featured Blogs
      </h1>

      {/* Show message if blogs array is empty */}
      {blogs.length === 0 ? (
        <div className="text-center flex flex-col items-center gap-3 p-6 bg-white shadow-md rounded-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486804.png"
            alt="No Blogs"
            className="w-32 h-32"
          />
          <h2 className="text-xl font-bold text-gray-700">
            No Blogs Available
          </h2>
          <p className="text-gray-500">Check back later for amazing content!</p>
        </div>
      ) : (
        <Link to="/blogs">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="p-4 border border-[#dfdfdf] rounded-xl flex flex-col justify-center gap-4"
              >
                {/* Image Wrapper with Badge */}
                <div className="relative w-full">
                  <img
                    className="w-full md:h-60 rounded-xl"
                    src={blog.image}
                    alt={blog.title || "Blog Image"}
                  />

                  {/* Dynamic Badge Color */}
                  <span
                    className={`absolute bottom-2 left-2 ${
                      badgeColors[index % badgeColors.length]
                    } text-white text-sm font-semibold px-3 py-1 rounded-md`}
                  >
                    {blog.category}
                  </span>
                </div>
                <h1 className="font-bold">{blog.title}</h1>
                <div className="flex justify-between items-center">
                  <p className="text-[#a5a5a8]">
                    By:{" "}
                    <span className="text-black">
                      {blog.author || "Unknown"}
                    </span>
                  </p>
                  <p className="text-[#a5a5a8]">{blog.createdAt || "1h ago"}</p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      )}
    </div>
  );
}

export default FeaturedBlogs;
