import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../exercises/index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../exercises/ui.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../exercises/ui.css", import.meta.url), "utf8");

test("navigator exposes search, filters, progress and clear action", () => {
  for (const id of ["search", "level-filter", "status-filter", "exercise-list", "progress-track", "complete-toggle", "clear-progress", "next-hint", "solution-toggle"]) {
    assert.ok(html.includes('id="' + id + '"'), "Missing UI control: " + id);
  }
  assert.match(html, /<html lang="fr">/);
  assert.match(html, /name="viewport"/);
  assert.match(css, /prefers-reduced-motion/);
});

test("navigator catalogue contains all 12 stable exercise identifiers", () => {
  for (const id of ["EX-JS-001", "EX-JS-002", "EX-JS-003", "EX-TS-001", "EX-TS-002", "EX-JS-004", "EX-JS-005", "EX-TS-003", "EX-ASYNC-001", "EX-TEST-001", "EX-SEC-001", "EX-PROJ-001"]) {
    assert.ok(js.includes('id:"' + id + '"'), "Missing exercise: " + id);
  }
});

test("navigator keeps progress local and avoids dynamic code execution", () => {
  assert.match(js, /localStorage/);
  assert.match(js, /textContent/);
  assert.doesNotMatch(js, /\beval\s*\(|\bnew Function\s*\(/);
  assert.match(css, /@media\(max-width:520px\)/);
});
