# RES-04 — Conditions et boucles en JavaScript

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : prendre une décision dans un programme et répéter une action de manière contrôlée.


## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : déclarations, types et opérateurs de comparaison. À la fin, tu dois pouvoir choisir entre if, switch, for, for...of et while sans créer de boucle infinie.

**Mise en pratique :** Application : écris une règle de décision, teste les valeurs juste avant, sur et juste après chaque seuil, puis vérifie les résultats.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-01-javascript-syntaxe-essentielle.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Pourquoi utiliser le contrôle de flux ?

Un programme ne se contente pas d'exécuter chaque ligne sans distinction. Il peut :
- **choisir** un chemin selon une condition ;
- **répéter** une instruction tant qu'une règle est vraie ;
- **parcourir** une série de valeurs.

Les conditions et les boucles rendent les programmes capables de réagir aux données.

## 2. Les comparaisons

Les opérateurs de comparaison produisent une valeur booléenne : `true` ou `false`.

| Opérateur | Signification | Exemple |
|---|---|---|
| `===` | strictement égal | `age === 18` |
| `!==` | strictement différent | `role !== "admin"` |
| `>` | supérieur à | `score > 50` |
| `<` | inférieur à | `stock < 1` |
| `>=` | supérieur ou égal | `age >= 18` |
| `<=` | inférieur ou égal | `prix <= budget` |

Privilégie `===` et `!==` : ils évitent les conversions implicites de `==` et `!=`.

```js
console.log(5 === 5);   // true
console.log(5 === "5"); // false
console.log(5 == "5");  // true : conversion implicite
```

## 3. Les opérateurs logiques

- `&&` — ET : les deux conditions doivent être vraies.
- `||` — OU : au moins une condition doit être vraie.
- `!` — NON : inverse une valeur booléenne.

```js
const age = 22;
const aUnCompte = true;

console.log(age >= 18 && aUnCompte); // true
console.log(age < 18 || aUnCompte);  // true
console.log(!aUnCompte);             // false
```

Attention : `&&` et `||` utilisent l'évaluation court-circuit. Dans `conditionA && conditionB`, JavaScript n'évalue pas `conditionB` si `conditionA` est déjà fausse. Avec `||`, il n'évalue pas la seconde partie si la première est vraie.

## 4. Prendre une décision avec `if`, `else if` et `else`

```js
const score = 76;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Bien");
} else if (score >= 50) {
  console.log("À renforcer");
} else {
  console.log("À reprendre");
}
```

JavaScript teste les branches dans l'ordre. La première condition vraie dont le bloc est retenu détermine le chemin exécuté. Organise donc les conditions du cas le plus spécifique au cas le plus général lorsque c'est nécessaire.

### Exemple : vérifier un stock

```js
const stock = 0;

if (stock > 0) {
  console.log("Produit disponible");
} else {
  console.log("Rupture de stock");
}
```

### Erreurs fréquentes

- Écrire `=` au lieu de `===` dans une comparaison.
- Oublier les accolades, ce qui rend le code plus difficile à lire.
- Placer une condition générale avant une condition plus précise.
- Confondre `&&` (ET) et `||` (OU).
- Oublier qu'une chaîne non vide, y compris `"false"`, est truthy.

## 5. Choisir entre plusieurs valeurs avec `switch`

`switch` est utile quand une expression doit être comparée à plusieurs valeurs exactes.

```js
const statut = "en_cours";

switch (statut) {
  case "a_faire":
    console.log("La tâche doit commencer");
    break;
  case "en_cours":
    console.log("La tâche est en cours");
    break;
  case "terminee":
    console.log("La tâche est terminée");
    break;
  default:
    console.log("Statut inconnu");
}
```

Le mot-clé `break` évite de continuer vers le cas suivant. `default` couvre les valeurs qui ne correspondent à aucun cas. Pour des règles basées sur des intervalles (par exemple `score >= 70`), `if / else if` est généralement plus adapté.

## 6. Répéter une action avec `for`

Utilise une boucle `for` lorsque le nombre de répétitions est connu ou piloté par un compteur.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Tour :", i);
}
```

Une boucle `for` classique comprend :
1. **Initialisation** : `let i = 1`
2. **Condition de continuation** : `i <= 5`
3. **Mise à jour** : `i++`

Après chaque tour, JavaScript met à jour le compteur puis vérifie la condition avant le tour suivant.

### Parcourir un tableau

```js
const langages = ["JavaScript", "TypeScript", "Python"];

for (let i = 0; i < langages.length; i++) {
  console.log(langages[i]);
}
```

La première position d'un tableau est l'index `0`. La dernière position valide est `tableau.length - 1`.

Pour parcourir simplement les valeurs, `for...of` est souvent plus lisible :

```js
for (const langage of langages) {
  console.log(langage);
}
```

## 7. Répéter tant qu'une condition est vraie avec `while`

`while` vérifie la condition **avant** chaque tour. Le bloc peut donc ne jamais être exécuté si la condition est fausse dès le départ.

```js
let tentatives = 0;

while (tentatives < 3) {
  console.log("Tentative", tentatives + 1);
  tentatives++;
}
```

**Règle essentielle :** assure-toi que la boucle peut finir. Si la condition reste toujours vraie, tu risques une boucle infinie.

### `do...while`

`do...while` exécute le bloc au moins une fois, puis vérifie la condition.

```js
let choix;

do {
  choix = "continuer";
  console.log("Le bloc a été exécuté");
} while (choix === "recommencer");
```

Cet exemple n'effectue qu'un seul tour, car la condition est fausse après la première exécution.

## 8. Contrôler une boucle : `break` et `continue`

- `break` quitte immédiatement la boucle.
- `continue` passe au tour suivant.

```js
for (let nombre = 1; nombre <= 6; nombre++) {
  if (nombre === 2) {
    continue; // saute 2
  }

  if (nombre === 5) {
    break; // arrête avant d'afficher 5
  }

  console.log(nombre);
}
// Affiche : 1, 3, 4
```

Utilise ces instructions quand elles clarifient la logique. Une condition bien construite dans la boucle peut parfois être plus lisible.

## 9. Quelle structure choisir ?

| Besoin | Structure conseillée |
|---|---|
| Exécuter un bloc selon une condition | `if / else` |
| Comparer une valeur à plusieurs cas exacts | `switch` |
| Répéter avec un compteur | `for` |
| Parcourir les valeurs d'un tableau | `for...of` |
| Répéter tant qu'une condition est vraie | `while` |
| Exécuter au moins une fois avant de vérifier | `do...while` |

## 10. Atelier — analyser les tâches d'une liste

On dispose d'un tableau de tâches. Affiche uniquement les tâches terminées, en utilisant une boucle et une condition.

```js
const tasks = [
  { title: "Lire le cours", completed: true },
  { title: "Faire l'exercice", completed: false },
  { title: "Réviser les boucles", completed: true },
];

for (const task of tasks) {
  if (task.completed) {
    console.log("Terminée :", task.title);
  }
}
```

Résultat attendu :

```text
Terminée : Lire le cours
Terminée : Réviser les boucles
```

**À essayer ensuite :**
1. Afficher uniquement les tâches non terminées.
2. Compter le nombre de tâches terminées.
3. Arrêter la recherche dès que la tâche « Réviser les boucles » est trouvée.
4. Afficher « Aucune tâche » si le tableau est vide.

## 11. Exercices de révision

### Exercice A — prédire le résultat

Sans exécuter le code, prédis ce qui sera affiché :

```js
const points = 64;

if (points >= 80) {
  console.log("A");
} else if (points >= 60) {
  console.log("B");
} else {
  console.log("C");
}
```

### Exercice B — écrire une boucle

Écris une boucle qui affiche les nombres pairs de 2 à 10 inclus.

### Exercice C — détecter le piège

Pourquoi ce code ne termine-t-il pas ?

```js
let i = 0;

while (i < 3) {
  console.log(i);
}
```

### Corrigés

**A.** Le programme affiche `B`, car `64 >= 60` est vrai et la première condition est fausse.

**B.**
```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

**C.** La variable `i` ne change jamais. La condition `i < 3` reste donc vraie. Il faut, par exemple, ajouter `i++` dans le bloc.

## 12. À retenir

- Une condition dirige l'exécution ; une boucle répète un bloc.
- Utilise `===` pour comparer sans conversion implicite.
- Vérifie l'ordre des branches `if / else if`.
- Pour un tableau, pense à `for...of` si tu n'as pas besoin de l'index.
- Dans une boucle `while`, vérifie que la condition pourra devenir fausse.
- Lis le code, prédis le résultat, puis exécute-le pour vérifier.

## Suite de la série

- Précédent : [RES-03 — Variables et types JavaScript](./RES-03-variables-et-types-javascript.md)
- Suivant : **RES-05 — Fonctions JavaScript**

---

HashCode Academy · **LEARN · BUILD · BELONG**
