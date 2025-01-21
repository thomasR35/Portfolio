import React from "react";
import "../styles/pages/_projects.scss";

function Projects() {
  const projects = [
    {
      title: "Shortly",
      description1: "URL Shortener | Front End Mentor ",
      description2:
        "Ce projet est un challenge de Front End Mentor. Il s'agit de créer une application de raccourcissement d'URL.",
      description3:
        "Le challenge consiste à intégrer la maquette fournie en respectant le design et les fonctionnalités demandées.",
      imageUrl: "/images/shortly2.jpg",
    },
    {
      title: "Projet 2",
      description: "Description du projet 2",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Projet 3",
      description: "Description du projet 3",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <main className="projects-container">
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
