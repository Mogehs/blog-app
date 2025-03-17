import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaReddit } from "react-icons/fa";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
  FaBitcoin,
  FaGooglePay,
  FaTrophy,
  FaMedal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#180830] text-gray-300 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        {/* Apps Section */}
        <div>
          <h3 className="font-bold mb-3 text-gray-500">APPS</h3>
          <ul className="space-y-2">
            <li>Windows</li>
            <li>macOS</li>
            <li>ChromeOS</li>
            <li>iOS</li>
            <li>Android</li>
            <li>Amazon Fire OS</li>
            <li>Android TV</li>
            <li>Amazon Fire TV</li>
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Edge</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold mb-3 text-gray-500">About CHWS</h3>
          <ul className="space-y-2">
            <li>Pricing</li>
            <li>Features</li>
            <li>Benefits</li>
            <li>Servers</li>
            <li>Streaming Services</li>
            <li>SmartDNS</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold mb-3 mt-5 text-gray-500">RESOURCES</h3>
            <ul className="space-y-2">
              <li>What is a Water System?</li>
              <li>Electric</li>
              <li>Gas</li>
              <li>Solar</li>
              <li>Commercial</li>
              <li>Spare Parts</li>
            </ul>
          </div>
        </div>

        {/* Support & Security Section */}
        <div>
          <h3 className="font-bold mb-3 text-gray-500">SUPPORT</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Setup Tutorials</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
          <h3 className="font-bold mt-6 mb-3 text-gray-500">SECURITY</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Risk-Free VPN Trial</li>
            <li>Law Enforcement Request</li>
            <li>Transparency Report</li>
            <li>Warrant Canary</li>
            <li>Responsible Disclosure</li>
          </ul>
        </div>

        {/* Social & Awards Section */}
        <div>
          <h3 className="font-bold mb-3 text-gray-500 text-nowrap">
            SOCIAL MEDIA
          </h3>
          <div className="flex flex-col space-y-2 text-lg">
            <div className="flex items-center gap-2">
              <FaFacebook /> Facebook
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter /> Twitter
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </div>
            <div className="flex items-center gap-2">
              <FaReddit /> Reddit
            </div>
          </div>
          <h3 className="font-bold mt-6 mb-3 text-gray-500">AWARDS</h3>
          <ul className="space-y-4">
            <li className="flex flex-col gap-2 items-start">
              <FaTrophy className="text-yellow-400 bg-white rounded-full p-2 text-4xl" />
              <span className="font-medium">Best Hot Water Brand 2023</span>
            </li>
            <li className="flex flex-col gap-2 items-start">
              <FaMedal className="text-yellow-400 bg-white rounded-full p-2 text-4xl" />
              <span className="font-medium">Best Product 2023</span>
            </li>
          </ul>
        </div>
        {/* Branding */}
        <div>
          <h3 className="text-white text-2xl font-bold">
            C<span className="text-amber-300">om</span>pare
          </h3>
          <p className="mt-2 text-md">
            We are proud to be an organizational member of the Electronic
            Frontier Foundation
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col md:flex-row items-center text-center border-t border-gray-600 pt-5 max-w-7xl mx-auto text-sm w-full px-4 gap-y-4 md:gap-y-0 md:gap-x-3 justify-center md:justify-between">
        <p className="text-nowrap">
          &copy; Copyright 2025 VPN Ltd. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <FaCcPaypal className="text-gray-400" />
          <FaCcVisa className="text-gray-400" />
          <FaCcAmex className="text-gray-400" />
          <FaCcDiscover className="text-gray-400" />
          <FaBitcoin className="text-gray-400" />
          <FaGooglePay className="text-gray-400" />

          <button className="flex items-center bg-white gap-2 justify-center rounded-full px-3 py-1">
            <AiOutlineQuestionCircle className="text-blue-400 font-medium" />
            <h1 className="text-blue-400 text-sm">Help</h1>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
