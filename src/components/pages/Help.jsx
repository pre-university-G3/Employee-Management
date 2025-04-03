import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Submit from "../button/Submit";
import AOS from "aos";
import "aos/dist/aos.css";

import first from "../../assets/help-pic-2.png";
import second from "../../assets/help-pic-1.png";

const Help = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <main className="pt-20">
      <Navbar />

      {/* FAQ Section */}
      <nav className="p-5 min-h-screen bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2]">
        {/* Title */}
        <div
          className="text-4xl pt-20 font-bold text-white text-center py-6"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Section */}
          <section
            className="p-5 flex flex-col items-center"
            data-aos="fade-right"
          >
            <img
              src={first}
              alt="Help illustration"
              className="w-70 h-70 mb-3 pl-10"
            />
            <div className="text-lg pr-5 font-bold text-white">
              ANY QUESTIONS?
            </div>
            <div className="mb-5 pr-5 text-center text-white">
              You can ask anything you want to know
            </div>
            <label htmlFor="Question" className="sr-only">
              Question
            </label>
            <input
              id="Question"
              name="Question"
              type="text"
              required
              placeholder="Question"
              autoComplete="off"
              className="w-[60%] rounded-md bg-white px-4 py-2 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-white border-2 border-blue-950 px-6 py-3 mt-5 hover:bg-blue-950 hover:text-white transition duration-300 transform hover:scale-105 cursor-pointer">
              Submit
            </button>
          </section>

          {/* Right Section - FAQ Questions */}
          <section
            className="p-5 flex flex-col pt-20 gap-4 place-content-center"
            data-aos="fade-left"
          >
            {/* Question 1 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>What is the Employee Management System?</span>
              <button onClick={() => toggleQuestion(1)}>
                <svg
                  className={`w-5 h-5 text-[#043873] transform transition-transform ${
                    openQuestion === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 1 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                The Employee Management System is a software solution designed
                to streamline HR processes, manage employee data, track
                performance, and improve workforce productivity.
              </div>
            )}

            {/* Question 2 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>How does the system benefit my business?</span>
              <button onClick={() => toggleQuestion(2)}>
                <svg
                  className={`w-5 h-5 text-[#043873] transform transition-transform ${
                    openQuestion === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 2 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                It improves efficiency, reduces manual errors, enhances employee
                engagement, and provides valuable insights through data
                analytics.
              </div>
            )}

            {/* Question 3 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>How can I get started?</span>
              <button onClick={() => toggleQuestion(3)}>
                <svg
                  className={`w-5 h-5 text-[#043873] transform transition-transform ${
                    openQuestion === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 3 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                You can get started by signing up for a free trial on our
                website or contacting our sales team for a demo.
              </div>
            )}
          </section>
        </div>
      </nav>

      {/* Contact Us Section */}
      <div className="min-h-screen bg-white p-10 lg:p-20">
        <div className="border-0 rounded-2xl shadow-lg">
          <section className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900">CONTACT US</h2>
            <hr className="w-20 mx-auto mt-5 border-t-4 border-gray-900" />
            <p className="text-gray-600 mt-5">
              Send your queries using the form below, or email us at{" "}
              <a
                href="mailto:checkify.kh@gmail.com"
                className="text-blue-600 underline"
              >
                checkify.kh@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Main Content */}
          <div className="w-[90%] lg:w-[80%] pb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Illustration */}
            <div
              className="flex justify-center items-center"
              data-aos="fade-right"
            >
              <img
                src={second}
                alt="Contact illustration"
                className="max-w-full w-90"
              />
            </div>

            {/* Right Section: Form */}
            <form className="space-y-5" data-aos="fade-left">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="checkify.kh@gmail.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows="4"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <Submit />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Help;
