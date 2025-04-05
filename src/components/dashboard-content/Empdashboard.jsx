import React, { useState } from 'react'
import Sidebar from '../sidebar//Sidebar'
import EmpDB from '../dashboard/EmpDB'

export default function Empdashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className='flex flex-row w-full h-screen relative'>
      {/* Mobile Sidebar */}
      <div className={`fixed lg:relative z-50 h-full transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out w-[70%] lg:w-[19%]`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Backdrop Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" 
             onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Main Content Area */}
      <div className="w-full lg:w-[81%]">
        <EmpDB onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
    </main>
  )
}