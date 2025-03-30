import React from 'react'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
        <nav className="flex flex-row justify-around items-center font-en text-[#043873] font-bold cursor-pointer ">
            <div>
                <img className="w-60" src={logo} alt="logo" />
            </div>

            <div className="flex flex-row gap-20 text-[20px] transition hover:delay-500">
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">FEATURE</h3>
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">ABOUT US</h3>
                <h3 className="hover:underline hover:decoration-5 hover:underline-offset-6 hover:decoration-[#043873]">HELP & SUPPORT</h3>
            </div>
        
            <div>
                <button className="bg-[#043873] rounded-xl pt-2 pb-2 pr-7 pl-7 font-semibold text-white">Login</button>
            </div>
            
        </nav>
  )
}
