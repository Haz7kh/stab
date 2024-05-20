import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="p-8 bg-light-grey">
      <div className="container mx-auto">
        <h2 className="text-navy text-3xl font-bold text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row mt-8">
          <form className="md:w-1/2 bg-white p-4 rounded shadow">
            <div className="mb-4">
              <label className="block text-dark-grey mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark-grey mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark-grey mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                id="subject"
                name="subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark-grey mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border rounded"
                id="message"
                name="message"
              ></textarea>
            </div>
            <button className="bg-teal text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-navy text-xl font-bold">Contact Details</h3>
            <p className="text-dark-grey mt-2">
              Company address, phone number, and email.
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.776435657582!2d-122.08424968469244!3d37.42199987982595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f5c7d1d9b9%3A0x2e8f2764bd3b3e72!2sGoogleplex!5e0!3m2!1sen!2sus!4v1549282721495"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
