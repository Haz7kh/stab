import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logol.svg"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="h-16" />{" "}
          {/* Adjust the size as needed */}
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl mb-4">
            Stay up-to-date with the latest releases.
          </h3>
          <form className="flex justify-center md:justify-end items-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-full bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-full"
            >
              <FaTimes />
            </button>
          </form>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-xl" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <FaTimes className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">&copy; 2024 Stockholm T AB</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/docs" className="text-gray-500">
            Docs
          </Link>
          <Link to="/help" className="text-gray-500">
            Help Center
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
