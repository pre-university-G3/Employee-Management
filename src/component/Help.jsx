import React from 'react'
import first from '../assets/001.png'

const Help = () => {
    return (
      
      // content
      <main className="p-5">
        <div className="text-4xl font-bold text-center mb-5">
          Frequently Asked Questions
        </div>
        <nav className="flex flex-col lg:flex-row justify-between pt-20">
          {/* Left Section */}
          <section className="p-5 flex-1 flex flex-col items-center">
            <img src={first} alt="Help illustration" className="mb-5 w-60 " />
            <div className="text-lg font-bold pb-3">ANY QUESTIONS?</div>
            <div className="mb-3 text-center">
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
              placeholder="Type your question here..."
              autoComplete="off"
              className=" min-w-full rounded-md bg-white/10 px-4 py-2 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
            <button
              type="submit"
              className=" mt-4 rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Submit
            </button>
          </section>
  
          {/* Right Section */}
          <section className="p-5 flex-1 flex flex-col gap-5 pt-20">
            <div className="p-5 bg-blue-400 rounded-2xl text-white text-center">
              <img src="#" alt="" />
              What is the Employee Management System? 
            </div>
            <div className="p-5 bg-blue-400 rounded-2xl text-white text-center">
              How does the system benefit my business?
            </div>
            <div className="p-5 bg-blue-400 rounded-2xl text-white text-center">
              How can I get started?
            </div>
          </section>
        </nav>
      </main>
    );
  };
  
  export default Help;
