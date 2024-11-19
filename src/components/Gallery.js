"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/events/FreshersFair.jpg";
import img2 from "../assets/atmos/img9.jpg";
import img3 from "../assets/arena/9.JPG";
import img4 from "../assets/pearl/1.jpg";

function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: "Explore Events", link: "/events" },
    { src: img2, alt: "Explore Atmos", link: "/atmos" },
    { src: img3, alt: "Explore Arena", link: "/arena" },
    { src: img4, alt: "Explore Pearl", link: "/pearl" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-20 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      <div className="relative z-10 mb-12 text-center">
        <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-800">
          Our Stunning Gallery
        </h1>
        <p className="mt-4 text-lg lg:text-xl text-gray-600">
          Explore the stories we capture, one image at a time.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-5xl">
        <motion.div
          className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg"
          style={{ transform: `scale(1.1)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl lg:text-4xl font-bold text-white bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out">
              {images[currentIndex].alt}
            </h2>
          </a>
        </motion.div>
      </div>

      <button
        className="mt-12 bg-black text-white font-semibold text-lg lg:text-xl py-4 px-10 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300"
        onClick={() => (window.location.href = "/photogallery")}
      >
        View Gallery
      </button>
    </section>
  );
}

export default GalleryCarousel;
