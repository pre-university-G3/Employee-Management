import React from 'react'
import pic1 from '../../assets/landing-pic-1.png'
import pic2 from '../../assets/landing-pic-2.png'
import pic3 from '../../assets/landing-pic-3.png'

const Landing = () => {
  return (
    
    <>
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
        <p>Track employee attendance effortlessly with support for images, documents, and audio records. Generate reports, create shift schedules, and manage attendance data securely. Capture and save records instantly using the mobile app.</p>
      </div>
      <div className="">
        <img src={pic2} alt="" />
      </div>
      <div className="">

        <h2 className="font-bold text-5xl leading-15 xl:pr-10 sm:pr-10 sm:pl-10 gap-10 text-[#043873]">Collaborate with Your Team</h2>
        <p>Use the employee management system to share updates, notes, and tasks with your team members. Collaborate seamlessly and keep everyone on the same page. You can also share information through secure links to keep your team informed.</p>
        
      </div>
      <div className="">
        <img src={pic3} alt="" />
      </div>

    </section>

    <section className="h-[35vh] bg-[#043873]">
      <h2>Manage Your Workforce Anywhere, Anytime</h2>
      <p>Easily track attendance, manage shifts, and oversee employee performance from any device. Whether you're in the office or working remotely, our platform keeps you connected with real-time updates and cloud-based access</p>
    </section>
    
    <section className="h-[100vh] grid grid-cols-2 bg-black">

    </section>

    <section className="h-[35vh] bg-[#043873]">

    </section>

    <section className="h-[100vh] grid grid-cols-2 bg-red-500">

    </section>

    <section className="h-[50vh]">
    
    </section>

    </main>

    </>
  )
}

export default Landing