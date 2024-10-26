import React, { useState } from "react";
import emailjs from "emailjs-com";

function BookingForm() {
  const [formData, setFormData] = useState({
    clubName: "",
    pocName: "",
    time: "",
    venue: "",
    contact: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Configure EmailJS service
    emailjs
      .send(
        'service_dmazalb', // Replace with EmailJS service ID
        'template_ctiy3vk', // Replace with EmailJS template ID
        formData,
        '2RBG77ty7GlIzj1OG' // Replace with EmailJS user ID
      )
      .then(
        (result) => {
          alert("Booking request sent successfully!");
          setFormData({
            clubName: "",
            pocName: "",
            time: "",
            venue: "",
            contact: "",
            eventDescription: "",
          });
        },
        (error) => {
          alert("Failed to send the booking request. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
       
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full animate-fadeIn space-y-4"
        onSubmit={handleSubmit}
      >
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Reserve Our Photography Services for Your Event
        </h2>
        <input
          type="text"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          placeholder="Club Name"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="pocName"
          value={formData.pocName}
          onChange={handleChange}
          placeholder="POC Name"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact No."
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          placeholder="Event Description"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 h-24"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg p-3 hover:shadow-lg hover:scale-105 transform transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;