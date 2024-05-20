import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <form className="flex flex-col md:flex-row items-center">
            <label className="block mb-2 md:mb-0 md:mr-2" htmlFor="newsletter">
              Newsletter Signup
            </label>
            <input
              className="p-2 border rounded mb-2 md:mb-0 md:mr-2"
              type="email"
              id="newsletter"
              name="newsletter"
              placeholder="Your email"
            />
            <button className="bg-orange text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© 2024 [Company Name]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
