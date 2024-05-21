import React from "react";
import {
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import heroImage from "../assets/images/1.jpg";
import "animate.css";
import Typing from "react-typing-effect";
import teamImage1 from "../assets/images/porfile.jpeg";
import teamImage2 from "../assets/images/porfile.jpeg";

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative h-48 sm:h-64 md:h-80 lg:h-100 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
            About Us
          </h1>
          <Typing
            text="Läs mer om vår mission och våra värderingar"
            speed={50}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className="text-xl mt-4 text-center animate__animated animate__fadeInUp"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
            Vår Mission
          </h2>
          <p className="text-gray-600 mb-8 animate__animated animate__fadeIn">
            Vår mission är att vara en ledande partner för våra kunder genom att
            erbjuda innovativa och kvalitativa lösningar som driver deras
            framgång. Vi strävar efter att skapa långsiktiga relationer baserade
            på förtroende, transparens och resultat. Genom att fokusera på
            kundernas behov och kontinuerligt förbättra våra tjänster, arbetar
            vi för att överträffa förväntningarna och bidra till en positiv och
            hållbar utveckling för alla inblandade.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Vi tror på kraften i innovation för att skapa värde och
                överträffa våra kunders förväntningar genom att ständigt
                utforska nya idéer och teknologier.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Engagemang</h3>
              <p className="text-gray-600">
                Vi är djupt engagerade i att leverera högsta kvalitet och
                överträffa våra kunders förväntningar genom varje projekt vi tar
                oss an.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellens</h3>
              <p className="text-gray-600">
                Vi strävar efter excellens i allt vi gör, genom att ständigt
                förbättra våra processer och leverera resultat som överträffar
                förväntningarna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 p-4 animate__animated animate__fadeInUp">
              <img
                src={teamImage1}
                alt="Team Member 1"
                className="h-40 w-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">TROY GRAY</h3>
              <p className="text-gray-600">CEO / FOUNDER</p>
              <div className="flex justify-center space-x-4 mt-4">
                <FaFacebook className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                <FaInstagram className="h-6 w-6 text-gray-600 hover:text-pink-600" />

                <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-blue-700" />
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4 animate__animated animate__fadeInUp">
              <img
                src={teamImage2}
                alt="Team Member 2"
                className="h-40 w-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">RICHY LACE</h3>
              <p className="text-gray-600">MARKETING DIRECTOR</p>
              <div className="flex justify-center space-x-4 mt-4">
                <FaFacebook className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                <FaInstagram className="h-6 w-6 text-gray-600 hover:text-pink-600" />

                <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
