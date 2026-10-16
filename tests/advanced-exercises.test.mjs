import test from "node:test";
import assert from "node:assert/strict";
import { renderUserText } from "../exercises/web/safe-render.mjs";
import { fetchJson } from "../exercises/async/fetch-json.mjs";

test("WEB: rend une saisie comme du texte sans utiliser innerHTML", () => {
  const element = { textContent: "" };
  renderUserText(element, "<img src=x onerror=alert(1)>");
  assert.equal(element.textContent, "<img src=x onerror=alert(1)>");
  assert.equal(Object.hasOwn(element, "innerHTML"), false);
  assert.throws(() => renderUserText({}, "x"), TypeError);
});

test("ASYNC: renvoie le JSON pour une réponse réussie", async () => {
  const data = { ok: true, items: [1, 2] };
  const fetchMock = async (url) => {
    assert.equal(url, "/api/items");
    return { ok: true, status: 200, json: async () => data };
  };
  assert.deepEqual(await fetchJson("/api/items", fetchMock), data);
});

test("ASYNC: différencie les statuts HTTP non réussis", async () => {
  for (const status of [404, 500]) {
    await assert.rejects(
      fetchJson("/api/items", async () => ({ ok: false, status, json: async () => ({}) })),
      new RegExp(String(status)),
    );
  }
});

test("ASYNC: convertit les erreurs réseau en erreur explicite", async () => {
  await assert.rejects(fetchJson("/api", async () => { throw new Error("offline"); }), /Échec réseau/);
});

test("ASYNC: signale le JSON malformé", async () => {
  await assert.rejects(
    fetchJson("/api", async () => ({ ok: true, status: 200, json: async () => { throw new SyntaxError("bad json"); } })),
    /JSON valide/,
  );
});

test("ASYNC: refuse une réponse sans contrat HTTP", async () => {
  await assert.rejects(fetchJson("/api", async () => ({})), TypeError);
});
