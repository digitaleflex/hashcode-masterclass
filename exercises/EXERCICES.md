# Cahier d’exercices pratiques — HashCode Masterclass

Ce cahier constitue le lot pilote de 12 exercices, relié aux fiches RES et CS correspondantes. Le catalogue descriptif est disponible dans [curriculum.json](curriculum.json). Il est conçu pour un public débutant : chaque exercice précise le contexte, la tâche, le résultat attendu et les critères de réussite.

## Méthode de travail
Pour chaque exercice :
1. **Prédire** le résultat avant d’exécuter le code.
2. **Coder** sans regarder la correction.
3. **Exécuter** dans l’environnement indiqué.
4. **Comparer** le résultat et expliquer tout écart.
5. **Modifier** une entrée ou tester un cas limite.

## EX-JS-001 — Calculer un panier (JavaScript)
**Contexte :** une boutique doit calculer le montant de la commande.

```js
const unitPrice = 2500;
let quantity = 3;

// TODO : calcule le total et affiche-le.
```

**À faire :** affiche le total, puis modifie la quantité à 4.
**Résultats attendus :** `7500`, puis `10000`.

<details>
<summary>Correction possible</summary>

```js
const unitPrice = 2500;
let quantity = 3;
const total = unitPrice * quantity;
console.log(total); // 7500

quantity = 4;
console.log(unitPrice * quantity); // 10000
```
</details>

**À expliquer :** pourquoi `unitPrice` est-il déclaré avec `const` et `quantity` avec `let` ?

## EX-JS-002 — Transformer, filtrer et totaliser (JavaScript)
**Contexte :** analyser les prix d’articles d’une boutique.

```js
const prices = [1000, 2500, 1500, 500];

// TODO 1 : crée un tableau avec chaque prix augmenté de 10 %, arrondi à l’unité.
// TODO 2 : garde les prix supérieurs ou égaux à 1500.
// TODO 3 : calcule la somme de ces prix filtrés.
```

**Résultats attendus :** `[1100, 2750, 1650, 550]`, `[2500, 1500]`, puis `4000`.

<details>
<summary>Correction possible</summary>

```js
const withTax = prices.map((price) => Math.round(price * 1.1));
const expensive = prices.filter((price) => price >= 1500);
const total = expensive.reduce((sum, price) => sum + price, 0);
console.log(withTax, expensive, total);
```
</details>

**À expliquer :** pourquoi `map`, `filter` et `reduce` ne sont-ils pas interchangeables ?

## EX-JS-003 — Diagnostiquer les conversions (JavaScript)
**Contexte :** une quantité arrive parfois d’un formulaire sous forme de texte.

Prédit puis vérifie :
```js
console.log("5" + 2);
console.log("5" - 2);
console.log(5 === "5");
console.log(Number("5") + 2);
```

**Résultats attendus :** `52` sous forme de chaîne, `3`, `false`, puis `7`.
**À faire :** explique pourquoi le signe `+` ne réalise pas ici la même opération que `-`.

## EX-TS-001 — Définir un modèle Task (TypeScript)
**Contexte :** une application doit conserver des tâches avec un identifiant, un titre et un état.

Complète le modèle et crée un objet valide. Ajoute ensuite une propriété optionnelle `description`.

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
  // TODO : description optionnelle de type string
}

const task: Task = {
  id: 1,
  title: "Préparer l’atelier",
  completed: false,
};
```

**À tester :** remplace temporairement `completed: false` par `completed: "non"`. Lance le vérificateur TypeScript : une erreur de type est attendue.
**À expliquer :** pourquoi cette interface ne valide-t-elle pas automatiquement un JSON reçu d’une API ?

## EX-TS-002 — Écrire une fonction typée (TypeScript)
**Contexte :** l’interface veut afficher les titres sous une forme uniforme.

```ts
function formatTaskTitle(title: string): string {
  // TODO : renvoie « Tâche : » suivi du titre
}

