import React from "react";
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'


const Feature = () => {
  return (
    <main className="">
      {/* sec1 */}
      <section className="grid grid-cols-2 bg-blue-900 p-12 gap-[200px]">
        <div className="py-6 px-6 ">
          <h1 className="text-white text-5xl font-bold py-6">
            Modernize Your Workplace with an Automated Attendance System
          </h1>
          <h2 className="text-white">
            Managing employee attendance manually is time-consuming,
            error-prone, and inefficient. Upgrade to an automated Employee
            Attendance System that simplifies tracking, enhances accuracy, and
            boosts productivity.
          </h2>
        </div>
        <div className="">
          <img
            src={pic1}
            alt=""
          />
        </div>
      </section>
      {/* sec2 */}
      <section className="grid grid-cols-2 p-6 gap-[200px]  ">
        <div className="py-0 px-6 ">
          <h1 className="text-5xl font-bold py-6">Employee List Management</h1>
          <h2>
            A centralized database storing all employee details including roles,
            departments, and contact information with secure access controls.
            Features organizational chart visualization, document management,
            and customizable reporting for HR administration. Supports bulk
            updates, advanced filtering, and seamless integration with other HR
            systems. Provides complete audit trails for all employee record
            changes and updates.
          </h2>
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
      </section>
      {/* sec3 */}
      <section className="grid grid-cols-2 bg-blue-900 p-12 gap-[200px]">
        
        <div className="">
          <img
            src={pic3 } 
            alt=""
            className="ml-10 w-100"
          />
        </div>
        <div className="py-6 px-6 ">
          <h1 className="text-white text-5xl font-bold py-6">
          Attendance Tracking System
          </h1>
          <h2 className="text-white">
            
Multi-method clock-in/out system using biometrics, mobile apps, and RFID cards with geofencing capabilities. Real-time dashboards display attendance status, late arrivals, and absences with automated manager alerts. Includes shift scheduling, overtime calculations, and break time monitoring with labor law compliance features. Integrates directly with payroll systems to ensure accurate time-to-pay conversion.
          </h2>
        </div>
      </section>
      {/* sec4 */}
      <section className="grid grid-cols-2 p-12 gap-[200px]">
        <div className="py-6 px-6 ">
          <h1 className=" text-5xl font-bold py-6">Leave Request Management</h1>
          <h2 className="">
            Digital platform for submitting and approving all leave types (PTO,
            sick, parental) with automated policy enforcement. Employees can
            view balances, check team availability, and track request status
            through self-service portals. Managers receive streamlined approval
            workflows with conflict detection and calendar synchronization.
            Generates leave trend reports and maintains complete audit records
            for compliance purposes.
          </h2>
        </div>
        <div className="">
          <img
            src={pic4}
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default Feature;
