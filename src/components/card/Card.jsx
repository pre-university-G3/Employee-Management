import React from 'react';
import Icon from '../../assets/close.png'

const Card = () => {
  return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white/90 rounded-lg shadow-lg p-6 w-90 mt-10 mb-15 relative">


          {/* Leave for request */}

          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-gray-800 font-semibold text-lg">Request for leave</h2>
            <button>
              <img src={Icon} alt="close" className="w-5 h-5" />
            </button>
          </div>
          
          {/* form */}
          <div className="space-y-2">
            {/* this is the name  */}
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
              <input type="name"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
            </div>

            {/* this is for start date */}
            <div>
              <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1 block">Start Date</label>
              <input type="date"
                    id="date"
                    name="date"
                    placeholder="Seclect start date"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
            </div>

            {/* this is for end date  */}
             <div>
              <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1 block">End Date</label>
              <input type="date"
                     id="date"
                     name="date"
                     placeholder="Seclect end date"
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>

             {/* this is for the reason */}
             <div>
              <label htmlFor="reason" className="text-sm font-medium text-gray-700 mb-1 block">Reason</label>
              <textarea name="reason"
                        id="reason"
                        placeholder="Enter your reason"
                        rows="3"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         >
                        </textarea>
             </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="w-30 bg-blue-700 text-white font-bold py-2 rounded-md hover:bg-blue-500 duration-1000 ">
              Done
            </button>
          </div>
        </div>
      </section>
  );
};

export default Card;