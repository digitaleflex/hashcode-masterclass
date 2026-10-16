import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const catalogue = JSON.parse(readFileSync(resolve(root, "exercises/curriculum.json"), "utf8"));
const guide = readFileSync(resolve(root, "exercises/EXERCICES.md"), "utf8");
const failures = [];
const ids = guide.split("\n").filter((line) => line.startsWith("## EX-")).map((line) => line.split(" ")[1]);

if (catalogue.schemaVersion !== 1) failures.push("schemaVersion must be 1.");
if (!Array.isArray(catalogue.levels) || !["INIT", "CORE", "PRO"].every((level) => catalogue.levels.includes(level))) {
  failures.push("Catalogue must define INIT, CORE and PRO levels.");
}
if (ids.length !== catalogue.exerciseCount) failures.push("Exercise count does not match the guide.");
if (!Array.isArray(catalogue.exercises) || catalogue.exercises.length !== catalogue.exerciseCount) failures.push("Catalogue exercise list does not match exerciseCount.");
const catalogueIds = (catalogue.exercises ?? []).map((exercise) => exercise.id);
if (catalogueIds.some((id) => !ids.includes(id))) failures.push("Catalogue contains an exercise ID missing from the guide.");
if (ids.some((id) => !catalogueIds.includes(id))) failures.push("Guide contains an exercise ID missing from the catalogue.");
if (new Set(ids).size !== ids.length) failures.push("Duplicate exercise IDs found in EXERCICES.md.");

const resumeFiles = new Set(readdirSync(resolve(root, "docs/resumes")));
const cheatFiles = new Set(readdirSync(resolve(root, "docs/cheatsheets")));
const references = [...guide.matchAll(/\]\((?:\.\.\/)?(?:docs\/)?(resumes|cheatsheets)\/([^\)]+\.md)\)/g)];
for (const match of references) {
  const files = match[1] === "resumes" ? resumeFiles : cheatFiles;
  if (!files.has(match[2])) failures.push("Broken lesson link: " + match[2]);
}
for (const path of ["exercises/EXERCICES.md", "tests/exercises.test.mjs"]) {
  if (!existsSync(resolve(root, path))) failures.push("Required file missing: " + path);
}

if (failures.length) {
  console.error("Exercise validation failed:\n- " + failures.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Exercise validation passed: " + ids.length + " IDs and lesson links checked.");
}
