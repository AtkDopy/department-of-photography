"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images
import galleryBg from "../assets/gallery/gallerybg.svg";
import img1 from "../assets/por122.jpg";
import img2 from "../assets/por222.JPG";
import img3 from "../assets/por322.png";
import img4 from "../assets/por422.jpg";
import decorativeElement from "../assets/gallery/02.svg";

function Por() {
  // Intersection Observer for triggering animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 }, // Adjusted for right placement
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Data Array with Updated Titles
  const galleryItems = [
    { img: img1, title: "Gautam Gandhi (StuCCAn)" },
    { img: img2, title: "Rahul Sharma (CoSSAcn)" },
    { img: img3, title: "Atharva Wasade (CoStAAn)" },
    { img: img4, title: "Arunika Srivastava (Design & Media Head)" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center px-4 lg:px-16 py-10 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src={galleryBg}
        alt="Gallery Background"
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Heading Section */}
        <div className="space-y-4 lg:space-y-2 mb-4 lg:mb-8">
          <motion.h1
            className="font-extrabold text-4xl lg:text-6xl text-gray-800"
            variants={cardVariants}
          >
            Our POR'S
          </motion.h1>
        </div>

        {/* Gallery Images */}
        <motion.div
          className="relative z-10 w-full max-w-7xl px-4 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Desktop/Laptop View: Grid Layout with Cards */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {/* Image Cards */}
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                variants={cardVariants}
              >
                <img
                  src={item.img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-80 object-cover" // Adjusted height for consistency
                  loading="lazy"
                />
                <div className="p-6"> {/* Increased padding for balance */}
                  <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View: Horizontal Scroll with Cards */}
          <div className="lg:hidden flex space-x-6 overflow-x-auto pb-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden w-64"
                variants={cardVariants}
              >
                <img
                  src={item.img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Action Button Positioned at Bottom Right */}
      <motion.button
        className="absolute bottom-20 right-6 z-20 bg-black text-white font-semibold text-lg lg:text-xl py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        variants={buttonVariants}
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("https://your-link.com", "_blank")} // Open the link in a new tab
      >
        View Past POR's
      </motion.button>

      {/* Decorative Element - Visible on Large Screens */}
      <motion.img
        src={decorativeElement}
        alt="Decorative Element"
        className="hidden lg:block absolute top-4 right-4 w-20 lg:w-28"
        variants={cardVariants}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ delay: 0.3 }}
      />
    </section>
  );
}

export default Por;