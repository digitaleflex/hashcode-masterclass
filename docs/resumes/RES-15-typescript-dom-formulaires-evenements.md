# RES-15 — TypeScript dans le navigateur : DOM, formulaires et événements

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 35 à 45 minutes  
**Prérequis :** DOM, événements JavaScript, types et fonctions TypeScript  
**Objectif :** manipuler le DOM avec des types sûrs et traiter un formulaire de façon accessible.

## Objectifs d'apprentissage

- vérifier qu'un élément DOM existe avant de l'utiliser ;
- typer un événement et récupérer une valeur de formulaire ;
- distinguer validation de saisie et confiance dans les données ;
- rendre les erreurs compréhensibles et accessibles ;
- séparer la logique métier du code d'interface.

## 1. Sélectionner un élément et vérifier son existence

Les sélecteurs DOM peuvent ne trouver aucun élément. `querySelector` renvoie donc un élément ou `null`.

```ts
const title = document.querySelector<HTMLHeadingElement>("#page-title");

if (title) {
  title.textContent = "Bienvenue";
}
```

Le paramètre générique précise le type attendu de l'élément sélectionné ; il ne prouve pas à lui seul que le HTML contient bien cet élément. La vérification `if (title)` reste importante.

Évite d'utiliser l'opérateur `!` pour supprimer systématiquement les avertissements de nullabilité. Utilise-le uniquement lorsque l'existence de l'élément est garantie par une condition réelle et documentée.

## 2. Typage des événements

Le type d'événement dépend de l'élément et de l'événement écouté.

```ts
const button = document.querySelector<HTMLButtonElement>("#save");

button?.addEventListener("click", (event: MouseEvent) => {
  console.log("Clic", event.currentTarget);
});
```

Dans un gestionnaire d'événement, `event.target` représente l'origine de l'événement, qui peut être un élément enfant. `event.currentTarget` représente l'élément auquel le gestionnaire est attaché. Vérifie son type si tu dois accéder à des propriétés spécifiques.

## 3. Formulaires et validation

```ts
const form = document.querySelector<HTMLFormElement>("#task-form");
const input = document.querySelector<HTMLInputElement>("#task-title");
const error = document.querySelector<HTMLElement>("#task-error");

form?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  if (!input || !error) return;

  const title = input.value.trim();

  if (title.length === 0) {
    error.textContent = "Le titre est obligatoire.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }

  error.textContent = "";
  input.removeAttribute("aria-invalid");
  console.log("Titre valide :", title);
});
```

Cet exemple illustre une validation d'interface. La logique métier réelle doit également valider les données dans la couche de confiance appropriée, par exemple sur le serveur.

## 4. Accessibilité des erreurs

- Associer chaque champ à un label visible.
- Expliquer l'erreur en texte, pas uniquement par une couleur.
- Utiliser `aria-invalid="true"` quand le champ est invalide.
- Relier le message d'erreur au champ avec `aria-describedby`.
- Placer le focus sur le champ à corriger lorsque c'est approprié.
- Ne pas annoncer toutes les erreurs de façon agressive à chaque frappe.

Exemple HTML :

```html
<label for="task-title">Titre de la tâche</label>
<input id="task-title" name="title" aria-describedby="task-error">
<p id="task-error" role="status"></p>
```

Adapte le rôle ARIA au comportement de l'interface. Les attributs ARIA complètent un HTML sémantique ; ils ne remplacent pas les éléments natifs lorsqu'ils conviennent.

## 5. Séparer interface et logique métier

Le gestionnaire d'événement devrait récupérer la saisie, demander à une fonction de valider ou transformer les données, puis mettre à jour l'interface. Évite de concentrer toutes les règles métier dans un long callback.

```ts
function normalizeTaskTitle(value: string): string {
  return value.trim();
}

function isValidTaskTitle(value: string): boolean {
  return value.length >= 2 && value.length <= 120;
}
```

Ces fonctions sont faciles à tester sans navigateur. La limite de longueur doit correspondre au contrat réel du produit.

## 6. Erreurs fréquentes

- Supposer qu'un élément DOM existe sans vérification.
- Forcer un type avec `as HTMLInputElement` sans s'assurer que le sélecteur cible un champ.
- Utiliser `event.target.value` sans vérifier le type.
- Se contenter de la validation côté navigateur pour protéger les données.
- Injecter la saisie avec `innerHTML`.
- Montrer une erreur uniquement avec une bordure rouge.
- oublier le comportement clavier ou le focus après erreur.

## 7. Mini-exercice

Crée un formulaire qui accepte un titre de mission et une priorité. Affiche un message d'erreur accessible si le titre est vide ou trop long. Si les données sont valides, affiche un résumé dans la page avec `textContent`.

### Critères de réussite
- Les éléments DOM sont vérifiés.
- Le formulaire ne recharge pas la page lors d'une validation côté client.
- Les erreurs sont associées aux champs.
- La saisie est affichée sans insertion HTML non fiable.
- Le code compile en mode strict.

## Auto-évaluation

1. Pourquoi `querySelector` peut-il renvoyer `null` ?
2. Quelle différence existe entre `target` et `currentTarget` ?
3. Pourquoi la validation navigateur ne suffit-elle pas pour une API ?
4. Comment un lecteur d'écran peut-il connaître l'erreur d'un champ ?

## Fiches associées
- Précédent : [RES-14 — Types avancés](RES-14-types-avances-unions-narrowing-generiques.md)
- Suite : [RES-16 — API HTTP et état](RES-16-async-api-http-etat.md)
- Mémo : [CS-04 — DOM et formulaires](../cheatsheets/CS-04-dom-evenements-formulaires.md)
- Mémo : [CS-18 — Accessibilité et performance](../cheatsheets/CS-18-accessibilite-performances.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**