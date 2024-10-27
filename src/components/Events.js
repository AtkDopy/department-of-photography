import React from "react";
import img1 from "../assets/photo_gallery/1.JPG";
import img6 from "../assets/photo_gallery/6.jpg";
import img11 from "../assets/photo_gallery/11.jpg";
import img16 from "../assets/photo_gallery/16.jpg";

// Define sections with titles, images, and unique links
const sections = [
  { title: "Events", link: "/events", image: img1 },
  { title: "Nature", link: "/nature", image: img6 },
  { title: "Architecture", link: "/architecture", image: img11 },
  { title: "Miscellaneous", link: "/miscellaneous", image: img16 },
];

function NavigationPage() {
  const navigateToLink = (link) => {
    window.location.href = link; // Navigate to the specified link
  };

  return (
    <div className="atk-div pt-32">
      {/* Main Title and Subheading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Events</h1>
        <p className="text-lg text-gray-600">Explore our diverse range of events covered and moments captured in each.</p>
      </div>

      {/* Section images with title overlay */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => navigateToLink(section.link)}
            className="relative w-80 h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            {/* Section image with gradient overlay */}
            <img
              className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:brightness-75"
              src={section.image}
              alt={`${section.title}-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-wide">
                {section.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationPage;