# CS-17 — Stockage navigateur

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 11 dom evenements interfaces web](../resumes/RES-11-dom-evenements-interfaces-web.md) · [RES 18 securite validation entrees](../resumes/RES-18-securite-validation-entrees.md)

**Application pratique :** Ne stocke pas de secrets dans le stockage navigateur. Traite le contenu relu comme une donnée externe et gère les erreurs de parsing.

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
