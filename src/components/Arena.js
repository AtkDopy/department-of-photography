import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../assets/arena/1.jpg";
import img2 from "../assets/arena/2.JPG";
import img3 from "../assets/arena/3.JPG";
import img4 from "../assets/arena/4.jpg";
import img5 from "../assets/arena/5.JPG";
import img6 from "../assets/arena/6.JPG";
import img7 from "../assets/arena/7.JPG";
import img8 from "../assets/arena/8.jpg";
import img9 from "../assets/arena/9.JPG";
import img10 from "../assets/arena/10.JPG";
import img11 from "../assets/arena/11.JPG";
import img12 from "../assets/arena/12.jpg";
import img13 from "../assets/arena/13.JPG";
import img14 from "../assets/arena/14.JPG";
import img15 from "../assets/arena/15.JPG";
import img16 from "../assets/arena/16.JPG";
import img17 from "../assets/arena/17.JPG";
import img18 from "../assets/arena/18.jpg";
import img19 from "../assets/arena/19.JPG";
import img20 from "../assets/arena/20.JPG";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

function Arena() {
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
          Arena
        </h1>
        <p className="text-lg text-gray-600 animate-fadeInUp">
          Sports Fest of BITS Hyderabad
        </p>
        <Link to="https://drive.google.com/drive/folders/1VK6-v9q8RC-9dY83TSx99_XiITCjBKuM?usp=sharing">
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

export default Arena;