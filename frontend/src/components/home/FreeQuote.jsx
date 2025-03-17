import React from "react";
import { MdOutlineHeatPump } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";

// Define icons correctly
const icons = [
  { icon: <MdOutlineHeatPump /> },
  { icon: <IoIosWater /> },
  { icon: <FaPersonRunning /> },
];

function FreeQuote() {
  return (
    <div className="bg-[#180830] p-4 rounded-4xl my-8 flex flex-col justify-center items-center gap-4">
      <h2 className="text-[#f09cb4] text-[20px]">Free Quote</h2>
      <h1 className="font-bold text-[25px] md:text-[1rem] lg:text-[1.5rem] text-white">
        Get your Free Quote
      </h1>
      <p className="text-white">
        We have saved our customers $000's - see how much you can save today!
      </p>
      <h1 className="font-bold text-[20px] md:text-[1rem] lg:text-[1.5rem] text-white">
        The hot Water System I am most interested in:
      </h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {icons.map((item, index) => (
          <div
            key={index}
            className="text-3xl p-4 border bg-[#eff3ff] text-black "
          >
            <p className="text-[60px]">{item.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeQuote;
