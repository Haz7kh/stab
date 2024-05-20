import React from "react";
import heroImage from "../assets/images/1.jpg";
import logo from "../assets/images/logol.svg";

import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="Animated Logo"
          className="h-16 mb-4 animated-logo"
        />
        <h1 className="text-white text-5xl font-bold text-center">
          Innovative Solutions for Your Business
        </h1>
        <TypingEffect
          text="We provide top-notch services to help you grow."
          speed={50}
          eraseDelay={2000}
          className="text-white text-xl mt-4 text-center"
        />
        <a
          href="#learn-more"
          className="mt-8 bg-teal text-white px-4 py-2 rounded"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
