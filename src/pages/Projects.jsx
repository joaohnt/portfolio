import React from "react";
import { projectsArray } from "../database/projects";
import SingleItem from "../components/SingleItem";

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsArray.map((project) => (
        <SingleItem key={project.id} {...project} />
      ))}
    </div>
  );
};
export default Projects;
