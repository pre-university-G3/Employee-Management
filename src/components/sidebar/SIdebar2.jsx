import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlineChevronRight,
  HiX,
} from "react-icons/hi";

const SidebarItem = (
  { icon, text, active, href = "#", onClick } // Added onClick prop
) => (
  <a
  href={href}
  onClick={onClick} // Add onClick
  className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out group ${
    active
      ? "bg-primary-color text-white" // Darker blue for active
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

const Sidebar2 = () => {
  // Declare the state for sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0 lg:shadow-md lg:z-auto`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 border-b flex-shrink-0 px-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-primary-color rounded-md mr-2">
              <svg
                className="w-5 h-5 text-white"
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
            <span className="text-lg font-semibold text-gray-800">Dashboard</span>
          </div>
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={HiOutlineViewGrid}
              text="Dashboard"
              active={true}
              onClick={closeSidebar}
            />
          <SidebarItem
            icon={HiOutlineUsers}
            text="Employee"
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={HiOutlineCalendar}
            text="Attendance"
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={HiOutlineDocumentText}
            text="Leave request"
            onClick={closeSidebar}
          />
        </nav>

        {/* Sidebar Footer */}
        <div className="px-2 md:px-4 py-4 border-t flex-shrink-0">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 group"
          >
            <HiOutlineLogout className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 flex-shrink-0" />
            <span className="truncate">Log out</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;