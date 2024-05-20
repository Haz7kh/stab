import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Web Developer Post */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Web Developer Tips</h2>
          <p className="text-gray-700 mb-4">
            Discover essential tips and tricks to become a successful web
            developer.
          </p>
          <Link
            to="/blog/web-developer-tips"
            className="text-blue-500 hover:underline"
          >
            Read more
          </Link>
        </div>
        {/* Accounting Post 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Redovisningstips</h2>
          <p className="text-gray-700 mb-4">
            Viktiga tips för effektiv redovisning och bokföring.
          </p>
          <Link
            to="/blog/redovisningstips"
            className="text-blue-500 hover:underline"
          >
            Läs mer
          </Link>
        </div>
        {/* Accounting Post 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Bokföringsmetoder</h2>
          <p className="text-gray-700 mb-4">
            Utforska olika bokföringsmetoder och deras fördelar.
          </p>
          <Link
            to="/blog/bokföringsmetoder"
            className="text-blue-500 hover:underline"
          >
            Läs mer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
