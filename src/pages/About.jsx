import React from "react";
import "../styles/pages/_about.scss";

function About() {
  return (
    <div>
      <section className="about-container">
        <h2>À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Qui suis-je ?</h3>
            <p>
              Je m'appelle Thomas Riou, actuellement en formation à la 3W
              Academy, j'apprends le développement web avec une forte volonté de
              me perfectionner.
            </p>
            <p>
              Passionné par la technologie, je suis constamment à la recherche
              de nouveaux défis à relever et d'opportunités pour évoluer dans le
              domaine du développement.
            </p>
          </div>
          <div className="about-skills">
            <h3>Compétences</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js</li>
              <li>PHP, MySQL</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pdf-container">
        <embed src="/Portfolio/pdf/CV_TR.pdf" width="100%" height="600px" />
      </section>
    </div>
  );
}

export default About;
