export const sites = [
  {
    slug: "luxiss",
    name: "Luxiss.fr",
    nickname: "Luxiverse",
    status: "perso", // "cours" | "perso" | "avenir"
    shortDescription: "Un site portfolio immersif qui explore les fragments de mémoire à travers des simulations interactives.",
    description: [
      {
        type: "text-image",
        text: "Ce site est conçu comme une expérience immersive, où chaque projet est présenté comme un fragment de mémoire du créateur, reconstitué par une intelligence artificielle nommée Versa.",
        image: "/images/web/luxiss/1.png"
      },
      {
        type: "image-text",
        text: "Le design du site s'inspire de l'esthétique cybernétique, avec des éléments visuels évoquant la technologie et la mémoire.",
        image: "/images/web/luxiss/2.png"
      },
      {
        type: "text-image",
        text: "Le site est construit avec Astro, utilisant JavaScript et Tailwind CSS pour créer une interface fluide et responsive.",
        image: "/images/web/luxiss/3.png"
      }
    ],
    tech: ["astro", "JavaScript"],
    type: "Portfolio",
    duration: "6 mois"
  },
  {
    slug: "pokepreuve",
    name: "Poképreuve",
    nickname: "Challenge Pokémon",
    status: "avenir",
    shortDescription: "Un site pour les joueurs de Pokémons pour tester leurs connaissances.",
    description: [
      {
        type: "text-image",
        text: "Poképreuve est un projet de site web qui propose des quiz et des défis pour les fans de Pokémon afin de tester leurs connaissances sur l'univers Pokémon.",
        image: "/images/web/pokepreuve/1.png"
      },
      {
        type: "image-text",
        text: "Le site propose  3 différents mini-jeux qui consistent à : Trouver un Pokémon valide correspondant à des critères spécifiques, Trouver la liste des Pokémons valides correspondant à un double type, Dire si l'info sur le Pokémon est vraie ou fausse.",
        image: "/images/web/pokepreuve/2.png"
      }
    ],
    tech: ["Vue", "JavaScript"],
    type: "Quizz",
    duration: "3 mois"
  },
    {
    slug: "tuleap",
    name: "Tuleap - Dark mode",
    nickname: "Ajout d'un mode sombre",
    status: "cours",
    shortDescription: "L'ajout de la préférence utilisateur permettant d'activer le mode sombre sur le site existant.",
    description: [
      {
        text : "Enalean est l'entreprise dans laquelle j'ai effectué mon alternance pour la dernière année de ma formation MMI. Cette entreprise est spécialisé dans la création de Tuleap, un outil de gestion de projet agile.",
        image: "/images/web/tuleap/1.png"
      },
      {
        text: "Tuleap possède différentes fonctionnalités pouvant être ajustées aux besoins du projet, tel que le suivi des activités, la gestion du code, la gestion des test ainsi que la documentation du projet.",
        image: "/images/web/tuleap/2.png"
      },
      {
        text: "Le besoin d'un mode sombre sur Tuleap commençait à se faire ressentir car c'est un mode d'affichage particulièrement utilisé par nos clients sur leurs autres outils, et le changement de page entre les logiciels leur abîmaient les yeux.",
        image: "/images/web/tuleap/3.png"
      },
      {
        text: "Afin d’ajouter cette préférence utilisateur, j’ai donc développé en PHP un moyen de stocker la variable choisi par l’utilisateur, et de l’appliquer directement sur le body via un data-attribute.",
        image: "/images/web/tuleap/4.png"
      },
      {
        text: "J’ai ensuite modifier la page « Apparence » afin d’y ajouter 3 boutons radios en fonction des modes disponibles : mode clair, mode sombre et le mode par défaut du système. J’ai développé cette partie en mustache que j’ai pu découvrir et prendre en main en autonomie.",
        image: "/images/web/tuleap/5.png"
      },
      {
        text: "Chaque préférence force donc l’affichage souhaité, permettant de changer en temps réel le visuel de la page. Pour que le site affiche la bonne version de Tuleap, j’ai utilisé la fonctionnalité « color-scheme » qui vient changer en fonction de la valeur de la data-attribute.",
        image: "/images/web/tuleap/6.png",
      },
      {
        text: "Pour le style de la page, je me suis inspiré de la maquette du designer d’Enalean, et créé une variante en changeant les couleurs, tout en respectant la charte graphique du produit. Une fois la maquette validée, j’ai donc appliqué les changement en utilisant SCSS.",
        image: "/images/web/tuleap/7.png"
      }
    ],
    tech: ["php", "mustache", "TypeScript", "SCSS"],
    type: "Design",
    duration: "12 mois en alternance"
  }
];