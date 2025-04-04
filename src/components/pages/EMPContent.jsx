import React from 'react'
import Sidebar from './SideBar'
import Dashboard from './DashBoard'

export default function EMPContent() {
  return (
    <main className='flex flex-row w-full h-screen'>
        <div className="Left-side w-[19%]">
            <Sidebar/>
        </div>
        <div className="Right-side w-[81%]">
            <Dashboard/>
        </div>
    </main>

  )
}
