import { Link } from "react-router-dom";
import "../styles/pages/_projects.scss";
import { projectsBlocks } from "../data/projectsData";

export default function Projects() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">Portfolio</p>
        <h1 className="page-hero__title">
          Mes projets,
          <br />
          <span className="page-hero__title--muted">
            consultables sur GitHub.
          </span>
        </h1>
      </section>

      <section aria-label="Liste des projets">
        <ol className="blocks-list">
          {projectsBlocks.map((project) => (
            <li
              key={project.projectId}
              className={`block block--${project.from} ${project.accent}`}
            >
              {/* Image side — 25% */}
              <figure className="block__side">
                <Link
                  to={`/projects/${project.projectId}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={project.imageUrl}
                    alt={`Aperçu du projet ${project.title}`}
                    className="block__img"
                  />
                </Link>
                <div className="block__divider" aria-hidden="true" />
                <figcaption className="block__tag">{project.tag}</figcaption>
              </figure>

              {/* Text side — 75% */}
              <article className="block__content">
                <span className="block__icon" aria-hidden="true">
                  {project.icon}
                </span>
                <h2 className="block__title">
                  <Link to={`/projects/${project.projectId}`}>
                    {project.title}
                  </Link>
                </h2>
                <p className="block__body">{project.description}</p>
                <footer className="block__footer">
                  <Link
                    to={`/projects/${project.projectId}`}
                    className="block__badge"
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    <span className="block__dot" aria-hidden="true" />
                    <span className="block__badge-text">Voir le projet →</span>
                  </Link>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
