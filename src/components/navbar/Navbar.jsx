import React, { useState } from "react";
import logo from "../../assets/logo-v6.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm flex justify-between items-center font-en text-[#043873] font-bold p-3 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-40 sm:w-32" src={logo} alt="logo" />
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex flex-row gap-10 text-[16px] lg:text-[20px]">
        <Link to="/feature">
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
            FEATURE
          </h3>
        </Link>
        <Link to="/about">
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
            ABOUT US
          </h3>
        </Link>
        <Link to="/help">
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
            HELP & SUPPORT
          </h3>
        </Link>
      </div>

      {/* Login Button for Desktop */}
      <div className="hidden md:block">
        <Link to="/login">
          <button className="bg-[#043873] text-white px-8 py-3 rounded-lg hover:bg-[#032a5e] transition duration-300">
            LOGIN
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#043873] text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

     {/* Mobile Menu */}
{isMenuOpen && (
  <div className="absolute top-16 left-0 w-full bg-white/70 backdrop-blur-sm flex flex-col items-center gap-4 p-4 shadow-lg md:hidden">
    <Link to="/feature" onClick={() => setIsMenuOpen(false)}>
      <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
        FEATURE
      </h3>
    </Link>
    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
      <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
        ABOUT US
      </h3>
    </Link>
    <Link to="/help" onClick={() => setIsMenuOpen(false)}>
      <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
        HELP & SUPPORT
      </h3>
    </Link>
    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
      <button className="bg-[#043873] text-white rounded-xl px-4 py-2 hover:bg-[#032a5e] transition duration-300">
        LOGIN
      </button>
    </Link>
  </div>
)}
    </nav>
  );
}