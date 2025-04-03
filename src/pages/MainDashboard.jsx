import React, { useState } from 'react'; // Import useState
import {
    HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineCalendar,
    HiOutlineDocumentText,
    HiOutlineLogout,
    HiOutlineBell,
    HiOutlineChevronRight,
    HiX // Import X icon
} from 'react-icons/hi';

// --- Reusable Components (Keep StatCard and StatusBadge as before) ---
// --- SidebarItem (Use the updated one from EmployeeDashboard above) ---
const SidebarItem = ({ icon, text, active, href = "#", onClick }) => ( // Added onClick
    <a
        href={href}
        onClick={onClick} // Add onClick
        className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out group ${
            active
                ? 'bg-blue-800 text-white' // Darker blue for active
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
    >
        {React.createElement(icon, { className: `w-5 h-5 mr-3 flex-shrink-0 ${active ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'}` })}
        <span className="truncate">{text}</span>
        <HiOutlineChevronRight className={`w-4 h-4 ml-auto text-gray-400 ${active ? 'text-white' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} />
    </a>
);
const StatCard = ({ title, value, className = '' }) => ( // Added className prop
    <div className={`bg-white p-4 md:p-6 rounded-lg shadow-md text-center ${className}`}>
        <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">{title}</h3>
        <p className="text-xl sm:text-2xl font-bold text-blue-900">{value}</p>
    </div>
);
const StatusBadge = ({ status }) => {
    const isPresent = status.toLowerCase() === 'present';
    return (
        <span className={`px-2 py-0.5 md:px-3 md:py-1 inline-flex text-xs leading-5 font-semibold rounded whitespace-nowrap ${
            isPresent ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
            {status}
        </span>
    );
};
// --- Mock Data (Keep as before) ---
const attendanceData = [ { id: 1, avatar: 'https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JC', name: 'Jane Cooper', department: 'cyber security', status: 'present' }, { id: 2, avatar: 'https://via.placeholder.com/40/718096/FFFFFF?text=DL', name: 'Doe laly', department: 'web developer', status: 'Absent' }, { id: 3, avatar: 'https://via.placeholder.com/40/E53E3E/FFFFFF?text=SR', name: 'Someone Else', department: 'software dev', status: 'Absent' }, { id: 4, avatar: 'https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JC', name: 'Jane Cooper', department: 'networking', status: 'present' }, { id: 5, avatar: 'https://via.placeholder.com/40/4A5568/FFFFFF?text=JB', name: 'Jack bot', department: 'data science', status: 'present' },];


function MainDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden"> {/* Prevent body scroll */}

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
                 className={`
                    fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0 lg:shadow-lg lg:z-auto /* Adjusted desktop shadow */
                `}
            >
                {/* Sidebar Header */}
                 <div className="flex items-center justify-between h-16 md:h-20 border-b flex-shrink-0 px-4">
                     <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-md mr-2 md:mr-3">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                        </div>
                        <span className="text-lg md:text-xl font-semibold text-gray-800">Dashboard</span>
                    </div>
                     {/* Close button for mobile */}
                    <button onClick={closeSidebar} className="lg:hidden p-1 text-gray-500 hover:text-gray-700" aria-label="Close sidebar">
                         <HiX className="w-6 h-6" />
                    </button>
                 </div>
                 {/* Sidebar Navigation */}
                 <nav className="flex-1 px-2 md:px-4 py-4 space-y-2 overflow-y-auto">
                     <SidebarItem icon={HiOutlineViewGrid} text="Dashboard" active={true} onClick={closeSidebar} />
                     <SidebarItem icon={HiOutlineUsers} text="Employee" onClick={closeSidebar} />
                     <SidebarItem icon={HiOutlineCalendar} text="Attendance" onClick={closeSidebar} />
                     <SidebarItem icon={HiOutlineDocumentText} text="Leave request" onClick={closeSidebar} />
                 </nav>
                 {/* Sidebar Footer */}
                 <div className="px-2 md:px-4 py-4 border-t flex-shrink-0">
                      <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 group">
                          <HiOutlineLogout className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 flex-shrink-0" />
                          <span className="truncate">Log out</span>
                      </a>
                  </div>
            </div>


            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header Bar */}
                <header className="flex items-center justify-between p-4 md:p-6 bg-white border-b">
                    {/* Hamburger Menu Button */}
                    <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 mr-2 text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Open sidebar">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 truncate">Dashboard</h1>
                    <button className="p-2 ml-auto bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <HiOutlineBell className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </header>

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6">
                    {/* Rest of the main content (Welcome, Stats, Table, Illustration) remains the same */}
                     <div className="space-y-4 md:space-y-6">
                        {/* Welcome Banner */}
                        <div className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow"><h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-900">Welcome to Checkify</h2><p className="text-sm sm:text-base text-gray-600 mt-1">Your Smart Staff Attendance Management System.</p></div>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <StatCard title="Total Staffs" value="50 People" />
                            <StatCard title="Total Active" value="40 People" />
                            <StatCard title="Requests" value="10 People" className="sm:col-span-2 lg:col-span-1" />
                        </div>
                        {/* Attendance & Illustration */}
                        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                            {/* Attendance Table Card */}
                            <div className="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead><tr><th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider">Staffs</th><th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider px-2 md:px-4">Department</th><th className="pb-3 border-b-2 text-left text-xs sm:text-sm font-semibold text-blue-900 uppercase tracking-wider">Status</th></tr></thead>
                                        <tbody>
                                            {attendanceData.map((item) => ( <tr key={item.id} className="border-b border-gray-100 last:border-b-0"><td className="py-3 md:py-4 whitespace-nowrap"><div className="flex items-center"><div className="flex-shrink-0 h-8 w-8"><img className="h-8 w-8 rounded-full" src={item.avatar} alt={`${item.name} avatar`} /></div><div className="ml-3 md:ml-4"><div className="text-sm font-medium text-gray-900 truncate">{item.name}</div></div></div></td><td className="py-3 md:py-4 px-2 md:px-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{item.department}</td><td className="py-3 md:py-4 whitespace-nowrap text-sm"><StatusBadge status={item.status} /></td></tr>))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                             {/* Illustration */}
                            <div className="hidden lg:flex lg:w-1/3 items-end justify-center p-6">
                                <img src="/dashboard-illustration.png" alt="Staff management illustration" className="max-w-full h-auto object-contain" style={{ maxHeight: '350px' }}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainDashboard;