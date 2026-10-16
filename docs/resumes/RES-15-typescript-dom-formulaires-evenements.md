# RES-15 — TypeScript dans le navigateur : DOM, formulaires et événements

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Sélectionner des éléments DOM avec des types adaptés, gérer les événements, traiter les formulaires et rendre les erreurs visibles.

## 1. Sélectionner et vérifier
~~~ts
const button = document.querySelector<HTMLButtonElement>("#save");
const status = document.querySelector<HTMLElement>("#status");

if (!button || !status) {
  throw new Error("Éléments requis absents du document");
}

button.addEventListener("click", () => {
  status.textContent = "Enregistré";
});
~~~

Le paramètre générique indique le type attendu ; il ne garantit pas que l'élément existe. Le résultat peut être null. Pour du texte non fiable, préférez textContent à innerHTML.

## 2. Événements typés
~~~ts
const search = document.querySelector<HTMLInputElement>("#search");

search?.addEventListener("input", event => {
  const input = event.currentTarget;
  if (!(input instanceof HTMLInputElement)) return;
  console.log(input.value);
});
~~~

currentTarget désigne l'élément auquel l'écouteur est attaché. target peut désigner un élément enfant à l'origine de l'événement et doit parfois être vérifié.

## 3. Formulaires et validation
~~~ts
type TaskInput = { title: string };

function parseTaskInput(form: HTMLFormElement): TaskInput {
  const data = new FormData(form);
  const title = data.get("title");

  if (typeof title !== "string" || title.trim().length < 3) {
    throw new Error("Le titre doit contenir au moins 3 caractères");
  }

  return { title: title.trim() };
}

const form = document.querySelector<HTMLFormElement>("#task-form");
form?.addEventListener("submit", event => {
  event.preventDefault();
  try {
    console.log(parseTaskInput(form));
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : "Erreur inconnue");
  }
});
~~~

La validation navigateur améliore l'expérience, mais ne remplace jamais celle du serveur. Les requêtes reçues par le backend doivent être considérées comme non fiables.

## 4. Accessibilité
- Associer chaque champ à un label.
- Permettre la navigation au clavier et garder un focus visible.
- Signaler les erreurs avec un texte explicite, pas seulement une couleur.
- Préférer les éléments natifs button, form et input.
- Utiliser aria-live pour annoncer les messages dynamiques lorsque cela convient.

## 5. Séparer les responsabilités
Séparez la lecture et validation des données, la logique métier, la mise à jour de l'interface et la communication avec l'API. Cette séparation facilite les tests et la réutilisation.

## Erreurs fréquentes
- Utiliser querySelector(...)! sans vérifier l'existence de l'élément.
- Croire que le type générique valide le HTML à l'exécution.
- Insérer du texte utilisateur dans innerHTML.
- Oublier preventDefault lors d'une soumission personnalisée.
- N'afficher les erreurs qu'en console.

## Mini-exercice
Créez un formulaire qui ajoute une tâche à une liste. Refusez les titres vides et créez les éléments avec createElement et textContent.

~~~ts
const form = document.querySelector<HTMLFormElement>("#task-form");
const list = document.querySelector<HTMLUListElement>("#tasks");
const message = document.querySelector<HTMLElement>("#message");

form?.addEventListener("submit", event => {
  event.preventDefault();
  if (!list || !message) return;

  const title = new FormData(form).get("title");
  if (typeof title !== "string" || !title.trim()) {
    message.textContent = "Saisissez un titre.";
    return;
  }

  const item = document.createElement("li");
  item.textContent = title.trim();
  list.append(item);
  message.textContent = "Tâche ajoutée.";
  form.reset();
});
~~~

**Suite :** RES-16 — Programmation asynchrone, API HTTP et gestion d'état.
