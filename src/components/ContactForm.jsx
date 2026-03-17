// ============================================================
// ContactForm.jsx — composant formulaire isolé
// ============================================================

import { useContactForm } from "../hooks/useContactForm";

export default function ContactForm({ prefillMessage = "" }) {
  const {
    formData,
    status,
    errorMessage,
    isDisabled,
    handleChange,
    handleSubmit,
  } = useContactForm(prefillMessage);

  const emailError = status === "error" && errorMessage.includes("email");
  const globalError = status === "error" && !errorMessage.includes("email");

  return (
    <form className="ct-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — caché, piège pour les bots */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

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
          maxLength={100}
          disabled={isDisabled}
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
          className={`ct-form__input ${emailError ? "ct-form__input--error" : ""}`}
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={150}
          disabled={isDisabled}
        />
        {emailError && (
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
          maxLength={2000}
          disabled={isDisabled}
        />
      </div>

      <button
        type="submit"
        className={`ct-form__submit ct-form__submit--${status}`}
        disabled={isDisabled}
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
        {status === "error" && (
          <>
            <span className="block__dot" aria-hidden="true" />
            {emailError ? "Envoyer →" : "Réessayer →"}
          </>
        )}
      </button>

      {globalError && <p className="ct-form__error">{errorMessage}</p>}
    </form>
  );
}
