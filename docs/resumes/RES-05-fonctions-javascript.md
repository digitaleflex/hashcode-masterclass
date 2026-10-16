# RES-05 — Fonctions JavaScript

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : organiser le code en blocs réutilisables, transmettre des données à une fonction et récupérer un résultat.



## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : variables, expressions et conditions. Tu dois concevoir une fonction à responsabilité claire, avec paramètres et résultat exploitable.

**Mise en pratique :** Transforme du code répété en fonction, puis vérifie son comportement avec trois entrées différentes.

**Mémo associé :** [CS-03-fonctions-portee-this.md](../cheatsheets/CS-03-fonctions-portee-this.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur et prédis le résultat. Si tu ne peux pas expliquer pourquoi le résultat change, révise la notion avant de poursuivre.

## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : variables, expressions et conditions. À la fin, tu dois pouvoir concevoir une fonction avec une responsabilité claire, des paramètres et un résultat exploitable.

**Mise en pratique :** Application : transforme un bloc de code répété en fonction pure lorsque c'est possible, puis vérifie son comportement avec trois entrées différentes.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-03-fonctions-portee-this.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Qu'est-ce qu'une fonction ?

Une fonction est un bloc de code conçu pour accomplir une tâche. Elle peut recevoir des **paramètres**, exécuter des instructions et éventuellement renvoyer une valeur avec `return`.

Les fonctions permettent de :
- éviter de répéter le même code ;
- donner un nom clair à une opération ;
- découper un programme en unités faciles à tester ;
- réutiliser une logique avec des données différentes.

## 2. Déclarer et appeler une fonction

```js
function saluer() {
  console.log("Bienvenue dans HashCode Masterclass !");
}

saluer(); // Appel de la fonction
```

La déclaration définit la fonction. L'appel avec `()` demande son exécution. Définir une fonction ne l'exécute pas automatiquement.

## 3. Paramètres et arguments

Un **paramètre** est une variable déclarée dans la définition de la fonction. Un **argument** est la valeur transmise lors de l'appel.

```js
function saluerUtilisateur(nom) {
  console.log("Bonjour,", nom);
}

saluerUtilisateur("Amina"); // "Amina" est l'argument
saluerUtilisateur("Koffi");
```

Une fonction peut recevoir plusieurs paramètres :

```js
function additionner(a, b) {
  return a + b;
}

console.log(additionner(4, 6)); // 10
```

## 4. Renvoyer une valeur avec `return`

`return` termine l'exécution de la fonction et renvoie une valeur à l'endroit où la fonction a été appelée.

```js
function calculerPrixTTC(prixHT, taux) {
  return prixHT * (1 + taux);
}

const prixFinal = calculerPrixTTC(1000, 0.18);
console.log(prixFinal); // 1180
```

Ne confonds pas `return` et `console.log` :
- `console.log(...)` affiche une information dans la console ;
- `return ...` fournit une valeur que le reste du programme peut utiliser.

```js
function doublerAvecAffichage(nombre) {
  console.log(nombre * 2);
}

function doubler(nombre) {
  return nombre * 2;
}

const resultat = doubler(5);
console.log(resultat + 1); // 11
```

La fonction `doublerAvecAffichage` affiche le résultat, mais ne le renvoie pas : son résultat de retour est `undefined`.

**À retenir :** si aucune instruction `return` n'est exécutée, la fonction renvoie `undefined`.

## 5. Plusieurs chemins de retour

```js
function obtenirMention(score) {
  if (score >= 50) {
    return "Réussi";
  }

  return "À reprendre";
}

console.log(obtenirMention(72)); // "Réussi"
console.log(obtenirMention(35)); // "À reprendre"
```

Dès qu'un `return` est exécuté, la fonction s'arrête. Tout code placé après un `return` inconditionnel dans le même chemin est inatteignable.

## 6. Expressions de fonction

Une fonction peut être stockée dans une variable.

```js
const multiplier = function (a, b) {
  return a * b;
};

console.log(multiplier(3, 4)); // 12
```

Cette forme est appelée **expression de fonction**. Ici, la fonction est affectée à la constante `multiplier`.

## 7. Fonctions fléchées

Les fonctions fléchées utilisent la syntaxe `() => {}`. Elles sont très courantes dans le JavaScript moderne.

```js
const soustraire = (a, b) => {
  return a - b;
};

console.log(soustraire(9, 4)); // 5
```

Quand le corps ne contient qu'une expression, tu peux utiliser un retour implicite :

```js
const carre = nombre => nombre * nombre;
const additionner = (a, b) => a + b;

console.log(carre(5));          // 25
console.log(additionner(2, 3)); // 5
```

Quelques règles :
- Avec un seul paramètre, les parenthèses peuvent être omises : `nombre => nombre * 2`.
- Sans paramètre, les parenthèses sont obligatoires : `() => "Bonjour"`.
- Avec plusieurs paramètres, utilise les parenthèses : `(a, b) => a + b`.
- Avec des accolades, écris `return` si tu veux renvoyer une valeur.
- Sans accolades, une expression est renvoyée implicitement.

Piège classique :

```js
const creerObjet = () => ({ nom: "Ada" });
```

Les parenthèses autour de l'objet permettent de le renvoyer comme expression. Sans elles, les accolades seraient interprétées comme le corps de la fonction.

## 8. Portée des variables : `scope`

La portée définit l'endroit où une variable est accessible.

```js
const message = "Global";

function afficherMessage() {
  const detail = "Local";
  console.log(message); // accessible
  console.log(detail);  // accessible ici
}

afficherMessage();
console.log(message); // accessible
// console.log(detail); // ReferenceError : hors de portée
```

- Une variable déclarée dans une fonction est généralement locale à cette fonction.
- `let` et `const` ont une portée de bloc.
- Évite de créer des variables globales inutiles : elles rendent les dépendances plus difficiles à comprendre.

## 9. Paramètres par défaut

Un paramètre peut avoir une valeur par défaut si l'argument est absent ou vaut `undefined`.

```js
function saluer(nom = "visiteur") {
  return `Bonjour, ${nom} !`;
}

console.log(saluer());          // "Bonjour, visiteur !"
console.log(saluer("Awa"));     // "Bonjour, Awa !"
console.log(saluer(undefined)); // "Bonjour, visiteur !"
console.log(saluer(null));      // "Bonjour, null !"
```

Une valeur `null` n'active pas la valeur par défaut : elle est transmise comme une valeur explicite.

## 10. Une fonction doit idéalement faire une chose claire

Une fonction facile à maintenir porte un nom explicite et accomplit une responsabilité bien définie.

Moins clair :

```js
function traiter(data) {
  // beaucoup d'opérations différentes...
}
```

Plus clair :

```js
function calculerTotal(prix, quantite) {
  return prix * quantite;
}

function formaterPrix(montant) {
  return `${montant} FCFA`;
}

const total = calculerTotal(2500, 3);
console.log(formaterPrix(total)); // "7500 FCFA"
```

Ces fonctions peuvent être testées et réutilisées séparément.

## 11. Fonctions et tableaux

Les fonctions s'associent naturellement aux méthodes de tableaux comme `map`, `filter` et `reduce`.

```js
const prix = [1000, 2500, 3000];

const prixAvecTaxe = prix.map(montant => montant * 1.18);
const prixEleves = prix.filter(montant => montant >= 2500);
const total = prix.reduce((somme, montant) => somme + montant, 0);

console.log(prixAvecTaxe); // [1180, 2950, 3540]
console.log(prixEleves);   // [2500, 3000]
console.log(total);        // 6500
```

- `map` transforme chaque élément et renvoie un nouveau tableau.
- `filter` conserve les éléments qui satisfont une condition.
- `reduce` accumule les éléments dans une valeur finale.

## 12. Introduction aux fonctions TypeScript

TypeScript permet de préciser les types des paramètres et du résultat attendu.

```ts
function additionner(a: number, b: number): number {
  return a + b;
}

const multiplier = (a: number, b: number): number => a * b;
```

- `: number` après un paramètre indique son type.
- `: number` après la parenthèse fermante indique le type de retour.
- TypeScript peut souvent inférer le type de retour, mais l'annotation peut rendre le contrat plus explicite.

Les types TypeScript sont principalement vérifiés lors du développement et de la compilation ; ils ne remplacent pas la validation des données reçues à l'exécution.

## 13. Atelier — fonctions pour le gestionnaire de tâches

```js
function createTask(title) {
  return {
    title: title,
    completed: false,
  };
}

function completeTask(task) {
  return {
    ...task,
    completed: true,
  };
}

const task = createTask("Réviser les fonctions");
const completedTask = completeTask(task);

console.log(task.completed);          // false
console.log(completedTask.completed); // true
```

Dans cet exemple, `completeTask` renvoie un nouvel objet plutôt que de modifier directement l'objet d'origine. Cette approche aide à rendre les transformations de données plus prévisibles.

**À essayer :**
1. Écris `formatTask(task)` qui renvoie le titre précédé de `[✓]` si la tâche est terminée, sinon de `[ ]`.
2. Écris `countCompleted(tasks)` qui renvoie le nombre de tâches terminées.
3. Ajoute une annotation TypeScript au modèle `Task` et à ces fonctions.

## 14. Exercices avec corrigés

### Exercice A — prédire le résultat

```js
function incrementer(nombre) {
  nombre = nombre + 1;
  return nombre;
}

const valeur = 7;
console.log(incrementer(valeur));
console.log(valeur);
```

**Corrigé :** affiche `8`, puis `7`. Le paramètre local reçoit la valeur du nombre ; réaffecter ce paramètre ne modifie pas la variable `valeur`.

### Exercice B — écrire une fonction

Écris une fonction `estPair(nombre)` qui renvoie `true` si le nombre est pair et `false` sinon.

**Corrigé :**

```js
function estPair(nombre) {
  return nombre % 2 === 0;
}
```

### Exercice C — trouver l'erreur

Pourquoi cette fonction renvoie-t-elle `undefined` ?

```js
function additionner(a, b) {
  a + b;
}
```

**Corrigé :** l'expression est calculée, mais aucune valeur n'est renvoyée. Il faut écrire `return a + b;`.

## 15. À retenir

- Déclarer une fonction ne signifie pas l'exécuter : il faut l'appeler.
- Les paramètres reçoivent les arguments fournis à l'appel.
- `return` renvoie une valeur et termine la fonction.
- `console.log` affiche, mais ne remplace pas `return`.
- Les fonctions fléchées offrent une syntaxe concise ; elles n'ont toutefois pas leur propre `this`.
- Une bonne fonction a un nom explicite et une responsabilité claire.
- En TypeScript, les annotations rendent les contrats plus visibles sans remplacer la validation à l'exécution.

## Suite de la série

- Précédent : [RES-04 — Conditions et boucles](./RES-04-conditions-et-boucles.md)
- Suivant : **RES-06 — Tableaux et méthodes fonctionnelles**

---

HashCode Academy · **LEARN · BUILD · BELONG**
