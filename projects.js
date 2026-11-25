const LOGOS = {
  site:          "logo.png",
  favicon:       "favicon.png",

  diba:          "diba.png",
  dicm:          "dicm.png",
  dioa:          "dioa.png",
  iconicDesktop: "iconic-desktop.png",
  chakchoka:     "chakchoka.png",
};

const PROFILE = {
  githubUsername: "Bilel-Ben-Jmaa",
  name: "Bilel Ben Jmaa",
  role: "Ingénieur en génie civil",
  school: "ENIS · Sfax, Tunisie",
  chips: ["Curiosité", "Innovation", "Détermination"],
  tagline:
    "Je relie le calcul de structures et la programmation : des outils qui automatisent les vérifications et les plans.",
  email: "bilelbenjmaa.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilelbenjmaa",
  youtube: "https://www.youtube.com/@Bilel_Ben_Jmaa",
  phone: "+216 99 70 30 24",
  qrUrl: "https://linktr.ee/bilelbenjmaa",
};

const CV = {
  formation: [
    { when: "2022",           what: "Baccalauréat technique" },
    { when: "2023 – 2024",    what: "Cycle préparatoire (PT)" },
    { when: "2025 – 2027", what: "Cycle ingénieur en génie civil", where: "ENIS · Sfax" },
  ],
  experiences: [
    { when: "2 mois", what: "Stage ouvrier",    where: "Entreprise de Saïd Fakhfakh" },
    { when: "1 mois", what: "Stage technicien", where: "Bureau d’études Moalla Anouar" },
    { when: "1 mois", what: "Stage technicien", where: "Bureau d’études SCAM" },
  ],
  // Formations que j’ai animées (moi le formateur)
  teaching: [
    { when: "YouTube", what: "Formateur — série de formations vidéo",
      where: "Formation conçue et animée par moi",
      url: "https://www.youtube.com/playlist?list=PLHeHdC0Jwbeo",
      urlLabel: "▶ Voir la playlist ↗" },
  ],
  skills: [
    { title: "Génie civil",
      items: ["AutoCAD", "Robot Structural Analysis", "Revit", "Tekla Structures", "Arche", "Piste", "Global Mapper", "Alizé"] },
    { title: "Bureautique & création",
      items: ["Word", "PowerPoint", "Excel", "Access", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"] },
    { title: "Programmation", items: ["Python", "VBA"] },
  ],
  interests: [
    "Construction en béton", "Construction métallique", "Ouvrages d’art / Routes",
    "Hydrologie / Hydraulique", "BIM / Modélisation", "Programmation",
  ],
  languages: [
    { name: "Arabe",    level: 100 },
    { name: "Français", level: 30 },
    { name: "Anglais",  level: 30 },
  ],
};

const PROJECTS = [
  {
    name: "DIBA",
    category: "civil",
    soon: true,
    icon: LOGOS.diba,
    accent: "#0e9aa7",
  },
  {
    name: "DICM",
    category: "civil",
    soon: true,
    icon: LOGOS.dicm,
    accent: "#ec4899",
  },
  {
    name: "DIOA",
    category: "civil",
    soon: true,
    icon: LOGOS.dioa,
    accent: "#ee6c2d",
  },
  {
    name: "Iconic Desktop",
    tag: "Application",
    description:
      "Organise les icônes du bureau en groupes et accélère l'accès aux applications sous Windows.",
    long:
      "Iconic Desktop est un utilitaire Windows conçu pour mieux organiser le bureau grâce à la gestion des groupes d'applications, la personnalisation de l'affichage des icônes et une recherche rapide accessible via Ctrl+Alt+Space. Il permet de verrouiller la position des icônes, d'afficher des indicateurs sur les applications ouvertes et de gérer facilement chaque groupe.",
    features: [
      "Recherche rapide via le raccourci Ctrl+Alt+Space",
      "Gestion des groupes d'applications (création, renommage, duplication, affichage en dossier et suppression)",
      "Personnalisation de la taille, de la disposition, des bordures et du verrouillage des icônes",
      "Indicateur sur les applications ouvertes et liste des applications dans l'info-bulle",
      "Démarrage automatique avec Windows et choix de la langue",
    ],
    tech: ["Windows", "Desktop"],
    repo: "Iconic-Desktop-Setup",
    icon: LOGOS.iconicDesktop,
    accent: "#a78bfa",
    downloads: [],
  },
  {
    name: "ChakChoka",
    tag: "Application",
    description:
      "Corrige instantanément les textes tapés avec la mauvaise langue de clavier.",
    long:
      "ChakChoka est un utilitaire léger fonctionnant en arrière-plan sous Windows qui résout les erreurs de frappe liées au changement de langue ou de disposition du clavier (par exemple entre l'arabe et le français). Déclenchable instantanément via un raccourci clavier (Ctrl + Alt + D) ou un clic molette (Ctrl + clic molette), il offre également des outils pratiques de traduction, de modification de la casse et de basculement automatique de clavier, tout en restant hautement personnalisable.",
    features: [
      "Correction instantanée des textes mal saisis (Arabe / Français)",
      "Déclenchement rapide via Ctrl + Alt + D ou Ctrl + clic molette",
      "Basculement automatique de la langue du clavier et choix des dispositions",
      "Outils intégrés de traduction et de changement de casse",
      "Personnalisation complète : raccourcis, animations, retour sonore et applications exclues",
      "Lancement automatique au démarrage de Windows",
    ],
    tech: ["Windows"],
    repo: "ChakChoka-Setup",
    icon: LOGOS.chakchoka,
    accent: "#f97316",
    downloads: [],
  },
];
