import React from 'react'

export default function About() {
  return (
    <main>
       {/* Hero Section  */}
      <section
        class="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden bg-gradient-custom"
      >
        <section class="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <article class="w-full md:w-1/2 lg:pr-32">
            <header>
              <h1
                class="-mt-1 text-[32px] md:text-[40px] lg:text-[48px] leading-[42px] md:leading-[56px] lg:leading-[64px] text-center md:text-left text-white font-bold tracking-[0em]"
              >
                Employee Management
              </h1>
            </header>
            <p
              class="mt-6 md:mt-10 text-[28px] md:text-[32px] lg:text-[40px] leading-[40px] md:leading-[48px] lg:leading-[56px] text-center md:text-left text-white font-normal tracking-[0em]"
            >
              Assign your employees with the work they truly deserve
            </p>
            <p
              class="mt-6 md:mt-10 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center md:text-left text-white font-normal leading-[32px] sm:leading-[36px] md:leading-[38px] lg:leading-[40px] tracking-[0em]"
            >
              Employee management feature enables a safer system to keep track
              on your employee day-to-day operations.
            </p>
          </article>
          <aside class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="../image/about.png"
              class="w-[900px] h-[654px]"
              alt="Employee Management"
            />
          </aside>
        </section>
      </section>

      {/* <!-- About Us Section --> */}
      <section class="px-6 md:px-20 py-10 bg-white">
        <header class="mb-8">
          <h1
            class="text-[32px] md:text-[40px] lg:text-[48px] leading-[42px] md:leading-[56px] lg:leading-[64px] text-center md:text-left text-[#002C54] font-bold tracking-[0em]"
          >
            ABOUT US
          </h1>
          <h1
            class="text-[32px] md:text-[40px] lg:text-[48px] leading-[42px] md:leading-[56px] lg:leading-[64px] text-center md:text-left text-[#002C54] font-bold tracking-[0em]"
          >
            EMPLOYEE MANAGEMENT
          </h1>
        </header>
      </section>

      {/* <!-- Why Choose Us --> */}
      <section class="px-6 md:px-20 py-10 bg-white">
        <div
          class="h-[70px] border-l-[5px] border-[#008D15] pl-4 mb-4 flex items-center"
        >
          <h3
            class="text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-tight tracking-normal text-[#008D15]"
          >
            WHY SHOULD YOU CHOOSE US
          </h3>
        </div>
      </section>

      {/* <!-- Full-width wrapper (no padding, no restriction) --> */}
      <section class="w-full flex justify-center bg-white px-4 py-6">
        <div
          class="w-full max-w-[1600px] bg-[#C4F7C4] rounded-2xl shadow-md p-6 md:p-8"
        >
          <p
            class="text-[#000] text-[18px] leading-[28px] sm:text-[20px] sm:leading-[30px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] text-justify font-normal"
          >
            Our Employee Management System is designed to revolutionize the way
            you handle HR tasks by seamlessly integrating robust functionality
            with an intuitive user interface. Our platform not only simplifies
            daily administrative duties, such as attendance tracking and payroll
            processing, but it also provides powerful real-time analytics that
            empower you to make strategic, data-driven decisions. Choose our
            Employee Management System for a future proof, efficient, and secure
            way to manage your workforce, enabling you to focus on what truly
            matters—growing your business.
          </p>
        </div>
      </section>

      {/* <!-- </section> --> */}

      {/* <!-- Mission & Vision --> */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <div
          className="h-[70px] border-l-[5px] border-[#000D7D] pl-4 mb-4 flex items-center"
        >
          <h3
            className="text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-tight tracking-normal text-[#000D7D]"
          >
            MISSION & VISION
          </h3>
        </div>
      </section>
      {/* <!-- Mission Box -->
      <!-- Mission Box --> */}
      <section className="w-full flex justify-center bg-white px-4 py-6">
        <div
          className="w-full max-w-[1600px] bg-[#007CD4]/20 rounded-2xl shadow-md p-6 md:p-7"
        >
          <h4
            className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#002060] mb-4 uppercase"
          >
            Our Mission
          </h4>
          <p
            className="text-[#000] text-[18px] leading-[28px] sm:text-[20px] sm:leading-[30px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] text-justify font-normal"
          >
            To empower businesses by delivering an intuitive, secure, and
            efficient employee management system that streamlines HR operations,
            enhances productivity, and fosters a culture of transparency and
            collaboration. We are dedicated to continuously innovating our
            platform to meet the evolving needs of modern organizations while
            ensuring a seamless user experience.
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center bg-white px-4 py-6">
        <div
          className="w-full max-w-[1600px] bg-[#007CD4]/20 rounded-2xl shadow-md p-6 md:p-7"
        >
          <h4
            className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#002060] mb-4 uppercase"
          >
            Our Vision
          </h4>
          <p
            className="text-[#000] text-[18px] leading-[28px] sm:text-[20px] sm:leading-[30px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] text-justify font-normal"
          >
            To become the global leader in employee management solutions,
            transforming the way organizations manage their human resources. We
            envision a future where HR processes are fully integrated,
            data-driven decisions are standard, and every employee has the tools
            and support needed to thrive in a dynamic work environment.
          </p>
        </div>
      </section>

      {/* <!-- </section>
    </section> --> */}
      <section className="px-6 md:px-20 py-16 bg-white text-center">
        <h2 className="text-[64px] font-bold text-[#043873] uppercase leading-normal tracking-normal">Our Mentors</h2>
        <h3 className="text-[48px] font-bold leading-[56px] tracking-normal text-[#FF0004]">
          Learn From Top Experts
        </h3>
        <div className="mx-auto w-[320px] border-t-[5px] border-[#FF0004] mt-1 "></div>
        <p className="ext-[#000000] font-normal text-[24px] leading-[40px] tracking-[0]  max-w-2xl mx-auto mt-7">
          Our mentors are seasoned professionals who offer support, share their
          knowledge, and assist our users in building strong data skills
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
          {/* <!-- Mentor 1 --> */}
          <div className="flex flex-col items-center">
            <img
              src="../image/kaykeo.png"
              alt="Mr. Kay Keo"
              className="w-40 h-40 rounded-full mb-4"
            />
            <h4 className="text-lg font-bold text-[#002060] uppercase">
              Mr. Kay Keo
            </h4>
            <p className="text-sm text-gray-600">IT Instructor/Mentor</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"
                ><img src="../image/github.png" alt="GitHub" className="w-6 h-6"
              /></a>
              <a href="#"
                ><img src="../image/mail.png" alt="Email" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          {/* <!-- Mentor 2 --> */}
          <div className="flex flex-col items-center">
            <img
              src="../image/chanchhaya.png"
              alt="Mr. Chan Chhaya"
              className="w-40 h-40 rounded-full mb-4"
            />
            <h4 className="text-lg font-bold text-[#002060] uppercase">
              Mr. Chan Chhaya
            </h4>
            <p className="text-sm text-gray-600">IT Instructor/Mentor</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"
                ><img src="../image/github.png" alt="GitHub" className="w-6 h-6"
              /></a>
              <a href="#"
                ><img src="../image/mail.png" alt="Email" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team Members Section --> */}
      <section className="px-6 md:px-20 py-16 bg-white text-center">
        <h2 className="text-[64px] font-bold text-[#000D7D] uppercase leading-normal tracking-normal">
          Team Members
        </h2>
        <div className="mx-auto w-[320px] border-t-[5px] border-[#000D7D] mt-1 "></div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12"
        >
          {/* <!-- Member 1 --> */}
          <div className="flex flex-col items-center">
            <img
              src="../image/mey.png"
              alt="Mey Panhawath"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Mey Panhawath
            </h4>
            <p className="text-sm font-semibold">Leader</p>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          {/* <!-- Member 2 --> */}
          <div className="flex flex-col items-center">
            <img
              src="../image/lonh.png"
              alt="Lonh Raksmey"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Lonh Raksmey
            </h4>
            <p className="text-sm font-semibold">Co-Leader</p>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          {/* <!-- Repeat this block for each team member with their respective info and images --> */}

          {/* <!-- Member 3 --> */}
          <div className="flex flex-col items-center">
            <img
              src="../image/lim.png"
              alt="Lim Sokheang"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Lim Sokheang
            </h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../image/rith.png"
              alt="Rith Samanith"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Rith Samanith
            </h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../image/yuom.png"
              alt="Yuom Kitya"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Yuom Kitya
            </h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../image/sim.png"
              alt="Sim Sol"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">Sim Sol</h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../image/hout.png"
              alt="Hout Sokleng"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Hout Sokleng
            </h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../image/sam.png"
              alt="Sam Soksreng"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h4 className="text-md font-bold text-[#002060] uppercase">
              Sam Soksreng
            </h4>
            <p className="text-sm text-gray-600">Frontend, UX/UI</p>
            <div className="flex space-x-4 mt-3">
              <a href="#"><img src="../image/github.png" className="w-6 h-6" /></a>
              <a href="#"
                ><img src="../image/mail.png" className="-mt-1 w-8 h-9"
              /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
