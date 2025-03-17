import React from "react";
import { FaStar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="bg-[#376ffe] p-4 text-white mt-15 flex flex-col gap-6 relative pb-20">
      <h2 className="text-[20px] lg:text-[rem] md:text-[1rem] text-center">
        Home / Blogs
      </h2>
      <div className="flex items-center justify-around">
        <FaGear className="text-[#fe965b] text-[25px]" />
        <h1 className="lg:text-[2rem] md:text-[1.5rem] text-[20px]">Blogs</h1>
        <FaStar className="text-[#618bff] text-[25px]" />
      </div>
      <p className="text-center">
        Hot Water Compare System Blog is the top hub for electric, <br />
        Gas, Solar Systems
      </p>

      {/* Search Bar Positioned at Bottom */}
      <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <div className="relative w-[90%] md:w-[60%]">
          <input
            className="border border-gray-300 rounded-full px-14 py-4 w-full pr-24 text-black shadow-xl"
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-xl hover:opacity-80 hover:cursor-pointer">
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
