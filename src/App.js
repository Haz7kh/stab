import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ components/Header";
import Footer from "./ components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "animate.css";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-navy">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
