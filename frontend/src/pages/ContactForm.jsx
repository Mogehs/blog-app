import React, { useState } from "react";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="mt-20 bg-[#F9FAFC] text-[#333] py-16 px-6 md:px-12 lg:px-24 rounded-xl shadow-md">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#007bff]">Contact Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have any questions? We’d love to hear from you! Fill out the form or
          reach us through the details below.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-[#007bff]">
            Our Contact Info
          </h3>
          <p className="mt-4 text-gray-600">
            Reach out to us via email, phone, or visit us at our office.
          </p>

          <div className="mt-6 space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-3">
              <LuMapPin size={22} className="text-[#007bff]" />
              <span className="text-gray-700">
                ABC CITY, XYZ STREET, PAKISTAN
              </span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-3">
              <CiMail size={22} className="text-[#007bff]" />
              <a
                href="mailto:admin@gmail.com"
                className="text-gray-700 hover:text-[#0056b3] transition"
              >
                admin@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <LuPhone size={22} className="text-[#007bff]" />
              <a
                href="tel:+923086046246"
                className="text-gray-700 hover:text-[#0056b3] transition"
              >
                +92 11 111 111
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md bg-gray-100 text-gray-900 border-gray-300 focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff] transition"
                required
              />
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md bg-gray-100 text-gray-900 border-gray-300 focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff] transition"
                required
              />
            </div>
            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md h-36 bg-gray-100 text-gray-900 border-gray-300 focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff] transition"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 font-semibold text-lg uppercase rounded-lg bg-[#007bff] text-white shadow-md transform transition hover:bg-[#0056b3] hover:shadow-lg active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
