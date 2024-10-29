import React, { useState } from "react";
import emailjs from "emailjs-com";
import bookingBg from "../assets/booking.jpg";

function BookingForm() {
  const [formData, setFormData] = useState({
    clubName: "",
    pocName: "",
    time: "",
    venue: "",
    contact: "",
    email: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminData = {
      ...formData,
      to_email: "dopy@hyderabad.bits-pilani.ac.in",
    };

    const userConfirmationData = {
      to_name: formData.pocName,
      to_email: formData.email,
      clubName: formData.clubName,
      time: formData.time,
      venue: formData.venue,
      contact: formData.contact,
      eventDescription: formData.eventDescription,
    };

    emailjs
      .send(
        "service_dmazalb", 
        "template_ctiy3vk", 
        adminData,
        "2RBG77ty7GlIzj1OG"
      )
      .then(
        () => {
          emailjs
            .send(
              "service_dmazalb", 
              "template_v710lch", 
              userConfirmationData,
              "2RBG77ty7GlIzj1OG" 
            )
            .then(() => {
              alert("Booking request sent successfully, and confirmation email has been sent!");
              setFormData({
                clubName: "",
                pocName: "",
                time: "",
                venue: "",
                contact: "",
                email: "",
                eventDescription: "",
              });
            })
            .catch(() => alert("Failed to send confirmation email. Please try again."));
        },
        () => alert("Failed to send the booking request. Please try again.")
      );
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-4 sm:p-12"
      style={{
        backgroundImage: `url(${bookingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl max-w-lg w-full animate-fadeIn space-y-5"
        onSubmit={handleSubmit}
      >
        <br />
        
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Request our Photography Coverage for your Event
        </h2>

        <input
          type="text"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          placeholder="Club Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="pocName"
          value={formData.pocName}
          onChange={handleChange}
          placeholder="POC Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        {/* Label for datetime-local input to replace placeholder */}
        <label className="text-gray-600 font-medium block mb-1">Event Date & Time</label>
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact No."
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          placeholder="Event Description"
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-28 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg p-4 hover:shadow-lg hover:scale-105 transform transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;