// ============================================================
// useContactForm.js — logique du formulaire de contact
// ============================================================

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY,
  isValidEmail,
} from "../data/contactConfig";

// ============================================================
// SANITISATION
// ============================================================
function sanitize(str = "") {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function useContactForm(prefillMessage = "") {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: prefillMessage,
    honeypot: "",
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

    // Honeypot — si rempli c'est un bot
    if (formData.honeypot) return;

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
          name: sanitize(formData.name),
          from_email: sanitize(formData.email),
          message: sanitize(formData.message),
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage("Une erreur est survenue, veuillez réessayer.");
    }
  };

  const isDisabled = status === "sending" || status === "success";

  return {
    formData,
    status,
    errorMessage,
    isDisabled,
    handleChange,
    handleSubmit,
  };
}
