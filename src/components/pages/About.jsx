import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import pic1 from "../../assets/about-pic-1.png";
import demo from "../../assets/demo-pic.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  // Mentors data
  const mentors = [
    { name: "MR. KAY KEO", role: "IT Instructor / Mentor" },
    { name: "MR. CHAN CHHAYA", role: "IT Instructor / Mentor" },
  ];

  // Team members data
  const teamMembers = [
    { name: "MEY PANHAWATH", role: "LEADER, FRONTEND, UX/UI" },
    { name: "LONH RAKSMEY", role: "VICE LEADER, FRONTEND, UX/UI" },
    { name: "LIM SOKHEANG", role: "LEAD UX/UI, PRESENTER" },
    { name: "RITH SARAMANITH", role: "FRONTEND, UX/UI" },
    { name: "YUOM KITYA", role: "UX/UI" },
    { name: "SIM SOL", role: "FRONTEND, UX/UI" },
    { name: "HOUT SOKLENG", role: "FRONTEND, UX/UI" },
    { name: "SAM SOKSRENG", role: "UX/UI" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Section 1: About Us */}
        <section
          className="h-auto min-h-[100vh] grid xl:grid-cols-2 sm:grid-cols-1 gap-10 bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2] items-center px-5 lg:px-20 text-white"
          data-aos="fade-up"
        >
          <div>
            <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-5">
              Assign your employees with the work they truly deserve
            </h2>
            <p className="leading-7 lg:leading-8 mb-5">
              Employee management feature enables a safer system to keep track
              on your employees day-to-day operations.
            </p>
          </div>
          <div>
            <img src={pic1} alt="" className="w-full max-w-[400px] object-cover" />
          </div>
        </section>

        {/* Section 2: About Us Details */}
        <section className="h-auto px-5 lg:px-20 mt-20" data-aos="fade-up">
          <h2 className="font-bold text-4xl lg:text-5xl leading-snug mb-20">
            ABOUT US <br />
            CHECKIFY
          </h2>
          <div className="font-bold text-xl lg:text-3xl leading-snug mb-5 text-green-600 border-l-7 border-l-green-800 pl-5">
            WHY SHOULD YOU CHOOSE US
          </div>
          <p className="bg-green-600/40 rounded-2xl px-8 py-3 text-justify text-xl">
            Our Employee Management System is designed to revolutionize the way
            you handle HR tasks by seamlessly integrating robust functionality
            with an intuitive user interface. Our platform not only simplifies
            daily administrative duties, such as attendance tracking and payroll
            processing, but it also provides powerful real-time analytics that
            empower you to make strategic, data-driven decisions. Choose our
            Employee Management System for a future-proof, efficient, and secure
            way to manage your workforce, enabling you to focus on what truly
            matters: growing your business.
          </p>
        </section>

        {/* Section 3: Mission & Vision */}
        <section className="h-auto px-5 lg:px-20 mt-20" data-aos="fade-up">
          <div className="font-bold text-xl lg:text-3xl leading-snug mb-5 text-primary-color border-l-7 border-l-primary-color pl-5">
            MISSION & VISION
          </div>
          <h2 className="font-bold text-primary-color xl:text-xl bg-primary-color/15 px-8 py-3 mb-10 rounded-2xl">
            Our Mission
            <p className="font-normal text-black mt-3 text-justify">
              To empower businesses by delivering an intuitive, secure, and
              efficient employee management system that streamlines HR
              operations, enhances productivity, and fosters a culture of
              transparency and collaboration. We are dedicated to continuously
              innovating our platform to meet the evolving needs of modern
              organizations while ensuring a seamless user experience.
            </p>
          </h2>
          <h2 className="font-bold text-primary-color xl:text-xl bg-primary-color/15 px-8 py-3 rounded-2xl">
            Our Vision
            <p className="font-normal text-black mt-3 text-justify">
              To become the global leader in employee management solutions,
              transforming the way organizations manage their human resources.
              We envision a future where HR processes are fully integrated, data
              driven decisions are standard, and every employee has the tools
              and support needed to thrive in a dynamic work environment.
            </p>
          </h2>
        </section>

        {/* Section 4: Mentors */}
        <section className="h-auto py-10" data-aos="fade-up">
          <h2 className="font-bold text-primary-color xl:text-5xl text-center px-8 py-3 mb-5 rounded-2xl">
            OUR MENTORS
          </h2>
          <h3 className="font-bold text-red-600 xl:text-3xl text-center border-b-4 w-1/2 mx-auto mb-5 pb-5">
            Learn From Top Experts
          </h3>
          <p className="text-center mb-10">
            Our mentors are seasoned professionals who offer support, share
            their knowledge, and assist our users in building strong data
            skills.
          </p>
          <figure className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-center items-center xl:px-50">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center">
                <img
                  src={demo}
                  alt={mentor.name}
                  className="rounded-full object-cover w-40 h-40 mx-auto"
                />
                <h3 className="text-center pt-8 text-primary-color font-bold">
                  {mentor.name}
                </h3>
                <p className="text-center pt-3">{mentor.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-3xl text-gray-800 hover:text-black">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className="text-3xl text-gray-800 hover:text-black">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            ))}
          </figure>
        </section>

        {/* Section 5: Team Members */}
        <section className="h-auto py-10" data-aos="fade-up">
          <h2 className="font-bold text-primary-color text-center xl:text-5xl border-b-4 w-1/2 mx-auto pb-5">
            TEAM MEMBERS
          </h2>
          <figure className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center px-5 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={demo}
                  alt={member.name}
                  className="rounded-full object-cover w-40 h-40 mx-auto"
                />
                <h3 className="font-bold text-center text-primary-color pt-8">
                  {member.name}
                </h3>
                <p className="text-center pt-5">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-3xl text-gray-800 hover:text-black">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className="text-3xl text-gray-800 hover:text-black">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            ))}
          </figure>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;