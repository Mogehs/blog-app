import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    title:
      "“A blog connects you in a personal way with your clients and online visitors.”",
    subTitle: "Moisés Hernández, Designer",
    description: "moises-hernandez.com/diary",
    image: "/card9.jpg",
    bgColor: "bg-[#788673]",
    descColor: "text-[#f25e3d]",
  },
  {
    title:
      "“Squarespace’s analytics, SEO tools, and social media integrations have helped us grow from a blog with a small following to a growing global audience.”",
    subTitle: "Amyann Cadwell, Co-founder & CEO",
    description: "thegoodtrade.com/beauty",
    image: "/card10.jpg",
    bgColor: "bg-[#788673]",
    descColor: "text-[#44449c]",
  },
  {
    title:
      "“I use Squarespace for my magazine and photography website because it is beautiful, easy to use, and versatile.”",
    subTitle: "Erika Astrid, Founder",
    description: "thekunstmagazine.com/blog",
    image: "/card11.jpg",
    bgColor: "bg-[#788673]",
    descColor: "text-[#fac58c]",
  },
];

const CardFive = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:px-16 min-h-screen ${data[index].bgColor}`}
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {data[index].title}
        </h1>
        <h2 className="text-sm sm:text-md font-medium uppercase">
          {data[index].subTitle}
        </h2>
        <motion.h3
          className={`text-sm sm:text-[10px] relative underline uppercase ${data[index].descColor}`}
        >
          {data[index].description}
          <motion.div
            className="h-1 bg-white w-0 absolute left-0 bottom-0"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>
      </div>

      {/* Right Content (Image & Navigation Buttons) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end mt-8 lg:mt-0">
        <img
          src={data[index].image}
          alt="Slider Image"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
        />

        {/* Navigation Buttons */}
        <div className="flex mt-4 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2  bg-opacity-40 text-white rounded-full shadow-lg hover:bg-opacity-60 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2  bg-opacity-40 text-white rounded-full shadow-lg hover:bg-opacity-60 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFive;
