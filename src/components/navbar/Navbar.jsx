import React, { useState } from "react";
import logo from "../../assets/logo-v6.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-2 z-50 shadow-md">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center">
          <img className="w-32 sm:w-40 cursor-pointer" src={logo} alt="logo" />
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row gap-8 text-[16px] lg:text-[18px] font-semibold text-[#043873]">
        <Link to="/feature">
          <h3 className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#043873] cursor-pointer">
            FEATURE
          </h3>
        </Link>
        <Link to="/about">
          <h3 className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#043873] cursor-pointer">
            ABOUT US
          </h3>
        </Link>
        <Link to="/help">
          <h3 className="hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#043873] cursor-pointer">
            HELP & SUPPORT
          </h3>
        </Link>
      </div>

      {/* Desktop Login Button */}
      <div className="hidden md:block">
        <Link to="/login">
          <button className="bg-[#043873] text-white px-6 py-2 rounded-lg hover:bg-[#032a5e] transition duration-300 cursor-pointer hover:scale-105">
            LOGIN
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#043873] text-2xl cursor-pointer "
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-start gap-6 p-6">
          <Link to="/feature" onClick={() => setIsMenuOpen(false)}>
            <h3 className="text-[#043873] font-bold hover:underline hover:decoration-4 hover:underline-offset-4 cursor-pointer">
              FEATURE
            </h3>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <h3 className="text-[#043873] font-bold hover:underline hover:decoration-4 hover:underline-offset-4 cursor-pointer">
              ABOUT US
            </h3>
          </Link>
          <Link to="/help" onClick={() => setIsMenuOpen(false)}>
            <h3 className="text-[#043873] font-bold hover:underline hover:decoration-4 hover:underline-offset-4 cursor-pointer">
              HELP & SUPPORT
            </h3>
          </Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-[#043873] text-white px-6 py-2 rounded-lg hover:bg-[#032a5e] transition duration-300">
              LOGIN
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}