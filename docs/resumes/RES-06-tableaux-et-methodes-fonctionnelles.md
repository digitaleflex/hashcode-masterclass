# RES-06 — Tableaux et méthodes fonctionnelles

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : stocker des collections de données, les parcourir et les transformer de façon lisible et prévisible.


## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : fonctions, conditions, boucles et objets de base. À la fin, tu dois pouvoir choisir correctement entre map, filter, find, some, every et reduce.

**Mise en pratique :** Application : à partir d'une liste de tâches, produis une liste filtrée, un compteur, un total et une recherche sans modifier la liste d'origine inutilement.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-02-tableaux-objets-methodes.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Créer et lire un tableau

Un tableau (*Array*) stocke une collection ordonnée de valeurs. Les index commencent à zéro.

```js
const langages = ["JavaScript", "TypeScript", "Python"];

console.log(langages[0]); // "JavaScript"
console.log(langages[2]); // "Python"
console.log(langages.length); // 3
```

- Le premier élément est à l'index `0`.
- Le dernier élément est à l'index `tableau.length - 1`.
- Un index hors limites renvoie généralement `undefined`.

## 2. Ajouter, retirer et modifier des éléments

```js
const outils = ["Git", "VS Code"];

outils.push("Node.js"); // ajoute à la fin
console.log(outils); // ["Git", "VS Code", "Node.js"]

const dernier = outils.pop(); // retire et renvoie le dernier élément
console.log(dernier); // "Node.js"
```

Autres méthodes utiles :
- `unshift(valeur)` ajoute au début ;
- `shift()` retire et renvoie le premier élément ;
- `includes(valeur)` vérifie si une valeur est présente ;
- `indexOf(valeur)` renvoie son index, ou `-1` si elle est absente ;
- `slice(debut, fin)` renvoie une portion sans modifier le tableau initial ;
- `splice(...)` peut ajouter, retirer ou remplacer des éléments dans le tableau d'origine.

**Attention :** `push`, `pop`, `shift`, `unshift` et `splice` modifient le tableau. `slice`, `map` et `filter` renvoient un nouveau tableau.

## 3. Parcourir un tableau

### Avec une boucle `for...of`

```js
const scores = [12, 18, 9];

for (const score of scores) {
  console.log(score);
}
```

### Avec `forEach`

```js
scores.forEach((score, index) => {
  console.log(index, score);
});
```

`forEach` exécute une fonction pour chaque élément et renvoie `undefined`. Il est adapté aux effets de bord comme afficher ou enregistrer une information, pas pour construire directement un nouveau tableau.

## 4. `map()` — transformer chaque élément

`map` applique une fonction à chaque élément et renvoie un nouveau tableau de même longueur.

```js
const prixHT = [1000, 2500, 4000];

const prixTTC = prixHT.map(prix => prix * 1.18);

console.log(prixTTC); // [1180, 2950, 4720]
console.log(prixHT);  // [1000, 2500, 4000]
```

Utilise `map` lorsque tu veux convertir chaque élément : prix avec taxe, noms formatés, objets enrichis ou données préparées pour une interface.

## 5. `filter()` — conserver les éléments qui correspondent à une règle

`filter` renvoie un nouveau tableau avec les éléments pour lesquels la fonction de test renvoie une valeur truthy.

```js
const ages = [14, 22, 17, 31, 19];

const majeurs = ages.filter(age => age >= 18);

console.log(majeurs); // [22, 31, 19]
```

Le tableau de résultat peut être vide, plus court ou aussi long que le tableau de départ.

## 6. `reduce()` — accumuler un résultat

`reduce` parcourt les éléments en maintenant un accumulateur. Il peut servir à calculer un total, compter des occurrences ou construire un objet de synthèse.

```js
const prix = [1000, 2500, 3000];

const total = prix.reduce((somme, montant) => {
  return somme + montant;
}, 0);

console.log(total); // 6500
```

Le `0` est la valeur initiale de l'accumulateur. Il rend le calcul explicite et permet notamment de gérer correctement un tableau vide pour cette somme.

### Compter des tâches terminées

