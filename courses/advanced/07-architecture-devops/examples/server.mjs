import { createServer } from "node:http";
import { healthStatus } from "./health.mjs";

const server = createServer((req, res) => {
  if (req.url === "/health" && req.method === "GET") {
    const result = healthStatus({ ready: true, dependencies: [] });
    res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(result));
    return;
  }
  res.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "NOT_FOUND" }));
});
server.listen(3000, "0.0.0.0", () => console.log("Demo server on port 3000"));
