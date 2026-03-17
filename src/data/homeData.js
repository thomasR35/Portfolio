// ============================================================
// homeData.js — contenu des blocs de la page Home
// ============================================================

export const homeBlocks = [
  {
    id: 1,
    from: "left",
    icon: "🖥️",
    tag: "Votre présence en ligne",
    title: "Un site web qui vous ressemble",
    text: "Je crée des sites modernes, rapides et adaptés à tous les écrans — téléphone, tablette, ordinateur. Vos clients vous trouvent facilement et gardent une bonne impression dès la première visite.",
    accent: "accent-green",
    badge: "disponible pour missions freelance",
  },
  {
    id: 2,
    from: "right",
    icon: "⚙️",
    tag: "Gestion simplifiée",
    title: "Mettez à jour votre contenu vous-même",
    text: "Besoin de modifier vos horaires, ajouter une actualité ou publier un article ? Je vous livre un site avec un espace d'administration simple, sans avoir besoin de compétences techniques.",
    accent: "accent-red",
    badge: "disponible pour missions freelance",
  },
  {
    id: 3,
    from: "left",
    icon: "🛒",
    tag: "Vente en ligne",
    title: "Vendez vos produits 24h/24",
    text: "Boutique en ligne, paiement sécurisé, gestion des commandes — je mets en place tout ce qu'il faut pour que vos clients puissent acheter chez vous à n'importe quelle heure.",
    accent: "accent-yellow",
    badge: "disponible pour missions freelance",
  },
  {
    id: 4,
    from: "right",
    icon: "📍",
    tag: "Visibilité locale",
    title: "Soyez trouvé sur Google",
    text: "J'optimise votre site pour qu'il apparaisse dans les résultats de recherche locaux. Que vous soyez artisan, commerçant ou prestataire de services, vos futurs clients vous trouveront.",
    accent: "accent-purple",
    badge: "disponible pour missions freelance",
  },
];

export const homePackages = [
  {
    id: 1,
    icon: "🖥️",
    name: "Site Vitrine",
    description:
      "Idéal pour présenter votre activité et être trouvé sur Google.",
    features: [
      "Jusqu'à 5 pages (accueil, à propos, services, contact…)",
      "Design responsive tous écrans",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Mise en ligne incluse",
    ],
    price: "À partir de 200 €",
    delay: "Livré en 1 à 2 semaines",
    accent: "accent-green",
    cta: "Je veux ce site",
  },
  {
    id: 2,
    icon: "📝",
    name: "Vitrine + Blog",
    description: "Pour publier des actualités et fidéliser vos clients.",
    features: [
      "Tout le pack Vitrine",
      "Espace blog intégré",
      "Interface d'administration simple",
      "Publiez vos articles sans coder",
      "Référencement renforcé",
    ],
    price: "À partir de 400 €",
    delay: "Livré en 2 à 3 semaines",
    accent: "accent-yellow",
    cta: "Je veux ce site",
    highlight: true,
  },
  {
    id: 3,
    icon: "🛒",
    name: "E-commerce",
    description: "Vendez vos produits en ligne, 24h/24 et 7j/7.",
    features: [
      "Tout le pack Vitrine + Blog",
      "Boutique en ligne complète",
      "Paiement sécurisé en ligne",
      "Gestion des commandes",
      "Catalogue produits illimité",
    ],
    price: "À partir de 700 €",
    delay: "Livré en 3 à 5 semaines",
    accent: "accent-red",
    cta: "Je veux ce site",
  },
];

export const homeMaintenance = {
  icon: "🔧",
  title: "Maintenance mensuelle",
  description:
    "Je m'occupe des mises à jour, de la sécurité et du suivi de votre site.",
  price: "À partir de 20 €/mois",
};
