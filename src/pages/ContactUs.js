import React from "react";
import heroImage from "../assets/images/1.jpg";
const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-48 sm:h-64 md:h-80 lg:h-100 bg-cover bg-center text-white" // Adjust heights for different screen sizes
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInDown">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mt-4 text-center animate__animated animate__fadeInUp">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-around w-full mb-12">
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-4xl text-blue-500">
                <i className="fas fa-phone-alt"></i> {/* Add your phone icon */}
              </div>
              <div>
                <p className="font-bold">92 666 888 000</p>
                <p className="text-gray-600">Call Anytime</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="text-4xl text-blue-500">
                <i className="fas fa-envelope"></i> {/* Add your email icon */}
              </div>
              <div>
                <p className="font-bold">contact@example.com</p>
                <p className="text-gray-600">Send Email</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-4xl text-blue-500">
                <i className="fas fa-map-marker-alt"></i>{" "}
                {/* Add your address icon */}
              </div>
              <div>
                <p className="font-bold">88 Brooklyn Street, USA</p>
                <p className="text-gray-600">Address</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <p className="text-gray-600 mb-4">
                We Always Ready to Hear From You
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  <i className="fab fa-pinterest-p text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Write message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full md:w-auto"
                >
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Suggested Section: Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Our Location</h2>
          <p className="text-gray-600 mb-8">Find us on the map below:</p>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086650180181!2d-122.41941548468122!3d37.77492927975833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cf1d17d3%3A0xebb0a10e2f4f147b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1622078987845!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