console.log(formatTaskTitle("Réviser TypeScript"));
```

**Résultat attendu :** `Tâche : Réviser TypeScript`.
**À tester :** essaie d’appeler la fonction avec un nombre. Observe le diagnostic de TypeScript.

## EX-TS-003 — Supprimer une tâche sans casser la liste (TypeScript)
**Contexte :** un utilisateur demande la suppression d’une tâche par identifiant.

```ts
interface Task { id: number; title: string; completed: boolean; }

const tasks: Task[] = [
  { id: 1, title: "Lire le cours", completed: true },
  { id: 2, title: "Faire l’exercice", completed: false },
  { id: 3, title: "Relire la correction", completed: false },
];

function removeTask(id: number): void {
  // TODO : trouve l’index correspondant à id.
  // TODO : si l’index vaut -1, signale que la tâche est introuvable et arrête.
  // TODO : sinon, supprime un élément à cet index.
}
```

**Scénarios obligatoires :** supprimer l’identifiant `2`, supprimer `99` (introuvable), supprimer le premier élément, le dernier élément et l’unique élément d’une liste.

<details>
<summary>Correction possible</summary>

```ts
function removeTask(id: number): void {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    console.log("Tâche introuvable.");
    return;
  }
  tasks.splice(index, 1);
  console.log("Tâche supprimée.");
}
```
</details>

**À expliquer :** pourquoi faut-il tester `index === -1` avant d’appeler `splice` ?

## Grille d’auto-évaluation
- [ ] Je peux prédire les sorties avant d’exécuter les exemples.
- [ ] Je sais expliquer la différence entre `const` et `let`.
- [ ] Je sais choisir entre `map`, `filter` et `reduce`.
- [ ] Je sais lire une erreur de type TypeScript.
- [ ] Je distingue typage statique, validation runtime et test comportemental.
- [ ] Je vérifie les cas limites et peux expliquer mes choix.

## Environnement conseillé
- JavaScript : Node.js récent, ou la console d’un navigateur moderne.
- TypeScript : un projet configuré avec TypeScript et un script de vérification, par exemple `npx tsc --noEmit`.
- Les commandes exactes dépendent du projet. Ne lance pas `tsc --noEmit` avant d’avoir installé et configuré TypeScript.

Les corrections sont des solutions possibles, pas les seules solutions acceptables. Une solution réussie doit respecter le résultat demandé, traiter les cas limites et pouvoir être expliquée.


## EX-JS-004 — Valider une quantité

- **Niveau :** CORE · **Durée :** 25 min
- **Fiches :** [RES-03](../docs/resumes/RES-03-variables-et-types-javascript.md) · [RES-18](../docs/resumes/RES-18-securite-validation-entrees.md) · [CS-09](../docs/cheatsheets/CS-09-securite-web-essentielle.md)
- **Objectif :** valider une valeur issue d'un formulaire.
- **Consigne :** écris `parseQuantity(value)` qui accepte une chaîne ou un nombre représentant un entier positif. Refuse les chaînes vides, décimaux, `NaN`, valeurs infinies, zéro et nombres négatifs.
- **Critères :** conversion explicite, erreurs documentées, cas limites testés.
- **Indice :** convertis la valeur puis vérifie qu'elle est finie, entière et supérieure ou égale à 1.
- **Correction attendue :** voir `parseQuantity` dans `tests/exercises.test.mjs`.

## EX-JS-005 — Déboguer une fonction de total

- **Niveau :** CORE · **Durée :** 25 min
- **Fiches :** [RES-08](../docs/resumes/RES-08-gestion-erreurs-debogage.md) · [RES-17](../docs/resumes/RES-17-tests-qualite-debugging.md) · [CS-07](../docs/cheatsheets/CS-07-erreurs-debugging.md)
- **Objectif :** isoler une erreur de logique et écrire un test de régression.
- **Consigne :** écris une fonction qui additionne un tableau de prix, traite le tableau vide et refuse les valeurs invalides.
- **Critères :** résultat numérique, absence de mutation et cas limite testé.
- **Indice :** vérifie la valeur initiale de l'accumulateur de `reduce`.
- **Correction attendue :** voir `sumPrices` dans `tests/exercises.test.mjs`.

## EX-ASYNC-001 — Traiter une réponse HTTP

- **Niveau :** CORE · **Durée :** 30 min
- **Fiches :** [RES-09](../docs/resumes/RES-09-async-promises-async-await.md) · [RES-16](../docs/resumes/RES-16-async-api-http-etat.md) · [CS-05](../docs/cheatsheets/CS-05-async-promises-fetch.md)
- **Objectif :** distinguer erreur réseau et réponse HTTP non réussie.
- **Consigne :** écris une fonction utilisant `fetch` qui vérifie `response.ok` avant de lire le JSON et fournit un message d'erreur utile.
- **Critères :** gérer les rejets réseau et les réponses 404/500.
- **Indice :** `fetch` ne rejette pas automatiquement une promesse pour un statut HTTP 404 ou 500.
- **Correction attendue :** vérifier `!response.ok`, lever une erreur, puis lire le JSON.

## EX-TEST-001 — Tester une fonction de remise

- **Niveau :** CORE · **Durée :** 25 min
- **Fiches :** [RES-17](../docs/resumes/RES-17-tests-qualite-debugging.md) · [CS-10](../docs/cheatsheets/CS-10-checklist-qualite-livraison.md)
- **Objectif :** tester les frontières d'une règle métier.
- **Consigne :** applique une remise de 10 % si le sous-total atteint 10 000, sinon aucune remise. Refuse les montants négatifs et non finis.
- **Critères :** tester 9 999, 10 000, 10 001 et une valeur invalide.
- **Indice :** le seuil est inclusif.
- **Correction attendue :** voir `calculateDiscount` dans `tests/exercises.test.mjs`.

## EX-SEC-001 — Afficher une saisie sans injection HTML

- **Niveau :** CORE · **Durée :** 25 min
- **Fiches :** [RES-11](../docs/resumes/RES-11-dom-evenements-interfaces-web.md) · [RES-18](../docs/resumes/RES-18-securite-validation-entrees.md) · [CS-09](../docs/cheatsheets/CS-09-securite-web-essentielle.md)
- **Objectif :** afficher du texte utilisateur sans le traiter comme du HTML.
- **Consigne :** crée un élément DOM et affiche une saisie utilisateur. Compare `textContent` à `innerHTML` et explique le risque.
- **Critères :** utiliser `textContent` pour le texte brut et ne pas exécuter de contenu fourni par l'utilisateur.
- **Indice :** le navigateur n'a pas besoin d'interpréter la saisie comme du balisage.
- **Correction attendue :** `element.textContent = userInput`.

## EX-PROJ-001 — Mini-projet : gestionnaire de tâches

- **Niveau :** PRO · **Durée :** 90 min
- **Fiches :** [RES-11](../docs/resumes/RES-11-dom-evenements-interfaces-web.md) · [RES-12](../docs/resumes/RES-12-typescript-types-interfaces-fonctions.md) · [RES-17](../docs/resumes/RES-17-tests-qualite-debugging.md) · [RES-18](../docs/resumes/RES-18-securite-validation-entrees.md) · [RES-20](../docs/resumes/RES-20-projet-synthese-evaluation.md)
- **Objectif :** combiner modélisation, DOM, validation, tests et accessibilité.
- **Consigne :** crée une application permettant d'ajouter, terminer, filtrer et supprimer des tâches.
- **Contraintes :** TypeScript strict, titre non vide, validation des entrées, pas d'insertion HTML directe de données non fiables, contrôles utilisables au clavier et tests des règles métier.
- **Critères :** fonctionnalités correctes, cas limites couverts, code lisible, instructions de lancement et tests reproductibles.
- **Indice 1 :** commence par les types et les fonctions métier sans DOM.
- **Indice 2 :** teste les fonctions, puis connecte les événements.
- **Grille :** exactitude 30 %, robustesse 20 %, tests 20 %, lisibilité 15 %, accessibilité et sécurité 15 %.

## Auto-évaluation

- [ ] Je peux expliquer la notion sans relire la correction.
- [ ] J'ai testé au moins un cas limite.
- [ ] Je sais interpréter les échecs de tests.
- [ ] J'ai relié l'exercice à la fiche RES/CS correspondante.
- [ ] Je peux justifier mes choix de conception.
