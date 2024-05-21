import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaRocket,
  FaTruck,
  FaCalculator,
  FaUserFriends,
} from "react-icons/fa"; // Import icons
import serviceData from "../data/services.json";

const iconMap = {
  "Redovisning & Bokföring": <FaBook className="h-12 w-12 mb-4 text-white" />,
  Startup: <FaRocket className="h-12 w-12 mb-4 text-white" />,
  "Transport- och taxitillstånd": (
    <FaTruck className="h-12 w-12 mb-4 text-white" />
  ),
  Skatteplanering: <FaCalculator className="h-12 w-12 mb-4 text-white" />,
  "Ansökningar för utländska anställda och familjeåterförening": (
    <FaUserFriends className="h-12 w-12 mb-4 text-white" />
  ),
};

const AccountingServices = () => {
  return (
    <div className="relative p-8 min-h-screen overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Accounting Services
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-teal-600 text-white rounded-lg shadow-lg overflow-hidden p-6 transform transition duration-500 hover:scale-105 hover:bg-teal-700"
              whileHover={{ scale: 1.05 }}
            >
              {iconMap[service.title]}
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountingServices;
