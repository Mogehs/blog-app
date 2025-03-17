import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_CREATE_BLOG_API_END_POINT;

function BlogCards() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        setBlogPosts(response.data.posts);
        setFilteredBlogs(response.data.posts);
      } catch (err) {
        setError("Failed to load blog posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterBlogs(value, category);
  };

  // Function to handle category filtering
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterBlogs(searchTerm, selectedCategory);
  };

  // Function to filter blogs based on search term and category
  const filterBlogs = (search, category) => {
    let filtered = blogPosts;

    if (category !== "All") {
      filtered = filtered.filter((blog) => blog.category === category);
    }

    if (search) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search) ||
          blog.description.toLowerCase().includes(search)
      );
    }

    setFilteredBlogs(filtered);
  };

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <div className="p-4">
      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between px-4 sm:px-10">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2 focus:ring focus:ring-blue-200 outline-none"
        />

        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3 focus:ring focus:ring-blue-200 outline-none"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500">No matching blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 sm:p-10 hover:cursor-pointer">
          {filteredBlogs.map((item) => (
            <div
              key={item._id}
              className="flex flex-col gap-2"
              onClick={() => navigate(`/blog/${item._id}`)}
            >
              <img
                src={item.image || "https://via.placeholder.com/400"}
                alt="not found"
                className="rounded-xl h-[40vh] object-cover"
              />
              <p className="bg-[#EBF1F8] py-1 px-2 rounded-full text-[#1447e6] font-semibold text-center text-sm w-fit">
                {item.category || "Uncategorized"}
              </p>
              <h2 className="lg:text-[1.2rem] md:text-[1rem] text-[20px] font-bold text-[#333]">
                {item.title ? `${item.title.substring(0, 50)}...` : item.title}
              </h2>
              <p className="text-[#666]">
                {item.description
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogCards;
