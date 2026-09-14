// Initialisation du canvas et contexte de dessin
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables du jeu
let pieces = 0;
let botPieces = 0;
let tourPv = 10;
let botPv = 10;
const MAX_PIECES = 10;

// Dimensions
const TAILLE_TOUR = 40;
const VITESSE_AVANCE = 2;
const PORTEE_ATTAQUE = 2;

// Représentation des troupes
const troupes = [
    { nom: 'Recrue', cout: 1, attaque: 1, vitesse: 1, pv: 3, couleur: '#b6ff00' },
    { nom: 'Mercenaire', cout: 2, attaque: 1.5, vitesse: 0.75, pv: 6, couleur: '#b6ff00' },
    { nom: 'Colosse', cout: 3, attaque: 3, vitesse: 0.5, pv: 9, couleur: '#b6ff00' }
];

let jeuTermine = false;
let troupesJoueur = [];
let troupesBot = [];
let botTroupeEnAttente = null;

// Position des tours
const positionTourJoueur = 50;
const positionTourBot = canvas.width - 100;

// Sprites des troupes
const troupeSprites = {
    Recrue: new Image(),
    Mercenaire: new Image(),
    Colosse: new Image()
};
troupeSprites.Recrue.src = "sprites/green/small.png";
troupeSprites.Mercenaire.src = "sprites/green/medium.png";
troupeSprites.Colosse.src = "sprites/green/big.png";

// Sprite de la tour
const tourSprite = new Image();
tourSprite.src = "sprites/green/tour.png";

// Sprites des troupes du bot
const troupeSpritesBot = {
    Recrue: new Image(),
    Mercenaire: new Image(),
    Colosse: new Image()
};

troupeSpritesBot.Recrue.src = "sprites/pink/small.png";
troupeSpritesBot.Mercenaire.src = "sprites/pink/medium.png";
troupeSpritesBot.Colosse.src = "sprites/pink/big.png";

// Sprite de la tour du bot
const tourSpriteBot = new Image();
tourSpriteBot.src = "sprites/pink/tour.png";

// Taille des frames pour chaque troupe
const FRAMES = {
    Recrue: { w: 20, h: 20 },
    Mercenaire: { w: 30, h: 30 },
    Colosse: { w: 40, h: 40 }
};
const FRAME_COUNT = 4;

// Dessiner la scène
function dessiner() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tours (avec sprite)
    ctx.drawImage(
        tourSprite,
        positionTourJoueur, canvas.height - TAILLE_TOUR * 2 - 30, TAILLE_TOUR, TAILLE_TOUR * 2
    );
    ctx.drawImage(
        tourSpriteBot,
        positionTourBot, canvas.height - TAILLE_TOUR * 2 - 30, TAILLE_TOUR, TAILLE_TOUR * 2
        
    );

    // Troupes joueur
    troupesJoueur.forEach((troupe) => {
        dessinerTroupeAnimee(troupe);
    });

    // Troupes bot
    troupesBot.forEach((troupe) => {
        dessinerTroupeAnimee(troupe);
    });

    // Infos
    document.getElementById("pieces").textContent = `Pièces: ${pieces}`;
    document.getElementById("tour-pv").textContent = `Tour PV: ${tourPv}`;
    document.getElementById("bot-pieces").textContent = `Bot Pièces: ${botPieces}`;
    document.getElementById("bot-pv").textContent = `Bot Tour PV: ${botPv}`;

    // Fin de partie
    if (tourPv <= 0) {
        document.getElementById("message").textContent = "Vous avez perdu !";
        jeuTermine = true;
    } else if (botPv <= 0) {
        document.getElementById("message").textContent = "Vous avez gagné !";
        jeuTermine = true;
    }
}

