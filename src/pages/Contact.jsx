import { useState } from "react";
import "../styles/pages/_contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:thomasriou.35@gmail.com?subject=Message%20de%20${encodeURIComponent(name)}&body=Nom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="ct-wrapper">
      <section className="ct-hero">
        <p className="ct-hero__label">Contact</p>
        <h1 className="ct-hero__title">
          Travaillons ensemble,
          <br />
          <span className="ct-hero__title--muted">je suis disponible.</span>
        </h1>
      </section>

      <div className="ct-blocks">
        {/* Bloc réseaux sociaux */}
        <div className="ct-block ct-block--left accent-green">
          <aside className="ct-block__icon-side" aria-hidden="true">
            <span className="ct-block__icon">🌐</span>
            <div className="ct-block__divider" />
            <span className="ct-block__tag">Réseaux</span>
          </aside>
          <article className="ct-block__text-side">
            <h2 className="ct-block__title">Retrouvez-moi en ligne</h2>
            <nav aria-label="Liens réseaux sociaux">
              <ul className="ct-social-list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/thomas-riou-3a1b3b1b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-social-link"
                  >
                    <span className="ct-block__dot" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomasR35"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-social-link"
                  >
                    <span className="ct-block__dot" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>

        {/* Bloc formulaire */}
        <div className="ct-block ct-block--right accent-purple">
          <aside className="ct-block__icon-side" aria-hidden="true">
            <span className="ct-block__icon">✉️</span>
            <div className="ct-block__divider" />
            <span className="ct-block__tag">Message</span>
          </aside>
          <article className="ct-block__text-side">
            <h2 className="ct-block__title">Envoyez-moi un message</h2>
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form__field">
                <label htmlFor="name" className="ct-form__label">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="ct-form__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ct-form__field">
                <label htmlFor="email" className="ct-form__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="ct-form__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ct-form__field">
                <label htmlFor="message" className="ct-form__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="ct-form__textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="ct-form__submit">
                <span className="ct-block__dot" aria-hidden="true" />
                Envoyer →
              </button>
            </form>
          </article>
        </div>
      </div>
    </main>
  );
}
