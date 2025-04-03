import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Scroll from '../scroll/ProgressScrollBar'
import Button from '../button/Button'
import AOS from "aos";
import "aos/dist/aos.css";

import pic1 from "../../assets/home-pic-10.png";
import pic2 from "../../assets/landing-pic-2.png";
import pic3 from "../../assets/landing-pic-3.png";
import pic4 from "../../assets/landing-pic-4.png";
import js from "../../assets/js-logo-v2.png";
import html from "../../assets/html-logo-v2.png";
import tailwind from "../../assets/tailwind-logo-v2.png";
import react from "../../assets/react-logo-v2.png";
import demo from '../../assets/demo-pic.jpg'
import quote1 from '../../assets/quote-v7.png'
import quote2 from '../../assets/quote-v2.png'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="text-white pt-20">
        {/* Hero Section */}
        <section
          className=" h-[100vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] items-center px-5 lg:px-20 lg:pr-0"
          data-aos="fade-up"
        >
          <div>
            <h1 className="font-bold text-4xl lg:text-5xl leading-snug mb-5">
              Scale Attendance Management Safe and Secure
            </h1>
            <p className="leading-7 lg:leading-8 mb-5">
              Manage your employees' attendance with fast and reliable
              processes. Secure and highly customizable. Rise Attendance is the
              best partner for you if you want to scale your workforce
              management efficiently worldwide.
            </p>

           <Link to='/login'> <Button /> </Link>
          </div>

          <div className="flex justify-center" data-aos="fade-left">
            <img
              src={pic1}
              alt="Hero"
              className="w-[800px] max-w-md lg:max-w-[1000px] cursor-pointer"
            />
          </div>
        </section>

        {/* Smart Attendance Section */}
        <section
          className="py-10 pb-0 px-5 lg:px-20 bg-white text-black grid lg:grid-cols-2 gap-10"
          data-aos="fade-right"
        >
          <div>
            <h2 className="font-bold text-3xl lg:text-4xl text-[#043873] mb-5 pt-20">
              Smart Attendance Management
            </h2>
            <p className="leading-7 lg:leading-8">
              Track employee attendance effortlessly with support for images,
              documents, and audio records. Generate reports, create shift
              schedules, and manage attendance data securely. Capture and save
              records instantly using the mobile app.
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src={pic2}
              alt="Smart Attendance"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </section>

        {/* Collaborate Section */}
        <section
          className="py-10 pt-5 px-5 lg:px-20 lg:pl-0 bg-white text-black grid lg:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          <div
            className="flex justify-center order-1 lg:order-2"
            data-aos="fade-right"
          >
            <img
              src={pic3}
              alt="Collaborate"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-bold text-3xl lg:text-4xl text-[#043873] mb-5">
              Collaborate with Your Team
            </h2>
            <p className="leading-7 lg:leading-8">
              Use the employee management system to share updates, notes, and
              tasks with your team members. Collaborate seamlessly and keep
              everyone on the same page. You can also share information through
              secure links to keep your team informed.
            </p>
          </div>
        </section>

        {/* Manage Workforce Section */}
        <section
          className="py-20 px-5 lg:px-20 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] text-white text-center"
          data-aos="zoom-in"
        >
          <h2 className="font-bold text-3xl lg:text-4xl mb-5">
            Manage Your Workforce Anywhere, Anytime
          </h2>
          <p className="leading-7 lg:leading-8 max-w-3xl mx-auto">
            Easily track attendance, manage shifts, and oversee employee
            performance from any device. Whether you're in the office or working
            remotely, our platform keeps you connected with real-time updates
            and cloud-based access.
          </p>
        </section>

        {/* Employee Data Section */}
        <section
          className="py-20 px-5 lg:px-20 bg-white text-black grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <div>
            <h2 className="font-bold text-3xl lg:text-4xl text-[#043873] mb-5">
              100% Your Employee Data
            </h2>
            <p className="leading-7 lg:leading-8">
              Our system is open source, and all employee records are saved in
              an open, accessible format giving you complete control. You'll
              always have direct access to your data, with no restrictions or
              hidden barriers.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={pic4}
              alt="Employee Data"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          className="py-20 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] text-white text-center"
          data-aos="zoom-in"
        >
          <h2 className="font-bold text-3xl lg:text-4xl mb-10">TECH STACK</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
            <img className="w-16 sm:w-20 lg:w-32" src={js} alt="JavaScript" />
            <img className="w-16 sm:w-20 lg:w-32" src={html} alt="HTML" />
            <img
              className="w-16 sm:w-20 lg:w-32"
              src={tailwind}
              alt="TailwindCSS"
            />
            <img className="w-16 sm:w-20 lg:w-32" src={react} alt="React" />
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section
          className="py-30 px-5 lg:px-20 not-[]:text-black text-center"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-3xl lg:text-4xl mb-10 text-[#043873]">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,400px)] gap-5 justify-center">
            <div className="bg-white shadow-md rounded-3xl p-5 h-100 w-90 justify-self-center">
              <img 
              src={quote1} 
              alt="" 
              className="w-28 pl-5 pb-2 "
              />
              <p className="border-b-1 pb-3 text-justify text-black">
                Checkify is designed as a collaboration tool for businesses that
                is a full project management solution.
              </p>
              <img 
              src={demo}
               alt="" 
               className="w-30 h-30 rounded-full float-left mt-5"
               />
              <h3 className="text-[#043873] font-bold mt-5 text-2xl">Hout Sokleng</h3>
              <p className="pl-33 text-start text-black">Head of Talent Acquisition, North America</p>
            </div>
            
            <div className="bg-primary-color shadow-md rounded-3xl p-5 h-100 w-90 justify-self-center text-white">
              <img 
              src={quote2} 
              alt="" 
              className="w-30 pb-5"
              />
              <p className="border-b-1 pb-3 text-justify ">
                Checkify is designed as a collaboration tool for businesses that
                is a full project management solution.
              </p>
              <img 
              src={demo}
               alt="" 
               className="w-30 h-30 rounded-full float-left mt-5"
               />
              <h3 className="text-white font-bold mt-5 text-2xl">Hout Sokleng</h3>
              <p className="pl-33 text-start text-whtie">Head of Talent Acquisition, North America</p>
            </div>

            <div className="bg-primary-color shadow-md rounded-3xl p-5 h-100 w-90 justify-self-center text-white">
              <img 
              src={quote2} 
              alt="" 
              className="w-30 pb-5"
              />
              <p className="border-b-1 pb-3 text-justify ">
                Checkify is designed as a collaboration tool for businesses that
                is a full project management solution.
              </p>
              <img 
              src={demo}
               alt="" 
               className="w-30 h-30 rounded-full float-left mt-5"
               />
              <h3 className="text-white font-bold mt-5 text-2xl">Hout Sokleng</h3>
              <p className="pl-33 text-start text-whtie">Head of Talent Acquisition, North America</p>
            </div>

          </div>
        </section>

        {/* Footer Section */}
        <Footer />
          
      </main>
    </>
  );
};

export default Home;
