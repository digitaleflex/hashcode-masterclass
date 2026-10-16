# RES-11 — DOM, événements et interfaces web

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : relier JavaScript à une page HTML, réagir aux interactions et mettre à jour l'interface de façon sûre.

## 1. Qu'est-ce que le DOM ?

Le **DOM** (*Document Object Model*) est une représentation structurée du document HTML sous forme d'objets. JavaScript peut parcourir cette structure, lire des éléments et modifier leur contenu, leurs attributs ou leurs styles.

Exemple HTML :

```html
<h1 id="titre">Bienvenue</h1>
<p class="description">Découvre JavaScript.</p>
<button id="action">Cliquer</button>
```

Le DOM permet à JavaScript de trouver le titre, de modifier le texte du paragraphe ou de réagir au clic du bouton.

## 2. Sélectionner des éléments

### `getElementById()`

```js
const titre = document.getElementById("titre");
console.log(titre);
```

Cette méthode cherche l'élément dont l'identifiant correspond. Elle renvoie `null` si aucun élément ne correspond.

### `querySelector()` et `querySelectorAll()`

```js
const bouton = document.querySelector("#action");
const description = document.querySelector(".description");
const paragraphes = document.querySelectorAll("p");
```

- `querySelector()` renvoie le premier élément correspondant au sélecteur CSS, ou `null`.
- `querySelectorAll()` renvoie une liste statique (*NodeList*) des éléments correspondants au moment de l'appel.

Vérifie qu'un élément existe avant de l'utiliser si le sélecteur peut ne rien trouver.

```js
const bouton = document.querySelector("#action");

if (bouton) {
  bouton.textContent = "Prêt";
}
```

## 3. Lire et modifier le contenu

### Utiliser `textContent`

```js
const titre = document.querySelector("#titre");

if (titre) {
  titre.textContent = "HashCode Masterclass";
}
```

`textContent` lit ou remplace le texte d'un élément. Pour du texte fourni par un utilisateur, c'est généralement plus sûr que d'interpréter ce texte comme du HTML.

### Attention à `innerHTML`

```js
const zone = document.querySelector("#zone");
const nom = "<img src=x onerror=alert('test')>";

// À éviter avec une chaîne non fiable :
// zone.innerHTML = nom;
```

`innerHTML` interprète la chaîne comme du HTML et peut créer une faille XSS si des données non fiables sont injectées sans protection appropriée. Préfère `textContent` pour afficher du texte brut.

## 4. Modifier les classes et les attributs

```js
const carte = document.querySelector(".carte");

if (carte) {
  carte.classList.add("active");
  carte.classList.remove("masquee");
  carte.classList.toggle("selectionnee");
  console.log(carte.classList.contains("active"));
}
```

Pour les attributs :

```js
const lien = document.querySelector("#lien");

if (lien) {
  lien.setAttribute("href", "https://example.com");
  lien.setAttribute("target", "_blank");
}
```

Si un lien externe s'ouvre dans un nouvel onglet, configure également les protections appropriées selon les besoins du projet, par exemple `rel="noopener noreferrer"`.

## 5. Créer et insérer des éléments

```js
const liste = document.querySelector("#liste");

if (liste) {
  const element = document.createElement("li");
  element.textContent = "Réviser le DOM";
  liste.append(element);
}
```

Pour créer plusieurs éléments, construis chaque nœud avec les API DOM plutôt que de concaténer des chaînes non fiables dans `innerHTML`.

```html
<ul id="liste"></ul>
```

```js
const liste = document.querySelector("#liste");
const taches = ["Lire", "Coder", "Tester"];

if (liste) {
  for (const tache of taches) {
    const li = document.createElement("li");
    li.textContent = tache;
    liste.append(li);
  }
}
```

## 6. Écouter les événements avec `addEventListener()`

Un événement représente une action ou un changement : clic, saisie clavier, soumission d'un formulaire, chargement de page, etc.

```js
const bouton = document.querySelector("#action");

bouton?.addEventListener("click", () => {
  console.log("Bouton cliqué !");
});
```

L'opérateur `?.` appelle la méthode uniquement si `bouton` n'est ni `null` ni `undefined`.

### Accéder à l'événement

```js
bouton?.addEventListener("click", event => {
  console.log(event.type);
  console.log(event.currentTarget);
});
```

- `event.target` désigne l'élément à l'origine de l'événement.
- `event.currentTarget` désigne l'élément sur lequel le gestionnaire a été enregistré.

Cette distinction est particulièrement utile quand un bouton contient une icône ou un autre élément enfant.

## 7. Événements de formulaire

```html
<form id="formulaire">
  <label for="nom">Nom</label>
  <input id="nom" name="nom" required>
  <button type="submit">Envoyer</button>
  <p id="message" aria-live="polite"></p>
</form>
```

```js
const formulaire = document.querySelector("#formulaire");
const champNom = document.querySelector("#nom");
const message = document.querySelector("#message");

formulaire?.addEventListener("submit", event => {
  event.preventDefault();

  if (!(champNom instanceof HTMLInputElement) || !message) {
    return;
  }

  const nom = champNom.value.trim();

  if (nom === "") {
    message.textContent = "Le nom est obligatoire.";
    champNom.focus();
    return;
  }

  message.textContent = `Bonjour, ${nom} !`;
});
```

- `submit` est l'événement à privilégier pour traiter la soumission d'un formulaire.
- `event.preventDefault()` empêche le comportement par défaut, ici l'envoi classique du formulaire.
- `required` permet une validation native, mais les données doivent aussi être validées côté serveur lorsqu'elles sont envoyées à une API.

