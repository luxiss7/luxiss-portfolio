import { games } from "./games.js";
import { sites } from "./sites.js";

export const skills = [
  { name: "HTML/CSS", xp: 1880, category: "dev" },
  { name: "JavaScript", xp: 1190, category: "dev" },
  { name: "Unity", xp: 737, category: "dev" },
  { name: "C#", xp: 806, category: "dev" },
  { name: "Astro", xp: 45, category: "dev" },
  { name: "Java", xp: 45, category: "dev" },

  { name: "Blender", xp: 30, category: "creation" },
  { name: "Blockbench", xp: 100, category: "creation" },
  { name: "Pixel Art", xp: 560, category: "creation" },
  { name: "Game Design", xp: 0, category: "creation" },
  { name: "UI/UX", xp: 380, category: "creation" },

  { name: "Esprit d'équipe", xp: 745, category: "soft" },
  { name: "Créativité", xp: 780, category: "soft" },
  { name: "Autonomie", xp: 750, category: "soft" },
];

const XP_PER_PROJECT_SKILL = 20;

const skillByProjectTag = new Map([
  ["html", "HTML/CSS"],
  ["css", "HTML/CSS"],
  ["scss", "HTML/CSS"],
  ["javascript", "JavaScript"],
  ["typescript", "JavaScript"],
  ["unity", "Unity"],
  ["c#", "C#"],
  ["astro", "Astro"],
  ["java", "Java"],
  ["blockbench", "Blockbench"],
  ["pixel art", "Pixel Art"],
  ["blender", "Blender"],
]);

const projectXp = new Map(skills.map(skill => [skill.name, 0]));

for (const { project, categorySkill } of [
  ...games.map(project => ({ project, categorySkill: "Game Design" })),
  ...sites.map(project => ({ project, categorySkill: "UI/UX" })),
]) {
  if (project.status === "avenir") continue;

  const projectSkills = new Set([categorySkill]);
  const projectTags = [...(project.tech ?? []), ...(project.projectStyle ?? [])];
  for (const tag of projectTags) {
    const skillName = skillByProjectTag.get(tag.trim().toLowerCase());
    if (skillName) projectSkills.add(skillName);
  }

  if (project.workMode === "solo") {
    projectSkills.add("Autonomie");
    projectSkills.add("Créativité");
  }

  if (project.workMode === "team") {
    projectSkills.add("Esprit d'équipe");
  }

  for (const [skillName, xp] of Object.entries(project.skillXp ?? {})) {
    if (!projectXp.has(skillName)) {
      throw new Error(`Compétence inconnue dans le projet "${project.name}" : ${skillName}`);
    }
    if (!Number.isFinite(xp) || xp < 0) {
      throw new Error(`XP invalide pour "${skillName}" dans le projet "${project.name}"`);
    }
    projectXp.set(skillName, projectXp.get(skillName) + xp);
  }

  for (const skillName of projectSkills) {
    projectXp.set(skillName, projectXp.get(skillName) + XP_PER_PROJECT_SKILL);
  }
}

export const skillsWithProjectXp = skills.map(skill => ({
  ...skill,
  projectXp: projectXp.get(skill.name) ?? 0,
  xp: skill.xp + (projectXp.get(skill.name) ?? 0),
}));