// Fonction pour dessiner une troupe animée
function dessinerTroupeAnimee(troupe) {
    const nom = troupe.nom;
    const isBot = troupesBot.includes(troupe);
    const sprite = isBot ? troupeSpritesBot[nom] : troupeSprites[nom];

    const frameW = FRAMES[nom].w;
    const frameH = FRAMES[nom].h;
    let statutIndex = 0;
    if (troupe.statut === "idle") statutIndex = 0;
    if (troupe.statut === "walk") statutIndex = 1;
    if (troupe.statut === "attack") statutIndex = 2;
    if (troupe.statut === "hurt") statutIndex = 3;

    // Si la troupe est du bot, on flippe horizontalement
    if (isBot) {
        ctx.save();
        ctx.translate(troupe.x + frameW / 2, troupe.y + frameH / 2);
        ctx.scale(-1, 1);
        ctx.drawImage(
            sprite,
            frameW * statutIndex, 0, frameW, frameH,
            -frameW / 2, -frameH / 2, frameW, frameH
        );
        ctx.restore();
    } else {
        ctx.drawImage(
            sprite,
            frameW * statutIndex, 0, frameW, frameH,
            troupe.x, troupe.y, frameW, frameH
        );
    }
}

// Gagner des pièces toutes les 2 secondes (max 10)
function gagnerPieces() {
    if (!jeuTermine && pieces < MAX_PIECES) pieces++;
}
function gagnerPiecesBot() {
    if (!jeuTermine && botPieces < MAX_PIECES) botPieces++;
}

// Invoquer une troupe (joueur)
function invoquerTroupe(index) {
    if (jeuTermine) return;
    const troupe = troupes[index];
    if (pieces >= troupe.cout) {
        pieces -= troupe.cout;
        let nom = troupe.nom;
        let taille = FRAMES[nom].h;
        troupesJoueur.push({
            ...troupe,
            x: positionTourJoueur + TAILLE_TOUR + 2,
            y: canvas.height - taille - 30,
            cooldown: 0,
            cible: "tour",
            statut: "walk", // walk au début
            frame: 0,
            frameTime: 0,
            bloquee: false // <-- Ajouté
        });
        dessiner();
    } else {
        document.getElementById("message").textContent = "Pas assez de pièces !";
        setTimeout(() => document.getElementById("message").textContent = "", 2000);
    }
}

// Bot : Choix et invocation
function boucleBot() {
    if (jeuTermine) return;
    if (!botTroupeEnAttente) {
        botTroupeEnAttente = troupes[Math.floor(Math.random() * troupes.length)];
    }
    if (botPieces >= botTroupeEnAttente.cout) {
        let nom = botTroupeEnAttente.nom;
        let taille = FRAMES[nom].h;
        botPieces -= botTroupeEnAttente.cout;
        troupesBot.push({
            ...botTroupeEnAttente,
            x: positionTourBot - TAILLE_TOUR - 2,
            y: canvas.height - taille - 30,
            cooldown: 0,
            cible: "tour",
            statut: "walk",
            frame: 0,
            frameTime: 0,
            bloquee: false // <-- Ajouté
        });
        botTroupeEnAttente = null;
        dessiner();
    }
    setTimeout(boucleBot, 300);
}

// Avancer les troupes
function avancerTroupes() {
    troupesJoueur.forEach(troupe => {
        if (!troupe.bloquee && troupe.cible === "tour" && troupe.x < positionTourBot - TAILLE_TOUR - PORTEE_ATTAQUE)
            troupe.x += VITESSE_AVANCE;
    });
    troupesBot.forEach(troupe => {
        if (!troupe.bloquee && troupe.cible === "tour" && troupe.x > positionTourJoueur + TAILLE_TOUR + PORTEE_ATTAQUE)
            troupe.x -= VITESSE_AVANCE;
    });
}

// Attaquer la tour ennemie
function attaquerTour(troupe) {
    if (troupe.cible === "tour") {
        if (troupe.x >= positionTourBot - TAILLE_TOUR - PORTEE_ATTAQUE) {
            if (troupe.cooldown <= 0) {
                botPv -= troupe.attaque;
                troupe.cooldown = troupe.vitesse;
            } else {
                troupe.cooldown -= 0.1;
            }
        } else if (troupe.x <= positionTourJoueur + TAILLE_TOUR + PORTEE_ATTAQUE) {
            if (troupe.cooldown <= 0) {
                tourPv -= troupe.attaque;
                troupe.cooldown = troupe.vitesse;
            } else {
                troupe.cooldown -= 0.1;
            }
        }
    }
}

