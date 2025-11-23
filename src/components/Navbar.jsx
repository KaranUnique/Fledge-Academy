import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 shadow-sm bg-white relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Fledge Academy Logo"
          className="w-7 h-7 sm:w-8 sm:h-8"
        />
        <h1 className="text-lg sm:text-xl font-semibold">Fledge Academy</h1>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black transition">Courses</a>
        <a href="#" className="hover:text-black transition">About</a>

        <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition">
          Book Free Trial
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-black transition py-2">Courses</a>
            <a href="#" className="hover:text-black transition py-2">About</a>
            <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg shadow hover:shadow-lg transition w-full">
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
