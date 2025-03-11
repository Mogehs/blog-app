import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-b border-gray-200 py-2.5 bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <img src="/svgs/logo.svg" alt="logo" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-500 p-2 rounded-lg"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 text-white font-medium">
            {["Home", "All Post", "About"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  rounded-lg text-white lg:border-0 lg:p-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <div className="hidden lg:flex items-center">
          <button className="text-black text-lg font-medium  px-2 py-1 rounded-lg border-2 border-white bg-white shadow-[3px_3px_0px_0px_#000] transition active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
