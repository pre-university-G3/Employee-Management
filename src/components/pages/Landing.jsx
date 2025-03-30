import React from 'react'
import pic from '../../assets/10798281_19362653-removebg-preview.png'

const Landing = () => {
  return (
    
    <>
    <main className="h-[100vh] bg-[#043873]  text-white">

      <section className="h-[100vh] grid xl:grid-cols-2 sm:grid-cols-1 bg-amber-500  content-center">
      <div className="bg-red-500">
        <h1 className="font-bold text-5xl leading-15 pl-15 mb-5 self-center">Scale Attendance Management Safe and Secure</h1>
        <p className="leading-8 pl-10">Manage your employees' attendance with fast and reliable processes. Secure and highly customization. Rise Attendance is the best partner for you if you want to scale your workforce management efficiently worldwide.</p>
        <button className="border-2 border-blue-950">GET STARTED</button>
      </div> 
       <div className="bg-white">
          <img src={pic} alt="" />
       </div>

    </section>

    <section className="h-[100vh] bg-green-500 grid grid-cols-2">

      <div className="bg-red-500"></div>
      <div className="bg-yellow-500"></div>
      <div className="bg-blue-500"></div>
      <div className="bg-black"></div>

    </section>

    <section className="h-[35vh] bg-[#043873]">

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