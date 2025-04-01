import React from 'react';
import Sidebar from './SideBar';

export default function DashBoard() {
  return (
    <>
      <div className="grid grid-cols-[363px_1fr] h-[1080px]">
        <div className="Left">
          <Sidebar />
        </div>
        <div className=""></div>
      </div>
    </>
  );
}