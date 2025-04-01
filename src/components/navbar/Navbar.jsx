<<<<<<< HEAD
import React from 'react'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
        <nav className="flex flex-row justify-around items-center font-en text-[#043873] font-bold cursor-pointer ">
            <div>
                <img className="w-60" src={logo} alt="logo" />
            </div>

            <div className="flex flex-row gap-20 text-[20px] transition hover:delay-500">
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">FEATURE</h3>
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">ABOUT US</h3>
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">HELP & SUPPORT</h3>
            </div>
        
            <div>
                <button className="bg-[#043873] rounded-xl pt-2 pb-2 pr-7 pl-7 font-semibold text-white">Login</button>
            </div>
            
        </nav>
  )
}
=======
import React, { useState } from 'react';
import logo from '../../assets/logo-v5 (1).png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md flex justify-around items-center font-en text-[#043873] font-bold p-3 z-50">
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
        <button className="bg-[#043873] text-white  px-8 py-3">
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
>>>>>>> 2c9960813c8262ad2e879b9eb785548926baa041
