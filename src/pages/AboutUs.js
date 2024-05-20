import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="p-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-navy text-3xl font-bold">Who We Are</h2>
          <p className="text-dark-grey mt-4">
            Brief description of the company, its mission, and values.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/path-to-team-image.jpg" alt="Team" className="rounded" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
