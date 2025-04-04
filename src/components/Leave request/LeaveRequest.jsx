import React, { useState } from "react"; // Import useState
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
  { icon, text, Approve, href = "#", onClick } // Added onClick prop
) => (
  <a
    href={href}
    onClick={onClick} // Add onClick handler
    className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out group ${
      Approve
        ? "bg-blue-700 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {React.createElement(icon, {
      className: `w-5 h-5 mr-3 flex-shrink-0 ${
        Approve ? "text-white" : "text-gray-400 group-hover:text-gray-500"
      }`,
    })}
    <span className="truncate">{text}</span>
    <HiOutlineChevronRight
      className={`w-4 h-4 ml-auto text-gray-400 ${
        Approve ? "text-white" : "opacity-0 group-hover:opacity-100"
      } transition-opacity`}
    />
  </a>
);
const StatusBadge = ({ status }) => {
  const isApprove = status === "Approve";
  return (
    <span
      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap ${
        isApprove ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
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
    StartDate: "7-April-2015",
    StartEnd: "7-April-2015",
    status: "Approved",
  },
  {
    id: "I-0002",
    name: "Doe Laly",
    StartDate: "8-April-2015",
    StartEnd: "8-April-2015",
    status: "Deny",
  },
  {
    id: "I-0003",
    name: "John reach",
    StartDate: "8-April-2015",
    StartEnd: "9-April-2015",
    status: "Deny",
  },
  {
    id: "I-0005",
    name: "Koko Tesla",
    StartDate: "8-April-2015",
    StartEnd: "9-April-2015",
    status: "Approve",
  },
  {
    id: "I-0006",
    name: "Jack bot",
    StartDate: "8-April-2015",
    StartEnd: "20-April-2015",
    status: "Preding",
  },
  {
    id: "I-0007",
    name: "Mic Roza",
    StartDate: "8-April-2015",
    StartEnd: " 21-April-2015",
    status: "Preding",
  },
  {
    id: "I-0008",
    name: "Yan hook",
    StartDate: "8-April-2015",
    StartEnd: " 22-April-April",
    status: "Approve",
  },
  {
    id: "I-0009",
    name: "Cheat xae",
    StartDate: "8-April-2015",
    StartEnd: "28-April-2022 ",
    status: "Deny",
  },
];

function LeaveRequest() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Function to close sidebar, can be passed to links if needed
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {" "}
      {/* Prevent body scroll when sidebar open */}
      {/* Overlay for Mobile Sidebar */}
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
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-md mr-2 md:mr-3">
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
              Dashboard
            </span>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            aria-label="Close sidebar"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-2 md:px-4 py-4 space-y-2 overflow-y-auto">
          {/* Pass closeSidebar to items if clicking them should close the menu on mobile */}
          <SidebarItem
            icon={HiOutlineViewGrid}
            text="Dashboard"
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
            Approve={true}
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
        <header className="flex items-center justify-between p-4 md:p-6 bg-white border-b">
          {/* Hamburger Menu Button - Visible only below lg */}
          <button
            onClick={() => setIsSidebarOpen(true)} // Open sidebar on click
            className="lg:hidden p-2 mr-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Open sidebar" // Accessibility label
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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 truncate">
            Attendance
          </h1>
          <button className="p-2 ml-auto bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <HiOutlineBell className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          {/* Rest of the main content (Table, Pagination, etc.) remains the same */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            {/* Top Bar: Title, Search, Sort */}
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
                    placeholder="Search"
                    className="w-full sm:w-48 md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button className="flex items-center justify-between w-full sm:w-auto md:w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span>Sort by :</span>{" "}
                    <HiOutlineChevronDown className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Table Wrapper for Horizontal Scrolling */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      Start End
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employeeData.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {employee.id}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {employee.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 truncate max-w-xs">
                        {employee.StartDate}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {employee.StartEnd}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <StatusBadge status={employee.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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

export default LeaveRequest;
