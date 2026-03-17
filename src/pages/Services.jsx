// ============================================================
// Services.jsx — questionnaire de sélection de package
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  questions,
  proQuestions,
  getQ2Options,
  getRecommendation,
  buildMessage,
} from "../data/servicesData";
import "../styles/pages/_services.scss";

export default function Services() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [proAnswers, setProAnswers] = useState({});
  const [freeInputs, setFreeInputs] = useState({});
  const [copied, setCopied] = useState(false);

  const isPro = answers[1]?.id === "pro_web";

  // Construire la liste des étapes dynamiquement
  function buildSteps() {
    const steps = [];
    questions.forEach((q) => {
      if (q.skipFor && isPro && q.skipFor.includes("pro_web")) return;
      steps.push({ type: "standard", question: q });
    });
    if (isPro) {
      proQuestions.forEach((q) => steps.push({ type: "pro", question: q }));
    }
    return steps;
  }

  const steps = buildSteps();
  const totalSteps = steps.length;
  const isIntro = step === 0;
  const isSummary = step === totalSteps + 1;
  const currentStepData = steps[step - 1];

  function getOptions(question) {
    if (question.id === 2) return getQ2Options(answers[1]?.id);
    return question.options;
  }

  function getCurrentAnswer() {
    if (!currentStepData) return null;
    if (currentStepData.type === "pro") {
      return proAnswers[currentStepData.question.id];
    }
    return answers[currentStepData.question.id];
  }

  function handleSelect(question, option, type) {
    const value = {
      id: option.id,
      label: option.freeInput ? freeInputs[question.id] || "" : option.label,
      text: freeInputs[question.id] || "",
    };
    if (type === "pro") {
      setProAnswers((prev) => ({ ...prev, [question.id]: value }));
    } else {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
    }
  }

  function handleFreeInput(question, value, type) {
    setFreeInputs((prev) => ({ ...prev, [question.id]: value }));
    const current =
      type === "pro" ? proAnswers[question.id] : answers[question.id];
    if (current?.id === "autre") {
      const updated = { id: "autre", label: value, text: value };
      if (type === "pro") {
        setProAnswers((prev) => ({ ...prev, [question.id]: updated }));
      } else {
        setAnswers((prev) => ({ ...prev, [question.id]: updated }));
      }
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

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setProAnswers({});
    setFreeInputs({});
    setCopied(false);
  }

  const recommendation = isSummary
    ? getRecommendation(answers, proAnswers)
    : null;
  const message = isSummary
    ? buildMessage(answers, proAnswers, recommendation)
    : null;
  const currentAnswer = getCurrentAnswer();
  const canNext = currentAnswer?.id;

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <p className="page-hero__label">Trouver ma formule</p>
        <h1 className="page-hero__title">
          Quel site
          <br />
          <span className="page-hero__title--muted">vous correspond ?</span>
        </h1>
      </section>

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
              Quelques questions pour trouver la formule idéale
            </h2>
            <p className="quiz__intro-text">
              Particulier, artisan, professionnel du web — répondez à quelques
              questions simples. Je vous propose ensuite la formule qui
              correspond à votre projet, avec un message prêt à envoyer.
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
        {!isIntro && !isSummary && currentStepData && (
          <div className="quiz__step">
            <p className="quiz__counter">
              Question {step} / {totalSteps}
              {isPro && currentStepData.type === "pro" && (
                <span className="quiz__counter-badge">Profil technique</span>
              )}
            </p>
            <h2 className="quiz__question">
              {currentStepData.question.question}
            </h2>

            <ul className="quiz__options">
              {getOptions(currentStepData.question).map((option) => (
                <li key={option.id}>
                  <button
                    className={`quiz__option ${
                      currentAnswer?.id === option.id
                        ? "quiz__option--selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSelect(
                        currentStepData.question,
                        option,
                        currentStepData.type,
                      )
                    }
                  >
                    {option.label}
                  </button>
                  {option.freeInput && currentAnswer?.id === option.id && (
                    <input
                      className="quiz__free-input"
                      type="text"
                      placeholder="Précisez..."
                      maxLength={150}
                      value={freeInputs[currentStepData.question.id] || ""}
                      onChange={(e) =>
                        handleFreeInput(
                          currentStepData.question,
                          e.target.value,
                          currentStepData.type,
                        )
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
              {steps.map(({ question, type }) => {
                const ans =
                  type === "pro"
                    ? proAnswers[question.id]
                    : answers[question.id];
                if (!ans) return null;
                return (
                  <li key={question.id} className="quiz__recap-item">
                    <span className="quiz__recap-label">
                      {question.question}
                    </span>
                    <span className="quiz__recap-value">
                      {ans.label || "—"}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Package recommandé */}
            <div className="quiz__recommendation">
              <p className="quiz__recommendation-label">
                {recommendation.isPro ? "Proposition" : "Formule recommandée"}
              </p>
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

            <button className="quiz__restart" onClick={handleRestart}>
              ↺ Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
