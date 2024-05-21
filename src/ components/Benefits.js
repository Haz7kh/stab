import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import choose from "../assets/images/choose.jpeg";

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h4 className="text-blue-500 mb-2">Varför välja oss?</h4>
          <h2 className="text-4xl font-bold mb-4">
            Fördelar med att anlita oss
          </h2>
          <p className="text-gray-600 mb-6">
            När du väljer att anlita oss får du mer än bara en tjänst – du får
            en partner som är engagerad i din framgång. Vi kombinerar expertis,
            kvalitet och kundfokus för att leverera resultat som överträffar
            dina förväntningar. Upptäck varför så många väljer oss som deras
            pålitliga leverantör.
          </p>
          <div className="flex items-center mb-4">
            <FaCheckCircle className="h-6 w-6 text-blue-500 mr-2" />
            <p className="text-lg font-semibold">Erfarenhet och Expertis</p>
          </div>
          <ul className="list-none">
            <li className="flex items-center text-gray-600 mb-2">
              <FaCheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              Kundfokus
            </li>
            <li className="flex items-center text-gray-600 mb-2">
              <FaCheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              Hög Kvalitet
            </li>
            <li className="flex items-center text-gray-600">
              <FaCheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              Kostnadseffektivitet
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl scale-animation">
              <img
                src={choose}
                alt="Benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
