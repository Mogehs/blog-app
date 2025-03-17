import React from "react";

function ForgettheRest() {
  return (
    <div className="bg-[#484bfe] py-18 rounded-4xl flex md:flex-row flex-col items-center justify-around my-8 gap-6">
      <h2 className="text-white lg:text-[1.5rem] md:text-[1rem] text-[25px] font-bold">
        Forget the rest <br /> we compare the best
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <button className="bg-[#376ffe] text-white px-4 py-2 rounded-lg hover:opacity-80 hover:cursor-pointer w-full text-nowrap">
          Get Free Quote
        </button>
        <button className="bg-[#4c45fd] text-white px-4 py-2 rounded-lg hover:opacity-80 hover:cursor-pointer border w-full text-nowrap">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ForgettheRest;
