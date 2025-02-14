import React from "react";
import p3r from "../../icons/p3.gif";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-box">
        <h2>About Me</h2>
        <p>
          Hello! My name is <strong>João Pedro Carvalho Garcia</strong>, and I
          am a backend developer passionate about technology and scalable
          solutions. Currently, I am studying Computer Science at Universidade
          Tiradentes and have experience in developing RESTful APIs, distributed
          systems, and databases.
        </p>
        <p>
          I have strong knowledge in{" "}
          <strong>Java (Spring Boot, Hibernate)</strong>,{" "}
          <strong>Python (Pandas, Scikit-learn), React</strong>, as well as
          experience with <strong>Docker, SQL, and Git/GitHub</strong>. I am
          also continuously expanding my expertise in new technologies,
          particularly in <strong>Deep Learning</strong>.
        </p>
        <p>
          Beyond coding, I enjoy playing video games and listening to music.
          These activities help me relax and spark creativity in my projects. I
          am always looking for new challenges to improve my skills and
          contribute to innovative projects.
        </p>
        <div className="about-gif">
          <img src={p3r} />
        </div>
      </div>
    </section>
  );
};

export default About;
