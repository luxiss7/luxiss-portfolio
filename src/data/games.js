import { imageConfig } from "astro:assets";

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
        image: "/images/games/pokemon-death-life/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu explore des thèmes de bien et de mal à travers une nouvelle région et plus de 120 Pokémons inédites.",
        image: "/images/games/pokemon-death-life/2.png"
      },
      {
        type: "text-image",
        text: "Le gameplay combine des éléments classiques de la 5ème génération avec des mécaniques allant jusqu'à la 7ème génération pour offrir une expérience intéressante.",
        image: "/images/games/pokemon-death-life/3.png"
      }
    ],
    tech: ["PSDK", "Pokemon Studio", "RPG Maker", "Ruby"],
    workMode: "solo",
    projectStyle: ["Pixel Art"],
    genre: "RPG / Aventure",
    duration: "1 an",
    wiki: "https://pokemon-death-life.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "Pokemon Studio",
        note: "Prototype de base",
        link: "downloads/pokemon-death-life-0.1.0.zip"
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
        image: "/images/games/laced-together/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu propose des énigmes basées sur la coordination et la communication entre les joueurs pour progresser à travers différents niveaux.",
        image: "/images/games/laced-together/2.png"
      },
      {
        type: "text-image",
        text: "Le style visuel est coloré et stylisé, avec une ambiance légère et humoristique.",
        image: "/images/games/laced-together/3.png"
      }
    ],
    tech: ["Processing", "Java"],
    workMode: "team",
    projectStyle: ["Pixel Art"],
    genre: "Puzzle / Coopératif",
    duration: "3 mois",
    // wiki: "https://laced-together.luxiss.fr",
    downloads: [
      {
        version: "0.1.0",
        techno: "Processing",
        note: "Prototype de base",
        link: "downloads/laced-together-0.1.0.zip"
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
        image: "/images/games/barcade/1.png"
      },
      {
        type: "image-text",
        text: "Le jeu est conçu pour être joué sur une table connectée équipée d’un écran (non tactile), de deux manettes (1 joystick + 1 bouton) et d’un distributeur de boissons.",
        image: "/images/games/barcade/2.png"
      },
      {
        type: "text-image",
        text: "Les joueurs peuvent s'affronter sur les mini-jeux, avec des malus sous forme de quantité d'alcool dans leur boisson.",
        image: "/images/games/barcade/3.png"
      },
      {
        type: "image-text",
        text: "Une partie se déroule de la manière suivante : Tout d'abord ils choissisent la boisson qu'ils souhaitent boire en fin de partie.",
        image: "/images/games/barcade/4.png"
      },
      {
        type: "text-image",
        text: "Ensuite ils choisissent le mini-jeu auquel ils souhaitent jouer, puis la partie commence. Le perdant reçoit une quantité d'alcool de la boisson choisie plus élevée que le vainqueur.",
        image: "/images/games/barcade/5.png"
      }
    ],
    tech: ["React", "Javascript", "Arduino"],
    workMode: "team",
    projectStyle: ["moderne"],
    genre: "Arcade / Connecté",
    duration: "4 mois",
    downloads: [
      {
        version: "0.1.0",
        techno: "React",
        note: "Version officielle avec deux mini-jeux",
        link: "downloads/barcade-0.1.0.zip"
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
        image: "/images/games/qui-vole-un-oeuf/1.png"
      },
      {
        type: "image-text",
        text: "Les joueurs peuvent placer des figurines équipées de puces RFID sur une croix diréctionelle physique pour déclencher des événements dans le jeu, comme des combats ou des armes.",
        image: "/images/games/qui-vole-un-oeuf/2.png"
      },
      {
        type: "text-image",
        text: "Le projet explore les possibilités de l’interaction physique dans les jeux vidéo, en incluant une tour à dé fonctionnant avec un capteur RBG et un dé coloré.",
        image: "/images/games/qui-vole-un-oeuf/3.png"
      }
    ],
    tech: ["Unity", "C#", "Arduino", "RFID"],
    workMode: "team",
    projectStyle: ["Pixel Art"],
    genre: "RPG / Connecté",
    duration: "6 mois",
    downloads: [
      {
        version: "0.1.0",
        techno: "Unity",
        note: "Version officielle avec interactions RFID",
        link: "downloads/qui-vole-un-oeuf-0.1.0.zip"
      },
      {
        version: "0.2.0",
        techno: "Unity",
        note: "Version avec plus de contenu et d’interactions (artefact, armes, combats)",
        unfinished: true
      }
    ]
  },
  {
    slug: "polyhedrons",
    name: "Polyhedrons VR",
    nickname: "Destruction de formes géométriques",
    status: "cours", // "cours" | "perso" | "avenir"
    shortDescription: "Un jeu VR dont le but est de détruire des polyhèdres avec le geste correspondant",
    description: [
      {
        type: "text-image",
        text: "Polyhedrons est un jeu de réalité virtuelle jouable sans manettes. Grâce au suivi des mains du Lynx R1, toutes les actions sont réalisées avec de simples gestes.",
        image: "/images/games/polyhedrons/1.png"
      },
      {
        type: "image-text",
        text: "Des formes géométriques apparaissent au loin et avancent vers vous. Votre objectif est de les détruire avant qu'elles n'atteignent la HIT ZONE, qui se trouve derrière vous.",
        image: "/images/games/polyhedrons/2.png"
      },
      {
        type: "text-image",
        text: "Pour attaquer, vous devez reproduire des gestes avec vos mains. Chaque geste déclenche un projectile d'une couleur précise.",
        image: "/images/games/polyhedrons/3.png"
      },
      {
        type: "image-text",
        text: "Le geste du carré tire un projectile bleu qui détruit les cubes bleus. Le geste du triangle tire un projectile rouge qui détruit les tétrahèdres rouges. Le geste du cercle tire un projectile jaune qui détruit les sphères jaunes.",
        image: "/images/games/polyhedrons/4.png"
      },
      {
        type: "text-image",
        text: "Attention : une forme ne peut être détruite que par un projectile de la même couleur. Il faut donc reconnaître rapidement les formes et effectuer le bon geste.",
        image: "/images/games/polyhedrons/5.png"
      },
      {
        type: "image-text",
        text: "Vous disposez de cinq vies. Chaque forme qui atteint la HIT ZONE vous en retire une.",
        image: "/images/games/polyhedrons/6.png"
      },
      {
        type: "text-image",
        text: "Plus la partie avance, plus les formes apparaissent rapidement et se déplacent vite. Le but est de survivre le plus longtemps possible et d'obtenir le meilleur score.",
        image: "/images/games/polyhedrons/7.png"
      },
      {
        type: "image-text",
        text: "Les menus utilisent le même principe. Les boutons bleus s'activent en les touchant avec un projectile bleu, tandis que les boutons rouges nécessitent un projectile rouge.",
        image: "/images/games/polyhedrons/8.png"
      },
      {
        type: "text-image",
        text: "Ce projet a été développé en un mois dans le cadre de ma formation en BUT MMI.",
        image: "/images/games/polyhedrons/9.png"
      }
    ],
    tech: ["Unity", "C#", "Lynx", "VR"],
    workMode: "solo",
    projectStyle: ["Blender", "Pixel Art"],
    genre: "VR / Arcade",
    duration: "1 mois",
    downloads: [
      {
        version: "1.1.0",
        techno: "Unity VR",
        note: "Version officielle rendue dans le cadre de ma formation",
        link: "https://drive.google.com/file/d/1xz7j_WfMUAcQl3IIWJNJ2wxIwJCOnbVO/view"
      }
    ]
  },
  {
    slug: "kidd-update",
    name: "Minecraft Kidd Update",
    nickname: "Mise à jour fictive de Minecraft",
    status: "perso", // "cours" | "perso" | "avenir"
    shortDescription: "Un mod Minecraft rajoutant du contenu post-game dans l'End.",
    description: [
      {
        type: "text-image",
        text: "Ce mod Minecraft a tété réalisé avec Mcreator 2025.3 fonctionnant avec Neoforge 21.8.57.",
        image: "/images/games/kidd-update/1.png"
      },
      {
        type: "image-text",
        text: "Il rajoute divers fonctionnalités post-game, dans les 3 dimensions, dans la version 1.21.8 de Minecraft.",
        image: "/images/games/kidd-update/2.png"
      },
      {
        type: "text-image",
        text: "Le premier ajout est la Tomate, un nouveau légume cultivable dans l'overworld. Mais aussi la possibilté de faire du vinaigre de pomme, ou bien même du Fromage.",
        image: "/images/games/kidd-update/3.png"
      },
      {
        type: "image-text",
        text: "Ce mod ajout aussi divers armes, dont des armes du Nether, possédant un pouvoir enflammé mais une durabilité réduite, mais des armes de l'End, qui sont inefficaces tant qu'elles ne sont pas imprégnées d'une énergie particulière.",
        image: "/images/games/kidd-update/4.png"
      },
      {
        type: "text-image",
        text: "Un nouveau minerai peut aussi se trouver dans l'End, ayant des meilleurs propriétés que la Netherite.",
        image: "/images/games/kidd-update/5.png"
      },
      {
        type: "image-text",
        text: "Un nouveau biome apparait aussi dans l'End, proposant de nouveaux mobs et de nouvelles structures.",
        image: "/images/games/kidd-update/6.png"
      },
      {
        type: "text-image",
        text: "Le but ultime de cette mise à jour est de réaliser les 7 nouveaux progrès dans l'End.",
        image: "/images/games/kidd-update/7.png"
      },
      {
        type: "image-text",
        text: "Complétez ces 7 défis et vous obtiendrez un nouveau Totem... à vous de découvrir son utilité.",
        image: "/images/games/kidd-update/8.png"
      }
    ],
    tech: ["Mcreator", "Java", "json"],
    workMode: "solo",
    projectStyle: ["Blockbench", "Pixel Art"],
    genre: "Mod / Neoforge",
    duration: "1 mois",
    downloads: [
      {
        version: "1.0.0",
        techno: "Mcreator",
        note: "Première version avec NeoForge en 1.21.8",
        link: "downloads/kidd-1.0.0-neoforge-1.21.8.jar"
      }
    ]
  }
];
