import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardBg from "/cardbg.jpg";
import CardFirst from "/card1.jpg";
import CardTwo from "/card2.jpg";

const CardOne = () => {
    return (
        <div className="flex flex-col items-center text-center py-16 px-4 bg-[#788673]">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-[350px] md:max-w-full">Explore endless design options</h2>

            {/* Background Image with Cards */}
            <div className="relative w-full max-w-5xl mt-10 px-4 md:px-0">
                {/* Background Image Wrapper (Visible only on md and larger) */}
                <div
                    className="absolute inset-0 rounded-lg bg-center bg-cover shadow-lg hidden md:block"
                    style={{ backgroundImage: `url(${CardBg})` }}
                ></div>

                {/* Cards Section */}
                <div className="relative z-10 grid grid-cols-1 gap-6 w-full p-6 md:p-8 mt-12 bg-[#eee4d2] md:bg-transparent">
                    {/* Card 1 */}
                    <div className="p-6 flex flex-col md:flex-row bg-opacity-90">
                        <img src={CardFirst} alt="Design Preview" className="w-full md:w-[280px] h-[200px] object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="text-left">
                            <p className="text-sm text-[#78655a]">05.03.2025</p>
                            <h3 className="text-2xl font-semibold text-[#78655a] mt-2">Morning Tea</h3>
                            <p className="text-gray-700 text-lg mt-2 w-full md:w-[340px]">Discover creative blog designs that showcase your content beautifully.</p>
                            <a href="#" className="text-[#78655a] font-semibold mt-3 inline-block border-b-2 border-[#78655a]">Read More</a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 flex flex-col md:flex-row bg-opacity-90">
                        <img src={CardTwo} alt="Creative Theme" className="w-full md:w-[280px] h-[200px] object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="text-left">
                            <p className="text-sm text-[#78655a]">03.06.2025</p>
                            <h3 className="text-2xl font-semibold text-[#78655a] mt-2">Milk Substitutions</h3>
                            <p className="text-gray-700 text-lg mt-2 w-full md:w-[340px]">Choose from various templates and personalize them to fit your style.</p>
                            <a href="#" className="text-[#78655a] font-semibold mt-3 inline-block border-b-2 border-[#78655a]">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Heading */}
            <p className="text-lg text-white font-medium max-w-2xl mt-10 px-4">
                Bring your vision to life with Squarespace’s flexible blog layouts, custom color palettes, cohesive fonts, access to high-quality stock images, and built-in photo editing capabilities.
            </p>

            {/* Call to Action with Hover Effect */}
            <a href="#" className="relative mt-4 border-b-2 text-sm font-medium text-white flex items-center gap-2 group">
                GET STARTED
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />

                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
        </div>
    );
};

export default CardOne;









