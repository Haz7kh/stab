import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";
import useCountUp from "../hooks/useCountUp";

const FunFacts = () => {
  const duration = 3000; // Duration for the count up animation in milliseconds

  const proStaffCount = useCountUp(0, 6800, duration);
  const highQualityCount = useCountUp(0, 9800, duration);
  const happyClientsCount = useCountUp(0, 8800, duration);

  return (
    <section className="bg-dark-grey text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-blue-500 text-4xl">Facts & Numbers </h1>
        <h2 className="text-4xl font-bold mb-6">
          Zilom Mission is to Polish your skill
        </h2>
        <p className="mb-12 text-gray-400">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaChalkboardTeacher className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{proStaffCount}</h4>
            <p className="text-gray-400">Pro Staff</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaBookOpen className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{highQualityCount}</h4>
            <p className="text-gray-400">High Quality</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaUserGraduate className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{happyClientsCount}</h4>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
