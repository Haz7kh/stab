import React from "react";
import project1 from "../assets/projImgs/proj1.png";
import project2 from "../assets/projImgs/proj2.png";
import project3 from "../assets/projImgs/proj3.png";

const projects = [
  {
    img: project1,
    title: "Project 1",
    description: "This is a description for Project 1.",
    demoLink: "https://spnordeanab.com",
    githubLink: "",
  },
  {
    img: project2,
    title: "Project 2",
    description: "This is a description for Project 2.",
    demoLink: "https://stockholmtab.se",
    githubLink: "https://github.com/Haz7kh/stkholmTab.git",
  },
  {
    img: project3,
    title: "Project 3",
    description: "This is a description for Project 3.",
    demoLink: "https://www.wmservice.se",
    githubLink: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-navy text-3xl font-bold text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative p-4 border rounded shadow-lg flex flex-col transform transition-transform duration-500 hover:scale-105"
            >
              <div className="flex-grow flex justify-center items-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded opacity-90 transition-opacity duration-500 hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transform transition-colors duration-300"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transform transition-colors duration-300 ${
                    !project.githubLink && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={(e) => !project.githubLink && e.preventDefault()}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
