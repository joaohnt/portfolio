import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <p>
      If you want to get in touch with me, feel free to reach out.
      </p>
      <ul className="contact-list">
        <li>
          <FaEnvelope /> jpedrooo.cg@gmail.com
        </li>
        <li>
          <FaPhone /> 79 9 99987010
        </li>
        <li>
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/joaohnt"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <FaGithub />
          <a
            href="https://github.com/joaohnt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