```js
const tasks = [
  { title: "Lire", completed: true },
  { title: "Coder", completed: false },
  { title: "Tester", completed: true },
];

const nombreTerminees = tasks.reduce((compteur, task) => {
  return compteur + (task.completed ? 1 : 0);
}, 0);

console.log(nombreTerminees); // 2
```

Ne choisis pas `reduce` simplement parce qu'il est puissant. Si `map`, `filter` ou une boucle simple exprime mieux l'intention, préfère la solution la plus lisible.

## 7. `find()` et `findIndex()`

- `find` renvoie le premier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.
- `findIndex` renvoie l'index du premier élément correspondant, ou `-1` si aucun ne correspond.

```js
const users = [
  { id: 1, name: "Awa" },
  { id: 2, name: "Sami" },
];

const user = users.find(item => item.id === 2);
const index = users.findIndex(item => item.name === "Awa");

console.log(user);  // { id: 2, name: "Sami" }
console.log(index); // 0
```

Vérifie le résultat de `find` avant d'accéder à ses propriétés, car il peut être `undefined`.

```js
const userInconnu = users.find(item => item.id === 99);

if (userInconnu) {
  console.log(userInconnu.name);
} else {
  console.log("Utilisateur introuvable");
}
```

## 8. `some()` et `every()`

- `some` renvoie `true` si au moins un élément satisfait la condition.
- `every` renvoie `true` si tous les éléments satisfont la condition.

```js
const notes = [12, 15, 8];

console.log(notes.some(note => note < 10));  // true
console.log(notes.every(note => note >= 10)); // false
```

À retenir : pour un tableau vide, `some` renvoie `false` et `every` renvoie `true`. C'est le comportement logique défini par ces méthodes.

## 9. Trier un tableau avec `sort()`

`sort` trie le tableau **sur place** et renvoie ce même tableau. Sans fonction de comparaison, le tri est lexicographique, pas numérique.

```js
const nombres = [3, 20, 100, 4];

nombres.sort();
console.log(nombres); // [100, 20, 3, 4] : ordre lexicographique
```

Pour un tri numérique croissant :

```js
const nombres = [3, 20, 100, 4];

nombres.sort((a, b) => a - b);
console.log(nombres); // [3, 4, 20, 100]
```

Pour un tri décroissant, utilise `(a, b) => b - a`.

Si tu veux préserver le tableau initial, copie-le avant le tri :

```js
const originaux = [3, 20, 100, 4];
const tries = [...originaux].sort((a, b) => a - b);

console.log(originaux); // tableau non trié
console.log(tries);     // [3, 4, 20, 100]
```

## 10. Objets et tableaux d'objets

Les applications manipulent souvent des listes d'objets.

```js
const products = [
  { id: "p1", name: "Clavier", price: 12000, available: true },
  { id: "p2", name: "Souris", price: 5000, available: false },
  { id: "p3", name: "Écran", price: 85000, available: true },
];

const disponibles = products.filter(product => product.available);
const noms = products.map(product => product.name);
const prixTotal = products.reduce((sum, product) => sum + product.price, 0);

console.log(disponibles.length); // 2
console.log(noms);               // ["Clavier", "Souris", "Écran"]
console.log(prixTotal);          // 102000
```

Les méthodes se combinent parfois en chaîne :

```js
const nomsDisponibles = products
  .filter(product => product.available)
  .map(product => product.name);

console.log(nomsDisponibles); // ["Clavier", "Écran"]
```

Lis la chaîne de gauche à droite : on filtre d'abord, puis on transforme les éléments conservés.

## 11. Copie, référence et immutabilité

Les tableaux et les objets sont des valeurs de référence. Affecter un tableau à une autre variable ne crée pas une copie indépendante.

```js
const original = ["A", "B"];
const reference = original;

reference.push("C");

console.log(original); // ["A", "B", "C"]
```

Pour créer une copie superficielle d'un tableau :

```js
const original = ["A", "B"];
const copie = [...original];

copie.push("C");

console.log(original); // ["A", "B"]
console.log(copie);    // ["A", "B", "C"]
```

La copie avec `...` est **superficielle** : si le tableau contient des objets imbriqués, ceux-ci restent partagés entre les deux tableaux. Pour mettre à jour un objet dans une liste sans modifier l'objet initial :

