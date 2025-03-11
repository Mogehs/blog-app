import React from "react";
import HeroImage from "/hero1.jpg";
import HeroBg from "/herobg.jpg";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center px-6 py-12 md:px-20 md:h-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl w-full p-6 md:p-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:pr-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl text-[#262626] font-semibold leading-tight">
            Create a Blog
          </h2>
          <p className="mt-4 md:mt-6 text-[#262626]  text-sm md:text-lg">
            Share your story with the world. Create a beautiful, personalized
            blog that fits your brand. Grow your audience with built-in
            marketing tools, or transform your passion into revenue by gating
            access with a paywall.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            {/* <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg hover:bg-gray-200 transition">
              GET STARTED
            </button> */}
            <button className="text-black text-lg uppercase px-5 py-2 rounded-lg border-2 border-white bg-white shadow-[3px_3px_0px_0px_#000] transition active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
              GET STARTED
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="Hero"
            className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
