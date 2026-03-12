// ============================================================
// AnimatedBlock.jsx — bloc animé au scroll
// ============================================================

import { useInView } from "../hooks/useInView";

export default function AnimatedBlock({ block }) {
  const [ref, inView] = useInView();

  return (
    <li
      ref={ref}
      className={`block block--${block.from} block--anim-${block.from} ${block.accent || ""} ${inView ? "block--visible" : ""}`}
    >
      <aside className="block__side" aria-hidden="true">
        <span className="block__icon">{block.icon}</span>
        <div className="block__divider" />
        <span className="block__tag">{block.tag}</span>
      </aside>

      <article className="block__content">
        <h2 className="block__title">{block.title}</h2>
        <p className="block__body">{block.body ?? block.text}</p>
        {block.badge && (
          <footer className="block__footer">
            <span className="block__dot" aria-hidden="true" />
            <span className="block__badge-text">{block.badge}</span>
          </footer>
        )}
      </article>
    </li>
  );
}
