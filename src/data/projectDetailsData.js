// ============================================================
// projectDetailsData.js — données des projets
// ============================================================

export const projects = {
  shortly: {
    title: "Shortly",
    images: [
      "/images/shortly/shortly1.png",
      "/images/shortly/shortly2.png",
      "/images/shortly/shortly3.png",
    ],
  },
  ferme: {
    title: "La ferme des possibles",
    images: [
      "/images/ferme/ferme1.png",
      "/images/ferme/ferme2.png",
      "/images/ferme/ferme3.png",
      "/images/ferme/ferme4.png",
      "/images/ferme/ferme5.png",
      "/images/ferme/ferme6.png",
      "/images/ferme/ferme7.png",
      "/images/ferme/ferme8.png",
      "/images/ferme/ferme9.png",
    ],
  },
  league: {
    title: "League",
    images: [
      "/images/league/league1.png",
      "/images/league/league2.png",
      "/images/league/league3.png",
      "/images/league/league4.png",
      "/images/league/league5.png",
      "/images/league/league6.png",
      "/images/league/league7.png",
    ],
  },
  metm: {
    title: "Marcelle & Maurice Shop",
    label: "E-commerce · Fullstack",
    description: [
      "Projet de fin d'étude avec la 3W Academy.",
      "Application e-commerce fullstack permettant de personnaliser des objets (mugs, t-shirts, pins) en temps réel avant de les commander. L'utilisateur peut importer une image, ajuster sa position, sa taille et sa forme directement sur l'objet, puis procéder au paiement via Stripe.",
    ],
    tags: [
      "React",
      "Vite",
      "Sass",
      "PHP",
      "MySQL",
      "Stripe",
      "Axios",
      "Swiper",
    ],
    links: [
      {
        label: "Voir le site",
        url: "https://thomasr35.github.io/MetM-Front/#/",
      },
      {
        label: "GitHub Front",
        url: "https://github.com/thomasr35/MetM-Front",
      },
      {
        label: "GitHub Back",
        url: "https://github.com/thomasr35/MetM-Back",
      },
    ],
    blocks: [
      {
        icon: "🎨",
        tag: "PERSONNALISATION",
        title: "Interface de customisation en temps réel",
        body: "L'utilisateur importe une image, choisit sa forme (carré ou rond), ajuste le zoom, la position verticale et horizontale, la police et la couleur du texte — le tout affiché en direct sur l'objet.",
        from: "left",
      },
      {
        icon: "🛒",
        tag: "E-COMMERCE",
        title: "Panier, commandes et paiement Stripe",
        body: "Système de panier complet avec gestion des quantités, confirmation de suppression, et tunnel de paiement intégré via Stripe (mode test). Historique des commandes disponible dans l'espace compte.",
        from: "right",
      },
      {
        icon: "🖼️",
        tag: "GALERIE",
        title: "Galerie d'images avec filtres par catégorie",
        body: "Galerie collaborative avec système de tags (Chat, Mignon, Kandinsky…), filtrage dynamique et téléchargement d'images. Les utilisateurs peuvent uploader leurs propres visuels.",
        from: "left",
      },
      {
        icon: "⚙️",
        tag: "BACK-END",
        title: "API REST PHP + MySQL",
        body: "Back-end développé en PHP avec une base de données MySQL. Gestion des utilisateurs, authentification, commandes, produits et uploads via une API REST consommée par le front en Axios.",
        from: "right",
      },
    ],
    images: [
      "/images/metm/metm1.png",
      "/images/metm/metm2.png",
      "/images/metm/metm3.png",
      "/images/metm/metm4.png",
      "/images/metm/metm5.png",
      "/images/metm/metm6.png",
      "/images/metm/metm7.png",
      "/images/metm/metm8.png",
      "/images/metm/metm9.png",
    ],
  },
};
