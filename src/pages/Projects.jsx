import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/_projects.scss";

function Projects() {
  const projects = [
    {
      title: "Shortly",
      description1:
        "Ce projet est un challenge de Front End Mentor réalisé en une demi journée.",
      description2:
        "Le but est d’intégrer l’API Clean URI pour créer des URL raccourcies et de les afficher comme dans les maquettes.",
      description3:
        "Le site n'est pas responsive, mais il fonctionne correctement sur toutes les tailles d'écran.",
      imageUrl: "/Portfolio/images/shortly.png",
      projectId: "shortly",
    },
    {
      title: "La ferme des possibles",
      description1: "Projet de groupe de 4 personnes pour la 3W Academy.",
      description2:
        "Le but est de mettre en pratique les connaissances acquises durant la formation sur un site multi page.",
      description3: "Quelques fonctionnalités en JavaScript, CSS et HTML.",
      imageUrl: "/Portfolio/images/ferme.png",
      projectId: "ferme",
    },
    {
      title: "League",
      description1: "Projet de league fictive par Mari Doucet @Kornog.bzh.",
      description2:
        "Site exemple en PHP avec intégration en Sass, base de données en MySQL.",
      description3:
        "Sur une architecture MVC, mise en place des routes et hydratation par dates.",
      imageUrl: "/Portfolio/images/league.png",
      projectId: "league",
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
            <Link to={`/projects/${project.projectId}`}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </Link>
            <div className="vertical-separator"></div>
            <div className="project-card">
              <Link to={`/projects/${project.projectId}`}>
                <h2>{project.title}</h2>
              </Link>
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
