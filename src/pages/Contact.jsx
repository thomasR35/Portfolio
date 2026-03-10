// ============================================================
// Contact.jsx — page contact
// ============================================================

import "../styles/pages/_contact.scss";
import ContactForm from "../components/ContactForm";
import { socialLinks } from "../data/contactConfig";

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">Contact</p>
        <h1 className="page-hero__title">
          Travaillons ensemble,
          <br />
          <span className="page-hero__title--muted">je suis disponible.</span>
        </h1>
      </section>

      <div className="blocks-list">
        {/* Bloc réseaux sociaux */}
        <div className="block block--left accent-green">
          <aside className="block__side" aria-hidden="true">
            <span className="block__icon">🌐</span>
            <div className="block__divider" />
            <span className="block__tag">Réseaux</span>
          </aside>
          <article className="block__content">
            <h2 className="block__title">Retrouvez-moi en ligne</h2>
            <nav aria-label="Liens réseaux sociaux">
              <ul className="ct-social-list">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ct-social-link"
                    >
                      <span className="block__dot" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </div>

        {/* Bloc formulaire */}
        <div className="block block--right accent-purple">
          <aside className="block__side" aria-hidden="true">
            <span className="block__icon">✉️</span>
            <div className="block__divider" />
            <span className="block__tag">Message</span>
          </aside>
          <article className="block__content">
            <h2 className="block__title">Envoyez-moi un message</h2>
            <ContactForm />
          </article>
        </div>
      </div>
    </main>
  );
}
