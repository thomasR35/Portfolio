import React from "react";
import "../styles/pages/_projects.scss";

function Projects() {
  const projects = [
    {
      title: "Shortly",
      description1:
        "Ce Projet est un challenge de Front End Mentor réalisé en une demi journée.",
      description2:
        "Le but est d’intégrer l’API Clean URI pour créer des URL raccourcies et de les afficher comme dans les maquettes",
      description3:
        "Le site n'est pas responsive, mais il fonctionne correctement sur toutes les tailles d'écran.",
      imageUrl: "/images/shortly.png",
    },
    {
      title: "La ferme des possibles",
      description1: "Projet de groupe de 4 personnes pour la 3W Academy.",
      description2:
        "Le but est de mettre en pratique les connaissances acquises durant la formation sur un site multi page.",
      description3: "Quelques fonctionnalités en javascript, css et html.",
      imageUrl: "/images/ferme.png",
    },
    {
      title: "Secured Blog",
      description1:
        "Projet de blog sécurisé fourni par Mari Doucet @Kornog.bzh .",
      description2:
        "Site exemple en PHP avec intégration en Bootstrap, base de données en MySQL.",
      description3:
        "Sur une architecture MVC, mise en place des bases de la sécurité d'un site web. ( XSS / CSRF )",
      imageUrl: "/images/secured.png",
    },
  ];

  return (
    <main className="projects-container">
      <h1 className="projects-h1">
        Tous ces projets sont consultables sur GitHub
      </h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-row ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="project-content">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="vertical-separator"></div>
            <div className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description1}</p>
              <p>{project.description2}</p>
              <p>{project.description3}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Projects;
