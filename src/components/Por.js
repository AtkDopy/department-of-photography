"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import galleryBg from "../assets/gallery/gallerybg.svg";
import img1 from "../assets/por122.jpg";
import img2 from "../assets/por222.JPG";
import img3 from "../assets/por322.png";
import img4 from "../assets/por422.jpg";
import decorativeElement from "../assets/gallery/02.svg";

function Por() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    { img: img1, title: "Gautam Gandhi (StuCCAn)" },
    { img: img2, title: "Rahul Sharma (CoSSAcn)" },
    { img: img3, title: "Atharva Wasade (CoStAAn)" },
    { img: img4, title: "Arunika Srivastava (Design & Media Head)" },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    const interval = setInterval(() => {
      nextSlide();
    }, 4110);

    return () => clearInterval(interval);
  }, [controls, inView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const getDisplayedImages = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    return [
      galleryItems[prevIndex],
      galleryItems[currentIndex],
      galleryItems[nextIndex],
    ];
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const smallSlideStyle = "w-40 h-40 object-cover opacity-75 transform scale-90";
  const centerSlideStyle = "w-64 h-64 object-cover transform scale-105";

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center px-4 lg:px-16 py-10 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src={galleryBg}
        alt="Gallery Background"
      />

      <motion.div
        className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="space-y-4 mb-4 lg:mb-8">
          <motion.h1
            className="font-extrabold text-4xl lg:text-6xl text-gray-800"
            variants={containerVariants}
          >
            Our POR'S
          </motion.h1>
        </div>

        {/* Carousel Slides */}
        <motion.div className="relative w-full max-w-2xl flex justify-center items-center">
          {/* Left/Back Image */}
          <motion.div
            key={`prev-${getDisplayedImages()[0].title}`}
            className={`absolute left-0 ${smallSlideStyle}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={getDisplayedImages()[0].img}
              alt={getDisplayedImages()[0].title}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Center/Main Image */}
          <motion.div
            key={`current-${getDisplayedImages()[1].title}`}
            className={`relative z-10 ${centerSlideStyle}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={getDisplayedImages()[1].img}
              alt={getDisplayedImages()[1].title}
              className="rounded-lg shadow-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {getDisplayedImages()[1].title}
              </h2>
            </div>
          </motion.div>

          {/* Right/Back Image */}
          <motion.div
            key={`next-${getDisplayedImages()[2].title}`}
            className={`absolute right-0 ${smallSlideStyle}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={getDisplayedImages()[2].img}
              alt={getDisplayedImages()[2].title}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Carousel Navigation */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={prevSlide}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={nextSlide}
        >
          <FaChevronRight size={20} />
        </button>
      </motion.div>

      <motion.img
        src={decorativeElement}
        alt="Decorative Element"
        className="hidden lg:block absolute top-4 right-4 w-20 lg:w-28"
        variants={containerVariants}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ delay: 0.3 }}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </section>
  );
}

export default Por;