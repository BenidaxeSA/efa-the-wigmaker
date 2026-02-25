import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Créations", hash: "#Creations" },
  { name: "Expertise", hash: "#expertise" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

// --- Créations (pour le carousel) ---
export const creationDATA = [
  {
    title: "Wig Luxueuse 1",
    description: "Une création capillaire sur-mesure mettant en valeur l’élégance et la finesse des fibres.",
    imageUrl: "/Images/EFA1.png",
  },
  {
    title: "Wig Luxueuse 2",
    description: "Un style sophistiqué et moderne, reflet du savoir-faire EFA.",
    imageUrl: "/images/FILLE.png",
  },
  {
    title: "Wig Luxueuse 3",
    description: "Une coupe et une texture parfaites, conçues pour sublimer chaque cliente.",
    imageUrl: "/images/wig3.jpg",
  },
  {
    title: "Wig Luxueuse 4",
    description: "Finition impeccable et style unique pour un look haut de gamme.",
    imageUrl: "/images/wig4.jpg",
  },
] as const;

// --- Savoir-faire (pour la section expertise / process) ---
export const savoirfaireDATA = [
  {
    type: "image",
    src: "/images/PHOT.png",
    title: "CUSTOMISATION",
    description: "Une lace travaillée avec précision pour épouser parfaitement la hairline de la cliente.",
  },
  {
    type: "image",
    src: "/images/FILLE2.png",
    title: "Conception sur-mesure",
    description: "Chaque wig est conçue selon les mesures et préférences exactes de la cliente.",
  },
  {
    type: "video",
    src: "/videos/FILLE33.mp4",
    title: "Finition haut de gamme 1",
    description: "Vidéo démontrant nos finitions de luxe.",
  },
  {
    type: "video",
    src: "/videos/FILLE2355.mp4",
    title: "Finition haut de gamme 2",
    description: "Vidéo illustrant notre savoir-faire artisanal.",
  },
] as const;

export const experiencesData = [
  {
    title: "Support IT / Data operators",
    location: "BAO | CDD",
    description:
      "Suivi et sécurisation des flux financiers et des bases de données sensibles. Supervision de +50 postes et serveurs.Mise en place d’outils de pilotage et d’analyse via SQL et Power BI, incluant la création de plusieurs tableaux de bord interactifs pour le suivi des indicateurs clés et mise en place d'outils de monitoring et reporting, améliorant la fiabilité des données de 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2025 - 08/2025",
  },
  {
    title: "Gestionnaire Support IT",
    location: "BCICDD",
    description:
      "Gestion des incidents utilisateurs via ITIL et supervision (Zabbix). Maintenance et déploiement de serveurs Windows Server/Linux Ubuntu. Support technique sur 100+ postes et requêtes SQL pour la base clients.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2022 - 06/2024",
  },
  {
     title: "Mastère Spécialisation Ingénierie Data & IA (En cours)",
    location: "ECE, Paris",
    description:
      "Spécialisation en Ingénierie des données, Big Data, Machine Learning. Projets: modèles de scoring, conception de dashboards BI, gouvernance de la donnée.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - 2027 (En cours)",
  },
] as const;

export const projectsData = [
  {
    title: "Scraping et analyse de données IMDb",
    description:
      "Collecte et analyse de données de films depuis IMDb (titres, genres, notes, année de sortie) via web scraping. Exploration des tendances du cinéma, identification des genres les mieux notés et visualisation de l’évolution des films populaires dans le temps.",
    tags: ["Python", "BeautifulSoup", "Pandas"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Petit site de recherche d’emplois pour développeurs en télétravail. J’ai développé le front-end avec des fonctionnalités simples comme le filtrage, le tri et la pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Projets Personnels & Futurs Lancements",
    description:
      "Développement d’applications financières et d’un futur site e-commerce pour étudiants, avec l’objectif de lancer mes propres produits numériques.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // --- Web / Full-Stack (déjà présents)
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  // --- Compétences Data & IT ajoutées ---
  "Power BI",
  "Tableau",
  "SQL (avancé)",
  "Apache Spark",
  "Airflow",
  "AWS (S3, Glue, Lambda)",
  "Docker",
  "CI/CD",
  "Linux",
  "Windows Server",
  "Data Governance",
  "Réseaux & Cybersécurité",
] as const;
