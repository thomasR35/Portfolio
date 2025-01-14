import React from "react";
import "../styles/pages/_home.scss";

function Home() {
  return (
    <div className="home">
      <section className="main-home">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>
          Je suis développeur web passionné, spécialisé en React et JavaScript.
        </p>
        <div className="cta-buttons">
          <a href="#about" className="btn">
            En savoir plus
          </a>
          <a href="#projects" className="btn">
            Mes projets
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
