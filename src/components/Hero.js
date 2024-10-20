"use client";
import React, { useState, useEffect } from "react";
import heading from "../assets/heading.png";
import s1p1 from "../assets/s1p1.svg";
import s1p2 from "../assets/s1p2.svg";
import tape1 from "../assets/tape1.svg";
import tape2 from "../assets/tape2.svg";

// Import background img
import sliderBg1 from "../assets/slider1.png";
import sliderBg2 from "../assets/slider2.jpg";
import sliderBg3 from "../assets/slider3.JPG";

function Hero() {
  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background Images Array
  const backgroundImages = [sliderBg1, sliderBg2, sliderBg3];

  // State to track current background image index
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // List of images for the carousel
  const images = [
    { src: s1p1, alt: "Slide 1", animation: "animate-slideInRight" },
    { src: s1p2, alt: "Slide 2", animation: "animate-slideInDown" },
  ];

  // Change carousel image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Change background image every 5 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // 5 seconds
    return () => clearInterval(bgInterval); // Cleanup on component unmount
  }, [backgroundImages.length]);

  return (
    <div className="px-16 pb-12 flex pt-28 sm:gap-4 flex-col items-center justify-center">
      
      {/* Heading Image with Fade-in Animation */}
      <div className="w-[90vw] flex justify-start">
        <img
          className="w-[40rem] animate-fadeIn opacity-0 transition-opacity duration-1000"
          src={heading}
          alt="Heading"
        />
      </div>

      {/* Carousel and Tapes */}
      <div
        id="slider1"
        className="relative flex items-end w-[90vw]"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          aspectRatio: "2 / 1",
          boxShadow: "-15px 15px 0px #83b5b9",
          transition: "background-image 1s ease-in-out", // Smooth transition
        }}
      >
        
        {/* Tape 1 with Slide-in from Left Animation */}
    

        {/* Tape 2 with Slide-in from Right Animation */}
       

        {/* Carousel Image */}
       

        {/* Text Section */}
        <div className="tracking-widestid pb-12 sm:pl-6 pl-12 sm:pb-6 flex gap-2 flex-col text-white">
          

          {/* Main Text with Scale-on-Hover */}
          <h1 className="text-6xl md:text-3xl font-semibold transition-transform duration-300 hover:scale-105">
            Every shot tells a
          </h1>
          <h1 className="text-6xl md:text-3xl font-semibold transition-transform duration-300 hover:scale-105">
            timeless story.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
