import "../styles/pages/_about.scss";

const aboutBlocks = [
  {
    id: "identity",
    from: "left",
    icon: "👨‍💻",
    tag: "Qui suis-je ?",
    accent: "accent-green",
    title: "Thomas Riou, développeur web junior",
    body: "Diplômé de la formation Frontend de la 3W Academy, j'ai également acquis des bases solides en développement Backend au cours de ma formation. Passionné par la technologie, je cherche aujourd'hui à mettre en pratique mes compétences et à continuer de progresser sur des projets concrets.",
  },
  {
    id: "frontend",
    from: "right",
    icon: "🎨",
    tag: "Frontend",
    accent: "accent-purple",
    title: "Des interfaces modernes et réactives",
    body: "HTML, CSS, JavaScript, React — je conçois des interfaces soignées et accessibles, avec une attention particulière portée au design et à l'expérience utilisateur.",
  },
  {
    id: "backend",
    from: "left",
    icon: "🛠️",
    tag: "Backend",
    accent: "accent-red",
    title: "Une logique solide côté serveur",
    body: "Node.js, PHP, MySQL — je construis des APIs et des bases de données structurées pour que les applications tiennent la route, même sous charge.",
  },
  {
    id: "tools",
    from: "right",
    icon: "🚀",
    tag: "Outils & workflow",
    accent: "accent-yellow",
    title: "Du code propre, versionné et déployé",
    body: "GitHub, Vite, Sass — je maîtrise les outils du développeur moderne, du premier commit jusqu'à la mise en production.",
  },
];

export default function About() {
  return (
    <main className="ab-wrapper">
      <section className="ab-hero">
        <p className="ab-hero__label">À propos</p>
        <h1 className="ab-hero__title">
          Développeur web,
          <br />
          <span className="ab-hero__title--muted">
            en constante progression.
          </span>
        </h1>
      </section>

      <section aria-label="À propos de moi">
        <ol className="ab-blocks">
          {aboutBlocks.map((block) => (
            <li
              key={block.id}
              className={`ab-block ab-block--${block.from} ${block.accent}`}
            >
              {/* Icon side — 25% */}
              <aside className="ab-block__icon-side" aria-hidden="true">
                <span className="ab-block__icon">{block.icon}</span>
                <div className="ab-block__divider" />
                <span className="ab-block__tag">{block.tag}</span>
              </aside>

              {/* Text side — 75% */}
              <article className="ab-block__text-side">
                <h2 className="ab-block__title">{block.title}</h2>
                <p className="ab-block__body">{block.body}</p>
                <footer className="ab-block__footer">
                  <span className="ab-block__dot" aria-hidden="true" />
                  <span className="ab-block__badge-text">{block.tag}</span>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
