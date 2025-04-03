import React from "react";

import logo from "../../assets/logo-dark-v2.png";
import istad from "../../assets/logo-ISTAD-01.png";

const Footer = () => {
  return (
    <footer className="xl:h-[38vh] bg-[#043873] text-white py-7">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-5">
          {/* Logo Section */}
          <div className="w-full md:w-auto mb-5 md:mb-0 flex justify-center md:justify-start">
            <img
              className="w-50 md:w-70 lg:w-80 object-contain"
              src={logo}
              alt="Checkify Logo"
            />
          </div>

          {/* Feature Links */}
          <div className="w-5 sm:w-1/2 xl:w-30 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Feature</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Employee
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Attendance
                </a>
              </li>
              
            </ul>
          </div>

          {/* About Us Links */}
          <div className="w-full sm:w-1/2 md:w-40 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Vision & Mission
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support Links */}
          <div className="w-full sm:w-1/2 md:w-30 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Organized By Section */}
          <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 xl:justify-self-start">Organized by</h3>
            <img
              className="w-28 md:w-32 lg:w-36 object-contain mx-auto md:mx-0"
              src={istad}
              alt="ISTAD Logo"
            />
            <a
              href="https://www.cstad.edu.kh/"
              target="_new"
              className="text-sm text-blue-400 hover:underline underline-offset-3 decoration-3 mt-2 block xl:justify-self-start"
            >
              Visit ISTAD website →
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-900 mt-4 pt-4 text-center text-xs">
          <p>©2025 Checkify™. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;