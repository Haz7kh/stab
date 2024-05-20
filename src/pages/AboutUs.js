import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import heroImage from "../assets/images/1.jpg";
import "animate.css";
import Typing from "react-typing-effect";

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center text-white"
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
            text="Learn more about our mission and values"
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
            Our Mission
          </h2>
          <p className="text-gray-600 mb-8 animate__animated animate__fadeIn">
            Our mission is to provide top-notch services to help you grow and
            succeed in your endeavors. We believe in innovation, dedication, and
            excellence.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly strive to innovate and improve our services to
                meet the needs of our clients.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p className="text-gray-600">
                Our team is dedicated to providing the best possible service and
                support to our clients.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <FaCheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring the
                highest quality standards are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
            Join Our Team
          </h2>
          <p className="text-gray-600 mb-8 animate__animated animate__fadeIn">
            We're always looking for talented individuals to join our growing
            team. Check out our current openings and apply today!
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                <p className="text-gray-600">Location: Remote</p>
                <p className="text-gray-600">
                  We are looking for a skilled software engineer to join our
                  development team. Apply now!
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Product Manager</h3>
                <p className="text-gray-600">Location: Remote</p>
                <p className="text-gray-600">
                  We are seeking a product manager to lead our product
                  development initiatives. Apply today!
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 animate__animated animate__fadeInUp">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">UX/UI Designer</h3>
                <p className="text-gray-600">Location: Remote</p>
                <p className="text-gray-600">
                  Join our team as a UX/UI designer and help us create stunning
                  user experiences. Apply now!
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
