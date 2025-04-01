import React, { useState } from 'react';
import first from '../../assets/001.png'; // Ensure this path is correct for your illustration
import second from '../../assets/000.png';

const Help = () => {
  // State to manage the visibility of answers in the FAQ section
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the visibility of answers
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <main>
      {/* FAQ Section */}
      <nav  av className="p-5 min-h-screen bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2]">
        {/* Title */}
        <div className="text-4xl pt-20 font-bold text-white text-center py-6">
          Frequently Asked Questions
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Section */}
          <section className="p-5 flex flex-col items-center">
            <img
              src={first}
              alt="Help illustration"
              className="w-50 h-50 mb-3"
            />
            <div className="text-lg pr-15 font-bold text-white">ANY QUESTIONS?</div>
            <div className="mb-4 pr-15 text-center text-white">
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
              className="w-[75%] max-w-md rounded-md bg-white px-4 py-2 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="mt-4 rounded-md bg-white/90 px-6 py-2 text-sm font-semibold text-blue-800 shadow-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </section>

          {/* Right Section - FAQ Questions */}
          <section className="p-5 flex flex-col pt-10 gap-4">
            {/* Question 1 */}
            <div className="p-4 bg-white rounded-md text-lg text-blue-600 flex justify-between items-center">
              <span>What is the Employee Management System?</span>
              <button onClick={() => toggleQuestion(1)}>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform ${
                    openQuestion === 1 ? 'rotate-180' : ''
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
                The Employee Management System is a software solution designed to streamline HR processes, manage employee data, track performance, and improve workforce productivity.
              </div>
            )}

            {/* Question 2 */}
            <div className="p-4 bg-white rounded-md text-lg text-blue-600 flex justify-between items-center">
              <span>How does the system benefit my business?</span>
              <button onClick={() => toggleQuestion(2)}>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform ${
                    openQuestion === 2 ? 'rotate-180' : ''
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
                It improves efficiency, reduces manual errors, enhances employee engagement, and provides valuable insights through data analytics.
              </div>
            )}

            {/* Question 3 */}
            <div className="p-4 bg-white rounded-md text-lg text-blue-600 flex justify-between items-center">
              <span>How can I get started?</span>
              <button onClick={() => toggleQuestion(3)}>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform ${
                    openQuestion === 3 ? 'rotate-180' : ''
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
                You can get started by signing up for a free trial on our website or contacting our sales team for a demo.
              </div>
            )}
          </section>
        </div>
      </nav>

      {/* Contact Us Section */}
      <div className="min-h-screen bg-white p-20">
        <div className="border-0 rounded-2xl shadow-lg">
          <section className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">CONTACT US</h2>
            <p className="font-bold pt-5 text-4xl text-gray-400">-------------------</p>
            <p className="text-gray-600 mt-2 pt-5">
              Send your queries using the form below, or email us at{' '}
              <a href="mailto:checkify.kh@gmail.com" className="text-blue-600 underline">
                checkify.kh@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Main Content */}
          <div className="w-[80%] pb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Illustration */}
            <div className="flex justify-center items-center">
              <img
                src={second}
                alt="Contact illustration"
                className="max-w-full"
              />
            </div>

            {/* Right Section: Form */}
            <form className="space-y-5">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Sim Sol"
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
              <button
                type="submit"
                className="rounded-md bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Help;