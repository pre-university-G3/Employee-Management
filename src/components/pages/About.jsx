import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import AOS from "aos";      // Import AOS
import "aos/dist/aos.css";      // Import AOS styles

import Chhaya from '../../assets/Chhaya.jpg';
import Kitya from '../../assets/Kitya.jpg';
import KayKeo from '../../assets/KayKeo.jpg';
import attendance from '../../assets/attendance.png';
import Kheang from '../../assets/Kheang.jpg';
import Leng from '../../assets/Leng.jpg';
import Nith from '../../assets/Nith.jpg';
import Sreng from '../../assets/Sreng.jpg';
import Sol from '../../assets/Sol.jpg';
import wath from '../../assets/wath.jpg'
import raksmey from '../../assets/raksmey-v3.jpg'

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

    { name: "MR. KAY KEO", role: "IT Instructor / Mentor",image: KayKeo, github: "https://github.com/keoKAY",email: "keokay888@gmail.com" },
    { name: "MR. CHAN CHHAYA", role: "IT Instructor / Mentor",image: Chhaya, github: "https://github.com/it-chhaya", email: "it.chhaya@gmail.com" },
  ];

  // Team members data
  const teamMembers = [
    { name: "MEY PANHAWATH", role: "LEADER, FRONTEND, UX/UI",image: wath, github: "https://github.com/meypanhawath" , email: "panhawath18@gmail.com" },
    { name: "LONH RAKSMEY", role: "CO LEADER, FRONTEND, UX/UI",image: raksmey, github: "https://github.com/LonhRaksmey" ,email: "lonhraksmey828282@gmail.com " },
    { name: "LIM SOKHEANG", role: "LEAD UX/UI, PRESENTER",image: Kheang, github: "https://github.com/Rejected2005" ,email: "sokheanglim2005@gmail.com" },
    { name: "RITH SARAMANITH", role: "FRONTEND, UX/UI",image: Nith, github: "https://github.com/Manith991" ,email: " rithsaramanith123@gmail.com " },
    { name: "YUOM KITYA", role: "UX/UI",image: Kitya, github: "https://github.com/kitya-yuom81" , email: " kityayuom@gmail.com " },
    { name: "SIM SOL", role: "FRONTEND, UX/UI",image: Sol, github: "https://github.com/Mrrsol033", email: " mrrsol.it@gmail.com" },
    { name: "HOUT SOKLENG", role: "FRONTEND, UX/UI",image: Leng, github: "https://github.com/Sokleng143", email: " houtsokleng203@gmail.com"  },
    { name: "SAM SOKSRENG", role: "UX/UI",image: Sreng, github: "https://github.com/Soksreng12", email: "lapawlmaug000@gmail.com "},
  ];

  return (
    <>
      {/* <Navbar /> */}
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
          <img src={attendance} alt="attendance" className="w-[900px] h-[654px] object-cover" />

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
         <div className="font-bold text-xl lg:text-3xl leading-snug mb-5 text-[#000D7D] border-l-7 border-l-primary-color pl-5">
           MISSION & VISION
         </div>
         <h2 className=" bg-[#007CD4]/20 font-bold text-[#000D7D] xl:text-xl px-8 py-3 mb-10 rounded-2xl">
           Our Mission
           <p className=" font-normal text-black mt-3">
             To empower businesses by delivering an intuitive, secure, and
             efficient employee management system that streamlines HR
             operations, enhances productivity, and fosters a culture of
             transparency and collaboration. We are dedicated to continuously
             innovating our platform to meet the evolving needs of modern
             organizations while ensuring a seamless user experience.
           </p>
         </h2>
         <h2 className="bg-[#007CD4]/20 font-bold text-[#000D7D] xl:text-xl  px-8 py-3 rounded-2xl">
           Our Vision
           <p className="font-normal text-black mt-3">
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
         <h2 className="font-bold text-[#000D7D] xl:text-5xl text-center px-8 py-3 mb-5 rounded-2xl">
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
                 src={mentor.image}
                 alt={mentor.name}
                 className="rounded-full object-cover w-40 h-40 mx-auto"
               />
               <h3 className="text-center pt-8 text-primary-color font-bold">
                 {mentor.name}
               </h3>
               <p className="text-center pt-3">{mentor.role}</p>
               <div className="flex justify-center gap-4 mt-4">
                 <a href={mentor.github} className="text-3xl text-gray-800 hover:text-black" target="_new">
                   <i className="fa-brands fa-github"></i>
                 </a>
                 <a href={`mailto:${mentor.email}`} className="text-3xl text-gray-800 hover:text-black" target="_new">
                   <i className="fa-solid fa-envelope"></i>
                 </a>
               </div>
             </div>
           ))}
         </figure>
       </section>
              {/* Section 5: Team Members */}
              <section className="h-auto py-10" data-aos="fade-up">
         <h2 className="font-bold text-[#000D7D] text-center xl:text-5xl border-b-4 w-1/2 mx-auto pb-5">
           TEAM MEMBERS
         </h2>
         <figure className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center px-5 mt-10">
           {teamMembers.map((member, index) => (
             <div key={index} className="text-center">
               <img
                 src={member.image}
                 alt={member.name}
                 className="rounded-full object-cover w-40 h-40 mx-auto"
               />
               <h3 className="font-bold text-center text-primary-color pt-8">
                 {member.name}
               </h3>
               <p className="text-center pt-5">{member.role}</p>
               <div className="flex justify-center gap-4 mt-4">
                 <a href={member.github} className="text-3xl text-gray-800 hover:text-black" target="_new">
                   <i className="fa-brands fa-github"></i>
                 </a>
                 <a href={`mailto:${member.email}`} className="text-3xl text-gray-800 hover:text-black" target="_new">
                   <i className="fa-solid fa-envelope"></i>
                 </a>
               </div>
             </div>
           ))}
         </figure>
       </section>

       {/* <Footer /> */}
       <Footer />
     </main>
   </>
 );
};

export default About