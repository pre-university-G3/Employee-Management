import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import SidebarTest from '../sidebar/SidebarTest'
import Dashboard from '../dashboard/EmpDB'

export default function EMPContent() {
  return (
    <main className='flex flex-row w-full h-screen'>
        <div className="Left-side w-[19%]">
            <SidebarTest/>
        </div>
        <div className="Right-side w-[89%]">
            <EmpDB/>
        </div>
    </main>

  )
}