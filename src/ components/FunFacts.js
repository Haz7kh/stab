import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";
import useCountUp from "../hooks/useCountUp";

const FunFacts = () => {
  const duration = 3000; // Duration for the count up animation in milliseconds

  const proStaffCount = useCountUp(0, 10, duration);
  const highQualityCount = useCountUp(0, 100, duration);
  const happyClientsCount = useCountUp(0, 100, duration);

  return (
    <section className="bg-dark-grey text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-blue-500 text-4xl">Fakta & Siffror</h1>

        <p className="mb-12 text-gray-400">
          Utforska viktiga fakta och siffror om vårt företag och våra tjänster.
          Vi erbjuder en översikt av vår tillväxt, prestationer och nyckeltal
          som visar vårt engagemang för kvalitet och kundnöjdhet.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaChalkboardTeacher className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{proStaffCount}</h4>
            <p className="text-gray-400">Pro personal</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaBookOpen className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{highQualityCount}</h4>
            <p className="text-gray-400">Hög kvalitet</p>
          </div>
          <div className="bg-black rounded-lg p-8 flex flex-col items-center">
            <FaUserGraduate className="h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-3xl font-bold">{happyClientsCount}</h4>
            <p className="text-gray-400">Nöjda kunder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
