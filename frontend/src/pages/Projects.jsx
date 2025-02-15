import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "../components/SingleItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-5k88.onrender.com/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Erro ao buscar projetos:", error));
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <SingleItem key={project._id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
