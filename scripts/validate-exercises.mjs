import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = new URL("../", import.meta.url);
const cataloguePath = new URL("../exercises/curriculum.json", import.meta.url);
const catalogue = JSON.parse(readFileSync(cataloguePath, "utf8"));
const failures = [];
const ids = new Set();
const levels = new Set(["INIT", "CORE", "PRO"]);
const languages = new Set(["javascript", "typescript"]);

if (catalogue.schemaVersion !== 1) failures.push("schemaVersion must be 1.");
if (!Array.isArray(catalogue.exercises) || catalogue.exercises.length !== 12) {
  failures.push("Expected exactly 12 pilot exercises in the catalogue.");
}

for (const [index, exercise] of (catalogue.exercises ?? []).entries()) {
  const label = exercise.id ?? `exercise at index ${index}`;
  for (const field of ["id", "title", "category", "level", "language", "skills", "relatedLessons", "estimatedMinutes"]) {
    if (!(field in exercise)) failures.push(`${label}: missing field "${field}".`);
  }
  if (typeof exercise.id !== "string" || !/^EX-[A-Z]+-\d{3}$/.test(exercise.id)) {
    failures.push(`${label}: invalid id format.`);
  }
  if (ids.has(exercise.id)) failures.push(`${label}: duplicate id.`);
  ids.add(exercise.id);
  if (!levels.has(exercise.level)) failures.push(`${label}: invalid level.`);
  if (!languages.has(exercise.language)) failures.push(`${label}: invalid language.`);
  if (!Array.isArray(exercise.skills) || exercise.skills.length === 0) failures.push(`${label}: skills must be a non-empty array.`);
  if (!Array.isArray(exercise.relatedLessons) || exercise.relatedLessons.length === 0) failures.push(`${label}: relatedLessons must be a non-empty array.`);
  if (!Number.isInteger(exercise.estimatedMinutes) || exercise.estimatedMinutes < 5) failures.push(`${label}: estimatedMinutes must be an integer >= 5.`);
  for (const lesson of exercise.relatedLessons ?? []) {
    const match = /^(RES|CS)-(\d{2})$/.exec(lesson);
    if (!match) {
      failures.push(`${label}: invalid lesson reference "${lesson}".`);
      continue;
    }
    const collection = match[1] === "RES" ? "resumes" : "cheatsheets";
    const number = match[2];
    const names = {
      "RES-03":"RES-03-variables-et-types-javascript.md",
      "RES-05":"RES-05-fonctions-javascript.md",
      "RES-06":"RES-06-tableaux-et-methodes-fonctionnelles.md",
      "RES-08":"RES-08-gestion-erreurs-debogage.md",
      "RES-09":"RES-09-async-promises-async-await.md",
      "RES-11":"RES-11-dom-evenements-interfaces-web.md",
      "RES-12":"RES-12-typescript-types-interfaces-fonctions.md",
      "RES-16":"RES-16-async-api-http-etat.md",
      "RES-17":"RES-17-tests-qualite-debugging.md",
      "RES-18":"RES-18-securite-validation-entrees.md",
      "RES-20":"RES-20-projet-synthese-evaluation.md",
      "CS-01":"CS-01-javascript-syntaxe-essentielle.md",
      "CS-02":"CS-02-tableaux-objets-methodes.md",
      "CS-05":"CS-05-async-promises-fetch.md",
      "CS-06":"CS-06-typescript-types-utilitaires.md",
      "CS-07":"CS-07-erreurs-debugging.md",
      "CS-09":"CS-09-securite-web-essentielle.md",
      "CS-10":"CS-10-checklist-qualite-livraison.md"
    };
    const filename = names[lesson] ?? (match[1] === "RES"
      ? `RES-${number}-`
      : `CS-${number}-`);
    const dir = resolve(new URL(`../docs/${collection}/`, import.meta.url).pathname);
    const exists = existsSync(resolve(dir, filename)) || existsSync(resolve(dir, filename + ".md"));
    if (!exists) failures.push(`${label}: linked lesson ${lesson} not found at docs/${collection}/${filename}.`);
  }
}

if (failures.length) {
  console.error("Exercise catalogue validation failed:\n- " + failures.join("\n- "));
  process.exitCode = 1;
} else {
  console.log(`Exercise catalogue valid: ${catalogue.exercises.length} exercises, ${ids.size} unique IDs.`);
}
