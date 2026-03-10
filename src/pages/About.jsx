// ============================================================
// About.jsx — page À propos
// ============================================================

import "../styles/pages/_about.scss";
import { aboutBlocks } from "../data/aboutData";

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