## 8. Événements de saisie

```js
const champ = document.querySelector("#nom");
const compteur = document.querySelector("#compteur");

champ?.addEventListener("input", event => {
  const input = event.currentTarget;

  if (input instanceof HTMLInputElement && compteur) {
    compteur.textContent = `${input.value.length} caractère(s)`;
  }
});
```

L'événement `input` se déclenche lors des changements de valeur pendant la saisie. L'événement `change` se déclenche selon les règles du contrôle et peut attendre que la modification soit validée ou confirmée.

## 9. Propagation et délégation d'événements

Les événements peuvent se propager à travers les éléments parents. La **délégation** consiste à enregistrer un seul gestionnaire sur un parent pour gérer les interactions de ses enfants.

```html
<ul id="taches">
  <li><button data-action="complete">Terminer</button> Lire</li>
  <li><button data-action="complete">Terminer</button> Coder</li>
</ul>
```

```js
const liste = document.querySelector("#taches");

liste?.addEventListener("click", event => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const bouton = event.target.closest('button[data-action="complete"]');

  if (!bouton || !liste.contains(bouton)) {
    return;
  }

  const ligne = bouton.closest("li");
  ligne?.classList.toggle("terminee");
});
```

Avantages :
- moins de gestionnaires individuels ;
- fonctionnement pour des éléments ajoutés ultérieurement dans le parent ;
- logique centralisée.

Utilise `event.target` avec prudence : la cible peut être un élément imbriqué dans le bouton. `closest()` permet de remonter jusqu'à l'élément correspondant.

## 10. `preventDefault()` et `stopPropagation()`

Ces méthodes ne font pas la même chose :

- `preventDefault()` annule le comportement par défaut d'un événement lorsque cela est possible.
- `stopPropagation()` empêche la propagation de l'événement vers d'autres éléments de la chaîne de propagation.

Ne les utilise pas systématiquement. Empêcher la propagation peut perturber des composants ou des gestionnaires placés sur les parents.

## 11. Le DOM et TypeScript

En TypeScript, les API DOM peuvent renvoyer `null`, et `querySelector()` peut produire un élément de type générique. Vérifie ou affine son type avant d'accéder à des propriétés spécifiques.

```ts
const champ = document.querySelector("#email");

if (champ instanceof HTMLInputElement) {
  console.log(champ.value);
}
```

Cette vérification protège contre :
- l'absence de l'élément ;
- la sélection d'un élément qui n'est pas un champ de saisie.

Évite les assertions de type forcées sans vérification si la structure HTML peut varier.

## 12. Atelier — mini liste de tâches interactive

HTML :

```html
<form id="task-form">
  <label for="task-title">Nouvelle tâche</label>
  <input id="task-title" required>
  <button type="submit">Ajouter</button>
</form>
<ul id="task-list"></ul>
```

JavaScript :

```js
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-title");
const list = document.querySelector("#task-list");

form?.addEventListener("submit", event => {
  event.preventDefault();

  if (!(input instanceof HTMLInputElement) || !list) {
    return;
  }

  const title = input.value.trim();

  if (!title) {
    input.focus();
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const button = document.createElement("button");

  label.textContent = title;
  button.type = "button";
  button.textContent = "Terminer";
  button.addEventListener("click", () => {
    item.classList.toggle("terminee");
  });

  item.append(label, button);
  list.append(item);
  input.value = "";
  input.focus();
});
```

**Défis :**
1. Ajoute un bouton de suppression.
2. Utilise la délégation d'événements pour éviter un gestionnaire par bouton.
3. Ajoute un compteur de tâches.
4. Ajoute un message accessible lorsque la liste est vide.
5. Stocke les tâches dans un tableau JavaScript et sépare la logique métier de la mise à jour du DOM.

## 13. Exercices avec corrigés

### Exercice A — choisir le sélecteur

Tu veux sélectionner le premier élément portant la classe `card`. Quelle méthode utiliser ?

**Corrigé :**

```js
const carte = document.querySelector(".card");
```

### Exercice B — corriger une faille potentielle

Pourquoi faut-il éviter `zone.innerHTML = nomUtilisateur` si `nomUtilisateur` vient d'un formulaire ?

**Corrigé :** le navigateur interprète le contenu comme du HTML. Des données malveillantes peuvent provoquer une injection. Pour afficher du texte brut, utilise `zone.textContent = nomUtilisateur`.

### Exercice C — événement de formulaire

Pourquoi appelle-t-on souvent `event.preventDefault()` dans un gestionnaire `submit` d'une application monopage ?

**Corrigé :** pour empêcher la navigation ou la soumission HTML classique et gérer la validation et l'envoi des données avec JavaScript. Ne le fais que si le comportement par défaut doit effectivement être remplacé.

## 14. À retenir

- Le DOM représente le document HTML sous forme d'objets manipulables.
- `querySelector` renvoie le premier élément ou `null`.
- Utilise `textContent` pour afficher du texte non fiable.
- `addEventListener` permet de réagir aux événements.
- Pour les formulaires, traite l'événement `submit` et valide les données.
- La délégation d'événements permet de gérer efficacement des éléments dynamiques.
- En TypeScript, vérifie la présence et le type des éléments DOM.
- La validation côté client améliore l'expérience utilisateur, mais ne remplace pas la validation côté serveur.

## Suite de la série

- Précédent : [RES-10 — Modules JavaScript, npm et organisation du projet](./RES-10-modules-npm-organisation-projet.md)
- Suivant : **RES-12 — TypeScript : types, interfaces et fonctions**

---

HashCode Academy · **LEARN · BUILD · BELONG**
