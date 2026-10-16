import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const cataloguePath = resolve(root, "exercises/curriculum.json");
const schemaPath = resolve(root, "exercises/schema.json");
const catalogue = JSON.parse(readFileSync(cataloguePath, "utf8"));
const schema = JSON.parse(readFileSync(schemaPath, "utf8"));
const guidePath = resolve(root, "exercises", catalogue.exerciseGuide);
const guide = readFileSync(guidePath, "utf8");
const failures = [];
const guideIds = [...guide.matchAll(/^## (EX-[A-Z]+-[0-9]{3})\s+—/gm)].map((match) => match[1]);
const exercises = Array.isArray(catalogue.exercises) ? catalogue.exercises : [];
const catalogueIds = exercises.map((exercise) => exercise?.id);

if (schema.$schema !== "https://json-schema.org/draft/2020-12/schema") failures.push("Schema must declare JSON Schema 2020-12.");
if (catalogue.schemaVersion !== 1) failures.push("schemaVersion must be 1.");
if (catalogue.language !== "fr") failures.push("Catalogue language must be fr.");
if (!Array.isArray(catalogue.levels) || !["INIT", "CORE", "PRO"].every((level) => catalogue.levels.includes(level))) {
  failures.push("Catalogue must define INIT, CORE and PRO levels.");
}
if (catalogue.exerciseCount !== exercises.length) failures.push("exerciseCount does not match exercises.length.");
if (guideIds.length !== catalogue.exerciseCount) failures.push("Exercise count does not match the guide headings.");
if (new Set(guideIds).size !== guideIds.length) failures.push("Duplicate exercise IDs found in the guide.");
if (new Set(catalogueIds).size !== catalogueIds.length) failures.push("Duplicate exercise IDs found in the catalogue.");
for (const exercise of exercises) {
  if (!exercise || typeof exercise !== "object") {
    failures.push("Each catalogue entry must be an object.");
    continue;
  }
  if (!/^EX-[A-Z]+-[0-9]{3}$/.test(exercise.id ?? "")) failures.push("Invalid exercise ID: " + String(exercise.id));
  if (typeof exercise.title !== "string" || !exercise.title.trim()) failures.push("Missing title for " + String(exercise.id));
  if (!catalogue.levels?.includes(exercise.level)) failures.push("Invalid level for " + String(exercise.id));
  if (!guideIds.includes(exercise.id)) failures.push("Catalogue ID missing from guide: " + exercise.id);
}
for (const id of guideIds) {
  if (!catalogueIds.includes(id)) failures.push("Guide ID missing from catalogue: " + id);
}
for (const path of [catalogue.exerciseGuide, "schema.json", "EX-JS-001-panier/README.md", "EX-JS-001-panier/starter/cart.mjs", "EX-JS-001-panier/solution/cart.mjs", "EX-JS-001-panier/tests/cart.test.mjs"]) {
  if (!existsSync(resolve(root, "exercises", path))) failures.push("Required exercise file missing: exercises/" + path);
}

const resumeFiles = new Set(readdirSync(resolve(root, "docs/resumes")));
const cheatFiles = new Set(readdirSync(resolve(root, "docs/cheatsheets")));
const references = [...guide.matchAll(/\]\((?:\.\.\/)?(?:docs\/)?(resumes|cheatsheets)\/([^\)]+\.md)\)/g)];
for (const match of references) {
  const files = match[1] === "resumes" ? resumeFiles : cheatFiles;
  if (!files.has(match[2])) failures.push("Broken lesson link: " + match[2]);
}

if (failures.length) {
  console.error("Exercise validation failed:\n- " + failures.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Exercise validation passed: " + guideIds.length + " guide IDs, " + exercises.length + " catalogue entries, schema contract and required files checked.");
}
