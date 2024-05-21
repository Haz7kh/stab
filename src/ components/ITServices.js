import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";

const itServiceData = [
  {
    title: "Web Development",
    description:
      "Professional web development services to build robust and scalable websites.",
    icon: <FaLaptopCode className="h-12 w-12 mb-4 text-white" />,
  },
  {
    title: "App Development",
    description:
      "Custom mobile app development services for both Android and iOS platforms.",
    icon: <FaMobileAlt className="h-12 w-12 mb-4 text-white" />,
  },
  {
    title: "Backend & Frontend",
    description:
      "Comprehensive backend and frontend development to create seamless applications.",
    icon: <FaServer className="h-12 w-12 mb-4 text-white" />,
  },
  {
    title: "Graphics Design",
    description:
      "Creative graphics design services to make your brand stand out.",
    icon: <FaPaintBrush className="h-12 w-12 mb-4 text-white" />,
  },
];

const ITServices = () => {
  return (
    <div className="relative p-8 min-h-screen overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white">IT Services</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {itServiceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-teal-600 text-white rounded-lg shadow-lg overflow-hidden p-6 transform transition duration-500 hover:scale-105 hover:bg-teal-700"
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITServices;
