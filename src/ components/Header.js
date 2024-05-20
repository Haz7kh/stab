import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const closeServices = () => setServicesOpen(false);

  return (
    <header className="bg-navy flex justify-between items-center p-4 relative z-50">
      <Link to="/" onClick={closeMenu}>
        <img src="/logol.svg" alt="Logo" className="h-12 md:h-16" />{" "}
        {/* Adjusted logo size */}
      </Link>
      <nav className="hidden md:flex space-x-4 text-white">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>
        <div className="relative">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span>Services</span>
            {servicesOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          {servicesOpen && (
            <div className="absolute top-full left-0 bg-gray-800 text-white mt-1 rounded shadow-lg z-50">
              <Link
                to="/services/it"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={closeServices}
              >
                IT Services
              </Link>
              <Link
                to="/services/accounting"
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={closeServices}
              >
                Accounting Services
              </Link>
            </div>
          )}
        </div>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </nav>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white z-50 focus:outline-none"
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <nav
        className={`fixed top-0 right-0 w-1/2 h-full bg-gray-900 text-white flex flex-col items-end p-4 md:hidden z-40 transition-transform duration-300 ${
          menuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <Link to="/" onClick={toggleMenu} className="mt-8">
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu} className="mt-8">
          About Us
        </Link>
        <div className="relative mt-8">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <span>Services</span>
            {servicesOpen ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          {servicesOpen && (
            <div className="bg-gray-800 text-white mt-1 rounded shadow-lg z-50">
              <Link
                to="/services/it"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                IT Services
              </Link>
              <Link
                to="/services/accounting"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Accounting Services
              </Link>
            </div>
          )}
        </div>
        <Link to="/projects" onClick={toggleMenu} className="mt-8">
          Projects
        </Link>
        <Link to="/blog" onClick={toggleMenu} className="mt-8">
          Blog
        </Link>
        <Link to="/contact" onClick={toggleMenu} className="mt-8">
          Contact Us
        </Link>
      </nav>
      <Link
        to="/quote"
        className="hidden md:block bg-orange text-white px-4 py-2 rounded"
      >
        Get a Quote
      </Link>
    </header>
  );
};

export default Header;
