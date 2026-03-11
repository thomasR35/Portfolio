// ============================================================
// useDarkMode.js — gestion du dark mode
// Système par défaut + toggle manuel + persistance localStorage
// ============================================================

import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Écoute les changements de préférence système
  // uniquement si l'utilisateur n'a pas forcé de préférence
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
