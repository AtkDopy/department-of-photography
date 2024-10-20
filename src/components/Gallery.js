"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images
import galleryBg from "../assets/gallery/gallerybg.svg";
import img1 from "../assets/gallery/img1.svg";
import img2 from "../assets/gallery/img2.svg";
import img3 from "../assets/gallery/img3.svg";
import img4 from "../assets/gallery/img4.svg";
import decorativeElement from "../assets/gallery/02.svg";

function Gallery() {
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

  return (
    <section ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-20 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
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
        <div className="space-y-4 lg:space-y-2 mb-8 lg:mb-16">
          <motion.h1
            className="font-extrabold text-4xl lg:text-6xl text-gray-800"
            variants={itemVariants}
          >
            A COLLECTION OF THE
          </motion.h1>
          <motion.h1
            className="font-extrabold text-4xl lg:text-6xl text-gray-800"
            variants={itemVariants}
          >
            STORIES WE'VE TOLD,
          </motion.h1>
          <motion.h1
            className="font-extrabold text-4xl lg:text-6xl text-gray-800"
            variants={itemVariants}
          >
            ONE CLICK AT A TIME.
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-16"
          variants={itemVariants}
        >
          Every shot we take tells a story worth sharing.
        </motion.p>

        {/* Action Button */}
        <motion.button
  className="bg-black text-white font-semibold text-lg lg:text-xl py-4 px-10 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300" // Adjusted padding
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = 'https://your-link.com'} // Update with your actual link
>
  View Our Entire Collection
</motion.button>
      </motion.div>

      {/* Decorative Element - Visible on Large Screens */}
      <motion.img
        src={decorativeElement}
        alt="Decorative Element"
        className="hidden lg:block absolute top-10 right-10 w-24 lg:w-32"
        variants={itemVariants}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ delay: 0.3 }}
      />

      {/* Gallery Images */}
      <motion.div
        className="relative z-10 mt-12 lg:mt-20 w-full max-w-7xl px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Desktop/Laptop View: Centered Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {/* Image 1 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="lg:hidden flex space-x-4 overflow-x-auto pb-4">
          {/* Image 1 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
   
        <div className="lg:hidden flex space-x-4 overflow-x-auto pb-4">
          {/* Image 1 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="lg:hidden flex space-x-4 overflow-x-auto pb-4">
          {/* Image 1 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="flex-shrink-0 w-64 h-48 overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <img
              src={img4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Gallery;