# Cahier d’exercices pratiques — HashCode Masterclass

Ce cahier accompagne les fiches RES-01 à RES-12. Il est conçu pour un public débutant : chaque exercice précise le contexte, la tâche, le résultat attendu et les critères de réussite.

## Méthode de travail
Pour chaque exercice :
1. **Prédire** le résultat avant d’exécuter le code.
2. **Coder** sans regarder la correction.
3. **Exécuter** dans l’environnement indiqué.
4. **Comparer** le résultat et expliquer tout écart.
5. **Modifier** une entrée ou tester un cas limite.

## Exercice 1 — Calculer un panier (JavaScript)
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

## Exercice 2 — Transformer, filtrer et totaliser (JavaScript)
**Contexte :** analyser les prix d’articles d’une boutique.

```js
const prices = [1000, 2500, 1500, 500];

// TODO 1 : crée un tableau avec chaque prix augmenté de 10 %.
// TODO 2 : garde les prix supérieurs ou égaux à 1500.
// TODO 3 : calcule la somme de ces prix filtrés.
```

**Résultats attendus :** `[1100, 2750, 1650, 550]`, `[2500, 1500]`, puis `4000`.

<details>
<summary>Correction possible</summary>

```js
const withTax = prices.map((price) => price * 1.1);
const expensive = prices.filter((price) => price >= 1500);
const total = expensive.reduce((sum, price) => sum + price, 0);
console.log(withTax, expensive, total);
```
</details>

**À expliquer :** pourquoi `map`, `filter` et `reduce` ne sont-ils pas interchangeables ?

## Exercice 3 — Diagnostiquer les conversions (JavaScript)
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

## Exercice 4 — Définir un modèle Task (TypeScript)
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

## Exercice 5 — Écrire une fonction typée (TypeScript)
**Contexte :** l’interface veut afficher les titres sous une forme uniforme.

```ts
function formatTaskTitle(title: string): string {
  // TODO : renvoie « Tâche : » suivi du titre
}

console.log(formatTaskTitle("Réviser TypeScript"));
```

**Résultat attendu :** `Tâche : Réviser TypeScript`.
**À tester :** essaie d’appeler la fonction avec un nombre. Observe le diagnostic de TypeScript.

## Exercice 6 — Supprimer une tâche sans casser la liste (TypeScript)
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
