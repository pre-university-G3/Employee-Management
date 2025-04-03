import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import EmpDB from '../dashboard/EmpDB';

export default function EmpContent() {
  return (
    <>
      <div className="grid grid-cols-[420px_1fr] h-[1080px]">
        <div className="Left h-full">
          <Sidebar />
        </div>
        <div className="Right">
          <EmpDB/>  
        </div>
      </div>
    </>
  );
}