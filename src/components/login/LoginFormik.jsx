import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import Image from "../../assets/logo-dark-v2.png";

const LoginFormik = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  // Predefined credentials for Admin and Employee
  const credentials = {
    admin: { username: "admin", password: "admin123" },
    employee: { username: "meypanhawath", password: "password123" },
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    const { username, password } = values;

    // Check credentials
    if (
      username === credentials.admin.username &&
      password === credentials.admin.password
    ) {
      // Navigate to Admin Dashboard
      navigate("/admindashboard");
    } else if (
      username === credentials.employee.username &&
      password === credentials.employee.password
    ) {
      // Navigate to Employee Dashboard
      navigate("/empDashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <main className="h-full relative flex justify-center items-center min-h-screen bg-gray-100 bg-[url('assets/Login-bg.jpg')] bg-cover bg-center p-4">
      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row bg-white rounded-xl md:rounded-2xl shadow-lg w-full max-w-6xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Left Section (Blue Background) */}
        <div
          className="bg-blue-950 flex flex-col items-start md:items-center w-full md:w-1/2 p-6 md:p-12"
          data-aos="fade-right"
        >
          {/* Logo */}
          <img
            src={Image}
            alt="Logo"
            className="max-w-[120px] md:max-w-[200px] w-full h-auto self-start animate-bounce"
            data-aos="zoom-in"
          />
          {/* Welcome Text */}
          <div
            className="w-full flex flex-col items-center mt-8 md:mt-12"
            data-aos="fade-up"
          >
            <p className="bg-gradient-to-b from-white/80 to-white/10 bg-clip-text text-transparent text-xl md:text-3xl font-regular italic text-center leading-snug md:leading-normal">
              Welcome.
              <br />
              Start your journey now with
              <br />
              our management
              <br />
              system!
            </p>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div
          className="flex flex-col w-full md:w-1/2 p-6 md:p-12"
          data-aos="fade-left"
        >
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-12"
            data-aos="fade-down"
          >
            Login to your account
          </h2>

          {/* Formik Form */}
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col space-y-4 md:space-y-8 w-full max-w-md">
                {/* Username Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="mb-1 md:mb-2 font-medium text-gray-700 text-base md:text-lg"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    className="border border-gray-300 p-2 md:p-4 rounded-lg outline-none focus:ring-2 focus:ring-primary-color transition text-base md:text-lg"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="mb-1 md:mb-2 font-medium text-gray-700 text-base md:text-lg"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="border border-gray-300 p-2 md:p-4 rounded-lg outline-none focus:ring-2 focus:ring-primary-color transition text-base md:text-lg"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-primary-color text-white py-2 md:py-4 rounded-lg hover:bg-[#032a5e] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-base md:text-lg"
                >
                  Login Now
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default LoginFormik;