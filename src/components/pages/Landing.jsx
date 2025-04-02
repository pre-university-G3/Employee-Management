import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


import pic1 from '../../assets/landing-pic-1.png'
import pic2 from '../../assets/landing-pic-2.png'
import pic3 from '../../assets/landing-pic-3.png'
import pic4 from '../../assets/landing-pic-4.png'
import js from '../../assets/js-logo-v2.png'
import html from '../../assets/html-logo-v2.png'
import tailwind from '../../assets/tailwind-logo-v2.png'
import react from '../../assets/react-logo-v2.png'

const Landing = () => {
  return (
    
    <>
    <Navbar />
    <main className="h-[100vh] bg-[#043873]  text-white">

      <section className="h-[100vh] grid xl:grid-cols-2 sm:grid-cols-1 xl:pl-30 xl:pr-30 sm:pl-0 sm-pr-0 gap-10 bg-gradient-to-r from-0% from-[#2156B2] via-50% via-[#043873] to-100% to-[#2156B2] xl:content-center">
      <div className="">
        <h1 className="font-bold text-5xl leading-15 xl:pl-10 xl:pr-10 sm:pl-100 sm:pr-10 mb-5 self-center">Scale Attendance Management Safe and Secure</h1>
        <p className="leading-8 pl-10">Manage your employees' attendance with fast and reliable processes. Secure and highly customization. Rise Attendance is the best partner for you if you want to scale your workforce management efficiently worldwide.</p>
        <button className="border-2 border-blue-950 pt-3 pb-3 pl-3 pr-3 mt-5 ml-10">GET STARTED</button>
      </div> 
       <div className="">
          <img src={pic1} alt="" />
       </div>

    </section>

    <section className="h-[120vh] white grid xl:grid-cols-2 sm:grid-cols-1 xl:pl-30 xl:pr-30 sm:pl-0 sm:pr-0 text-black content-center">

      <div className="content-center">
        <h2 className="font-bold text-5xl leading-15 xl:pr-10 sm:pr-10 sm:pl-10 gap-10 text-[#043873]">Smart Attendance Management</h2>
        <p className="xl:pr-10 sm:pr-10 sm:pl-10 text-justify pt-10">Track employee attendance effortlessly with support for images, documents, and audio records. Generate reports, create shift schedules, and manage attendance data securely. Capture and save records instantly using the mobile app.</p>
      </div>
      <div className="">
        <img src={pic2} alt="" />
      </div>
      <div className="">

        <h2 className="font-bold text-5xl leading-15 xl:pr-10 sm:pr-10 sm:pl-10 gap-10 text-[#043873] pt-20">Collaborate with Your Team</h2>
        <p className="xl:pr-10 sm:pr-10 sm:pl-10 text-justify pt-10">Use the employee management system to share updates, notes, and tasks with your team members. Collaborate seamlessly and keep everyone on the same page. You can also share information through secure links to keep your team informed.</p>
        
      </div>
      <div className="">
        <img src={pic3} alt="" />
      </div>

    </section>

    <section className="h-[35vh] bg-gradient-to-r from-0% from-[#2156B2] via-50% via-[#043873] to-100% to-[#2156B2] pt-6">
      < h2 className="font-bold text-5xl leading-30 xl:pr-10 sm:pr-10 sm:pl-10 gap-10 text-center">Manage Your Workforce Anywhere, Anytime</h2>
      <p className="text-justify pr-70 pl-63">Easily track attendance, manage shifts, and oversee employee performance from any device. Whether you're in the office or working remotely, our platform keeps you connected with real-time updates and cloud-based access</p>
    </section>
    
    <section className="h-[100vh] grid grid-cols-2 place-content-center">
        <h2 className="font-bold text-5xl leading-15 xl:pr-10 sm:pr-10 sm:pl-10 gap-10 text-center text-[#043873]">100% your employee data
          <p className="font-normal text-xl pt-10 xl:pr-10 sm:pr-10 sm:pl-10 text-justify text-[#043873]">Our system is open source, and all employee records are saved in an open, accessible format giving you complete control. You'll always have direct access to your data, with no restrictions or hidden barriers.</p>
        </h2>
        <div>
          <img src={pic4} alt="" />
        </div>
    </section>

    <section className="h-[35vh] bg-gradient-to-r from-0% from-[#2156B2] via-50% via-[#043873] to-100% to-[#2156B2]">
        <h2 className="font-bold text-5xl leading-20 xl:pr-10 sm:pr-10 sm:pl-10 text-center pt-3">TECH STACK</h2>
        <div className="flex flex-row gap-5 place-content-center">
          <img className="w-40" src={js} alt="js" />
          <img className="w-40" src={html} alt="html" />
          <img className="w-40" src={tailwind} alt="tailwindCSS" />
          <img className="w-40" src={react} alt="react" />
        </div>
    </section>

    <section className="h-[100vh]">
        <h2 className="font-bold text-5xl leading-40 xl:pr-10 sm:pr-10 sm:pl-10 text-center pt-3 text-[#043873]">What Our Clients Says</h2>
        <article className="grid grid-cols-[repeat(3,400px)] gap-5 place-content-center ">
          <div className="bg-white shadow-md w-100 h-100 rounded-3xl text-black">
            <p>Checkify is designed as a collaboration tool for businesses that is a full project management solution.</p>
            <h3 className="text-[#043873] font-bold">Hout Sokleng</h3>
            <p>Head of Talent Acquisition, North America</p>
            </div>
          <div className="bg-white shadow-md w-100 h-100 rounded-3xl"></div>
          <div className="bg-white shadow-md w-100 h-100 rounded-3xl"></div>
        </article>
    </section>

    <section className="h-[30vh] bg-[#043873]">
    <Footer />
    </section>
    
    </main>
    

    </>
  )
}

export default Landing