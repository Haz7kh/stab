import React from "react";
import Hero from "../ components/Hero";
import CompanyIntroduction from "../ components/CompanyIntroduction";
import CourseSlider from "../ components/CourseSlider";
import FunFacts from "../ components/FunFacts";
import Benefits from "../ components/Benefits";
import Currency from "../ components/Currency";

const Home = () => {
  return (
    <div className="bg-white text-dark-grey">
      <Hero />
      <Currency />

      <CompanyIntroduction />
      <CourseSlider />
      <FunFacts />
      <Benefits />
    </div>
  );
};

export default Home;
