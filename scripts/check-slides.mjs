import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const slideCount = (html.match(/<section class="slide(?: active)?"/g) ?? []).length;
const required = [
  "JavaScript", "TypeScript", "Node.js", "npm",
  "Task Manager", "data-notes=", "quiz-option",
  "map transforme", "filter sélectionne", "reduce accumule",
];

const missing = required.filter((term) => !html.includes(term));
if (slideCount !== 83) {
  console.error(`Expected 83 slides, found ${slideCount}.`);
  process.exitCode = 1;
}
if (missing.length) {
  console.error("Missing required content:", missing.join(", "));
  process.exitCode = 1;
}
if (!process.exitCode) {
  console.log(`Presentation structure OK: ${slideCount} slides; required topics present.`);
}