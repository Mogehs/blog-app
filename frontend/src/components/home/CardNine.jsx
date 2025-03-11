const CardNine = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#788673] text-white text-center md:text-left">
      {/* Left Side - Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-xl">
        Squarespace is the all‑in‑one platform to build a beautiful website.
      </h2>

      {/* Right Side - Button */}
      {/* <button className="mt-4 md:mt-0 w-full sm:w-auto px-6 py-3 text-black bg-white font-medium rounded border-2 border-white transition hover:bg-gray-200">
        START A FREE TRIAL
      </button> */}
      <button className="text-black text-xl uppercase px-5 py-2 rounded-lg border-2 border-white bg-white shadow-[3px_3px_0px_0px_#252525] cursor-pointer mt-9 transition active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
        START A FREE TRIAL
      </button>
    </div>
  );
}

export default CardNine;
