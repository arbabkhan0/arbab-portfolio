import React from "react";
import Row from "../components/Row";
import projects from "../data/projects";

const Projects = () => {
  console.log(projects); // 👈 add this

  return (
    <div className="mt-20">
      <Row title="My Projects" data={projects} />
    </div>
  );
};

export default Projects;