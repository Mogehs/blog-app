const CardEight = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 text-white bg-[#a9b5df] gap-6">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/card14.jpg"
          alt="Customer Support"
          width={500}
          height={300}
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Expert Customer Care</h2>
        <p className=" mb-4 sm:text-1xl">
          Need some help with your blog? Reach out to our Customer Support Team via email or live chat.
          They can help you find the perfect blog post layout, help you find your RSS feed,
          or help you tackle any other blog-related challenge.
        </p>

        <ul className="text-lg font-medium space-y-2">
          {["Visit Help Center", "Contact Support", "Webinars", "Hire an Expert"].map((item, index) => (
            <li key={index} className="relative group w-max uppercase cursor-pointer border-b-2 b">
              {item}
              {/* Animated Border */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default CardEight; 