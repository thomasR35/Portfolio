import React from "react";
import "../styles/pages/_projects.scss";

function Projects() {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1",
      imageUrl: "https://via.placeholder.com/300x200",
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
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Projects;
