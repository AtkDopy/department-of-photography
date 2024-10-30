// archive.js
import React from "react";
import img1 from "../assets/archive/pearl.JPG";
import img2 from "../assets/archive/arena.jpg";
import img3 from "../assets/archive/atmos.jpg";
import img4 from "../assets/archive/orbenovo.png";

// Define sections by year, each with up to 3 events
const sectionsByYear = [
  {
    year: "2022 - 23",
    events: [
      {
        title: "Pearl 23",
        link: "https://drive.google.com/file/d/1fSiNMa0G_c1kgHOXC40CN20N4KyNUo1c",
        image: img1,
      },
      {
        title: "Arena 23",
        link: "https://drive.google.com/file/d/10wxt17nlk56KzmofY9KOHg_18EI5fFBf",
        image: img2,
      },
      {
        title: "Atmos 22",
        link: "https://drive.google.com/file/d/1cASgexszwvKi9eO-lWKwyYw1xC_idKfp",
        image: img3,
      },
    ],
  },
  {
    year: "2021 - 22",
    events: [
      {
        title: "Orbenovo",
        link: "https://drive.google.com/file/d/10UALPps8HQYd0oQ7umboQQAKtY9K-dRm",
        image: img4,
      },
    ],
  },
];

const EventCard = ({ event, onClick }) => (
  <div
    onClick={onClick}
    className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="relative h-80">
      {/* Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={event.image}
        alt={`${event.title}-cover`}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
      
      {/* Event Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
        <div className="w-12 h-1 bg-blue-500 rounded transform transition-all duration-300 group-hover:w-24" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </div>
);

const YearSection = ({ section }) => (
  <div className="relative mb-24">
    {/* Year indicator with decorative elements */}
    <div className="flex items-center mb-12">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow" />
      <div className="mx-8 bg-white px-8 py-3 rounded-full shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">{section.year}</h2>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow" />
    </div>

    {/* Events Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {section.events.map((event, eventIndex) => (
        <EventCard
          key={eventIndex}
          event={event}
          onClick={() => window.location.href = event.link}
        />
      ))}
    </div>
  </div>
);

const NavigationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
  <h1 className="text-6xl font-bold text-blue-600">
    Archive
  </h1>
  <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
    Journey through our memorable fests and events throughout the years
  </p>
</div>
      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto px-4">
        {sectionsByYear.map((section, yearIndex) => (
          <YearSection key={yearIndex} section={section} />
        ))}
      </div>
    </div>
  );
};

export default NavigationPage;
