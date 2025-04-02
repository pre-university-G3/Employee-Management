import React, { useState } from 'react';
import logo from '../../assets/logo-checkify.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-2xl flex justify-around items-center font-en text-[#043873] font-bold p-3 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-40 sm:w-32" src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex flex-row gap-10 text-[16px] lg:text-[20px]">
        <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
          FEATURE
        </h3>
        <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
          ABOUT US
        </h3>
        <h3 className="hover:underline hover:decoration-5 hover:underline-offset-5 hover:decoration-[#043873] cursor-pointer">
          HELP & SUPPORT
        </h3>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="bg-[#043873] text-white rounded-xl px-4 py-2">
          LOGIN
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#043873]">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 p-4 shadow-lg md:hidden">
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
            FEATURE
          </h3>
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
            ABOUT US
          </h3>
          <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873] cursor-pointer">
            HELP & SUPPORT
          </h3>
          <button className="bg-[#043873] text-white rounded-xl px-4 py-2">
            LOGIN
          </button>
        </div>
      )}
    </nav>
  );
}