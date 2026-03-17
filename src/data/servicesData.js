// ============================================================
// servicesData.js — questionnaire et logique de recommandation
// ============================================================

export const questions = [
  {
    id: 1,
    question: "Vous êtes ?",
    options: [
      { id: "artisan", label: "Artisan / Commerçant" },
      { id: "prestataire", label: "Prestataire de services" },
      { id: "association", label: "Association" },
      { id: "particulier", label: "Particulier (gîte, location, passion…)" },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
  {
    id: 2,
    question: "Votre objectif principal ?",
    options: [
      { id: "presenter", label: "Présenter mon activité" },
      { id: "vendre", label: "Vendre mes produits en ligne" },
      { id: "blog", label: "Publier des actualités / un blog" },
      { id: "tout", label: "Les trois à la fois" },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
  {
    id: 3,
    question: "Vous avez déjà un site ?",
    options: [
      { id: "non", label: "Non, c'est mon premier site" },
      { id: "moderniser", label: "Oui, je veux le moderniser" },
      { id: "refaire", label: "Oui, je veux le refaire entièrement" },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
  {
    id: 4,
    question: "Quel est votre budget ?",
    options: [
      { id: "moins300", label: "Moins de 300 €" },
      { id: "300-600", label: "Entre 300 € et 600 €" },
      { id: "plus600", label: "Plus de 600 €" },
      { id: "saitpas", label: "Je ne sais pas encore" },
    ],
  },
  {
    id: 5,
    question: "Délai souhaité ?",
    options: [
      { id: "urgent", label: "Le plus vite possible" },
      { id: "mois", label: "Dans le mois" },
      { id: "pasurgent", label: "Pas d'urgence" },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
];

// ============================================================
// SANITISATION — nettoie les inputs libres
// ============================================================
function sanitize(str = "") {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n{3,}/g, "\n\n") // max 2 sauts de ligne consécutifs
    .trim()
    .slice(0, 150); // longueur max 150 caractères
}

// ============================================================
// RECOMMANDATION
// ============================================================
export function getRecommendation(answers) {
  const objectif = answers[2]?.id;
  const budget = answers[4]?.id;
  const existant = answers[3]?.id;

  let package_rec = null;
  let note = "";

  if (objectif === "vendre" || objectif === "tout") {
    package_rec = {
      name: "E-commerce",
      icon: "🛒",
      price: "À partir de 700 €",
      delay: "Livré en 3 à 5 semaines",
      description:
        "Votre projet nécessite une boutique en ligne complète avec paiement sécurisé et gestion des commandes.",
    };
  } else if (
    objectif === "blog" ||
    (objectif === "presenter" && budget === "300-600")
  ) {
    package_rec = {
      name: "Vitrine + Blog",
      icon: "📝",
      price: "À partir de 400 €",
      delay: "Livré en 2 à 3 semaines",
      description:
        "Un site vitrine avec un espace blog pour publier vos actualités et fidéliser vos clients.",
    };
  } else {
    package_rec = {
      name: "Site Vitrine",
      icon: "🖥️",
      price: "À partir de 200 €",
      delay: "Livré en 1 à 2 semaines",
      description:
        "Un site professionnel pour présenter votre activité et être trouvé sur Google.",
    };
  }

  if (existant === "moderniser") {
    note =
      "Vous souhaitez moderniser votre site existant — le tarif reste identique.";
  } else if (existant === "refaire") {
    note =
      "Une refonte complète nécessite une analyse de l'existant. Un devis personnalisé vous sera proposé.";
  }

  return { package_rec, note };
}

// ============================================================
// MESSAGE PRÉ-REMPLI
// ============================================================
export function buildMessage(answers, recommendation) {
  const profiles = {
    artisan: "je suis artisan / commerçant",
    prestataire: "je suis prestataire de services",
    association: "nous sommes une association",
    particulier: "je suis un particulier",
    autre: answers[1]?.text
      ? `je suis ${sanitize(answers[1].text)}`
      : "je suis intéressé par vos services",
  };

  const objectifs = {
    presenter: "présenter mon activité",
    vendre: "vendre mes produits en ligne",
    blog: "publier des actualités et fidéliser mes clients",
    tout: "présenter mon activité, publier des actualités et vendre en ligne",
    autre: sanitize(answers[2]?.text) || "développer ma présence en ligne",
  };

  const budgets = {
    moins300: "moins de 300 €",
    "300-600": "entre 300 € et 600 €",
    plus600: "plus de 600 €",
    saitpas: "à définir ensemble",
  };

  const delais = {
    urgent: "le plus vite possible",
    mois: "dans le mois",
    pasurgent: "sans urgence particulière",
    autre: sanitize(answers[5]?.text) || "à définir",
  };

  const profil =
    profiles[answers[1]?.id] || "je suis intéressé par vos services";
  const objectif =
    objectifs[answers[2]?.id] || "développer ma présence en ligne";
  const budget = budgets[answers[4]?.id] || "à définir";
  const delai = delais[answers[5]?.id] || "à définir";

  return `Bonjour Thomas,

${profil.charAt(0).toUpperCase() + profil.slice(1)} et je souhaite ${objectif}.

D'après le questionnaire, la formule "${recommendation.package_rec.name}" (${recommendation.package_rec.price}) semble correspondre à mon projet.

Mon budget est ${budget} et je souhaite démarrer ${delai}.

Pourriez-vous me recontacter afin que nous discutions de mon projet ?

Merci d'avance.`;
}
