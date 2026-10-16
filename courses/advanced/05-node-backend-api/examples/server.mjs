import { createServer } from "node:http";

const tasks = new Map();
let nextId = 1;

function send(res, status, payload) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8", "x-content-type-options": "nosniff" });
  res.end(payload === undefined ? "" : JSON.stringify(payload));
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") return send(res, 200, { status: "ok" });
  if (req.method === "GET" && req.url === "/tasks") return send(res, 200, [...tasks.values()]);
  if (req.method === "POST" && req.url === "/tasks") {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
      if (body.length > 16_384) return send(res, 413, { error: { code: "BODY_TOO_LARGE" } });
    }
    let input;
    try { input = JSON.parse(body); } catch { return send(res, 400, { error: { code: "INVALID_JSON" } }); }
    if (typeof input.title !== "string" || input.title.trim().length < 1 || input.title.length > 200) {
      return send(res, 400, { error: { code: "INVALID_TITLE" } });
    }
    const task = { id: String(nextId++), title: input.title.trim(), status: "todo" };
    tasks.set(task.id, task);
    return send(res, 201, task);
  }
  return send(res, 404, { error: { code: "NOT_FOUND", message: "Route introuvable" } });
});

server.listen(3000, "127.0.0.1", () => console.log("API de laboratoire : http://127.0.0.1:3000"));
