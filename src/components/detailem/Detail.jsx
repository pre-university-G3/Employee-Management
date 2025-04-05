import React from 'react';
import Profile from '../../assets/testpic.png'
const EmployeeProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <article className="rounded-xl bg-white shadow-lg max-w-3xl w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Employee Image - Left Side */}
          <div className="sm:w-1/3">
            <div className="h-full">
              <img 
                src={Profile}
                alt="Employee" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Employee Details - Right Side */}
          <div className="sm:w-2/3 p-6">
            <div className="flex items-center mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">Manager</span>
              <span className="ml-3 text-sm text-gray-500">ID: I-0001</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800">May Panhawath</h2>
            <h3 className="text-lg text-gray-600 mb-4">Senior Web Design</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700"> checkify.kh@gmail.com.</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">(855)96-348-2347</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Phnom Penh</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">UI Design</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">UX Research</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Prototyping</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Figma</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Team Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EmployeeProfileCard;