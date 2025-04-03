import React from 'react';
import Sidebar from './SideBar';
import DashBoard from './DashBoard';

export default function EMPContent() {
  return (
    <>
      <div className="grid grid-cols-[420px_1fr] h-[1080px]">
        <div className="Left h-full">
          <Sidebar />
        </div>
        <div className="Right">
          <DashBoard/>  
        </div>
      </div>
    </>
  );
}