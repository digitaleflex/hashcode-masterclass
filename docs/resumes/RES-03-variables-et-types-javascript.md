# RES-03 — Variables et types JavaScript

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Débutant  
**Référence pédagogique :** HashCode Masterclass JavaScript & TypeScript, « JavaScript — les fondamentaux »  
**Objectif :** déclarer des variables, reconnaître les types de valeurs courants, comprendre les conversions et comparer correctement des valeurs.

---

## 1. Qu’est-ce qu’une variable ?

Une variable est un nom associé à une valeur. En JavaScript moderne, on utilise principalement `const` et `let`.

```js
const learner = "Amina";
let score = 0;

score = 10;

console.log(learner);
console.log(score);
```

Résultat :

```text
Amina
10
```

- `learner` est déclaré avec `const` : sa liaison ne peut pas être réaffectée.
- `score` est déclaré avec `let` : sa valeur peut être réaffectée.

## 2. Choisir entre `const` et `let`

| Mot-clé | Usage | Réaffectation |
|---|---|---|
| `const` | Valeur qui n’a pas besoin d’être réaffectée | Non |
| `let` | Valeur qui doit pouvoir changer | Oui |
| `var` | Ancien mot-clé, avec des règles de portée différentes | Oui |

Exemples :

```js
const academy = "HashCode Academy";
let attempts = 1;

attempts = 2; // Autorisé
// academy = "Autre nom"; // TypeError
```

**Bonne pratique :** privilégier `const` par défaut. Utiliser `let` lorsque la réaffectation est nécessaire. Éviter `var` dans le nouveau code sauf raison spécifique.

### Attention aux objets et aux tableaux

`const` empêche de réaffecter la variable ; cela ne rend pas automatiquement l’objet immuable.

```js
const learner = { name: "Amina" };

learner.name = "Samira"; // Autorisé
// learner = {}; // Interdit : nouvelle affectation
```

La propriété peut changer, mais la liaison `learner` ne peut pas pointer vers un autre objet.

## 3. Les types de valeurs courants

JavaScript est un langage à typage dynamique : une variable peut recevoir des valeurs de types différents au cours de son existence, si le code le fait.

| Type | Exemple | Usage courant |
|---|---|---|
| `string` | `"Bonjour"` | Texte |
| `number` | `42`, `3.14` | Nombres, entiers ou décimaux |
| `boolean` | `true`, `false` | Valeur logique |
| `undefined` | `undefined` | Valeur non définie ou absence de valeur assignée |
| `null` | `null` | Absence de valeur explicitement indiquée |
| `bigint` | `123n` | Entiers très grands |
| `symbol` | `Symbol("id")` | Identifiants uniques |

Les objets et les tableaux sont également essentiels :

```js
const learner = { name: "Amina", active: true };
const scores = [12, 15, 18];
```

Les tableaux et les fonctions sont des valeurs de type objet au sens large de JavaScript, mais les fonctions possèdent leur propre comportement appelable.

## 4. Identifier le type d’une valeur

L’opérateur `typeof` donne une indication sur le type d’une valeur.

```js
console.log(typeof "HashCode"); // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof null);       // "object" — particularité historique
console.log(typeof (() => {})); // "function"
```

**Piège :** `typeof null` renvoie `"object"`. C’est une particularité historique du langage, pas une preuve que `null` est un objet ordinaire.

Pour reconnaître un tableau, on utilise généralement :

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({});        // false
```

## 5. Chaînes de caractères et nombres

Les chaînes de caractères représentent du texte. Les nombres servent notamment aux calculs.

```js
const name = "Amina";
const score = 15;

console.log(name + " a obtenu " + score);
console.log(` ${name} a obtenu ${score} `.trim());
```

Les chaînes avec accents graves, appelées *template literals*, permettent d’insérer des expressions avec `${...}`.

### Une addition peut concaténer

```js
console.log(5 + 2);   // 7
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

Le comportement dépend des types et des règles de conversion. Ne compte pas sur une conversion implicite si une conversion explicite rend l’intention plus claire.

## 6. Convertir explicitement les valeurs

Exemples :

```js
Number("42");    // 42
String(42);      // "42"
Boolean(1);      // true
Boolean(0);      // false
parseInt("42px", 10); // 42
```

Attention aux cas invalides :

```js
Number("bonjour"); // NaN
Number("");        // 0
parseInt("bonjour", 10); // NaN
```

`NaN` signifie « Not a Number » : le résultat d’une opération numérique invalide. Malgré son nom, son type est `number`.

Pour tester si une valeur est `NaN`, utiliser :

```js
Number.isNaN(Number("bonjour")); // true
```

Évite d’utiliser `parseInt` comme validation complète d’un nombre : par exemple, `parseInt("12abc", 10)` renvoie `12`. La règle de validation dépend du format attendu.

## 7. Valeurs truthy et falsy

Dans une condition, JavaScript convertit la valeur en booléen. Certaines valeurs sont *falsy* (évaluées comme fausses) :

- `false`
- `0`, `-0`, `0n`
- `""` (chaîne vide)
- `null`
- `undefined`
- `NaN`

Les autres valeurs sont généralement *truthy*, notamment `"0"`, `"false"`, `[]` et `{}`.

```js
if ("false") {
  console.log("Cette branche s'exécute");
}
```

La chaîne `"false"` n’est pas la valeur booléenne `false` : elle est non vide, donc truthy.

## 8. Comparer avec `===`

L’égalité stricte compare les valeurs sans convertir automatiquement leurs types.

```js
console.log(5 === 5);   // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
```

L’égalité avec conversion implicite (`==`) peut donner des résultats surprenants :

```js
console.log(5 == "5");  // true
console.log(0 == false); // true
```

**Bonne pratique :** privilégier `===` et `!==` pour rendre les comparaisons plus prévisibles. Il existe des cas particuliers où `==` est intentionnel, mais ils ne sont pas nécessaires pour les exercices de base.

### Comparaison des objets

Les objets sont comparés par référence, pas par leur contenu :

```js
console.log({ id: 1 } === { id: 1 }); // false

const task = { id: 1 };
const sameTask = task;
console.log(task === sameTask); // true
```

Les deux premiers objets sont deux objets distincts. Dans le deuxième exemple, les deux variables référencent le même objet.

## 9. Distinguer `null` et `undefined`

- `undefined` apparaît notamment lorsqu’une variable déclarée n’a pas reçu de valeur.
- `null` est souvent utilisé pour représenter explicitement l’absence d’une valeur.

```js
let selectedTask;
const activeTask = null;

console.log(selectedTask); // undefined
console.log(activeTask);   // null
```

Ne suppose pas qu’une valeur existe avant de l’utiliser. Vérifie le contrat de la fonction ou la structure des données reçues.

## 10. Erreurs fréquentes

| Erreur | Pourquoi c’est un problème | Réflexe |
|---|---|---|
| Utiliser `let` pour tout | Rend les réaffectations possibles même quand elles ne sont pas nécessaires | Préférer `const` par défaut |
| Confondre `"10"` et `10` | Le premier est du texte, le second un nombre | Vérifier le type et convertir explicitement |
| Utiliser `==` sans comprendre la coercition | La conversion implicite peut surprendre | Préférer `===` |
| Croire que `const` rend un objet immuable | Ses propriétés peuvent encore changer | Distinguer liaison et contenu |
| Croire que `typeof null` vaut `"null"` | C’est une particularité historique | Connaître cette exception |
| Tester une chaîne avec `if (value)` sans réfléchir | Une chaîne non vide comme `"false"` est truthy | Vérifier la règle métier attendue |
| Supposer que `Number(value)` réussit toujours | Une entrée invalide peut produire `NaN` | Valider la valeur et le format |

## 11. Mini-exercices

### Exercice A — Prédire la sortie

```js
const quantity = 3;
const price = "100";
console.log(quantity + price);
console.log(quantity * Number(price));
```

**Correction :**

```text
3100
300
```

La première expression concatène une chaîne ; la deuxième convertit explicitement `price` en nombre avant la multiplication.

### Exercice B — Égalité stricte

Que renvoie chaque expression ?

```js
10 === "10"
Boolean("")
Boolean("0")
typeof null
```

**Correction :**

- `false`
- `false`
- `true`
- `"object"`

### Exercice C — Choisir le bon mot-clé

Écris une variable `attempts` qui commence à `0`, puis augmente à `1`.

**Correction :**

```js
let attempts = 0;
attempts = 1;
```

`let` convient ici parce que la variable est réaffectée.

## 12. L’essentiel à retenir

- `const` empêche la réaffectation d’une liaison ; il ne rend pas automatiquement un objet immuable.
- Les valeurs JavaScript possèdent des types, notamment `string`, `number`, `boolean`, `undefined` et `null`.
- Les conversions implicites peuvent modifier le résultat d’une expression.
- `===` compare sans conversion de type et constitue le choix recommandé dans les cas courants.
- Les valeurs *falsy* et *truthy* influencent les conditions.
- Il faut vérifier les entrées et ne pas confondre typage, conversion et validation.

---

**Fiche précédente :** [RES-02 — Préparer son environnement de développement](RES-02-environnement-de-developpement.md)  
**Suite recommandée :** `RES-04 — Conditions et boucles`.

**HashCode Academy — LEARN · BUILD · BELONG**
