import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeDropdown = () => setIsDropdownOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex fixed w-full z-50 bg-white shadow-md items-center justify-between pb-4 md:pt-4 pt-8 md:px-4 sm:px-6 px-12 transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <img className="sm:w-28 w-24" src={logo} alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <div className="font-bold text-xl md:text-lg flex gap-8 md:gap-4 text-black">
        <Link to="/booking" className="hover:text-gray-600 transition-colors duration-200">
          BOOKING
        </Link>
        <Link to="/photogallery" className="hover:text-gray-600 transition-colors duration-200">
          GALLERY
        </Link>
        <Link to="/events" className="hover:text-gray-600 transition-colors duration-200">
          EVENTS
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center hover:text-gray-600 transition-colors duration-200"
            onClick={toggleDropdown}
          >
            FESTS <MdOutlineKeyboardArrowDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200">
              <Link
                to="/atmos"
                className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                onClick={closeDropdown}
              >
                ATMOS
              </Link>
              <Link
                to="/arena"
                className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                onClick={closeDropdown}
              >
                ARENA
              </Link>
              <Link
                to="/pearl"
                className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                onClick={closeDropdown}
              >
                PEARL
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* "Let's Connect" Button */}
      <div>
        <button
          className="font-bold text-xl lg:text-sm border-black border-2 py-2 px-4 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
          onClick={() => window.location.href = 'https://www.instagram.com/dopy.bitshyd?igsh=cjNuMmlwbXg2aXFv'}
        >
          LET'S CONNECT
        </button>
      </div>
    </div>
  );
}

export default Navbar;