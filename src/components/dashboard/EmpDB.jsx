import React, { useState, useEffect } from 'react';
import Sun from '../../assets/sun.png';
import Avatars from '../../assets/profile.png';
import Accounts from '../../assets/Group.png';
import OnClock from '../../assets/earlyclock.png';
import OffClock from '../../assets/lateclock.png';
import Cclock from '../../assets/cloudclock.png';
import Calenclock from '../../assets/calenclock.png';
import { FaHeartbeat } from "react-icons/fa";

export default function EmpDB() {
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
        <div className="p-6 md:pt-10 md:px-15 h-[160px]">
          {/* Page Title */}
          <h1 className="text-[82px] font-bold font-mon">Dashboard</h1>
        </div>

        <div className="flex justify-end pr-25">
          <button className="relative p-4 rounded-full flex bg-gray-100 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            <span className="absolute top-3 right-4 w-4 h-4 bg-blue-500 rounded-full"></span>
          </button>
        </div>

        <section className="grid grid-cols-6 grid-rows-3 gap-10 pl-30 pr-25 pt-12 pb-5">
            {/* first box */}
            <div className="bg-[#E1E5F2] text-center col-span-2 row-span-3 h-[460px] rounded-[20px] flex flex-col">

                <div className="w-[100%] h-[40%]">
                    <div className="flex items-center ml-14 mt-5 h-full">
                    <span className="text-2xl mr-5">
                        <img src={Sun} className="w-[90px] h-[90px]" alt="Sun Icon" />
                    </span>
                    <div className="flex flex-col items-start">
                      <h2 className="text-3xl font-bold text-gray-600">
                        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </h2>
                      <p className="text-gray-600 mt-1">Realtime Insight</p>
                    </div>
                </div>
                </div>

                <div className='w-[100%] h-[30%] flex flex-col text-[23px] font-bold items-start pl-14 justify-center'>
                <p className="mt-1 ">Today:</p>
                <p className="mt-1">{formattedDate}</p>
                </div>

                <div className='w-full h-[30%] flex flex-col items-center justify-center'>
                <button className="mt-4 bg-[#043873] text-white px-4 mb-6 rounded-lg h-[60px] w-[70%] text-[20px] font-bold hover:bg-[#043873] transition duration-300 ease-in-out">
                  View Attendance
                </button>
                </div>
            </div>
            {/* second box */}
            <div className="bg-[#043873] text-white col-span-4 row-span-2 rounded-[10px] flex items-center justify-center">
            <div className="grid grid-cols-4 gap-6 w-full h-full text-center">
              <div className="text-center content-center">
                <h2 className="text-[32px] font-bold mb-4 flex justify-center">This Month</h2>
                <div className="text-center">
                  <p className="text-[78px] font-bold">17</p>
                  <p className="mt-2 text-[32px]">Present</p>
                </div>
              </div>
              <div className="text-center content-center pt-10">
                <div className="h-6"></div>
                <p className="text-[78px] font-bold">04</p>
                <p className="mt-2 text-[28px]">Late</p>
              </div>
              <div className="text-center content-center pt-10">
                <div className="h-6"></div>
                <p className="text-[78px] font-bold">01</p>
                <p className="mt-2 text-[28px]">Absent</p>
              </div>
              <div className="text-center content-center">
                <h2 className="text-[32px] font-bold mb-4">This Year</h2>
                <div className="text-center">
                  <p className="text-[78px] font-bold">22</p>
                  <p className="mt-2 text-[28px]">TOTAL</p>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="col-start-3 col-span-4 grid grid-cols-3 gap-10 items-center">
            <button className="text-center text-[30px] w-full h-[120px] mb-2 overflow-hidden font-bold rounded-3xl group bg-gradient-to-br from-teal-300 to-lime-300 dark:hover:text-gray-900 ring-4 outline-none ring-lime-800">
              Check In
            </button>
            <button className="text-center text-[30px] w-full h-[120px] mb-2 overflow-hidden font-bold rounded-3xl group bg-gradient-to-br from-red-500 to-pink-500 dark:hover:text-gray-900 ring-4 outline-none ring-pink-800">
              Check Out
            </button>
            <button className="text-center text-[30px] w-full h-[120px] mb-2 overflow-hidden font-bold rounded-3xl group bg-gradient-to-br from-yellow-400 to-orange-600 dark:hover:text-gray-900 ring-4 outline-none ring-orange-800">
              Leave Request
            </button>
          </div>
        </section>

        {/* Second Section: Box 6, Box 7, Box 8 */}
        <section className="flex flex-row gap-5 pl-30 pr-25 mt-1">
            {/* box 3 */}
            <div className="bg-[#AAD1FF] rounded-[20px] size-30 grow-[0.95] h-[251px]">
                <div className="w-full h-[65%] flex">
                    <div className="w-[75%] h-[100%] text-[102px] font-bold text-white text-center pl-20">5</div>
                    <div className="w-[25%] h-[100%] flex items-center justify-center">
                        <div className='bg-[#E6EAF5] w-20 h-20 object-fit-cover rounded-full flex justify-center items-center'>
                            <img src={Accounts} alt="Profile" className="w-10 h-10"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[35%]">
                    <p className='text-[32px] font-semibold text-center'>Total Leave Requests This Month</p>
                </div>
            </div>

            {/* Box 4 */}
            <div className="bg-[#AAD1FF] text-center rounded-[20px] size-30 grow-1 h-[251px] flex flex-col items-center justify-center py-4 px-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 w-full h-full">
                    {/* Inner Box 1 */}
                    <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                        <div className="h-full w-[70%] pt-1 pr-3">
                            <p className="text-[42px] font-bold text-gray-700">04</p>
                            <p className="text-[20px] text-gray-500">On Time</p>
                        </div>
                        <div className="h-full w-[30%] pt-3">
                            <div className='bg-[#E6EAF5] w-12 h-12 object-fit-cover rounded-full flex justify-center items-center'>
                                <img src={OnClock} alt="Profile" className="w-7 h-7"/>
                            </div>
                        </div>
                    </div>

                    {/* Inner Box 2 */}
                    <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                        <div className="h-full w-[70%] pt-1 pr-3">
                            <p className="text-[42px] font-bold text-gray-700">30</p>
                            <p className="text-[20px] text-gray-500">Absent</p>
                        </div>
                        <div className="h-full w-[30%] pt-3">
                            <div className='bg-[#E6EAF5] w-12 h-12 object-fit-cover rounded-full flex justify-center items-center'>
                                <img src={Cclock} alt="Profile" className="w-7 h-7"/>
                            </div>
                        </div>
                    </div>

                    {/* Inner Box 3 */}
                    <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                        <div className="h-full w-[70%] pt-1 pr-3">
                            <p className="text-[42px] font-bold text-gray-700">06</p>
                            <p className="text-[20px] text-gray-500">Late Arrival</p>
                        </div>
                        <div className="h-full w-[30%] pt-3">
                            <div className='bg-[#E6EAF5] w-12 h-12 object-fit-cover rounded-full flex justify-center items-center'>
                                <img src={OffClock} alt="Profile" className="w-7 h-7"/>
                            </div>
                        </div>
                    </div>

                    {/* Inner Box 4 */}
                    <div className="bg-white rounded-lg shadow-md flex items-center justify-center">
                        <div className="h-full w-[70%] pt-1 pr-3">
                            <p className="text-[42px] font-bold text-gray-700">04</p>
                            <p className="text-[20px] text-gray-500">Time-Off</p>
                        </div>
                        <div className="h-full w-[30%] pt-3">
                            <div className='bg-[#E6EAF5] w-12 h-12 object-fit-cover rounded-full flex justify-center items-center'>
                                <img src={Calenclock} alt="Profile" className="w-7 h-7"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/* box 5 */}
          <div className="bg-[#E6EAF5] rounded-[20px] size-30 grow-1 h-[251px] flex items-center justify-around p-6">
            <img
              src={Avatars}
              alt="Profile"
              className="w-40 h-40 border-blue-700 border-1 rounded-full mr-4"
            />
            <div className='text-center pr-14'>
              <h3 className="text-[36px] font-semibold">John Doe</h3>
              <p className="text-gray-600 text-[18px]">ID 123875</p>
              <p className="text-gray-700 text-[24px]">Cyber Security</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}