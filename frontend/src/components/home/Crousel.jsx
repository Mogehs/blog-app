import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Stanton from "/stanton.jpg";
import FillMore from "/fillmore.jpg";
import PalaMera from "/palmera.jpg";
import Souto from "/souto.jpg";
import Brower from "/brower.jpg";

const images = [
  { src: Stanton, name: "STANTON" },
  { src: FillMore, name: "FILLMORE" },
  { src: PalaMera, name: "PALMERA" },
  { src: Souto, name: "SOUTO" },
  { src: Brower, name: "BROWER" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8 bg-[#a9b5df]">
      {/* Header Section */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-start gap-6 md:gap-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  cursor-pointer w-full md:w-[250px]">
          Pick your starting point
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-md md:text-lg text-gray-900 text-start font-medium w-full md:w-[300px]">
            Explore the various website template options to create a blog that best represents your brand.
          </p>
          <a href="#" className="relative font-medium flex items-center  group w-max">
            Browse Templates
            <FaArrowRight className="ml-2 font-base group-hover:translate-x-1 transition-transform" />

            {/* Animated Underline */}
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl mt-8 flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
              <img
                src={image.src}
                alt={`Template - ${image.name}`}
                className="w-full sm:w-[600px] md:w-[800px] h-[200px] sm:h-[250px] md:h-[300px] rounded-lg shadow-lg object-cover"
              />
              <p className="mt-2 text-md sm:text-lg font-medium text-center w-full">{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center md:justify-end w-full max-w-6xl mt-4 gap-4">
        <button onClick={prevSlide} className="bg-gray-300 p-3 rounded-full hover:bg-gray-400">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="bg-gray-300 p-3 rounded-full hover:bg-gray-400">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
