import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";

test("API locale valide santé, création et entrée invalide", async (t) => {
  const child = spawn(process.execPath, ["courses/advanced/05-node-backend-api/examples/server.mjs"], {
    cwd: process.cwd(), stdio: ["ignore", "pipe", "pipe"]
  });
  let output = "";
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", chunk => { output += chunk; });
  t.after(() => child.kill("SIGTERM"));

  const deadline = Date.now() + 5000;
  let ready = false;
  while (Date.now() < deadline && !ready) {
    try {
      const response = await fetch("http://127.0.0.1:3000/health");
      ready = response.status === 200;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  assert.equal(ready, true, `Serveur local non démarré. Sortie : ${output}`);

  const health = await fetch("http://127.0.0.1:3000/health");
  assert.deepEqual(await health.json(), { status: "ok" });

  const invalid = await fetch("http://127.0.0.1:3000/tasks", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: "   " })
  });
  assert.equal(invalid.status, 400);

  const created = await fetch("http://127.0.0.1:3000/tasks", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: "Tester l'API" })
  });
  assert.equal(created.status, 201);
  assert.equal((await created.json()).title, "Tester l'API");

  const missing = await fetch("http://127.0.0.1:3000/not-found");
  assert.equal(missing.status, 404);
});
