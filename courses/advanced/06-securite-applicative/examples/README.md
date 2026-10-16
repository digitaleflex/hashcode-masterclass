# Exemples — Sécurité applicative

## DOM : afficher du texte
```js
const output = document.querySelector("#output");
const userText = new URLSearchParams(location.search).get("name") ?? "";
output.textContent = userText;
```

Éviter `innerHTML = userText` pour du texte non fiable.

## Autorisation illustrée
```js
function canReadTask(user, task) {
  return Boolean(user && task && task.ownerId === user.id);
}
```
Cette fonction illustre une règle métier ; elle ne remplace pas l'authentification ni le contrôle de chaque route.

## Concepts
Modèle de menace, XSS/injection, CSRF/session, autorisation, secrets, dépendances et tests de non-régression.

Exclusivement fichiers et environnements locaux autorisés. Aucun scan de tiers, aucun secret réel.