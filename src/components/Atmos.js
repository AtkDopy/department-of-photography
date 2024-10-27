import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../assets/atmos/1.jpg";
import img2 from "../assets/atmos/2.JPG";
import img3 from "../assets/atmos/3.jpg";
import img4 from "../assets/atmos/4.jpg";
import img5 from "../assets/atmos/5.jpg";
import img6 from "../assets/atmos/6.jpg";
import img7 from "../assets/atmos/7.jpg";
import img8 from "../assets/atmos/8.jpg";
import img9 from "../assets/atmos/9.JPG";
import img10 from "../assets/atmos/10.JPG";
import img11 from "../assets/atmos/11.JPG";
import img12 from "../assets/atmos/12.jpg";
import img13 from "../assets/atmos/13.jpg";
import img14 from "../assets/atmos/14.JPG";
import img15 from "../assets/atmos/15.JPG";
import img16 from "../assets/atmos/16.jpg";
import img17 from "../assets/atmos/17.JPG";
import img18 from "../assets/atmos/18.JPG";
import img19 from "../assets/atmos/19.jpg";
import img20 from "../assets/atmos/20.jpg";

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
        <Link to="https://drive.google.com/drive/folders/15UsgTnBFnIBCU9l7Q_G4LWe2LDEGSh9H?usp=sharing">
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