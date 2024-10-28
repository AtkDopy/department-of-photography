"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/img1.svg";
import img2 from "../assets/gallery/img2.svg";
import img3 from "../assets/gallery/img3.svg";
import img4 from "../assets/gallery/img4.svg";

function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: "Events", link: "/events" },
    { src: img2, alt: "Atmos", link: "/atmos" },
    { src: img3, alt: "Arena", link: "/arena" },
    { src: img4, alt: "Pearl", link: "/pearl" },
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
          style={{ transform: `scale(1.1)` }} // Add a slight zoom effect
        >
          <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <h2 className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white font-bold">{images[currentIndex].alt}</h2>
          </a>
        </motion.div>
      </div>

      <button
        className="mt-12 bg-black text-white font-semibold text-lg lg:text-xl py-4 px-10 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300"
        onClick={() => (window.location.href = "/photogallery")}
      >
        View Full Collection
      </button>
    </section>
  );
}

export default GalleryCarousel;