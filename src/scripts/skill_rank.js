function xpForLevel(level) {
  return 10 + (level - 1) * 2;
}

function calculateLevel(totalXp) {
  let level = 1;
  let xpAccumulated = 0;

  while (true) {
    const cost = xpForLevel(level);
    if (xpAccumulated + cost > totalXp) break;
    xpAccumulated += cost;
    level++;
  }

  return {
    level,
    xpIntoLevel: totalXp - xpAccumulated,
    xpNeeded: xpForLevel(level)
  };
}

const skillCards = document.querySelectorAll(".skill-card");
let totalGlobalXp = 0;

skillCards.forEach(card => {
  const xp = parseInt(card.dataset.xp || "0");
  totalGlobalXp += xp;

  const result = calculateLevel(xp);

  const levelText = card.querySelector(".level-display");
  const xpFill = card.querySelector(".xp-fill");
  const xpText = card.querySelector(".xp-display");

  if (levelText) levelText.textContent = `Niveau ${result.level}`;
  if (xpFill) xpFill.style.width = `${(result.xpIntoLevel / result.xpNeeded) * 100}%`;
  if (xpText) xpText.textContent = `${result.xpIntoLevel} / ${result.xpNeeded} XP`;
});

const ranks = [
  "Bois",
  "Pierre",
  "Fer",
  "Bronze",
  "Argent",
  "Or",
  "Platine",
  "Diamant",
  "Ruthénium",
  "Luxerite"
];

const XP_PER_DIVISION = 500;

function calculateRank(totalXp) {
  const divisionIndex = Math.floor(totalXp / XP_PER_DIVISION);
  const rankIndex = Math.floor(divisionIndex / 5);
  const division = (divisionIndex % 5) + 1;

  const rankName = ranks[Math.min(rankIndex, ranks.length - 1)];
  const roman = ["I", "II", "III", "IV", "V"][division - 1];

  return `${rankName} ${roman}`;
}

function normalizeRankName(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function updateRankDisplay(totalXp) {
  const fullRank = calculateRank(totalXp);
  const [rankName, division] = fullRank.split(" ");
  const normalized = normalizeRankName(rankName);

  const img = document.getElementById("rank-image");
  const text = document.getElementById("rank-text");

  if (img instanceof HTMLImageElement) img.src = `../images/ranks/${normalized}.png`;
  if (text) text.textContent = `${rankName} ${division}`;
}

updateRankDisplay(totalGlobalXp);

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    skillCards.forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? "block"
          : "none";
    });
  });
});
