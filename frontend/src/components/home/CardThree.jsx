import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardFour from "/card4.jpg";
import CardFive from "/card5.jpg";

const CardThree = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4 sm:px-8 md:px-16 bg-[#788673]">

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl">
        Turn your content into income
      </h2>

      {/* Additional Heading */}
      <p className="text-base sm:text-lg md:text-xl text-white font-medium max-w-xl mt-4 sm:mt-6">
        Monetize your blog by adding a paywall and charging for access. Squarespace gives you everything you need to create, promote, and sell digital content and memberships.
      </p>

      {/* Call to Action with Hover Effect */}
      <a href="#" className="relative mt-4 sm:mt-6 text-sm border-b-2 font-medium text-white flex items-center gap-2 group">
        LEARN MORE
        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />

        {/* Animated Underline */}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>


      {/* Card 1 - Image on Right */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-12 p-6 sm:p-10 gap-6 sm:gap-8">

        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">
            Sell premium content
          </h2>
          <p className="mt-3 sm:mt-4 text-white text-sm sm:text-md lg:text-lg font-medium">
            Whether you’re a chef selling recipes and cooking videos, or a financial planner sharing courses and newsletters, Squarespace has the tools you need to sell exclusive content on your website.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={CardFour} alt="CardFour" className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>

      </div>

      {/* Card 2 - Image on Left */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-12 p-6 sm:p-10 gap-6 sm:gap-8">

        {/* Left Side - Image (Updated to appear on left) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={CardFive} alt="CardFive" className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">
            Create a paid newsletter
          </h2>
          <p className="mt-3 sm:mt-4 text-white text-sm sm:text-md lg:text-lg font-medium">
            Use Squarespace to grow and manage your mailing lists, send newsletters, and connect with your audience—all from one place.
          </p>
        </div>

      </div>

    </div>
  );
};

export default CardThree;
