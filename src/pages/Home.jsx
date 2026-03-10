// ============================================================
//Home.jsx — page d'accueil
// ============================================================

import "../styles/components/_blocks.scss";
import AnimatedBlock from "../components/AnimatedBlock";
import { homeBlocks } from "../data/homeData";

export default function Home() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">Thomas Riou - Développeur Web</p>
        <h1 className="page-hero__title">
          Je construis le web,
          <br />
          <span className="page-hero__title--muted">une ligne à la fois.</span>
        </h1>
      </section>

      <ol className="blocks-list">
        {homeBlocks.map((block) => (
          <AnimatedBlock key={block.id} block={block} />
        ))}
      </ol>
    </main>
  );
}
