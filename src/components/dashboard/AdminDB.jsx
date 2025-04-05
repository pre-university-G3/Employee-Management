import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../../assets/adminDB-pic-2.png";
import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlineBell,
  HiOutlineChevronRight,
  HiX,
} from "react-icons/hi";

// Reusable Components
const SidebarItem = (
  { icon, text, active, href = "#", onClick } // Added onClick prop
) => (
  <a
    href={href}
    onClick={onClick} // Add onClick handler
    className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out group ${
      active
        ? "bg-primary-color text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {React.createElement(icon, {
      className: `w-5 h-5 mr-3 flex-shrink-0 ${
        active ? "text-white" : "text-gray-400 group-hover:text-gray-500"
      }`,
    })}
    <span className="truncate">{text}</span>
    <HiOutlineChevronRight
      className={`w-4 h-4 ml-auto text-gray-400 ${
        active ? "text-white" : "opacity-0 group-hover:opacity-100"
      } transition-opacity`}
    />
  </a>
);

const StatCard = ({ title, value, className = "" }) => (
  <div
    className={`bg-white p-4 md:p-6 rounded-lg shadow-md text-center ${className}`}
  >
    <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
      {title}
    </h3>
    <p className="text-xl sm:text-2xl font-bold text-blue-900">{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const isActive = status === "Present";
  return (
    <span
      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap ${
        isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {status}
    </span>
  );
};

// Logout Confirmation Modal Component
const LogoutModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-white rounded-lg shadow-lg z-10 p-6 w-11/12 max-w-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Logout</h3>
      <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
);

// Mock Data
const attendanceData = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JC",
    name: "Jane Cooper",
    department: "cyber security",
    status: "Present",
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/40/718096/FFFFFF?text=DL",
    name: "Doe laly",
    department: "web developer",
    status: "Absent",
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/40/E53E3E/FFFFFF?text=SR",
    name: "Someone Else",
    department: "software dev",
    status: "Absent",
  },
  {
    id: 4,
    avatar: "https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JC",
    name: "Jane Cooper",
    department: "networking",
    status: "Present",
  },
];

function AdminDB() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => setIsSidebarOpen(false);

  // Logout handler
  const handleLogoutConfirm = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setShowLogoutConfirm(false);
    // Redirect to login page
    navigate("/");
  };

  return (
    <>
      {showLogoutConfirm && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      )}
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={closeSidebar} // Close sidebar when overlay is clicked
            aria-hidden="true"
          ></div>
        )}
        {/* Sidebar */}
        <div
          className={`
                    fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0 lg:shadow-md lg:z-auto
                `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 md:h-20 border-b flex-shrink-0 px-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary-color rounded-md mr-2 md:mr-3">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800">
                Checkify
              </span>
            </div>
            <button
              onClick={closeSidebar}
              className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
          {/* Sidebar Navigation */}
          <nav className="flex-1 px-2 md:px-4 py-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={HiOutlineViewGrid}
              text="Dashboard"
              active={true}
              onClick={closeSidebar}
            />
            <Link to="/empInfo">
              <SidebarItem
                icon={HiOutlineUsers}
                text="Employee"
                onClick={closeSidebar}
              />
            </Link>

            <Link to="/empAttendance">
              <SidebarItem
                icon={HiOutlineCalendar}
                text="Attendance"
                onClick={closeSidebar}
              />
            </Link>

            <Link to="/empLeave">
              <SidebarItem
                icon={HiOutlineDocumentText}
                text="Leave request"
                onClick={closeSidebar}
              />
            </Link>
          </nav>
          {/* Sidebar Footer */}
          <div className="px-2 md:px-4 py-4 border-t flex-shrink-0">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 group cursor-pointer"
            >
              <HiOutlineLogout className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 flex-shrink-0" />
              <span className="truncate">Log out</span>
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Bar */}
          <header className="flex items-center justify-between p-4 md:p-6 bg-white">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 mr-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Open sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-bold text-primary-color truncate">
              Dashboard
            </h1>
            <button className="p-1 ml-auto bg-blue-100 rounded-full text-primary-color hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <HiOutlineBell className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </header>
          {/* Scrollable Content Area */}
          <main className="flex-1 overflow-hidden bg-gray-50 p-4 md:p-6">
            <div className="h-full flex flex-col space-y-4 md:space-y-6">
              {/* Welcome Banner */}
              <div className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900">
                  Welcome to Checkify
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Your Smart Staff Attendance Management System.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <StatCard title="Total Staffs" value="50 People" />
                <StatCard title="Total Active" value="40 People" />
                <StatCard
                  title="Requests"
                  value="10 People"
                  className="sm:col-span-2 lg:col-span-1"
                />
              </div>

              {/* Attendance Section */}
              <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 overflow-hidden">
                {/* Attendance Table */}
                <div className="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-y-auto max-h-[280px]">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider">
                            Staffs
                          </th>
                          <th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider px-2 md:px-4">
                            Department
                          </th>
                          <th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {attendanceData.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            <td className="py-3 md:py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={item.avatar}
                                  alt={item.name}
                                />
                                <div className="ml-3 md:ml-4 text-sm font-medium text-gray-900 truncate">
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                              {item.department}
                            </td>
                            <td className="py-3 md:py-4 whitespace-nowrap text-sm">
                              <StatusBadge status={item.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Illustration (can hide or shrink) */}
                <div className="hidden xl:flex xl:w-1/4 items-center justify-center p-4">
                  <img
                    src={pic1}
                    alt="Staff management illustration"
                    className="w-full h-auto max-h-[300px] object-contain"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminDB;
