import { useEffect, useRef, useState } from "react";
import "../styles/components/_scrollBlocks.scss";

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
    <div
      ref={ref}
      className={`sb-block sb-block--${block.from} ${block.accent} ${inView ? "sb-block--visible" : ""}`}
    >
      {/* Icon side — 25% */}
      <div className="sb-block__icon-side">
        <span className="sb-block__icon">{block.icon}</span>
        <div className="sb-block__divider" />
        <span className="sb-block__tag">{block.tag}</span>
      </div>

      {/* Text side — 75% */}
      <div className="sb-block__text-side">
        <h2 className="sb-block__title">{block.title}</h2>
        <p className="sb-block__body">{block.text}</p>
        <div className="sb-block__badge">
          <span className="sb-block__dot" />
          <span className="sb-block__badge-text">
            disponible pour missions freelance
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ScrollBlocks() {
  return (
    <div className="sb-wrapper">
      <div className="sb-hero">
        <p className="sb-hero__label">Thomas Riou — Développeur Web</p>
        <h1 className="sb-hero__title">
          Je construis le web,
          <br />
          <span className="sb-hero__title--muted">une ligne à la fois.</span>
        </h1>
      </div>

      <div className="sb-blocks">
        {blocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
}
