import React from "react";

function StayInKnow() {
  return (
    <div className="p-4 flex md:flex-row flex-col items-center gap-4">
      <div className="flex flex-col gap-4 w-full items-start md:px-8 px-2">
        <h1 className="font-bold text-xl md:text-lg lg:text-2xl">
          Stay in the Know
        </h1>
        <p className="text-gray-600">
          Be the first to hear about new classes and breaking news.
        </p>

        {/* Input container with relative positioning */}
        <div className="relative w-full md:w-auto">
          <input
            className="border border-gray-300 rounded-xl px-4 py-4 w-full pr-24"
            type="email"
            placeholder="Email Here"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#fe9456] text-white px-4 py-2 rounded-lg hover:opacity-80 hover:cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-full p-4">
        <img
          className="rounded-xl"
          src="/blog.webp"
          alt="Newsletter illustration"
        />
      </div>
    </div>
  );
}

export default StayInKnow;
