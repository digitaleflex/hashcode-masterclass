import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const slideCount = (html.match(/<section class="slide(?: active)?"/g) ?? []).length;
const noteCount = (html.match(/data-notes=/g) ?? []).length;
const quizCount = (html.match(/class="quiz"/g) ?? []).length;
const diagramCount = (html.match(/class="concept-visual"/g) ?? []).length;
const codeCount = (html.match(/<pre class="code">/g) ?? []).length;
const required = [
  "JavaScript", "TypeScript", "Node.js", "npm",
  "Task Manager", "data-notes=", "quiz-option",
  "map transforme", "filter sélectionne", "reduce accumule",
  "function highlightCode", "tok-keyword", "tok-string",
  "tok-number", "Copier le code", "prefers-reduced-motion",
];
const missing = required.filter((term) => !html.includes(term));
const failures = [];
if (slideCount !== 83) failures.push(`Expected 83 slides, found ${slideCount}.`);
if (noteCount !== 83) failures.push(`Expected 83 speaker notes, found ${noteCount}.`);
if (quizCount !== 6) failures.push(`Expected 6 quizzes, found ${quizCount}.`);
if (diagramCount < 6) failures.push(`Expected at least 6 teaching diagrams, found ${diagramCount}.`);
if (codeCount < 25) failures.push(`Expected at least 25 code examples, found ${codeCount}.`);
if (missing.length) failures.push("Missing required content: " + missing.join(", "));
if (!html.includes("ArrowRight") || !html.includes("touchstart")) failures.push("Keyboard/touch navigation markers are missing.");
if (/(?:src|href)=["']https?:\\/\\//i.test(html)) failures.push("Unexpected remote asset found; presentation should be self-contained.");

if (failures.length) {
  console.error(failures.join("\\n"));
  process.exitCode = 1;
} else {
  console.log(`Presentation checks passed: ${slideCount} slides, ${noteCount} notes, ${quizCount} quizzes, ${diagramCount} diagrams, ${codeCount} code examples.`);
}
