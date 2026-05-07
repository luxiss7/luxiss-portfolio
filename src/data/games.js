export const games = [
  {
    slug: "pokemon-death-life",
    name: "Pokémon Death & Life",
    nickname: "Pokémon Mort & Vie",
    status: "perso", // "cours" | "perso" | "avenir"
    shortDescription: "Un fangame Pokémon avec une aventure inédite dans une nouvelle région et plus de 120 Pokémons originaux.",
    description: [
      {
        type: "text-image",
        text: "Pokémon Death & Life est un projet de fangame qui réimagine l’univers Pokémon avec une histoire originale.",
        image: "/assets/games/pokemon-death-life/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu explore des thèmes de bien et de mal à travers une nouvelle région et plus de 120 Pokémons inédites.",
        image: "/assets/games/pokemon-death-life/2.png"
      },
      {
        type: "text-image",
        text: "Le gameplay combine des éléments classiques de la 5ème génération avec des mécaniques allant jusqu'à la 7ème génération pour offrir une expérience intéressante.",
        image: "/assets/games/pokemon-death-life/3.png"
      }
    ],
    tech: ["PSDK", "Pokemon Studio", "RPG Maker", "Ruby"],
    genre: "RPG / Aventure",
    duration: "1 an",
    wiki: "https://pokemon-death-life.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "Pokemon Studio",
        note: "Prototype de base",
        link: "../assets/games/downloads/pokemon-death-life-0.1.0.zip"
      },
      {
        version: "0.2.0",
        techno: "PSDK",
        note: "Version avec quelques zones jouables",
        unfinished: true
      }
    ]
  },
  {
    slug: "laced-together",
    name: "Laced Together",
    nickname: "Simulation coopérative",
    status: "cours", // "cours" | "perso" | "avenir"
    shortDescription: "Un jeu co-op où des chaussures attachées par un lacet doivent résoudre des énigmes ensemble.",
    description: [
      {
        type: "text-image",
        text: "Laced Together est une simulation coopérative où les joueurs incarnent des chaussures liées par des lacets.",
        image: "/assets/games/laced-together/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu propose des énigmes basées sur la coordination et la communication entre les joueurs pour progresser à travers différents niveaux.",
        image: "/assets/games/laced-together/2.png"
      },
      {
        type: "text-image",
        text: "Le style visuel est coloré et stylisé, avec une ambiance légère et humoristique.",
        image: "/assets/games/laced-together/3.png"
      }
    ],
    tech: ["Processing", "Java"],
    genre: "Puzzle / Coopératif",
    duration: "3 mois",
    // wiki: "https://laced-together.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "Processing",
        note: "Prototype de base",
        link: "#"
      },
      {
        version: "0.2.0",
        techno: "Unity",
        note: "Version refonte avec Unity",
        unfinished: true
      }
    ]
  },
  {
    slug: "barcade",
    name: "Barcade",
    nickname: "Jeu d'arcade connecté",
    status: "cours", // "cours" | "perso" | "avenir"
    shortDescription: "Deux mini-jeux d'arcade jouable sur une table connectée à un distributeur de boisson physique.",
    description: [
      {
        type: "text-image",
        text: "Barcade est un projet de jeu d'arcade connecté qui comprend deux mini-jeux : un jeu style Pong et un jeu de Pac-man 1vs1.",
        image: "/assets/games/barcade/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu est conçu pour être joué sur une table connectée équipée d’un écran (non tactile), de deux manettes (1 joystick + 1 bouton) et d’un distributeur de boissons.",
        image: "/assets/games/barcade/2.png"
      },
      {
        type: "text-image",
        text: "Les joueurs peuvent s'affronter sur les mini-jeux, avec des malus sous forme de quantité d'alcool dans leur boisson.",
        image: "/assets/games/barcade/3.png"
      },
      {
        type: "image-text",
        text: "Une partie se déroule de la manière suivante : Tout d'abord ils choissisent la boisson qu'ils souhaitent boire en fin de partie.",
        image: "/assets/games/barcade/4.png"
      },
      {
        type: "text-image",
        text: "Ensuite ils choisissent le mini-jeu auquel ils souhaitent jouer, puis la partie commence. Le perdant reçoit une quantité d'alcool de la boisson choisie plus élevée que le vainqueur.",
        image: "/assets/games/barcade/5.png"
      }
    ],
    tech: ["React", "Javascript", "Arduino"],
    genre: "Arcade / Connecté",
    duration: "4 mois",
    // wiki: "https://barcade.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "React",
        note: "Version officielle avec deux mini-jeux",
        link: "#"
      }
    ]
  },
  {
    slug: "qui-vole-un-oeuf",
    name: "Qui Vole un Œuf, vole un Dragon",
    nickname: "Simulation de captation de RFID",
    status: "cours", // "cours" | "perso" | "avenir"
    shortDescription: "Un RPG qui fonctionne avec des capteurs RFID pour un projet de table interactive.",
    description: [
      {
        type: "text-image",
        text: "Qui Vole un Œuf, vole un Dragon est un projet de jeu de rôle qui utilise des capteurs RFID pour interagir avec une table de jeu physique.",
        image: "/assets/games/qui-vole-un-oeuf/1.png"
      },
      {
        type: "image-text",
        text: "Les joueurs peuvent placer des figurines équipées de puces RFID sur une croix diréctionelle physique pour déclencher des événements dans le jeu, comme des combats ou des armes.",
        image: "/assets/games/qui-vole-un-oeuf/2.png"
      },
      {
        type: "text-image",
        text: "Le projet explore les possibilités de l’interaction physique dans les jeux vidéo, en incluant une tour à dé fonctionnant avec un capteur RBG et un dé coloré.",
        image: "/assets/games/qui-vole-un-oeuf/3.png"
      }
    ],
    tech: ["Unity", "C#", "Arduino", "RFID"],
    genre: "RPG / Connecté",
    duration: "6 mois",
    // wiki: "https://qui-vole-un-oeuf.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "Unity",
        note: "Version officielle avec interactions RFID",
        link: "#"
      },
      {
        version: "0.2.0",
        techno: "Unity",
        note: "Version avec plus de contenu et d’interactions (artefact, armes, combats)",
        unfinished: true
      }
    ]
  }
];
