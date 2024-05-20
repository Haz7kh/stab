import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logol.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-navy flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="h-8" />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-white focus:outline-none"
        >
          <svg
            className={`h-8 w-8 transition-transform transform ${
              menuOpen ? "rotate-45" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex justify-end w-full md:w-auto mt-2 md:mt-0">
        <Link to="/quote" className="bg-orange text-white px-4 py-2 rounded">
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Header;
