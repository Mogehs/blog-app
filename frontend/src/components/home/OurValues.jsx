import React from "react";

function OurValues() {
  return (
    <div className="p-4 flex md:flex-row flex-col items-center gap-4">
      <div className="flex flex-col gap-4 w-full items-start md:px-8 px-2">
        <h2 className="text-[#f09cb4] text-[20px]">Our Values</h2>
        <h1 className="font-bold text-[25px] md:text-[1rem] lg:text-[1.5rem]">
          Proudly Australian <br /> Owned and Operated
        </h1>
        <p>
          It was popularised in the 1980s with the release of Letraset sheets{" "}
          <br /> containing Lorem Ipsum passages, and more recently.
        </p>
        <button className="px-4 py-2 rounded-md bg-[#fe9456] text-white hover:cursor-pointer">
          View all
        </button>
      </div>
      <div className="w-full p-4">
        <img className="rounded-xl" src="/blog.webp" alt="" />
      </div>
    </div>
  );
}

export default OurValues;
