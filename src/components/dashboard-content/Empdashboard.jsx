import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import VectorIcon from '../../assets/vectoricon.png';
import Sun from "../../assets/sun.png";
import Avatars from "../../assets/profile.png";
import Accounts from "../../assets/Group.png";
import OnClock from "../../assets/earlyclock.png";
import OffClock from "../../assets/lateclock.png";
import Cclock from "../../assets/cloudclock.png";
import Calenclock from "../../assets/calenclock.png";
import { HiX } from "react-icons/hi";

const Empdashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  const navigation = [
    {
      href: '#',
      name: 'Dashboard',
      active: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
      )
    },
    {
      href: '#',
      name: 'Employee',
      active: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      href: '#',
      name: 'Attendance',
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
        </svg>
      )
    },
    {
      href: '#',
      name: 'Leave request',
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
      AOS.refresh();
    };
  }, []);

  const formattedDate = time.toLocaleDateString("en-KH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen bg-[#F5F9FF]">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-lg bg-[#043873] shadow-xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed lg:relative z-40 h-full bg-white transform transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-[300px]`}>
        
        <nav className="w-full h-full border-r pt-9">
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center px-6 border-b">
              <Link to="/" className="flex items-center gap-3">
                <img src={VectorIcon} alt="Logo" className="w-8 h-8" />
                <h3 className="font-bold text-2xl text-[#043873]">Dashboard</h3>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden ml-auto p-1 text-gray-500 hover:text-gray-700"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="flex-1 overflow-auto mt-6">
              <ul className="px-6 space-y-2">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className={`flex items-center text-lg p-3 rounded-lg ${
                        item.active 
                          ? 'bg-[#043873]/10 text-[#043873]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className={`mr-3 ${item.active ? 'text-[#043873]' : 'text-gray-400'}`}>
                        {item.active ? (
                          <span className="inline-block w-5 h-5 bg-[#043873] text-white rounded-sm flex items-center justify-center mr-3">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded-sm mr-3"></span>
                        )}
                      </span>
                      {item.icon}
                      <span className="ml-3 font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 lg:p-10">
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="max-w-[1800px] mx-auto">
          {/* Header Section */}
          <header className="flex justify-between items-center mb-8" data-aos="fade-down">
            <h1 className="text-4xl lg:text-[56px] font-bold text-[#043873]">Dashboard</h1>
            <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow relative">
              <svg className="w-6 h-6" fill="none" stroke="#043873" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </header>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-6" data-aos="fade-up">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Time Card */}
              <div className="bg-[#E1E5F2] rounded-2xl p-8 h-[500px] flex flex-col justify-between">
                <div className="flex items-center">
                  <img src={Sun} alt="Sun" className="w-20 h-20" />
                  <div className="ml-4">
                    <div className="text-4xl font-bold text-[#043873]">
                      {time.toLocaleTimeString('en-KH')}
                    </div>
                    <div className="text-lg text-[#043873]">Realtime Insight</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-[#043873]">Today:</div>
                  <div className="text-xl text-[#043873]">{formattedDate}</div>
                </div>

                <button className="w-full py-4 bg-[#043873] text-white rounded-xl text-xl font-bold hover:bg-[#032b5a] transition">
                  View Attendance
                </button>
              </div>

              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-8 flex items-center" data-aos="zoom-in">
                <img src={Avatars} alt="Profile" className="w-24 h-24 rounded-full border-4 border-[#043873]" />
                <div className="ml-6">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-gray-600">ID 123875</p>
                  <p className="text-lg text-[#043873]">Cyber Security</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Stats Card */}
              <div className="bg-[#043873] rounded-2xl p-8 text-white" data-aos="fade-left">
                <div className="grid grid-cols-4 gap-4 h-[200px]">
                  <div className="text-center">
                    <h3 className="text-xl mb-2">This Month</h3>
                    <div className="text-5xl font-bold">17</div>
                    <p className="text-lg">Present</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold">04</div>
                    <p className="text-lg">Late</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold">01</div>
                    <p className="text-lg">Absent</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl mb-2">This Year</h3>
                    <div className="text-5xl font-bold">22</div>
                    <p className="text-lg">TOTAL</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid md:grid-cols-3 gap-6" data-aos="zoom-in">
                <button className="h-24 bg-gradient-to-r from-teal-400 to-lime-400 rounded-2xl text-2xl font-bold text-white shadow-lg hover:scale-[1.02] transition-transform">
                  Check In
                </button>
                <button className="h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-2xl font-bold text-white shadow-lg hover:scale-[1.02] transition-transform">
                  Check Out
                </button>
                <button className="h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl text-2xl font-bold text-white shadow-lg hover:scale-[1.02] transition-transform">
                  Leave Request
                </button>
              </div>

              {/* Bottom Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#AAD1FF] rounded-2xl p-8" data-aos="flip-left">
                  <div className="flex justify-between items-center">
                    <div className="text-6xl font-bold text-white">5</div>
                    <div className="bg-white p-4 rounded-full">
                      <img src={Accounts} alt="Accounts" className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-xl mt-4 text-center font-semibold text-[#043873]">
                    Total Leave Requests This Month
                  </p>
                </div>

                <div className="bg-[#AAD1FF] rounded-2xl p-8" data-aos="flip-right">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Attendance Stats */}
                    {[
                      { value: '04', label: 'On Time', icon: OnClock },
                      { value: '30', label: 'Absent', icon: Cclock },
                      { value: '06', label: 'Late Arrival', icon: OffClock },
                      { value: '04', label: 'Time-Off', icon: Calenclock },
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 flex items-center">
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-[#043873]">{item.value}</div>
                          <div className="text-gray-600">{item.label}</div>
                        </div>
                        <div className="bg-[#E6EAF5] p-2 rounded-full">
                          <img src={item.icon} alt={item.label} className="w-8 h-8" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Empdashboard;