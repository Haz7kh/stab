import React from "react";
import heroImage from "../assets/images/1.jpg";
import logo from "../assets/images/logol.svg";
import { Link } from "react-router-dom";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section
      className="relative h-48 sm:h-80 md:h-90 lg:h-100 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
        <img
          src={logo}
          alt="Animated Logo"
          className="h-12 sm:h-16 mb-4 animated-logo" // Adjust height for responsiveness
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Innovativa lösningar för ditt företag
        </h1>
        <TypingEffect
          text="Vi erbjuder förstklassiga tjänster för att hjälpa er växa."
          speed={50}
          eraseDelay={2000}
          className="text-white text-sm sm:text-lg md:text-xl mt-4 text-center"
        />
        <a
          href="#learn-more"
          className="mt-8 bg-teal text-white px-4 py-2 rounded"
        >
          <Link to="/about">Läs mer</Link>
        </a>
      </div>
    </section>
  );
};

export default Hero;
