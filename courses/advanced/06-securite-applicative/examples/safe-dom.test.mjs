import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("démo DOM utilise un affichage texte explicite", async () => {
  const html = await readFile(new URL("./safe-dom.html", import.meta.url), "utf8");
  assert.match(html, /output\.textContent\s*=\s*input\.value/);
  assert.doesNotMatch(html, /output\.innerHTML\s*=\s*input\.value/);
  assert.match(html, /<label for="value">/);
  assert.match(html, /aria-live="polite"/);
});
