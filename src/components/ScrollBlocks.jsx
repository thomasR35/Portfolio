import { useEffect, useRef, useState } from "react";
import "../styles/components/_blocks.scss";

const blocks = [
  {
    id: 1,
    from: "left",
    icon: "⌨️",
    tag: "Développement Frontend",
    title: "Des interfaces qui marquent les esprits",
    text: "Je conçois des expériences utilisateur modernes et réactives avec React, en accordant une attention particulière aux animations, à l'accessibilité et aux performances. Chaque pixel compte.",
    accent: "accent-green",
  },
  {
    id: 2,
    from: "right",
    icon: "🛠️",
    tag: "Développement Backend",
    title: "Une logique solide derrière chaque action",
    text: "Node.js, PHP, MySQL — je construis des APIs robustes et des bases de données bien structurées pour que vos applications tiennent la route, même sous charge.",
    accent: "accent-red",
  },
  {
    id: 3,
    from: "left",
    icon: "🎨",
    tag: "UI / UX Design",
    title: "Le design au service de l'expérience",
    text: "De la maquette au produit final, je traduis vos idées en interfaces intuitives. Sass, Figma, responsive design — l'esthétique ne sacrifie jamais l'utilisabilité.",
    accent: "accent-yellow",
  },
  {
    id: 4,
    from: "right",
    icon: "🚀",
    tag: "Déploiement & Outils",
    title: "Du code au monde réel",
    text: "GitHub, Vite, déploiement continu — je maîtrise tout le cycle de vie d'un projet web, du premier commit jusqu'à la mise en production.",
    accent: "accent-purple",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Block({ block }) {
  const [ref, inView] = useInView();

  return (
    <li
      ref={ref}
      className={`block block--${block.from} block--anim-${block.from} ${block.accent} ${inView ? "block--visible" : ""}`}
    >
      <aside className="block__side" aria-hidden="true">
        <span className="block__icon">{block.icon}</span>
        <div className="block__divider" />
        <span className="block__tag">{block.tag}</span>
      </aside>

      <article className="block__content">
        <h2 className="block__title">{block.title}</h2>
        <p className="block__body">{block.text}</p>
        <footer className="block__footer">
          <span className="block__dot" aria-hidden="true" />
          <span className="block__badge-text">
            disponible pour missions freelance
          </span>
        </footer>
      </article>
    </li>
  );
}

export default function ScrollBlocks() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">Développeur Web</p>
        <h1 className="page-hero__title">
          Je construis le web,
          <br />
          <span className="page-hero__title--muted">une ligne à la fois.</span>
        </h1>
      </section>

      <ol className="blocks-list">
        {blocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </ol>
    </main>
  );
}
