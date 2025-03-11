import { FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#b4b5b9] text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Image */}
      <img src="/svgs/footer-logo.svg" alt="logo" />
      {/* Center - Heading */}
      <h2 className="text-xl"></h2>

      {/* Right Side - Social Icons */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-400" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400" />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-black text-2xl hover:text-gray-700" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
