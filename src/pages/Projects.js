import React from "react";

const projects = [
  { img: "/path-to-project1.jpg", title: "Project 1" },
  { img: "/path-to-project2.jpg", title: "Project 2" },
  { img: "/path-to-project3.jpg", title: "Project 3" },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-navy text-3xl font-bold text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div key={project.title} className="relative">
              <img src={project.img} alt={project.title} className="rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
