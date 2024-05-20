import React from "react";

const services = [
  {
    icon: "🛠️",
    title: "Consulting",
    description: "Brief description of consulting services.",
  },
  {
    icon: "💻",
    title: "Development",
    description: "Brief description of development services.",
  },
  {
    icon: "🎨",
    title: "Design",
    description: "Brief description of design services.",
  },
  {
    icon: "📈",
    title: "Marketing",
    description: "Brief description of marketing services.",
  },
];

const Services = () => {
  return (
    <section id="services" className="p-8 bg-light-grey">
      <div className="container mx-auto">
        <h2 className="text-navy text-3xl font-bold text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-4 rounded shadow">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-navy text-xl font-bold mt-4">
                {service.title}
              </h3>
              <p className="text-dark-grey mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
