import React from "react";
import blogs from "../../components/blogs/blogData";

function PopularBlogs() {
  // Define an array of colors
  const badgeColors = ["bg-[#a66ded]", "bg-[#19d893]", "bg-[#ff9455]"];

  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center my-8">
      <h2 className="text-[#f09cb4] text-[20px]">Popular</h2>
      <h1 className="font-bold text-[25px] md:text-[1rem] lg:text-[1.5rem]">
        Popular Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-4 xl:px-28">
        {blogs?.slice(0, 3).map((blog, index) => (
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
                By: <span className="text-black">Ali</span>
              </p>
              <p className="text-[#a5a5a8]">1h ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularBlogs;
