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

const INITIAL_FORM = { name: "", email: "", message: "" };

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
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
      setFormData(INITIAL_FORM);
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
