// ============================================================
// Home.jsx — page d'accueil
// ============================================================

import "../styles/components/_blocks.scss";
import "../styles/pages/_home.scss";
import AnimatedBlock from "../components/AnimatedBlock";
import { homeBlocks, homePackages, homeMaintenance } from "../data/homeData";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <p className="page-hero__label">
          Thomas Riou — Développeur Web Freelance
        </p>
        <h1 className="page-hero__title">
          Un site web professionnel,
          <br />
          <span className="page-hero__title--muted">
            simple, rapide et abordable.
          </span>
        </h1>
      </section>

      {/* Blocs services */}
      <ol className="blocks-list">
        {homeBlocks.map((block) => (
          <AnimatedBlock key={block.id} block={block} />
        ))}
      </ol>

      {/* Bandeau ceinture */}
      <div className="home-banner">
        <div className="home-banner__content">
          <p className="home-banner__text">Pas encore décidé ?</p>
          <p className="home-banner__sub">
            Répondez à quelques questions — je vous propose la formule qui vous
            correspond.
          </p>
        </div>
        <Link to="/services" className="home-banner__cta">
          Trouver ma formule →
        </Link>
      </div>

      {/* Section packages */}
      <section className="packages">
        <p className="packages__label">Mes offres</p>
        <h2 className="packages__title">Choisissez votre formule</h2>
        <p className="packages__subtitle">
          Des sites clés en main pour artisans, commerçants et prestataires de
          services.
        </p>

        <div className="packages__grid">
          {homePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.highlight ? "package-card--highlight" : ""}`}
            >
              {pkg.highlight && (
                <span className="package-card__badge">Le plus populaire</span>
              )}
              <span className="package-card__icon">{pkg.icon}</span>
              <h3 className="package-card__name">{pkg.name}</h3>
              <p className="package-card__description">{pkg.description}</p>
              <ul className="package-card__features">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="package-card__feature">
                    <span className="package-card__check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="package-card__footer">
                <p className="package-card__price">{pkg.price}</p>
                <p className="package-card__delay">{pkg.delay}</p>
                <Link to="/contact" className="package-card__cta">
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="maintenance">
          <span className="maintenance__icon">{homeMaintenance.icon}</span>
          <div className="maintenance__content">
            <h4 className="maintenance__title">{homeMaintenance.title}</h4>
            <p className="maintenance__description">
              {homeMaintenance.description}
            </p>
          </div>
          <p className="maintenance__price">{homeMaintenance.price}</p>
        </div>

        <p className="packages__note">
          Vous ne savez pas quelle formule choisir ?{" "}
          <Link to="/services" className="packages__note-link">
            Répondez à quelques questions →
          </Link>
        </p>
      </section>
    </main>
  );
}
