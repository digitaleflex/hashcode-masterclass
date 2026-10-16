import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("démo Web possède labels et statut accessible", async () => {
  const html = await readFile(new URL("./fetch-demo.html", import.meta.url), "utf8");
  assert.match(html, /<label for="query">/);
  assert.match(html, /role="status"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /replaceChildren/);
  assert.match(html, /textContent\s*=\s*task/);
});
