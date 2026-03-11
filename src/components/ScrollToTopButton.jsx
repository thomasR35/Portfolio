// ============================================================
// ScrollToTopButton.jsx — bouton retour en haut de page
// ============================================================

import { useEffect, useState } from "react";
import "../styles/components/_scrollToTopButton.scss";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-top"
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span className="scroll-top__label">Retour en haut</span>
    </button>
  );
}
