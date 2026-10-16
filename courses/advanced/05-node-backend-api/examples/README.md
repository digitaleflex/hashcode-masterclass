# Exemples — Backend Node.js et API

## Serveur HTTP local minimal
```js
import { createServer } from "node:http";
const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200).end(JSON.stringify({ status: "ok" }));
    return;
  }
  res.writeHead(404).end(JSON.stringify({ error: { code: "NOT_FOUND", message: "Route introuvable" } }));
});
server.listen(3000, "127.0.0.1");
```

Démarrer avec `node server.mjs`, tester sur localhost seulement. Exemple pédagogique, pas un serveur de production.

## Concepts
HTTP, séparation transport/service/domaine, validation, autorisation, requêtes paramétrées, erreurs et observabilité.

## Validation
Tests d'intégration locaux : routes, erreurs, corps trop volumineux, méthodes inconnues et accès interdit.