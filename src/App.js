import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ components/Header";
import Footer from "./ components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "animate.css";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPostWebDeveloper from "./blogPosts/BlogPostWebDeveloper";
import BlogPostRedovisningstips from "./blogPosts/BlogPostRedovisningstips";
import BlogPostBokforingsmetoder from "./blogPosts/BlogPostBokforingsmetoder";

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
            <Route path="/services/*" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/web-developer-tips"
              element={<BlogPostWebDeveloper />}
            />
            <Route
              path="/blog/redovisningstips"
              element={<BlogPostRedovisningstips />}
            />
            <Route
              path="/blog/bokföringsmetoder"
              element={<BlogPostBokforingsmetoder />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
