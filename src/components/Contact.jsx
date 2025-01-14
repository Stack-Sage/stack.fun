import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS configuration
    emailjs
      .send(
        "service_c6a9tzi", // Replace with your EmailJS service ID
        "template_tu91qap", // Replace with your EmailJS template ID
        formData,
        "Yt7duJ8PkQlj2j1w7" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className = " w-full h-screen flex pt-20  justify-center text-blue-400">
      <div className="lg:w-1/3 w-3/5 h-fit   to-slate-900 p-6 lg:p-12 rounded-lg hover:shadow-xl shadow-md shadow-sky-700 hover:shadow-blue-400 hover:scale-105 trasistion duration-300 ease-linear">
        <h1 className="text-xl lg:text-4xl md:text-2xl font-bold text-blue-400 mb-6 text-center">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name..."
              className="w-full p-3   border border-blue-800  focus:outline-none focus:ring-2 focus:ring-blue-500  shadow-md shadow-blue-900   bg-gradient-to-br from-black via-black to-blue-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 trasistion duration-200 ease-linear placeholder:text-sky-600 placeholder:italic text-sky-400 "
              required
            />
          </div>
          <div>
         
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email..."
              className="w-full p-3   border border-blue-800  focus:outline-none focus:ring-2 focus:ring-blue-500  shadow-md shadow-blue-900   bg-gradient-to-br from-black via-black to-blue-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 trasistion duration-200 ease-linear placeholder:text-sky-600 placeholder:italic text-sky-400 "
              required
            />
          </div>
          <div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Feedback ..."
              className="w-full p-3   border border-blue-800  focus:outline-none focus:ring-2 focus:ring-blue-500  shadow-md shadow-blue-900   bg-gradient-to-br from-black via-black to-blue-950 rounded-lg hover:shadow-lg hover:shadow-blue-500 trasistion duration-200 ease-linear placeholder:text-sky-600 placeholder:italic text-sky-400 "
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-black via-blue-950 shadow-md shadow-blue-900   to-black p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500 trasistion duration-200 ease-linear font-bold text-blue-400"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="text-center mt-4 text-teal-400 font-medium">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
