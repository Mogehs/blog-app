import { FaArrowRight } from "react-icons/fa";

const CardSeven = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-[#788673] text-white">
      {/* Left Side */}
      <div className="flex flex-col gap-3 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl sm:text-4xl font-bold max-w-xs">How to create a blog</h2>
        <button className="relative flex items-center gap-2 border-b-2 mt-3 text-sm sm:text-[15px] w-max text-white font-medium transition-transform hover:translate-x-1 group">
          GET STARTED <FaArrowRight size={14} />
          {/* Moving Border Animation */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>

      </div>

      {/* Right Side */}
      <ol className="list-decimal list-inside text-sm sm:text-base font-medium max-w-md md:max-w-lg space-y-2 text-center md:text-left">
        <li>
          Choose a{" "}
          <span className="relative group">
            <span className="border-b-2 border-white transition-all group-hover:text-gray-300">
              website template
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>{" "}
          to showcase your blog.
        </li>
        <li>
          Check available domains for your blog’s website or brainstorm ideas with our{" "}
          <span className="relative group">
            <span className="border-b-2 border-white transition-all group-hover:text-gray-300">
              Domain Name Generator
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>.
        </li>
        <li>Add a Blog Page and customize the layout and design of your blog.</li>
        <li>
          Create, publish, and manage content with blog and{" "}
          <span className="relative group">
            <span className="border-b-2 border-white transition-all group-hover:text-gray-300">
              image editing
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>{" "}
          tools.
        </li>
        <li>Market your blog using Squarespace’s suite of integrated marketing tools.</li>
        <li>Monetize your blog by adding a paywall and charging for access.</li>
      </ol>

    </div>
  );
}

export default CardSeven;
