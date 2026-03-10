# 🌐 WestDev — Portfolio

> Portfolio personnel de **Thomas Riou**, développeur web frontend basé en Bretagne.
> Conçu et développé de A à Z avec React et Vite, déployé sur [westdev.fr](https://westdev.fr).

---

## ✨ Aperçu

Site portfolio single-page avec animations au scroll, design en blocs cohérents sur toutes les pages, formulaire de contact fonctionnel et déploiement continu via Vercel.

---

## 🛠️ Stack technique

| Catégorie       | Technologies                        |
| --------------- | ----------------------------------- |
| **Frontend**    | React 18, React Router v7, JSX      |
| **Style**       | SCSS (architecture 7-1), CSS3       |
| **Build**       | Vite 6, ESLint                      |
| **Contact**     | EmailJS                             |
| **Versioning**  | Git, GitHub                         |
| **Déploiement** | Vercel, nom de domaine personnalisé |

---

## 📁 Structure du projet

```
src/
├── assets/                  # Logo et images statiques
├── components/              # Composants réutilisables
│   ├── AnimatedBlock.jsx    # Bloc animé au scroll
│   ├── ContactForm.jsx      # Formulaire de contact isolé
│   ├── Header.jsx
│   └── Footer.jsx
├── data/                    # Données métier séparées du JSX
│   ├── homeData.js
│   ├── aboutData.js
│   ├── projectsData.js
│   ├── projectDetailsData.js
│   └── contactConfig.js
├── hooks/                   # Hooks personnalisés
│   ├── useInView.js         # Détection scroll (IntersectionObserver)
│   ├── useContactForm.js    # Logique formulaire + EmailJS
│   └── useProjectDetails.js
├── pages/                   # Pages de l'application
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   └── Contact.jsx
└── styles/
    ├── components/          # _header.scss, _footer.scss, _blocks.scss
    ├── pages/               # _home.scss, _about.scss, _projects.scss
    │                        # _contact.scss, _projectDetails.scss
    ├── _variables.scss      # Variables unifiées
    ├── _mixins.scss
    ├── _base.scss
    └── main.scss
```

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/thomasR35/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

---

## 📦 Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run lint       # Linter ESLint
```

---

## 🌍 Déploiement

Le projet est déployé automatiquement sur **Vercel** à chaque push sur la branche `main`.

- **Production** → [westdev.fr](https://westdev.fr)
- **Preprod** → branche `preprod` déployée sur URL Vercel preview

---

## 📬 Contact

Thomas Riou — [thomasriou.35@gmail.com](mailto:thomasriou.35@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thomas%20Riou-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/thomas-riou-3a1b3b1b3/)
[![GitHub](https://img.shields.io/badge/GitHub-thomasR35-181717?style=flat&logo=github)](https://github.com/thomasR35)

---

Fait avec ☕ à Saint-Briac-sur-Mer en 2026.
