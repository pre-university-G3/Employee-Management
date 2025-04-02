import React from 'react'
import test from '../../assets/testpic.png'
const Pfcard = () => {
  return (
   <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div  className="grid grid-cols-3 bg-white/90 rounded-lg shadow-lg p-6 w-100 relative">
            {/* this is for profile card */}
            <div>
                <img src={test} alt="" />
            </div>
            <div>
                <p>-------</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque magnam explicabo at? </p>
            </div>
        </div>
   </section>
  )
}

export default Pfcard
