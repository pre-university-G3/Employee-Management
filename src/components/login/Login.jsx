import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from "react-router-dom";

import Image from '../../assets/logo-dark-v2.png';

const Login = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <main className="h-full relative flex justify-center items-center min-h-screen bg-gray-100 bg-[url('assets/Login-bg.jpg')] bg-cover bg-center p-4">
      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row bg-white rounded-xl md:rounded-2xl shadow-lg w-full max-w-6xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Left Section (Blue Background) */}
        <div
          className="bg-blue-950 flex flex-col items-start md:items-center w-full md:w-1/2 p-6 md:p-12"
          data-aos="fade-right"
        >
          {/* Logo aligned to top-left */}
          <Link to='/'><img
            src={Image}
            alt="Logo"
            className="max-w-[120px] md:max-w-[200px] w-full h-auto self-start animate-bounce"
            data-aos="zoom-in"
          /> </Link>
          {/* Centered Text Below Logo */}
          <div
            className="w-full flex flex-col items-center mt-8 md:mt-12"
            data-aos="fade-up"
          >
            <p className="bg-gradient-to-b from-white/80 to-white/10 bg-clip-text text-transparent text-xl md:text-3xl font-regular italic text-center leading-snug md:leading-normal">
              Welcome.
              <br />
              Start your journey now with
              <br />
              our management
              <br />
              system!
            </p>
          </div>
        </div>

        {/* Right Section (White Background) */}
        <div
          className="flex flex-col w-full md:w-1/2 p-6 md:p-12"
          data-aos="fade-left"
        >
          {/* Login Title aligned with Logo */}
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-12"
            data-aos="fade-down"
          >
            Login to your account
          </h2>

          {/* Login Form */}
          <div
            className="flex flex-col space-y-4 md:space-y-8 w-full max-w-md"
            data-aos="fade-up"
          >
            {/* Username Input */}
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-1 md:mb-2 font-medium text-gray-700 text-base md:text-lg"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="border border-gray-300 p-2 md:p-4 rounded-lg outline-none focus:ring-2 focus:ring-primary-color transition text-base md:text-lg"
              />
            </div>
            {/* Password Input */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 md:mb-2 font-medium text-gray-700 text-base md:text-lg"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="border border-gray-300 p-2 md:p-4 rounded-lg outline-none focus:ring-2 focus:ring-primary-color transition text-base md:text-lg"
              />
            </div>
            {/* Login Button */}
            <button className="bg-primary-color text-white py-2 md:py-4 rounded-lg hover:bg-[#032a5e] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-base md:text-lg">
              Login Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;