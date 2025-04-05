import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import pic1 from "../../assets/feature-new-3.png";
import pic2 from "../../assets/feature-new-4.png";
import pic3 from "../../assets/feature-new.png"
import pic4 from "../../assets/feature-pic-4.png";

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Section 1 */}
        <section className="h-auto min-h-[100vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] items-center px-5 lg:px-20 lg:pr-0 py-10">
          <div data-aos="fade-right">
            <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-5 text-white">
              Modernize Your Workplace with an Automated Attendance System
            </h2>
            <p className="text-white leading-7 lg:leading-8 mb-5 text-justify">
              Managing employee attendance manually is time-consuming,
              error-prone, and inefficient. Upgrade to an automated Employee
              Attendance System that simplifies tracking, enhances accuracy, and
              boosts productivity.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img src={pic1} alt="" className="w-full max-w-[400px] lg:max-w-[800px] object-cover" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-auto min-h-[80vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 items-center px-5 lg:px-20 py-10">
          <div data-aos="fade-right">
            <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-5">
              Employee List Management
            </h2>
            <p className="leading-7 lg:leading-8 mb-5 text-justify">
              A centralized database storing all employee details including
              roles, departments, and contact information with secure access
              controls. Features organizational chart visualization, document
              management, and customizable reporting for HR administration.
              Supports bulk updates, advanced filtering, and seamless
              integration with other HR systems. Provides complete audit trails
              for all employee record changes and updates.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img src={pic2} alt="" className="w-full max-w-[400px] lg:max-w-[600px] object-cover" />
          </div>
        </section>

        {/* Section 3 */}
        <section className="h-auto min-h-[50vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] items-center px-5 lg:px-20 py-10">
          <div data-aos="fade-right" className="flex justify-center">
            <img src={pic3} alt="" className="w-full max-w-[800px] object-cover" />
          </div>
          <div data-aos="fade-left">
            <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-5 text-white">
              Attendance Tracking System
            </h2>
            <p className="text-white leading-7 lg:leading-8 mb-5 text-justify">
              Multi-method clock-in/out system using biometrics, mobile apps,
              and RFID cards with geofencing capabilities. Real-time dashboards
              display attendance status, late arrivals, and absences with
              automated manager alerts. Includes shift scheduling, overtime
              calculations, and break time monitoring with labor law compliance
              features. Integrates directly with payroll systems to ensure
              accurate time-to-pay conversion.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="h-auto min-h-[70vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 items-center px-5 lg:px-20 py-10">
          <div data-aos="fade-right">
            <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-5">
              Leave Request Management
            </h2>
            <p className="leading-7 lg:leading-8 mb-5 text-justify">
              Digital platform for submitting and approving all leave types
              (PTO, sick, parental) with automated policy enforcement. Employees
              can view balances, check team availability, and track request
              status through self-service portals. Managers receive streamlined
              approval workflows with conflict detection and calendar
              synchronization. Generates leave trend reports and maintains
              complete audit records for compliance purposes.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img src={pic4} alt="" className="w-full max-w-[400px] object-cover" />
          </div>
        </section>
        
        <Footer />
    
      </main>
    </>
  );
};

export default Feature;