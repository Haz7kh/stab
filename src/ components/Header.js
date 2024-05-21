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
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleQuoteForm = () => setQuoteFormOpen(!quoteFormOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const closeServices = () => setServicesOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setQuoteFormOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center p-4 relative z-50 shadow-lg">
      <Link to="/" onClick={closeMenu}>
        <img src="/logol.svg" alt="Logo" className="h-12 md:h-16" />
      </Link>
      <nav className="hidden md:flex space-x-4 text-white">
        <Link to="/" onClick={closeMenu} className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" onClick={closeMenu} className="hover:text-gray-300">
          About Us
        </Link>
        <div className="relative">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 focus:outline-none hover:text-gray-300"
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
        <Link
          to="/projects"
          onClick={closeMenu}
          className="hover:text-gray-300"
        >
          Projects
        </Link>
        <Link to="/blog" onClick={closeMenu} className="hover:text-gray-300">
          Blog
        </Link>
        <Link to="/contact" onClick={closeMenu} className="hover:text-gray-300">
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
        <Link to="/" onClick={toggleMenu} className="mt-8 hover:text-gray-300">
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="mt-8 hover:text-gray-300"
        >
          About Us
        </Link>
        <div className="relative mt-8">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 focus:outline-none hover:text-gray-300"
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
        <Link
          to="/projects"
          onClick={toggleMenu}
          className="mt-8 hover:text-gray-300"
        >
          Projects
        </Link>
        <Link
          to="/blog"
          onClick={toggleMenu}
          className="mt-8 hover:text-gray-300"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="mt-8 hover:text-gray-300"
        >
          Contact Us
        </Link>
      </nav>
      <button
        onClick={toggleQuoteForm}
        className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      >
        Få ett citat
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 transition-opacity duration-300 ${
          quoteFormOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleQuoteForm}
      >
        <div
          className={`bg-white bg-opacity-75 p-8 rounded shadow-lg relative bg-gradient-to-tr from-white to-gray-200 transform transition-transform duration-300 ${
            quoteFormOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ marginTop: "100px", width: "90%", maxWidth: "500px" }} // Adjust the margin to position under the button
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleQuoteForm}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-2xl mb-4">Få ett citat</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Namn</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">E-post</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Organisations-nr</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Meddelande</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Skicka
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
