"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/gallery/img1.svg";
import img2 from "../assets/gallery/img2.svg";
import img3 from "../assets/gallery/img3.svg";
import img4 from "../assets/gallery/img4.svg";
//import img5 from "../assets/gallery/img5.svg"; // Added extra img to make the gallery more dynamic
//import img6 from "../assets/gallery/img6.svg";

function Gallery() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const images = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img2, alt: "Gallery Image 5" },
    { src: img4, alt: "Gallery Image 6" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-20 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Gallery Heading */}
      <motion.div
        className="relative z-10 mb-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="font-extrabold text-4xl lg:text-6xl text-gray-800"
          variants={itemVariants}
        >
          Our Stunning Gallery
        </motion.h1>
        <motion.p
          className="mt-4 text-lg lg:text-xl text-gray-600"
          variants={itemVariants}
        >
          Explore the stories we capture, one image at a time.
        </motion.p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group w-full"
            variants={itemVariants}
          >
            <div className="relative w-full h-64 lg:h-96">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-12 bg-black text-white font-semibold text-lg lg:text-xl py-4 px-10 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/photogallery'}
      >
        View Full Collection
      </motion.button>
    </section>
  );
}

export default Gallery;
