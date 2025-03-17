import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-[#252537] shadow-lg p-4 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover shadow-md"
          />
          <span className="text-xl font-bold text-[#ff9800]">Admin Panel</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavItem to="/dashboard" label="Home" />
          <NavItem to="/dashboard/users" label="Users" />
        </div>
      </div>
    </nav>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="text-[#e0e0e0] text-lg font-medium transition-all duration-300 hover:text-[#ff9800] hover:scale-105"
  >
    {label}
  </Link>
);

export default AdminNavbar;
