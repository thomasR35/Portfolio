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
    <main className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">À propos</p>
        <h1 className="page-hero__title">
          Développeur web,
          <br />
          <span className="page-hero__title--muted">
            en constante progression.
          </span>
        </h1>
      </section>

      <section aria-label="À propos de moi">
        <ol className="blocks-list">
          {aboutBlocks.map((block) => (
            <li
              key={block.id}
              className={`block block--${block.from} ${block.accent}`}
            >
              <aside className="block__side" aria-hidden="true">
                <span className="block__icon">{block.icon}</span>
                <div className="block__divider" />
                <span className="block__tag">{block.tag}</span>
              </aside>

              <article className="block__content">
                <h2 className="block__title">{block.title}</h2>
                <p className="block__body">{block.body}</p>
                <footer className="block__footer">
                  <span className="block__dot" aria-hidden="true" />
                  <span className="block__badge-text">{block.tag}</span>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
