import React from "react";
import CardThree from "/card3.jpg";

const CardTwo = () => {
    return (
        <div className="flex pt-12 px-4 sm:px-8 md:px-16 lg:px-20 items-center bg-[#a9b5df] justify-center min-h-screen">
            <div className="flex flex-col gap-8 md:flex-row items-center max-w-6xl bg-opacity-70 p-6 sm:p-10">
                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:pr-10 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] font-bold leading-tight">
                        Publish faster and on-brand with Squarespace AI
                    </h2>
                    <h3 className="mt-4 sm:mt-6 md:mt-8 text-[#ffffff] text-base sm:text-lg lg:text-xl font-medium">
                        Each blog post has to start somewhere. Squarespace AI is your personal creative agency providing
                        idea starter content for you to mold into the perfect post. Get started with tailored recommendations
                        to build your website with AI.
                    </h3>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src={CardThree} alt="Hero" className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default CardTwo;
