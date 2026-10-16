# CS-04 — DOM, événements et formulaires

> HashCode Academy · Cheat Sheet

## Sélection
~~~js
const button = document.querySelector("#save");
const items = document.querySelectorAll(".item");

if (!button) throw new Error("Bouton absent");
~~~
querySelector renvoie un élément ou null ; querySelectorAll renvoie une NodeList.

## Événements
~~~js
button.addEventListener("click", event => {
  console.log(event.currentTarget);
});
~~~
Utilisez addEventListener. currentTarget désigne l'élément portant l'écouteur ; target peut être un descendant.

## Formulaire
~~~js
const form = document.querySelector("#task-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const title = data.get("title");
  if (typeof title !== "string" || !title.trim()) return;
  console.log(title.trim());
});
~~~

## Construire du DOM en sécurité
~~~js
const li = document.createElement("li");
li.textContent = untrustedText;
document.querySelector("ul")?.append(li);
~~~
Préférez textContent aux chaînes HTML construites avec des données non fiables. Ne supposez pas qu'un élément existe.

## Accessibilité
- Associer les champs à un label.
- Conserver un focus clavier visible.
- Fournir des messages d'erreur textuels.
- Utiliser les éléments HTML natifs.
- Signaler les changements de statut aux technologies d'assistance quand nécessaire.

## À vérifier
- [ ] Le formulaire empêche le rechargement si le traitement est personnalisé.
- [ ] Les champs sont validés.
- [ ] Les erreurs sont visibles à l'écran.
- [ ] La validation côté serveur reste en place.
