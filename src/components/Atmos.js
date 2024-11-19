import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../assets/atmos/img1.JPG";
import img2 from "../assets/atmos/img2.jpg";
import img3 from "../assets/atmos/img3.JPG";
import img4 from "../assets/atmos/img4.JPG";
import img5 from "../assets/atmos/img5.jpg";
import img6 from "../assets/atmos/img6.jpg";
import img7 from "../assets/atmos/img7.JPG";
import img8 from "../assets/atmos/img8.jpg";
import img9 from "../assets/atmos/img9.jpg";
import img10 from "../assets/atmos/img10.jpg";
import img11 from "../assets/atmos/img11.jpg";
import img12 from "../assets/atmos/img12.jpg";
import img13 from "../assets/atmos/img13.JPG";
import img14 from "../assets/atmos/img14.JPG";
import img15 from "../assets/atmos/img15.jpg";
import img16 from "../assets/atmos/img16.JPG";
import img17 from "../assets/atmos/img17.jpg";
import img18 from "../assets/atmos/img18.jpg";
import img19 from "../assets/atmos/img19.jpg";
import img20 from "../assets/atmos/img20.JPG";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

function Atmos() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="atk-div pt-32">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 animate-fadeInUp">
          Atmos
        </h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">
          Technical Fest of BITS Hyderabad
        </p>
        <Link to="https://drive.google.com/drive/folders/1PPPodjCBVn7Ht-s7pv5c6UuxMGcCDyQ6">
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn">
            View All
          </button>
        </Link>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((e, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            onClick={() => openModal(e)}
          >
            <img
              className="w-full h-80 object-cover transition duration-500 ease-in-out cursor-pointer" // Increased height to h-80
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
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-3xl max-h-screen object-contain" // Sets a max width for larger display
            />
            <button
              onClick={closeModal}
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

export default Atmos;