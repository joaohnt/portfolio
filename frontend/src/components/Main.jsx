import React from "react";
import "../index.css";
import doisb from "../../icons/2b.gif";
import github from "../../icons/github.png";
import linkedin from "../../icons/linkedin.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="main-container">
        <div className="text-container">
          <h1>
            Hi, I'm <span>João Pedro</span>
          </h1>
          <p>Software Developer</p>
          <br />

          <div className="container-button">
            <Link
              to="https://github.com/user-attachments/files/21077047/Curriculo.Joao.Pedro.-.dev.2025.pdf"
              className="button2"
            >
              Download CV
            </Link>
            <Link to="/projects" className="button">
              My projects
            </Link>
          </div>
        </div>

        <div className="frame">
          <img src={doisb} alt="gifzudo" />
        </div>
      </div>

      <div className="social-icons">
        <Link to="https://www.linkedin.com/in/joaohnt/" target="_blank">
          <img src={linkedin} alt="perfil do linkedin" />
        </Link>
        <Link to="https://github.com/joaohnt" target="_blank">
          <img src={github} alt="perfil do linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
