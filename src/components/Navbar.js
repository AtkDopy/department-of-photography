import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img className="w-20 sm:w-24" src={logo} alt="Logo" />
        </Link>

        {/* Navigation Links - Visible on mobile, hidden on desktop */}
        <div className="flex md:hidden font-medium text-base lg:text-lg gap-3 md:gap-6 text-black">
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
              <div className="absolute bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-32">
                <Link
                  to="/atmos"
                  className="block px-4 py-2 text-sm hover:bg-gray-200 transition-colors duration-200 rounded-md"
                  onClick={closeDropdown}
                >
                  ATMOS
                </Link>
                <Link
                  to="/arena"
                  className="block px-4 py-2 text-sm hover:bg-gray-200 transition-colors duration-200 rounded-md"
                  onClick={closeDropdown}
                >
                  ARENA
                </Link>
                <Link
                  to="/pearl"
                  className="block px-4 py-2 text-sm hover:bg-gray-200 transition-colors duration-200 rounded-md"
                  onClick={closeDropdown}
                >
                  PEARL
                </Link>
              </div>
            )}
          </div>
          <Link to="/booking" className="hover:text-gray-600 transition-colors duration-200">
            EVENT COVERAGE
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Connect Button - Visible on mobile */}
          <a
            href="https://www.instagram.com/dopy.bitshyd?igsh=cjNuMmlwbXg2aXFv"
            className="flex md:hidden font-medium text-sm lg:text-lg border-black border-2 py-2 px-4 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LET'S CONNECT
          </a>
          
          {/* Hamburger Menu Button - Visible on desktop only */}
          <button
            className="hidden md:flex flex-col justify-center items-center gap-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Desktop Menu - Only visible on desktop when menu is open */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 bg-white border-t border-gray-100">
          <Link
            to="/photogallery"
            className="block py-2 text-base font-medium hover:text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/events"
            className="block py-2 text-base font-medium hover:text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EVENTS
          </Link>
          <div className="py-2">
            <button
              className="flex items-center text-base font-medium hover:text-gray-600"
              onClick={toggleDropdown}
            >
              FESTS <MdOutlineKeyboardArrowDown />
            </button>
            <div className={`pl-4 mt-1 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <Link
                to="/atmos"
                className="block py-1 hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ATMOS
              </Link>
              <Link
                to="/arena"
                className="block py-1 hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ARENA
              </Link>
              <Link
                to="/pearl"
                className="block py-1 hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PEARL
              </Link>
            </div>
          </div>
          <Link
            to="/booking"
            className="block py-2 text-base font-medium hover:text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EVENT COVERAGE
          </Link>
          <a
            href="https://www.instagram.com/dopy.bitshyd?igsh=cjNuMmlwbXg2aXFv"
            className="block py-2 text-base font-medium hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LET'S CONNECT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;