import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png" // change this to your logo file in public/
          alt="Fledge Academy Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold">Fledge Academy</h1>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black transition">Courses</a>
        <a href="#" className="hover:text-black transition">About</a>

        <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow">
          Book Free Trial
        </button>
      </div>
    </nav>
  );
}
