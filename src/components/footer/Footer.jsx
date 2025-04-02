import React from 'react'
import logo from '../../assets/logo-dark-v2.png'
import istad from '../../assets/logo-ISTAD-01.png'

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8">
    <div className="container p mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="w-50 h-50 md:w-xm mb-6 md:mb-0 cursor-pointer">
            <img src={logo} alt="" />
        </div>

        {/* Feature Links */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Feature</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Employee</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Attendance</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About us</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Vision & Mission</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Team</a>
            </li>
          </ul>
        </div>

        {/* Help & Support Links */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">FAQs</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Organized By Section with Button */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 text-right">
        
          <h3 className="text-lg font-semibold mb-4 text-start">Organized by</h3>
          <img className="w-30 align-middle" src={istad} alt="" />
       
          <a href="https://www.cstad.edu.kh/" target="_new" className="text-sm text-blue-400 hover:underline mt-2 block text-start">
            Visit ISTAD website →
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t-3 border-blue-900 mt-4 pt-4 text-sart text-xs">
        <p>©2025 Checkify™. All Right Reserved</p>
      </div>
    </div>
  </footer>
  )
  
}

export default Footer