// Attaquer une troupe ennemie
function attaquerTroupe() {
    // D'abord, débloque toutes les troupes
    troupesJoueur.forEach(troupe => troupe.bloquee = false);
    troupesBot.forEach(troupe => troupe.bloquee = false);

    // Pour chaque troupe du joueur
    troupesJoueur.forEach((troupeJoueur, iJ) => {
        let tailleJ = FRAMES[troupeJoueur.nom].w;
        // Cherche une troupe bot en collision
        let cible = troupesBot.find((troupeBot) => {
            let tailleB = FRAMES[troupeBot.nom].w;
            return (
                troupeJoueur.x + tailleJ > troupeBot.x &&
                troupeJoueur.x < troupeBot.x + tailleB
            );
        });
        if (cible) {
            troupeJoueur.bloquee = true;
            cible.bloquee = true;
            // Attaque si cooldown fini
            if (troupeJoueur.cooldown <= 0) {
                cible.pv -= troupeJoueur.attaque;
                cible.statut = "hurt";
                cible.frameTime = 0;
                troupeJoueur.cooldown = troupeJoueur.vitesse;
            } else {
                troupeJoueur.cooldown -= 0.1;
            }
            // La cible riposte si cooldown fini
            if (cible.cooldown <= 0) {
                troupeJoueur.pv -= cible.attaque;
                troupeJoueur.statut = "hurt";
                troupeJoueur.frameTime = 0;
                cible.cooldown = cible.vitesse;
            } else {
                cible.cooldown -= 0.1;
            }
            // Retire les troupes mortes
            if (cible.pv <= 0) {
                let idx = troupesBot.indexOf(cible);
                if (idx !== -1) troupesBot.splice(idx, 1);
            }
            if (troupeJoueur.pv <= 0) {
                troupesJoueur.splice(iJ, 1);
            }
        }
    });
}

// Boucle de mise à jour
function mettreAJour() {
    if (jeuTermine) return;
    avancerTroupes();
    troupesJoueur.forEach(attaquerTour);
    troupesBot.forEach(attaquerTour);
    attaquerTroupe(); // Ajoute cette ligne

    // Animation des troupes
    [...troupesJoueur, ...troupesBot].forEach(troupe => {
        // Détection du statut
        let prevStatut = troupe.statut;

        // Si la troupe est en train d'être blessée (hurt), on affiche hurt puis idle
        if (troupe.statut === "hurt") {
            troupe.frameTime = (troupe.frameTime || 0) + 1;
            if (troupe.frameTime > 2) {
                troupe.statut = "idle";
                troupe.frameTime = 0;
            }
        } else {
            // Si la troupe est devant la tour ennemie et attaque
            if (
                (troupe.cible === "tour" && troupe.x >= positionTourBot - TAILLE_TOUR - PORTEE_ATTAQUE && troupesJoueur.includes(troupe)) ||
                (troupe.cible === "tour" && troupe.x <= positionTourJoueur + TAILLE_TOUR + PORTEE_ATTAQUE && troupesBot.includes(troupe))
            ) {
                // Animation idle/attack
                troupe.frameTime = (troupe.frameTime || 0) + 1;
                if (troupe.frameTime > 2) {
                    troupe.statut = (troupe.statut === "idle") ? "attack" : "idle";
                    troupe.frameTime = 0;
                }
            } else {
                // Animation idle/walk
                troupe.frameTime = (troupe.frameTime || 0) + 1;
                if (troupe.frameTime > 2) {
                    troupe.statut = (troupe.statut === "idle") ? "walk" : "idle";
                    troupe.frameTime = 0;
                }
            }
        }

        // Frame d'animation (toujours 0 car chaque statut n'a qu'une frame)
        troupe.frame = 0;
    });

    dessiner();
    setTimeout(mettreAJour, 100);
}
mettreAJour();

// Pièces toutes les 2 secondes
function miseAJourPieces() {
    if (!jeuTermine) {
        gagnerPieces();
        gagnerPiecesBot();
        setTimeout(miseAJourPieces, 2000);
    }
}

function initialiserImagesCout() {
    document.querySelectorAll('.cost-icon').forEach((img) => {
        const imageOriginale = img.src;
        const imageSurvol = img.dataset.hover;

        if (!imageSurvol) return;

        img.addEventListener('mouseenter', () => {
            img.src = imageSurvol;
        });

        img.addEventListener('mouseleave', () => {
            img.src = imageOriginale;
        });

        img.addEventListener('focus', () => {
            img.src = imageSurvol;
        });

        img.addEventListener('blur', () => {
            img.src = imageOriginale;
        });
    });
}

initialiserImagesCout();
miseAJourPieces();
boucleBot();