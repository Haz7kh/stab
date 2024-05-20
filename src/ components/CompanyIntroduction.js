import React from "react";
import { Link } from "react-router-dom";
import secondImage from "../assets/images/second-image.png";

const CompanyIntroduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h4 className="text-blue-600">Company Introductions</h4>
          <h2 className="text-5xl font-bold text-black mt-4">
            Start Your Journey With Us
          </h2>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected
            humour or randomised words which don't look.
          </p>
          <div className="flex mt-8">
            <div className="flex items-center mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 10c0 3.866-3.582 7-8 7s-8-3.134-8-7a8 8 0 1116 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14v6m0 0H8m4 0h4"
                />
              </svg>
              <p className="text-black font-semibold ml-2">
                Start learning from our experts
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422A12.07 12.07 0 0119 10.14M12 14v7m0-7L8.539 10.42A12.07 12.07 0 015 10.14"
                />
              </svg>
              <p className="text-black font-semibold ml-2">
                Enhance your skills with us now
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Read More
          </Link>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center mt-8 md:mt-0">
          <img
            src={secondImage}
            alt="Second"
            className="w-1/2 rounded-lg shadow-lg mx-2"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
