import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import img1 from "../assets/logo.svg";

const Navbar = () => {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDesktopDropdownOpen(false);
    setIsDesktopMenuOpen(false);
    setIsMobileDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const getLinkClass = (path) =>
    location.pathname === path ? "text-blue-500" : "hover:text-gray-600 transition-colors duration-200";

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img className="w-20 sm:w-24" src={img1} alt="Logo" />
        </Link>

        {/* Hamburger Menu Button for Desktop */}
        <button
          className="hidden md:flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isDesktopMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isDesktopMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isDesktopMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-6">
          <Link to="/photogallery" className={getLinkClass("/photogallery")}>
            GALLERY
          </Link>
          <Link to="/archives" className={getLinkClass("/archives")}>
            ARCHIVE
          </Link>
          <Link to="/events" className={getLinkClass("/events")}>
            EVENTS
          </Link>

          {/* Mobile Fests Dropdown */}
          <div className="relative">
            <button
              className="flex items-center font-medium"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              FESTS
              <MdOutlineKeyboardArrowDown className={`ml-1 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-32">
                <Link
                  to="/atmos"
                  className="block py-2 text-sm hover:text-gray-600"
                  onClick={() => setIsMobileDropdownOpen(false)}
                >
                  ATMOS
                </Link>
                <Link
                  to="/arena"
                  className="block py-2 text-sm hover:text-gray-600"
                  onClick={() => setIsMobileDropdownOpen(false)}
                >
                  ARENA
                </Link>
                <Link
                  to="/pearl"
                  className="block py-2 text-sm hover:text-gray-600"
                  onClick={() => setIsMobileDropdownOpen(false)}
                >
                  PEARL
                </Link>
              </div>
            )}
          </div>

          <Link to="/booking" className={getLinkClass("/booking")}>
            EVENT COVERAGE
          </Link>
          <a
            href="https://www.instagram.com/dopy.bitshyd?igsh=cjNuMmlwbXg2aXFv"
            className="font-medium text-sm border-black border-2 py-2 px-4 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            LET'S CONNECT
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className={`hidden md:flex flex-col transition-all duration-300 ease-in-out ${
          isDesktopMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 bg-white border-t border-gray-100">
          <Link
            to="/photogallery"
            className={`block py-2 text-base font-medium ${getLinkClass("/photogallery")}`}
            onClick={() => setIsDesktopMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/archives"
            className={`block py-2 text-base font-medium ${getLinkClass("/archives")}`}
            onClick={() => setIsDesktopMenuOpen(false)}
          >
            ARCHIVE
          </Link>
          <Link
            to="/events"
            className={`block py-2 text-base font-medium ${getLinkClass("/events")}`}
            onClick={() => setIsDesktopMenuOpen(false)}
          >
            EVENTS
          </Link>

          {/* Desktop Fests Dropdown */}
          <div className="py-2">
            <button
              className="flex items-center text-base font-medium w-full justify-between"
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
            >
              FESTS 
              <MdOutlineKeyboardArrowDown className={`ml-1 ${isDesktopDropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
            </button>
            <div className={`pl-4 mt-1 space-y-2 ${isDesktopDropdownOpen ? 'block' : 'hidden'}`}>
              <Link
                to="/atmos"
                className="block py-2 hover:text-gray-600"
                onClick={() => {
                  setIsDesktopDropdownOpen(false);
                  setIsDesktopMenuOpen(false);
                }}
              >
                ATMOS
              </Link>
              <Link
                to="/arena"
                className="block py-2 hover:text-gray-600"
                onClick={() => {
                  setIsDesktopDropdownOpen(false);
                  setIsDesktopMenuOpen(false);
                }}
              >
                ARENA
              </Link>
              <Link
                to="/pearl"
                className="block py-2 hover:text-gray-600"
                onClick={() => {
                  setIsDesktopDropdownOpen(false);
                  setIsDesktopMenuOpen(false);
                }}
              >
                PEARL
              </Link>
            </div>
          </div>

          <Link
            to="/booking"
            className={`block py-2 text-base font-medium ${getLinkClass("/booking")}`}
            onClick={() => setIsDesktopMenuOpen(false)}
          >
            EVENT COVERAGE
          </Link>
          <a
            href="https://www.instagram.com/dopy.bitshyd?igsh=cjNuMmlwbXg2aXFv"
            className="block py-2 text-base font-medium hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsDesktopMenuOpen(false)}
          >
            LET'S CONNECT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;