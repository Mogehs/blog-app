import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardFourBg from "/cardfourbg.jpg";
import CardSix from "/card6.jpg";
import CardSeven from "/card7.jpg";
import CardEight from "/card8.jpg";

const headings = [
  {
    title: "Track Analytics",
    description:
      "Gain insights from blog traffic. Discover which posts are most popular with in-depth analytics.",
  },
  {
    title: "Set Custom Permissions and Schedule Posts",
    description:
      "Add contributors with individual permissions and set posts to go live on a particular date to turn your blog into a publication.",
  },
  {
    title: "Categorize, Tag, and Feature Posts",
    description:
      "Organize posts to make it easy for readers to find new and related content.",
  },
];

const images = [CardSix, CardSeven, CardEight];

const CardFour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-12 bg-[#a9b5df] lg:px-16">
      {/* Left Side - Background Image with Dynamic Centered Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Background Image */}
        <img
          src={CardFourBg}
          alt="Background"
          className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover rounded-lg"
        />

        {/* Centered Dynamic Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Right Side - Text & Headings */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Manage Daily Workflows
        </h2>
        <p className="text-base sm:text-lg text-gray-900">
          Use the dashboard to manage your publishing cadence and categories, customize contributor settings, and track analytics.
        </p>

        {/* Auto-Switching & Hover-Activated Headings */}
        <div className="mt-6 space-y-4">
          {headings.map((heading, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0.6, x: -10 }}
              animate={{ opacity: currentIndex === index ? 1 : 0.6, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-gray-200 text-black" : "text-gray-300"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-bold">{heading.title}:</h3>
              <p className="text-gray-900 text-sm sm:text-base">
                {heading.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFour;
