import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";

const FunFacts = () => {
  return (
    <section className="bg-dark-grey text-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-blue-500">Facts & Numbers </h3>
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
            <h4 className="text-3xl font-bold">6,800</h4>
            <p className="text-gray-400">Pro Staff</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaBookOpen className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">9,800</h4>
            <p className="text-gray-400">High Quality</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaUserGraduate className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">8,800</h4>
            <p className="text-gray-400">Happy clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
