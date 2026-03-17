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
      {
        id: "pro_web",
        label: "Professionnel du web — je cherche une assistance technique",
      },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
  {
    id: 2,
    question: "Votre objectif principal ?",
    // Options dynamiques selon Q1 — voir getDynamicOptions()
    options: [],
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
    skipFor: ["pro_web"], // ignorée pour les pros
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
    skipFor: ["pro_web"],
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

// Questions spécifiques pro web
export const proQuestions = [
  {
    id: "pro_role",
    question: "Votre spécialité ?",
    options: [
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "fullstack", label: "Fullstack" },
    ],
  },
  {
    id: "pro_stack",
    question: "Stack principale ?",
    options: [
      { id: "react", label: "React / JavaScript" },
      { id: "node", label: "Node.js / PHP / MySQL" },
      { id: "fullstack_stack", label: "Les deux (Fullstack)" },
      { id: "autre", label: "Autre", freeInput: true },
    ],
  },
  {
    id: "pro_duration",
    question: "Durée de la mission ?",
    options: [
      { id: "court", label: "Quelques jours (< 1 semaine)" },
      { id: "semaines", label: "Court terme (1-4 semaines)" },
      { id: "moyen", label: "Moyen terme (1-3 mois)" },
      { id: "long", label: "Long terme (3 mois+)" },
    ],
  },
];

// Options Q2 dynamiques selon profil Q1
export function getQ2Options(profilId) {
  if (profilId === "pro_web") {
    return [
      { id: "renfort", label: "Renfort d'équipe sur un projet en cours" },
      { id: "mission", label: "Mission technique ponctuelle" },
      { id: "autre", label: "Autre", freeInput: true },
    ];
  }
  return [
    { id: "presenter", label: "Présenter mon activité" },
    { id: "vendre", label: "Vendre mes produits en ligne" },
    { id: "blog", label: "Publier des actualités / un blog" },
    { id: "tout", label: "Les trois à la fois" },
    { id: "autre", label: "Autre", freeInput: true },
  ];
}

// ============================================================
// TJM
// ============================================================
const TJM = {
  frontend: { court: 220, long: 200 },
  backend: { court: 250, long: 220 },
  fullstack: { court: 300, long: 250 },
};

function getTJM(role, duration) {
  const isLong = duration === "moyen" || duration === "long";
  const rates = TJM[role] || TJM.fullstack;
  return isLong ? rates.long : rates.court;
}

// ============================================================
// SANITISATION
// ============================================================
function sanitize(str = "") {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 150);
}

// ============================================================
// RECOMMANDATION
// ============================================================
export function getRecommendation(answers, proAnswers = {}) {
  const profil = answers[1]?.id;

  // Profil pro web
  if (profil === "pro_web") {
    const role = proAnswers["pro_role"]?.id || "fullstack";
    const duration = proAnswers["pro_duration"]?.id || "semaines";
    const tjm = getTJM(role, duration);

    const roleLabels = {
      frontend: "Frontend",
      backend: "Backend",
      fullstack: "Fullstack",
    };
    const durationLabels = {
      court: "quelques jours",
      semaines: "1 à 4 semaines",
      moyen: "1 à 3 mois",
      long: "3 mois et plus",
    };

    return {
      isPro: true,
      tjm,
      role: roleLabels[role] || role,
      duration: durationLabels[duration] || duration,
      package_rec: {
        name: "Assistance Technique",
        icon: "💻",
        price: `${tjm} €/jour`,
        delay: `Mission : ${durationLabels[duration]}`,
        description: `Développeur ${roleLabels[role]} disponible pour renfort d'équipe ou mission technique. Stack : React, JavaScript, Node.js, PHP, MySQL. TJM estimé selon votre besoin.`,
      },
      note: "Ce TJM est indicatif et peut être ajusté selon la complexité du projet et les conditions de la mission.",
    };
  }

  // Profil standard
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

  return { isPro: false, package_rec, note };
}

// ============================================================
// MESSAGE PRÉ-REMPLI
// ============================================================
export function buildMessage(answers, proAnswers = {}, recommendation) {
  const profil = answers[1]?.id;

  if (profil === "pro_web") {
    const objectif = answers[2]?.label || "une assistance technique";
    const delai = answers[5]?.label || "à définir";
    const stack = proAnswers["pro_stack"]?.label || "à préciser";

    return `Bonjour Thomas,

Je suis un professionnel du web et je recherche ${sanitize(objectif).toLowerCase()}.

Ma spécialité : ${recommendation.role}
Stack : ${sanitize(stack)}
Durée envisagée : ${recommendation.duration}

D'après votre questionnaire, le TJM estimé est de ${recommendation.tjm} €/jour.

Je souhaite démarrer ${sanitize(delai).toLowerCase()}.

Pourriez-vous me recontacter afin que nous discutions des modalités ?

Merci d'avance.`;
  }

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

  const profilStr =
    profiles[answers[1]?.id] || "je suis intéressé par vos services";
  const objectif =
    objectifs[answers[2]?.id] || "développer ma présence en ligne";
  const budget = budgets[answers[4]?.id] || "à définir";
  const delai = delais[answers[5]?.id] || "à définir";

  return `Bonjour Thomas,

${profilStr.charAt(0).toUpperCase() + profilStr.slice(1)} et je souhaite ${objectif}.

D'après le questionnaire, la formule "${recommendation.package_rec.name}" (${recommendation.package_rec.price}) semble correspondre à mon projet.

Mon budget est ${budget} et je souhaite démarrer ${delai}.

Pourriez-vous me recontacter afin que nous discutions de mon projet ?

Merci d'avance.`;
}
