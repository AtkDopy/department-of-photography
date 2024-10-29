import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-md mt-auto">
      <div className="container mx-auto py-4 px-8">
        <p className="text-center text-black font-medium text-sm md:text-base">
          Copyright © DoPY BITS Pilani Hyderabad Campus {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;