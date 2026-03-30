import React from "react";
import Row from "../components/Row";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-4 bg-[#141414]">
      {/* Section header */}
      <div className="px-10 mb-6">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          My <span className="text-[#E50914]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-1 text-sm">
          Real-world apps I've built that actually work 🚀
        </p>
      </div>

      <Row title="All Projects" data={projects} />
    </section>
  );
};

export default Projects;