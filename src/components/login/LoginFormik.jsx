import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../assets/logo-dark-v2.png";

// Custom field component with animation for valid input
const AnimatedField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inputClass =
    meta.touched && !meta.error ? "border-green-500 animate-valid" : "border-gray-300";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={props.id || props.name}
        className="mb-1 md:mb-2 font-medium text-gray-700 text-base md:text-lg"
      >
        {label}
      </label>
      <Field
        {...field}
        {...props}
        className={`p-2 md:p-4 rounded-lg outline-none focus:ring-2 focus:ring-primary-color transition text-base md:text-lg ${inputClass}`}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm">{meta.error}</div>
      )}
    </div>
  );
};

// Modal for invalid login
const InvalidModal = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-white rounded-lg shadow-lg z-10 p-6 w-11/12 max-w-sm transform transition-all duration-300 ease-in-out animate-pop-up">
      <h3 className="text-xl font-bold text-red-600 mb-4">Login Failed</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-primary-color text-white rounded hover:bg-[#032a5e] transition cursor-pointer"
        >
          Okay
        </button>
      </div>
    </div>
  </div>
);

// Loading Spinner
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 border-4 border-primary-color border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 border-4 border-primary-color/50 border-b-transparent rounded-full animate-spin-slow"></div>
    </div>
  </div>
);

const LoginFormik = () => {
  const navigate = useNavigate();
  const [showInvalidModal, setShowInvalidModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const token = localStorage.getItem("authToken");
    const userRole = localStorage.getItem("userRole");

    if (token && userRole) {
      if (userRole === "admin") {
        navigate("/admindashboard");
      } else if (userRole === "employee") {
        navigate("/empDashboard");
      }
    }
  }, [navigate]);

  const credentials = {
    admin: { username: "admin", password: "password123" },
    employee: { username: "employee", password: "password123" },
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { username, password } = values;
    let token = "";

    if (
      username === credentials.admin.username &&
      password === credentials.admin.password
    ) {
      token = "admin-token-abc123";
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("authToken", token);
      setIsLoading(true);
      setTimeout(() => navigate("/admindashboard"), 1500);
    } else if (
      username === credentials.employee.username &&
      password === credentials.employee.password
    ) {
      token = "employee-token-def456";
      localStorage.setItem("userRole", "employee");
      localStorage.setItem("authToken", token);
      setIsLoading(true);
      setTimeout(() => navigate("/empDashboard"), 1500);
    } else {
      setShowInvalidModal(true);
    }

    setSubmitting(false);
    resetForm();
  };

  return (
    <main className="h-full relative flex justify-center items-center min-h-screen bg-gray-100 bg-[url('assets/Login-bg.jpg')] bg-cover bg-center p-4">
      {showInvalidModal && (
        <InvalidModal
          message="Invalid username or password. Please check your credentials and try again."
          onClose={() => setShowInvalidModal(false)}
        />
      )}
      {isLoading && <LoadingSpinner />}

      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row bg-white rounded-xl md:rounded-2xl shadow-lg w-full max-w-6xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div
          className="bg-blue-950 flex flex-col items-start md:items-center w-full md:w-1/2 p-6 md:p-12"
          data-aos="fade-right"
        >
          <Link to="/">
            <img
              src={Image}
              alt="Logo"
              className="max-w-[120px] md:max-w-[200px] w-full h-auto self-start animate-bounce"
              data-aos="zoom-in"
            />
          </Link>
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

        {/* Right Section */}
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

          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-4 md:space-y-8 w-full max-w-md">
                <AnimatedField
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  id="username"
                />
                <AnimatedField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  id="password"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-color text-white py-2 md:py-4 rounded-lg hover:bg-[#032a5e] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-base md:text-lg cursor-pointer"
                >
                  {isSubmitting ? "Logging in..." : "Login Now"}
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
