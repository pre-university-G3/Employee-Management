// import React, { useState, useEffect } from "react";
// import Sun from "../../assets/sun.png";
// import Avatars from "../../assets/profile.png";
// import Accounts from "../../assets/Group.png";
// import OnClock from "../../assets/earlyclock.png";
// import OffClock from "../../assets/lateclock.png";
// import Cclock from "../../assets/cloudclock.png";
// import Calenclock from "../../assets/calenclock.png";

// export default function EmpDB() {
//   const [time, setTime] = useState(new Date());

//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Format the date and day
//   const formattedDate = time.toLocaleDateString("en-KH", {
//     weekday: "long", // e.g., "Monday"
//     year: "numeric",
//     month: "long", // e.g., "March"
//     day: "numeric", // e.g., "27"
//   });

//   return (
//     <>
//       <main className="p-6 md:p-10 bg-gray-100 min-h-screen">
//         {/* Page Title */}
//         <div className="mb-8">
//           <h1 className="text-[40px] md:text-[56px] font-bold font-mon">Dashboard</h1>
//         </div>

//         {/* Notification Button */}
//         <div className="flex justify-end mb-8">
//           <button className="relative p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 md:h-6 md:w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//             <span className="absolute top-1 right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full"></span>
//           </button>
//         </div>

//         {/* Main Dashboard Section */}
//         <section className="grid grid-cols-12 grid-rows-3 gap-6 md:gap-8">
//           {/* First Box */}
//           <div className="bg-[#E1E5F2] text-center col-span-4 row-span-3 h-[400px] md:h-[500px] rounded-[20px] flex flex-col">
//             <div className="w-full h-[40%]">
//               <div className="flex items-center ml-4 md:ml-8 mt-4 md:mt-6 h-full">
//                 <span className="text-2xl mr-4">
//                   <img src={Sun} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" alt="Sun Icon" />
//                 </span>
//                 <div className="flex flex-col items-start">
//                   <h2 className="text-[24px] md:text-[32px] font-bold text-gray-600">
//                     {time.toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                       second: "2-digit",
//                     })}
//                   </h2>
//                   <p className="text-gray-600 mt-1 text-[14px] md:text-[18px]">Realtime Insight</p>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full h-[30%] flex flex-col text-[16px] md:text-[20px] font-bold items-start pl-4 md:pl-8 justify-center">
//               <p className="mt-1">Today:</p>
//               <p className="mt-1">{formattedDate}</p>
//             </div>

//             <div className="w-full h-[30%] flex flex-col items-center justify-center">
//               <button className="mt-4 bg-[#043873] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg w-[60%] md:w-[70%] text-[14px] md:text-[18px] font-bold hover:bg-[#032a5e] transition duration-300 ease-in-out">
//                 View Attendance
//               </button>
//             </div>
//           </div>

//           {/* Second Box */}
//           {/* Second Box */}
// <div className="bg-[#043873] text-white col-span-8 row-span-2 rounded-[10px] flex items-center justify-center">
//   <div className="grid grid-cols-4 gap-4 md:gap-6 w-full h-full text-center">
//     <div className="text-center">
//       <h2 className="text-[16px] md:text-[20px] font-bold mb-2 md:mb-3">This Month</h2>
//       <p className="text-[36px] md:text-[48px] font-bold">17</p>
//       <p className="mt-1 md:mt-2 text-[14px] md:text-[16px]">Present</p>
//     </div>
//     <div className="text-center">
//       <p className="text-[36px] md:text-[48px] font-bold">04</p>
//       <p className="mt-1 md:mt-2 text-[14px] md:text-[16px]">Late</p>
//     </div>
//     <div className="text-center">
//       <p className="text-[36px] md:text-[48px] font-bold">01</p>
//       <p className="mt-1 md:mt-2 text-[14px] md:text-[16px]">Absent</p>
//     </div>
//     <div className="text-center">
//       <h2 className="text-[16px] md:text-[20px] font-bold mb-2 md:mb-3">This Year</h2>
//       <p className="text-[36px] md:text-[48px] font-bold">22</p>
//       <p className="mt-1 md:mt-2 text-[14px] md:text-[16px]">TOTAL</p>
//     </div>
//   </div>
// </div>

//           {/* Buttons */}
//           <div className="col-start-5 col-span-8 grid grid-cols-3 gap-4 md:gap-6 items-center">
//             <button className="text-center text-[14px] md:text-[18px] w-full h-[70px] md:h-[90px] font-bold rounded-3xl bg-gradient-to-br from-teal-300 to-lime-300 hover:scale-105 transition">
//               Check In
//             </button>
//             <button className="text-center text-[14px] md:text-[18px] w-full h-[70px] md:h-[90px] font-bold rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 hover:scale-105 transition">
//               Check Out
//             </button>
//             <button className="text-center text-[14px] md:text-[18px] w-full h-[70px] md:h-[90px] font-bold rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-600 hover:scale-105 transition">
//               Leave Request
//             </button>
//           </div>
//         </section>

//         {/* Second Section */}
//         <section className="flex flex-row gap-4 md:gap-6 mt-6 md:mt-8">
//           {/* Box 3 */}
//           <div className="bg-[#AAD1FF] rounded-[20px] grow-[0.95] h-[250px] md:h-[300px]">
//             <div className="w-full h-[65%] flex">
//               <div className="w-[75%] h-full text-[56px] md:text-[72px] font-bold text-white text-center pl-6 md:pl-8">
//                 5
//               </div>
//               <div className="w-[25%] h-full flex items-center justify-center">
//                 <div className="bg-[#E6EAF5] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
//                   <img src={Accounts} alt="Profile" className="w-6 h-6 md:w-8 md:h-8" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[14px] md:text-[18px] font-semibold text-center mt-2 md:mt-4">
//               Total Leave Requests This Month
//             </p>
//           </div>

//           {/* Box 4 */}
//           <div className="bg-[#AAD1FF] text-center rounded-[20px] grow-1 h-[250px] md:h-[300px] flex flex-col items-center justify-center py-4 md:py-6 px-6 md:px-8">
//             <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 w-full h-full">
//               {/* Inner Boxes */}
//               {[{ label: "On Time", value: "04", icon: OnClock }, { label: "Absent", value: "30", icon: Cclock }, { label: "Late Arrival", value: "06", icon: OffClock }, { label: "Time-Off", value: "04", icon: Calenclock }].map((item, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md flex items-center justify-center">
//                   <div className="h-full w-[60%] md:w-[70%] pt-1 pr-2 md:pr-3">
//                     <p className="text-[24px] md:text-[32px] font-bold text-gray-700">{item.value}</p>
//                     <p className="text-[12px] md:text-[16px] text-gray-500">{item.label}</p>
//                   </div>
//                   <div className="h-full w-[40%] md:w-[30%] pt-2 md:pt-3">
//                     <div className="bg-[#E6EAF5] w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center">
//                       <img src={item.icon} alt={item.label} className="w-6 h-6 md:w-7 md:h-7" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Box 5 */}
//           <div className="bg-[#E6EAF5] rounded-[20px] grow-1 h-[250px] md:h-[300px] flex items-center justify-around p-4 md:p-6">
//             <img
//               src={Avatars}
//               alt="Profile"
//               className="w-24 h-24 md:w-32 md:h-32 border-blue-700 border-2 rounded-full mr-4"
//             />
//             <div className="text-center">
//               <h3 className="text-[18px] md:text-[24px] font-semibold">John Doe</h3>
//               <p className="text-gray-600 text-[12px] md:text-[16px]">ID 123875</p>
//               <p className="text-gray-700 text-[14px] md:text-[18px]">Cyber Security</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }