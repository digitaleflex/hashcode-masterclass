# CS-17 — Stockage navigateur

> HashCode Academy · Cheat Sheet

## localStorage
~~~js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
localStorage.removeItem("theme");
~~~
Les valeurs sont des chaînes et persistent entre sessions selon les règles du navigateur.

## JSON
~~~js
const preferences = { theme: "dark", compact: true };
localStorage.setItem("preferences", JSON.stringify(preferences));

const raw = localStorage.getItem("preferences");
if (raw !== null) {
  try {
    const value = JSON.parse(raw);
    // Valider la forme de value avant usage.
  } catch {
    console.warn("Préférences illisibles");
  }
}
~~~

## sessionStorage et IndexedDB
sessionStorage est généralement limité à l'onglet et à sa session. IndexedDB convient mieux à des données structurées et volumineuses, avec une API asynchrone.

## Sécurité et confidentialité
- N'y stockez pas de mots de passe ni de secrets.
- Un script exécuté dans la page peut lire localStorage ; une faille XSS peut exposer son contenu.
- Ne considérez pas les données client comme fiables.
- Prévoyez une version ou une migration pour les formats persistés.

## Choisir
- Préférences simples : localStorage.
- Données limitées à la session : sessionStorage.
- Données structurées volumineuses ou offline : IndexedDB.
- Autorisations et données sensibles : serveur et mécanismes adaptés.
