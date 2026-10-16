import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const slideCount = (html.match(/class="slide(?: active)?"/g) ?? []).length;
const required = [
  "JavaScript", "TypeScript", "Node.js", "npm",
  "Task Manager", "Notes du formateur", "quiz-options",
];

const missing = required.filter((term) => !html.includes(term));
if (slideCount !== 18) {
  console.error(`Expected 18 slides, found ${slideCount}.`);
  process.exitCode = 1;
}
if (missing.length) {
  console.error("Missing required content:", missing.join(", "));
  process.exitCode = 1;
}
if (!process.exitCode) {
  console.log(`Presentation structure OK: ${slideCount} slides; required topics present.`);
}
