import React, { useState, useEffect } from 'react';
import Sun from '../../assets/sun.png';
import Avatars from '../../assets/profile.png';
import Accounts from '../../assets/Group.png';
import OnClock from '../../assets/earlyclock.png';
import OffClock from '../../assets/lateclock.png';
import Cclock from '../../assets/cloudclock.png';
import Calenclock from '../../assets/calenclock.png';
import { FaHeartbeat } from "react-icons/fa";

export default function DashBoard() {
    const [time, setTime] = useState(new Date());
    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
        setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format the date and day
    const formattedDate = time.toLocaleDateString('en-KH', {
        weekday: 'long', // e.g., "Monday"
        year: 'numeric',
        month: 'long', // e.g., "March"
        day: 'numeric', // e.g., "27"
    });
    return (
    <>
        <main>
        {/* Dashboard */}
        <section>
            <div className="p-4 sm:p-6 md:pt-8 md:px-10 h-[70px] sm:h-[85px] md:h-[95px]">
              {/* Page Title */}
              <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-bold font-mon">Dashboard</h1>
            </div>
        </section>
        
        {/* Bell */}
        <section>
            <div className="flex justify-end pr-4 sm:pr-10 md:pr-25">
              <button className="relative p-2 sm:p-3 rounded-full flex bg-gray-100 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 sm:top-2 right-2 sm:right-3 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-500"></span>
              </button>
            </div>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 grid-rows-auto gap-4 sm:gap-6 md:gap-8 lg:gap-8 p-4 sm:p-6 md:pl-20 md:pr-20 lg:pl-30 lg:pr-30 md:pt-8 md:pb-0">
            {/* First Box */}
            <div className="bg-[#E1E5F2] text-center col-span-1 sm:col-span-2 md:col-span-2 row-span-3 h-auto sm:h-[300px] md:h-[400px] lg:h-[300px] rounded-[20px] flex flex-col">
              <div className="w-full h-auto sm:h-[35%] md:h-[40%]">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start ml-0 sm:ml-4 md:ml-6 mt-1 h-full">
                  <span className="text-xl sm:text-2xl mr-0 sm:mr-5">
                    <img src={Sun} className="w-[20px] sm:w-[30px] md:w-[40px] lg:w-[60px] h-[20px] sm:h-[30px] md:h-[40px] lg:h-[60px]" alt="Sun Icon" />
                  </span>
                  <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[20px] font-bold text-gray-600">
                      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </h2>
                    <p className="text-gray-600 mt-1 text-[10px] sm:text-[12px]">Realtime Insight</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto sm:h-[30%] md:h-[30%] flex flex-col text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px] font-bold items-center sm:items-start pl-0 sm:pl-6 md:pl-10 lg:pl-6 justify-center lg:pb-3">
                <p className="mt-1">Today:</p>
                <p className="mt-1">{formattedDate}</p>
              </div>
              <div className="w-full h-auto sm:h-[35%] md:h-[30%] flex flex-col items-center justify-center">
                <button className="mt-4 bg-[#043873] text-white px-3 sm:px-4 py-2 sm:py-3 md:py-3 lg:py-2 mb-6 rounded-lg h-auto sm:h-[45px] md:h-[50px] lg:h-[45px] w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[14px] font-bold hover:bg-[#043873] transition duration-300 ease-in-out">
                  View Attendance
                </button>
              </div>
            </div>

            {/* Second Box */}
            <div className="bg-[#043873] text-white col-span-1 sm:col-span-2 md:col-span-4 row-span-2 rounded-[10px] h-[150px] sm:h-[180px] md:h-[195px] flex items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 w-full h-full text-center">
                <div>
                  <h2 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[18px] font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-1 lg:pt-6">This Month</h2>
                  <p className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[50px] font-bold">17</p>
                  <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px]">Present</p>
                </div>
                <div>
                  <h2 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 lg:pt-10"></h2>
                  <p className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[50px] font-bold">04</p>
                  <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px]">Late</p>
                </div>
                <div>
                  <h2 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 lg:pt-10"></h2>
                  <p className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[50px] font-bold">01</p>
                  <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px]">Absent</p>
                </div>
                <div>
                  <h2 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[18px] font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-1 lg:pt-6">This Year</h2>
                  <p className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[50px] font-bold">22</p>
                  <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px]">Total</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="col-span-1 sm:col-span-2 md:col-start-3 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 items-center">
              <button className="text-[#00B087] text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[70px] mb-5 overflow-hidden font-bold rounded-3xl group bg-[#A6E7D8] dark:hover:text-gray-900 ring-4 outline-none ring-[#00B087]">
                Check In
              </button>
              <button className="text-[#DF0404] text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[70px] mb-2 overflow-hidden font-bold rounded-3xl group bg-[#FFC5C5] dark:hover:text-gray-900 ring-4 outline-none ring-[#DF0404]">
                Check Out
              </button>
              <button className="text-yellow-500 text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[70px] mb-2 overflow-hidden font-bold rounded-3xl group bg-[#FEF19E] dark:hover:text-gray-900 ring-4 outline-none ring-yellow-500">
                Leave Request
              </button>
            </div>
        </section>


  
        {/* Second Section: Box 6, Box 7, Box 8 */}
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 pl-4 sm:pl-10 md:pl-30 pr-4 sm:pr-10 md:pr-25 mt-1">
          {/* Box 6 */}
          <div className="bg-[#AAD1FF] rounded-[20px] grow-[0.95] h-[150px] sm:h-[180px] md:h-[200px] flex flex-col">
            <div className="w-full h-[60%] flex">
              <div className="w-[70%] h-full text-[48px] sm:text-[60px] md:text-[72px] font-bold text-white text-center pl-10 sm:pl-16 md:pl-20">
                05
              </div>
              <div className="w-[30%] h-full flex items-center justify-center pb-2 sm:pb-3 md:pb-4">
                <div className="bg-[#E6EAF5] w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex justify-center items-center">
                  <img src={Accounts} alt="Profile" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </div>
              </div>
            </div>
            <div className="w-full h-[40%] flex items-center justify-center">
              <p className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold text-center">
                Total Leave Requests This Month
              </p>
            </div>
          </div>
            
          {/* Box 7 */}
          <div className="bg-[#AAD1FF] text-center rounded-[20px] grow-1 h-[150px] sm:h-[180px] md:h-[200px] flex flex-col items-center justify-center py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3 md:gap-y-4 w-full h-full">
              {/* Inner Box 1 */}
              <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="h-full w-[70%] pt-1 pr-2 sm:pr-3">
                  <p className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-700">04</p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500">On Time</p>
                </div>
                <div className="h-full w-[30%] pt-2 sm:pt-3 flex justify-center items-center">
                  <div className="bg-[#E6EAF5] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full flex justify-center items-center">
                    <img src={OnClock} alt="On Time" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                  </div>
                </div>
              </div>
            
              {/* Inner Box 2 */}
              <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="h-full w-[70%] pt-1 pr-2 sm:pr-3">
                  <p className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-700">30</p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500">Absent</p>
                </div>
                <div className="h-full w-[30%] pt-2 sm:pt-3 flex justify-center items-center">
                  <div className="bg-[#E6EAF5] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full flex justify-center items-center">
                    <img src={Cclock} alt="Absent" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                  </div>
                </div>
              </div>
            
              {/* Inner Box 3 */}
              <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="h-full w-[70%] pt-1 pr-2 sm:pr-3">
                  <p className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-700">06</p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500">Late Arrival</p>
                </div>
                <div className="h-full w-[30%] pt-2 sm:pt-3 flex justify-center items-center">
                  <div className="bg-[#E6EAF5] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full flex justify-center items-center">
                    <img src={OffClock} alt="Late Arrival" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                  </div>
                </div>
              </div>
            
              {/* Inner Box 4 */}
              <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                <div className="h-full w-[70%] pt-1 pr-2 sm:pr-3">
                  <p className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-gray-700">04</p>
                  <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500">Time-Off</p>
                </div>
                <div className="h-full w-[30%] pt-2 sm:pt-3 flex justify-center items-center">
                  <div className="bg-[#E6EAF5] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full flex justify-center items-center">
                    <img src={Calenclock} alt="Time-Off" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* Box 8 */}
          <div className="bg-[#E6EAF5] rounded-[20px] grow-1 h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-around p-4 sm:p-5 md:p-6">
            <img
              src={Avatars}
              alt="Profile"
              className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 border-blue-700 border-1 rounded-full mr-3 sm:mr-4"
            />
            <div className="text-center pr-10 sm:pr-12 md:pr-14">
              <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold">John Doe</h3>
              <p className="text-gray-600 text-[10px] sm:text-[12px] md:text-[14px]">ID 123875</p>
              <p className="text-gray-700 text-[12px] sm:text-[14px] md:text-[16px]">Cyber Security</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
