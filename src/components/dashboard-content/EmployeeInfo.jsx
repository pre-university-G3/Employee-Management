import React, { useState } from "react"; // Import useState
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom"

import {
  HiOutlineViewGrid,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiX, // Import X icon for closing
} from "react-icons/hi";

// --- Reusable Components (Keep StatCard, StatusBadge as before) ---
// --- SidebarItem (Keep as before) ---
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
const StatusBadge = ({ status }) => {
  const isActive = status === "Active";
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
// --- Mock Data (Keep as before) ---
const employeeData = [
  {
    id: "I-0001",
    name: "Jane Cooper",
    department: "Cyber Security",
    email: "jane@microsoft.com",
    joiningDate: "26 March 2025",
    status: "Active",
  },
  {
    id: "I-0002",
    name: "Doe Laly",
    department: "Web Design",
    email: "floyd@yahoo.com",
    joiningDate: "23 April 2023",
    status: "Inactive",
  },
  {
    id: "I-0003",
    name: "John reach",
    department: "Full Stack Developer",
    email: "ronald@adobe.com",
    joiningDate: "03 Set 2024",
    status: "Inactive",
  },
  {
    id: "I-0004",
    name: "Koko Tesla",
    department: "Mobile Developer",
    email: "marvin@tesla.com",
    joiningDate: "05 Oct 2023",
    status: "Active",
  },
  {
    id: "I-0005",
    name: "Jack bot",
    department: "Web Design",
    email: "jerome@google.com",
    joiningDate: "23 Nov 2022",
    status: "Active",
  },
  {
    id: "I-0006",
    name: "Mic Roza",
    department: "Full Stack Developer",
    email: "kathryn@microsoft.com",
    joiningDate: "12 Jan 2019",
    status: "Active",
  },    
];

function EmployeeInfo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("department");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const filteredEmployees = employeeData
    .filter((employee) =>
      Object.entries(employee).some(([key, value]) =>
        ["name", "department", "email"].includes(key) &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      const modifier = sortOrder === "asc" ? 1 : -1;
      return a[sortBy].localeCompare(b[sortBy]) * modifier;
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    setShowSortOptions(false);
  };

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
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-md mr-2">
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
          <Link to="/adminDashboard">
            <SidebarItem
              icon={HiOutlineViewGrid}
              text="Dashboard"
              onClick={closeSidebar}
            />
          </Link>
          <SidebarItem
            icon={HiOutlineUsers}
            text="Employee"
            active={true}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Bar */}
        <header className="flex items-center justify-between p-4 md:p-6 bg-white">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 mr-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            Employee
          </h1>
          <button className="p-1 ml-auto bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <HiOutlineBell className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            {/* Search and Sort Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 md:mb-6 space-y-3 sm:space-y-0 sm:space-x-4">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                All Employee
              </h2>
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-4">
                {/* Search Input */}
                <div className="relative w-full sm:w-auto">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="name, department"
                    className="w-full sm:w-48 md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setShowSortOptions(!showSortOptions)}
                    className="flex items-center justify-between w-full sm:w-auto md:w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-grazy-50 cursor-pointer"
                  >
                    <span>Sort by: {sortBy} ({sortOrder})</span>
                    <HiOutlineChevronDown className="w-10 h-4 ml-2" />
                  </button>

                  {showSortOptions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => handleSort("department")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Department {sortBy === "department" && `(${sortOrder})`}
                      </button>
                      <button
                        onClick={() => handleSort("status")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Status {sortBy === "status" && `(${sortOrder})`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                {/* Table headers */}
                <thead className="bg-gray-50">
                  <tr>
                    {["ID", "Name", "Department", "Email", "Date of Joining", "Status"].map(
                      (header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {employee.id}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {employee.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {employee.department}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 truncate max-w-xs">
                        {employee.email}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {employee.joiningDate}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <StatusBadge status={employee.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Dialog
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        className="relative z-50"
      >
        {/* Backdrop with fade-in animation */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" aria-hidden="true" />
        
        {/* Modal content with slide-in animation */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Confirm Logout
            </Dialog.Title>
            
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Are you sure you want to log out of your account?
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  // Add your logout logic here
                  window.location.href = "/login"; // Example redirect
                }}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
              >
                Log Out
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

            {/* Pagination (keep your existing pagination code) */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-0">
                {" "}
                Showing data 1 to 8 of 256K entries
              </p>
              <nav className="flex items-center space-x-1 flex-wrap justify-center">
                <button
                  className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  {" "}
                  <HiOutlineChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-2.5 py-1 border border-blue-600 rounded-md text-sm text-white bg-blue-600">
                  1
                </button>
                <button className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  2
                </button>
                <button className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  3
                </button>
                <button className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 hidden sm:inline-block">
                  4
                </button>
                <span className="px-2.5 py-1 text-sm text-gray-500 hidden sm:inline-block">
                  ...
                </span>
                <button className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  40
                </button>
                <button className="px-2.5 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                  {" "}
                  <HiOutlineChevronRight className="w-4 h-4" />
                </button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmployeeInfo;