import React from "react";
import Hero from "../ components/Hero";
import CompanyIntroduction from "../ components/CompanyIntroduction";
import CourseSlider from "../ components/CourseSlider";
import FunFacts from "../ components/FunFacts";
import Benefits from "../ components/Benefits";

const Home = () => {
  return (
    <div className="bg-white text-dark-grey">
      <Hero />
      <CompanyIntroduction />
      <CourseSlider />
      <FunFacts />
      <Benefits />
    </div>
  );
};

export default Home;
