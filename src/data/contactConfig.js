// ============================================================
// contactConfig.js — configuration EmailJS
// ============================================================

export const SERVICE_ID  = "service_xjoxn9k";
export const TEMPLATE_ID = "template_rif1ruk";
export const PUBLIC_KEY  = "u9wMtyPUaEi4jokXQ";

export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/thomas-riou-3a1b3b1b3/",
    label: "LinkedIn — thomas-riou",
  },
  {
    id: "github",
    href: "https://github.com/thomasR35",
    label: "GitHub — thomasR35",
  },
];
