// ============================================================
// Services.jsx — questionnaire de sélection de package
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  questions,
  getRecommendation,
  buildMessage,
} from "../data/servicesData";
import "../styles/pages/_services.scss";

export default function Services() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = résumé
  const [answers, setAnswers] = useState({});
  const [freeInputs, setFreeInputs] = useState({});
  const [copied, setCopied] = useState(false);

  const currentQuestion = questions[step - 1];
  const totalSteps = questions.length;
  const isIntro = step === 0;
  const isSummary = step === totalSteps + 1;

  function handleSelect(questionId, option) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        id: option.id,
        label: option.freeInput ? freeInputs[questionId] || "" : option.label,
        text: freeInputs[questionId] || "",
      },
    }));
  }

  function handleFreeInput(questionId, value) {
    setFreeInputs((prev) => ({ ...prev, [questionId]: value }));
    if (answers[questionId]?.id === "autre") {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: { id: "autre", label: value, text: value },
      }));
    }
  }

  function handleNext() {
    if (step <= totalSteps) setStep((s) => s + 1);
  }

  function handlePrev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const recommendation = isSummary ? getRecommendation(answers) : null;
  const message = isSummary ? buildMessage(answers, recommendation) : null;

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const canNext = currentAnswer?.id;

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <p className="page-hero__label">Trouver ma formule</p>
        <h1 className="page-hero__title">
          Quel site
          <br />
          <span className="page-hero__title--muted">vous correspond ?</span>
        </h1>
      </section>

      {/* Card principale */}
      <div className="quiz">
        {/* Barre de progression */}
        {!isIntro && !isSummary && (
          <div className="quiz__progress">
            <div
              className="quiz__progress-bar"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* INTRO */}
        {isIntro && (
          <div className="quiz__intro">
            <span className="quiz__intro-icon">🧭</span>
            <h2 className="quiz__intro-title">
              5 questions pour trouver la formule idéale
            </h2>
            <p className="quiz__intro-text">
              Répondez à quelques questions simples — je vous propose ensuite le
              package qui correspond le mieux à votre projet, avec un message
              prêt à envoyer.
            </p>
            <button
              className="quiz__btn quiz__btn--primary"
              onClick={handleNext}
            >
              Commencer →
            </button>
          </div>
        )}

        {/* QUESTIONS */}
        {!isIntro && !isSummary && currentQuestion && (
          <div className="quiz__step">
            <p className="quiz__counter">
              Question {step} / {totalSteps}
            </p>
            <h2 className="quiz__question">{currentQuestion.question}</h2>

            <ul className="quiz__options">
              {currentQuestion.options.map((option) => (
                <li key={option.id}>
                  <button
                    className={`quiz__option ${
                      currentAnswer?.id === option.id
                        ? "quiz__option--selected"
                        : ""
                    }`}
                    onClick={() => handleSelect(currentQuestion.id, option)}
                  >
                    {option.label}
                  </button>
                  {option.freeInput && currentAnswer?.id === option.id && (
                    <input
                      className="quiz__free-input"
                      type="text"
                      placeholder="Précisez..."
                      value={freeInputs[currentQuestion.id] || ""}
                      onChange={(e) =>
                        handleFreeInput(currentQuestion.id, e.target.value)
                      }
                      autoFocus
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="quiz__nav">
              <button
                className="quiz__btn quiz__btn--secondary"
                onClick={handlePrev}
              >
                ← Retour
              </button>
              <button
                className={`quiz__btn quiz__btn--primary ${!canNext ? "quiz__btn--disabled" : ""}`}
                onClick={handleNext}
                disabled={!canNext}
              >
                {step === totalSteps ? "Voir le résumé →" : "Suivant →"}
              </button>
            </div>
          </div>
        )}

        {/* RÉSUMÉ */}
        {isSummary && recommendation && (
          <div className="quiz__summary">
            <h2 className="quiz__summary-title">
              Votre projet en un coup d'œil
            </h2>

            {/* Récap réponses */}
            <ul className="quiz__recap">
              {questions.map((q) => (
                <li key={q.id} className="quiz__recap-item">
                  <span className="quiz__recap-label">{q.question}</span>
                  <span className="quiz__recap-value">
                    {answers[q.id]?.label || "—"}
                  </span>
                </li>
              ))}
            </ul>

            {/* Package recommandé */}
            <div className="quiz__recommendation">
              <p className="quiz__recommendation-label">Formule recommandée</p>
              <div className="quiz__recommendation-card">
                <span className="quiz__recommendation-icon">
                  {recommendation.package_rec.icon}
                </span>
                <div>
                  <h3 className="quiz__recommendation-name">
                    {recommendation.package_rec.name}
                  </h3>
                  <p className="quiz__recommendation-description">
                    {recommendation.package_rec.description}
                  </p>
                  <p className="quiz__recommendation-price">
                    {recommendation.package_rec.price} ·{" "}
                    {recommendation.package_rec.delay}
                  </p>
                </div>
              </div>
              {recommendation.note && (
                <p className="quiz__recommendation-note">
                  ℹ️ {recommendation.note}
                </p>
              )}
            </div>

            {/* Message pré-rempli */}
            <div className="quiz__message">
              <p className="quiz__message-label">
                Votre message prêt à envoyer
              </p>
              <textarea
                className="quiz__message-text"
                value={message}
                readOnly
                rows={10}
              />
              <div className="quiz__message-actions">
                <button
                  className="quiz__btn quiz__btn--secondary"
                  onClick={() => handleCopy(message)}
                >
                  {copied ? "✓ Copié !" : "Copier le message"}
                </button>
                <Link
                  to="/contact"
                  state={{ message }}
                  className="quiz__btn quiz__btn--primary"
                >
                  Envoyer via le formulaire →
                </Link>
              </div>
            </div>

            <button
              className="quiz__restart"
              onClick={() => {
                setStep(0);
                setAnswers({});
                setFreeInputs({});
              }}
            >
              ↺ Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
