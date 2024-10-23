import React, { useState } from "react";
// Importing images individually
import img1 from "../assets/photo_gallery/1.jpg";
import img2 from "../assets/photo_gallery/2.JPG";
import img3 from "../assets/photo_gallery/3.jpg";
import img4 from "../assets/photo_gallery/4.jpg";
import img5 from "../assets/photo_gallery/5.jpg";
import img6 from "../assets/photo_gallery/6.JPG";
import img7 from "../assets/photo_gallery/7.JPG";
import img8 from "../assets/photo_gallery/8.jpg";
import img9 from "../assets/photo_gallery/9.jpg";
import img10 from "../assets/photo_gallery/10.JPG";
import img11 from "../assets/photo_gallery/11.jpg";
import img12 from "../assets/photo_gallery/12.jpg";
import img13 from "../assets/photo_gallery/13.jpg";
import img14 from "../assets/photo_gallery/14.jpg";
import img15 from "../assets/photo_gallery/15.jpg";
import img16 from "../assets/photo_gallery/16.jpg";
import img17 from "../assets/photo_gallery/17.jpg";
import img18 from "../assets/photo_gallery/18.jpg";
import img19 from "../assets/photo_gallery/19.jpg";
import img20 from "../assets/photo_gallery/20.jpg";

// Adding them to an array for easier use
const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to open the modal and set the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="atk-div pt-32">

      {/* Centered Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 animate-fadeInUp">
          Explore Our Photo Gallery
        </h1>
        {/* View All Button placed below heading */}
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn">
          View All
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((e, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            onClick={() => openModal(e)} // Set the image when clicked
          >
            <img
              className="w-full h-64 object-cover transition duration-500 ease-in-out cursor-pointer"
              src={e}
              alt={`gallery-img-${index}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the full-size image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeModal} // Close modal on button click
              className="absolute top-0 right-0 mt-4 mr-4 text-white bg-red-500 px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;