import { Link } from "react-router-dom";
import "../styles/pages/_projects.scss";

const projects = [
  {
    title: "Shortly",
    tag: "Frontend Challenge",
    icon: "🔗",
    accent: "accent-green",
    description:
      "Challenge Front End Mentor réalisé en une demi-journée. Intégration de l'API Clean URI pour créer des URL raccourcies et les afficher selon les maquettes.",
    imageUrl: "/images/shortly.png",
    projectId: "shortly",
    from: "left",
  },
  {
    title: "La ferme des possibles",
    tag: "Projet de groupe",
    icon: "🌱",
    accent: "accent-yellow",
    description:
      "Projet de groupe de 4 personnes pour la 3W Academy. Site multi-page mettant en pratique HTML, CSS et JavaScript avec quelques fonctionnalités interactives.",
    imageUrl: "/images/ferme.png",
    projectId: "ferme",
    from: "right",
  },
  {
    title: "League",
    tag: "Architecture MVC",
    icon: "🏆",
    accent: "accent-red",
    description:
      "Site de league fictive en PHP avec Sass et MySQL. Architecture MVC, mise en place des routes et hydratation par dates.",
    imageUrl: "/images/league.png",
    projectId: "league",
    from: "left",
  },
];

export default function Projects() {
  return (
    <main className="pj-wrapper">
      <section className="pj-hero">
        <p className="pj-hero__label">Portfolio</p>
        <h1 className="pj-hero__title">
          Mes projets,
          <br />
          <span className="pj-hero__title--muted">
            consultables sur GitHub.
          </span>
        </h1>
      </section>

      <section aria-label="Liste des projets">
        <ol className="pj-blocks">
          {projects.map((project) => (
            <li
              key={project.projectId}
              className={`pj-block pj-block--${project.from} ${project.accent}`}
            >
              {/* Image side — 25% */}
              <figure className="pj-block__img-side">
                <Link
                  to={`/projects/${project.projectId}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={project.imageUrl}
                    alt={`Aperçu du projet ${project.title}`}
                    className="pj-block__img"
                  />
                </Link>
                <div className="pj-block__divider" aria-hidden="true" />
                <figcaption className="pj-block__tag">{project.tag}</figcaption>
              </figure>

              {/* Text side — 75% */}
              <article className="pj-block__text-side">
                <span className="pj-block__icon" aria-hidden="true">
                  {project.icon}
                </span>
                <h2 className="pj-block__title">
                  <Link to={`/projects/${project.projectId}`}>
                    {project.title}
                  </Link>
                </h2>
                <p className="pj-block__body">{project.description}</p>
                <footer className="pj-block__footer">
                  <Link
                    to={`/projects/${project.projectId}`}
                    className="pj-block__badge"
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    <span className="pj-block__dot" aria-hidden="true" />
                    <span className="pj-block__badge-text">
                      Voir le projet →
                    </span>
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