```js
const updatedTasks = tasks.map(task =>
  task.title === "Coder"
    ? { ...task, completed: true }
    : task
);
```

Cette approche est utile dans les interfaces modernes, notamment lorsqu'on veut que les changements de données soient explicites.

## 12. TypeScript : typer les tableaux et leurs éléments

```ts
const scores: number[] = [12, 18, 9];
const noms: Array<string> = ["Awa", "Sami"];

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  { id: "t1", title: "Réviser", completed: false },
];

const terminees: Task[] = tasks.filter(task => task.completed);
const titres: string[] = tasks.map(task => task.title);
```

`Task[]` et `Array<Task>` sont deux syntaxes pour indiquer un tableau de tâches. TypeScript vérifie la cohérence des types lors du développement, mais les données provenant d'une API ou d'un fichier doivent être validées à l'exécution si elles ne sont pas fiables.

## 13. Atelier — mini tableau de bord de tâches

```js
const tasks = [
  { id: 1, title: "Lire le cours", completed: true, priority: 2 },
  { id: 2, title: "Créer un exercice", completed: false, priority: 1 },
  { id: 3, title: "Réviser les tableaux", completed: false, priority: 3 },
];

const openTasks = tasks.filter(task => !task.completed);
const titles = openTasks.map(task => task.title);
const urgentTasks = tasks.filter(task => !task.completed && task.priority === 1);
const completedCount = tasks.filter(task => task.completed).length;

console.log(titles);
console.log(urgentTasks);
console.log(completedCount);
```

**Défis :**
1. Calculer le nombre total de tâches.
2. Trouver la tâche dont l'identifiant vaut `3`.
3. Vérifier si au moins une tâche est urgente.
4. Trier une copie des tâches par priorité croissante.
5. Créer un tableau de tâches terminées contenant uniquement `id` et `title`.

## 14. Exercices avec corrigés

### Exercice A — choisir la méthode

Tu veux obtenir un nouveau tableau avec uniquement les prix supérieurs ou égaux à 10 000. Quelle méthode choisir ?

**Corrigé :** `filter`.

```js
const chers = prix.filter(montant => montant >= 10000);
```

### Exercice B — calculer un total

```js
const panier = [
  { prix: 2500, quantite: 2 },
  { prix: 1000, quantite: 3 },
];
```

**Corrigé :**

```js
const total = panier.reduce(
  (somme, article) => somme + article.prix * article.quantite,
  0
);

console.log(total); // 8000
```

### Exercice C — trouver le piège

Pourquoi ce code ne trie-t-il pas correctement les nombres ?

```js
[2, 10, 3].sort();
```

**Corrigé :** sans comparateur, `sort` compare les représentations sous forme de chaînes. Pour un ordre numérique, écris `[2, 10, 3].sort((a, b) => a - b)`.

## 15. Mémo — quelle méthode utiliser ?

| Besoin | Méthode | Résultat |
|---|---|---|
| Transformer chaque élément | `map` | Nouveau tableau |
| Conserver certains éléments | `filter` | Nouveau tableau |
| Calculer une valeur accumulée | `reduce` | Valeur accumulée |
| Trouver le premier élément correspondant | `find` | Élément ou `undefined` |
| Trouver le premier index correspondant | `findIndex` | Index ou `-1` |
| Vérifier si au moins un élément correspond | `some` | Booléen |
| Vérifier si tous les éléments correspondent | `every` | Booléen |
| Exécuter une action pour chaque élément | `forEach` | `undefined` |
| Trier le tableau | `sort` | Tableau trié, modifié sur place |

## 16. À retenir

- Les index commencent à zéro.
- `map` transforme, `filter` sélectionne et `reduce` accumule.
- `find` peut renvoyer `undefined` ; traite ce cas.
- `sort` modifie le tableau et nécessite un comparateur pour un tri numérique.
- Une copie avec `[...tableau]` est superficielle.
- Choisis la méthode la plus lisible plutôt que la plus sophistiquée.

## Suite de la série

- Précédent : [RES-05 — Fonctions JavaScript](./RES-05-fonctions-javascript.md)
- Suivant : **RES-07 — Objets, déstructuration et opérateur spread**

---

HashCode Academy · **LEARN · BUILD · BELONG**
