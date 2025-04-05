import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import second from "../../assets/help-pic-1.png";
import question from "../../assets/question-5.gif";

// Success Modal Component (no dark overlay)
const SubmitSuccessModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      data-aos="fade-in"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Submitted Successfully!</h2>
        <p className="mb-6">Your message has been sent.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const Help = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // State for FAQ question (left section)
  const [faqQuestion, setFaqQuestion] = useState("");

  // Initialize AOS and EmailJS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    emailjs.init("8UKbIqfT2ZME3kWOm"); // Your EmailJS public key (for Contact Us form)
  }, []);

  // Toggle FAQ items in right section
  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  // Handler for FAQ submission (left section) - now only clears the input and shows the modal
  const handleFaqSubmit = () => {
    if (!faqQuestion.trim()) {
      console.error("FAQ question is empty");
      return;
    }
    console.log("Submitting FAQ question:", faqQuestion);
    // Instead of sending an email, we just clear the input and show the modal.
    setFaqQuestion("");
    setShowSuccessModal(true);
  };

  // Formik initial values and validation schema for Contact Us form
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Handler for Contact Us form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting Contact form:", values);
    emailjs
      .send(
        "service_rzh5wvo",  // Your EmailJS service ID
        "template_hq7sa4d", // Your Contact Us EmailJS template ID
        values,
        "8UKbIqfT2ZME3kWOm" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Contact email sent:", result.text);
          setShowSuccessModal(true);
          resetForm();
        },
        (error) => {
          console.error("Error sending contact email:", error);
        }
      );
  };

  return (
    <main className="pt-20">
      <Navbar />

      {/* FAQ Section */}
      <nav className="p-5 min-h-screen bg-gradient-to-r from-[#2156B2] via-[#043873] to-[#2156B2]">
        {/* FAQ Title */}
        <div
          className="text-4xl pt-20 font-bold text-white text-center py-6"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Section: FAQ Submission */}
          <section
            className="p-5 flex flex-col items-center"
            data-aos="fade-right"
          >
            <img
              src={question}
              alt="Help illustration"
              className="w-70 h-70 mb-3 pl-10"
            />
            <div className="text-lg font-bold text-white">
              ANY QUESTIONS?
            </div>
            <div className="mb-5 text-center text-white">
              You can ask anything you want to know.
            </div>
            <label htmlFor="faqQuestion" className="sr-only">
              Your Question
            </label>
            <input
              id="faqQuestion"
              name="faqQuestion"
              type="text"
              value={faqQuestion}
              onChange={(e) => setFaqQuestion(e.target.value)}
              placeholder="Enter your question"
              autoComplete="off"
              className="w-[60%] rounded-md bg-white px-4 py-2 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleFaqSubmit}
              className="bg-white border-2 border-blue-950 px-6 py-3 mt-5 hover:bg-blue-950 hover:text-white transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Submit
            </button>
          </section>

          {/* Right Section: FAQ Display */}
          <section
            className="p-5 flex flex-col pt-20 gap-4 place-content-center"
            data-aos="fade-left"
          >
            {/* FAQ Item 1 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>What is the Employee Management System?</span>
              <button onClick={() => toggleQuestion(1)}>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openQuestion === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 1 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                The Employee Management System is a software solution designed
                to streamline HR processes, manage employee data, track
                performance, and improve workforce productivity.
              </div>
            )}

            {/* FAQ Item 2 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>How does the system benefit my business?</span>
              <button onClick={() => toggleQuestion(2)}>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openQuestion === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 2 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                It improves efficiency, reduces manual errors, enhances employee
                engagement, and provides valuable insights through data analytics.
              </div>
            )}

            {/* FAQ Item 3 */}
            <div className="p-4 bg-white rounded-md text-lg text-[#043873] font-bold flex justify-between items-center">
              <span>How can I get started?</span>
              <button onClick={() => toggleQuestion(3)}>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openQuestion === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openQuestion === 3 && (
              <div className="p-4 bg-white rounded-md text-gray-600">
                You can get started by signing up for a free trial on our website
                or contacting our sales team for a demo.
              </div>
            )}
          </section>
        </div>
      </nav>

      {/* Contact Us Section */}
      <div className="min-h-screen bg-white p-10 lg:p-20">
        <div className="border-0 rounded-2xl">
          <section className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900">CONTACT US</h2>
            <hr className="w-20 mx-auto mt-5 border-t-4 border-gray-900" />
            <p className="text-gray-600 mt-5">
              Send your queries using the form below, or email us at{" "}
              <a
                href="mailto:checkify.kh@gmail.com"
                className="text-blue-600 underline"
              >
                checkify.kh@gmail.com
              </a>
              .
            </p>
          </section>

          <div className="w-[90%] lg:w-[80%] pb-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Illustration */}
            <div className="flex justify-center items-center" data-aos="fade-right">
              <img
                src={second}
                alt="Contact illustration"
                className="max-w-full w-90"
              />
            </div>

            {/* Right Section: Contact Form */}
            <div data-aos="fade-left">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-5">
                    <div>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-color"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-color"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-color"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary-color text-white px-6 py-3 rounded-md hover:bg-secondary-color transition duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <SubmitSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      <Footer />
    </main>
  );
};

export default Help;
