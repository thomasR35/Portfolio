import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages/_contact.scss";

const SERVICE_ID = "service_xjoxn9k";
const TEMPLATE_ID = "template_rif1ruk";
const PUBLIC_KEY = "u9wMtyPUaEi4jokXQ";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("L'adresse email n'est pas valide.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage("Une erreur est survenue, veuillez réessayer.");
    }
  };

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
                <li>
                  <a
                    href="https://www.linkedin.com/in/thomas-riou-3a1b3b1b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-social-link"
                  >
                    <span className="block__dot" aria-hidden="true" />
                    LinkedIn — thomas-riou
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomasR35"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-social-link"
                  >
                    <span className="block__dot" aria-hidden="true" />
                    GitHub — thomasR35
                  </a>
                </li>
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
            <form className="ct-form" onSubmit={handleSubmit} noValidate>
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
                  disabled={status === "sending" || status === "success"}
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
                  className={`ct-form__input ${status === "error" && errorMessage.includes("email") ? "ct-form__input--error" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending" || status === "success"}
                />
                {status === "error" && errorMessage.includes("email") && (
                  <span className="ct-form__field-error">{errorMessage}</span>
                )}
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
                  disabled={status === "sending" || status === "success"}
                />
              </div>

              <button
                type="submit"
                className={`ct-form__submit ct-form__submit--${status}`}
                disabled={status === "sending" || status === "success"}
              >
                {status === "idle" && (
                  <>
                    <span className="block__dot" aria-hidden="true" />
                    Envoyer →
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="ct-spinner" aria-hidden="true" />
                    Envoi en cours...
                  </>
                )}
                {status === "success" && (
                  <>
                    <span className="ct-checkmark" aria-hidden="true">
                      ✔
                    </span>
                    Message envoyé !
                  </>
                )}
                {status === "error" && !errorMessage.includes("email") && (
                  <>
                    <span className="block__dot" aria-hidden="true" />
                    Réessayer →
                  </>
                )}
                {status === "error" && errorMessage.includes("email") && (
                  <>
                    <span className="block__dot" aria-hidden="true" />
                    Envoyer →
                  </>
                )}
              </button>

              {status === "error" && !errorMessage.includes("email") && (
                <p className="ct-form__error">{errorMessage}</p>
              )}
            </form>
          </article>
        </div>
      </div>
    </main>
  );
}
