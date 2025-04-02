import React from 'react'

const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100 bg-[url('assets/Login-bg.jpg')] bg-cover bg-center">
      <div className="bg-blue-950 text-white font-sans  w-78 h-81 rounded-20 flex justify center items-center p-5 font-san text-2xl">
        <p>Welcome.
        <br/>  
        Start your journey now with our 
        <br/>
        management
          <br />system!
        </p>

      </div>
      <section className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Login to your account</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 font-medium">Username</label>
            <input type="text" id="username" placeholder="Enter username" className="border border-gray-300 p-2  outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input type="password" id="password" placeholder="Enter password" className="border border-gray-300 p-2  outline-none focus:ring-2 focus:ring-blue-500" />

          </div>
          <button className="bg-blue-500 text-white py-2  hover:bg-blue-600 transition">Login Now</button>
        </div>
      </section>
    </main>
  )
}

export default Login;