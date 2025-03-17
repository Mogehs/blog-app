import React from "react";
import blogs from "../../components/blogs/blogData";

function MoreArticles() {
  // Define an array of colors
  const badgeColors = ["bg-[#a66ded]", "bg-[#19d893]", "bg-[#ff2659]"];

  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center my-8">
      <div className="flex items-center justify-between w-[80%]">
        <h1 className="font-bold text-[20px] md:text-[1rem] lg:text-[1.5rem]">
          More-read Articles
        </h1>
        <button className="text-nowrap px-4 py-2 rounded-md bg-[#fe9456] text-white hover:cursor-pointer">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-16 xl:px-28">
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

export default MoreArticles;
