# RES-12 — TypeScript : types, interfaces et fonctions

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : décrire les formes de données attendues, typer les fonctions et détecter certaines erreurs avant l'exécution.

## 1. Qu'est-ce que TypeScript ?

TypeScript est un langage construit au-dessus de JavaScript qui ajoute notamment un système de types statiques. Le code TypeScript est généralement transformé en JavaScript avant d'être exécuté.

Les types aident à :
- documenter les données et les contrats des fonctions ;
- obtenir une meilleure autocomplétion dans l'éditeur ;
- détecter des incohérences pendant le développement ;
- faciliter les refactorisations.

TypeScript ne remplace pas JavaScript : il s'appuie sur ses comportements à l'exécution. Les annotations de types sont principalement supprimées lors de la transformation en JavaScript et ne valident pas automatiquement les données externes à l'exécution.

## 2. Annotations de types et inférence

Tu peux annoter une variable :

```ts
let nom: string = "Awa";
let age: number = 24;
let actif: boolean = true;
```

Mais TypeScript sait souvent déduire le type à partir de la valeur initiale :

```ts
const ville = "Cotonou"; // type inféré : string littéral ou string selon le contexte
let score = 10;           // type inféré : number
```

L'inférence évite d'ajouter des annotations inutiles. Ajoute un type explicite lorsqu'il clarifie le contrat, notamment pour les paramètres de fonctions, les données partagées ou les retours publics.

## 3. Types primitifs et tableaux

```ts
const titre: string = "Masterclass";
const duree: number = 120;
const publie: boolean = false;
const scores: number[] = [12, 15, 18];
const noms: Array<string> = ["Awa", "Sami"];
```

Les syntaxes `number[]` et `Array<number>` décrivent toutes deux un tableau de nombres.

Pour les valeurs absentes, TypeScript permet de modéliser explicitement les possibilités :

```ts
let email: string | undefined;
email = "awa@example.com";
email = undefined;
```

Avec `strictNullChecks` activé, `null` et `undefined` doivent être pris en compte explicitement lorsque c'est nécessaire.

## 4. Unions de types

Une union décrit plusieurs types possibles avec `|`.

```ts
let identifiant: string | number;

identifiant = "user-12";
identifiant = 12;
```

Une union ne signifie pas que toute opération est autorisée. Il faut parfois vérifier le type avant d'utiliser une méthode spécifique :

```ts
function afficherId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}
```

La vérification avec `typeof` permet ici à TypeScript d'affiner le type de `id` dans chaque branche.

## 5. Types littéraux et unions discriminées

Un type peut limiter une valeur à un ensemble précis de chaînes ou de nombres.

```ts
type TaskStatus = "todo" | "in_progress" | "done";

function setStatus(status: TaskStatus): void {
  console.log(status);
}

setStatus("done");
// setStatus("finished"); // erreur TypeScript
```

C'est particulièrement utile pour les statuts, les rôles et les options limitées.

Les unions discriminées permettent de représenter des variantes structurées :

```ts
type ApiResult =
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function handleResult(result: ApiResult): string {
  if (result.status === "success") {
    return result.data.join(", ");
  }

  return result.message;
}
```

Le champ `status` distingue les variantes et permet au compilateur d'affiner les propriétés accessibles.

## 6. Alias de types avec `type`

Un alias donne un nom à un type, qu'il soit primitif, union, objet ou autre.

```ts
type UserId = string;

type User = {
  id: UserId;
  name: string;
  active: boolean;
};

const user: User = {
  id: "u-1",
  name: "Awa",
  active: true,
};
```

Un alias comme `UserId = string` améliore la lisibilité, mais ne crée pas automatiquement un type nominal distinct de `string`. Pour distinguer fortement des identifiants qui partagent le même type primitif, des techniques supplémentaires peuvent être nécessaires.

## 7. Interfaces

Une interface décrit la forme attendue d'un objet.

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
}

const task: Task = {
  id: "t-1",
  title: "Réviser TypeScript",
  completed: false,
};
```

- Les propriétés sans `?` sont obligatoires.
- Les propriétés avec `?` sont optionnelles.
- Une propriété optionnelle peut être absente ; lorsqu'on la lit, sa valeur peut être `undefined`.

Les interfaces et les alias d'objet se recouvrent largement. Les interfaces peuvent être étendues et déclarées plusieurs fois dans certains contextes, tandis que `type` peut exprimer directement des unions et d'autres constructions.

## 8. Étendre des types et combiner des propriétés

Avec une interface :

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: string;
}
```

Avec des alias et intersections :

```ts
type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type StoredTask = Task & WithTimestamps;
```

L'intersection `A & B` combine les exigences des deux types. Si leurs propriétés incompatibles partagent le même nom, le résultat peut devenir difficile à utiliser ; vérifie la cohérence des définitions.

## 9. Typer les paramètres et les retours de fonctions

```ts
function additionner(a: number, b: number): number {
  return a + b;
}

function saluer(nom: string): string {
  return `Bonjour, ${nom} !`;
}

function journaliser(message: string): void {
  console.log(message);
}
```

- Les annotations après les paramètres définissent les types acceptés.
- L'annotation après les parenthèses définit le type de retour.
- `void` indique qu'un résultat utile n'est pas destiné à être renvoyé.

TypeScript peut inférer les types de retour, mais les annoter peut rendre les contrats d'une API plus clairs.

## 10. Paramètres optionnels et valeurs par défaut

```ts
function saluer(nom: string, titre?: string): string {
  return titre ? `Bonjour ${titre} ${nom}` : `Bonjour ${nom}`;
}

function multiplier(valeur: number, facteur = 2): number {
  return valeur * facteur;
}

console.log(saluer("Awa")); // "Bonjour Awa"
console.log(multiplier(5)); // 10
```

- Un paramètre optionnel `titre?` peut être omis et doit être traité comme potentiellement absent.
- Un paramètre avec une valeur par défaut peut être omis et le type est inféré à partir de la valeur par défaut.
- Les paramètres requis doivent généralement précéder les paramètres optionnels.

## 11. Fonctions fléchées et types de fonction

```ts
type Operation = (a: number, b: number) => number;

const additionner: Operation = (a, b) => a + b;
const multiplier: Operation = (a, b) => a * b;
```

Le type `Operation` décrit une fonction qui reçoit deux nombres et renvoie un nombre.

Cette approche est utile quand plusieurs fonctions doivent respecter le même contrat, par exemple des fonctions de calcul, des callbacks ou des stratégies interchangeables.

## 12. Les génériques

Un générique permet d'écrire une fonction ou une structure qui fonctionne avec différents types tout en préservant l'information de type.

```ts
function premierElement<T>(items: T[]): T | undefined {
  return items[0];
}

const premierNom = premierElement(["Awa", "Sami"]); // string | undefined
const premierScore = premierElement([10, 20, 30]);  // number | undefined
```

Le paramètre de type `T` est déterminé à partir des arguments. Le type de retour conserve cette information.

Autre exemple :

```ts
type ApiResponse<T> = {
  data: T;
  receivedAt: Date;
};

const response: ApiResponse<User> = {
  data: { id: "u-1", name: "Awa", active: true },
  receivedAt: new Date(),
};
```

Les génériques évitent de perdre l'information de type en utilisant `any`.

## 13. Préférer `unknown` à `any` pour une valeur incertaine

`any` désactive une partie des vérifications de types. `unknown` indique que le type n'est pas encore connu et impose une vérification avant certaines opérations.

```ts
function afficherValeur(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("Valeur d'un autre type");
  }
}
```

Utilise `unknown` pour les données qui doivent être inspectées avant usage, notamment les valeurs externes. Évite d'utiliser `as SomeType` comme substitut à une validation réelle.

## 14. Typage statique et validation à l'exécution

Une annotation ne transforme pas automatiquement les données reçues d'un serveur en objet valide.

```ts
type User = {
  id: number;
  name: string;
};

// Cette assertion ne valide pas le contenu réel :
const user = (await response.json()) as User;
```

L'assertion `as User` demande au compilateur de traiter la valeur comme un `User`, sans vérifier à elle seule que le JSON respecte cette forme.

Pour une frontière externe, commence par `unknown`, puis valide les données :

```ts
function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string"
  );
}
```

Cette fonction de garde vérifie les deux propriétés requises pour ce modèle simple. Pour des schémas complexes, une bibliothèque de validation peut être plus adaptée.

## 15. Atelier — modèle typé pour un gestionnaire de tâches

```ts
type TaskStatus = "todo" | "in_progress" | "done";

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

function createTask(id: string, title: string): Task {
  return {
    id,
    title: title.trim(),
    status: "todo",
  };
}

function completeTask(task: Task): Task {
  return {
    ...task,
    status: "done",
  };
}

function isCompleted(task: Task): boolean {
  return task.status === "done";
}

const task = createTask("t-1", "Réviser les types");
const completed = completeTask(task);

console.log(isCompleted(completed)); // true
```

**Défis :**
1. Ajoute une propriété optionnelle `dueDate`.
2. Écris une fonction qui accepte `Task[]` et renvoie uniquement les tâches terminées.
3. Crée un type générique `Result<T>` avec une variante succès et une variante erreur.
4. Explique pourquoi le statut `"finished"` doit être refusé.
5. Ajoute une validation d'entrée avant de créer une tâche.

## 16. Exercices avec corrigés

### Exercice A — union de types

Écris une fonction qui reçoit un `string | number` et renvoie toujours une chaîne.

**Corrigé :**

```ts
function toText(value: string | number): string {
  return typeof value === "string" ? value : String(value);
}
```

### Exercice B — propriété optionnelle

Pourquoi faut-il vérifier `task.dueDate` avant d'appeler une méthode sur cette valeur ?

**Corrigé :** la propriété est optionnelle ; elle peut être absente et sa lecture peut renvoyer `undefined`.

### Exercice C — comprendre `unknown`

Pourquoi cette ligne est-elle refusée si `value` est de type `unknown` ?

```ts
// value.toUpperCase();
```

**Corrigé :** le compilateur ne sait pas si `value` est une chaîne. Vérifie d'abord `typeof value === "string"`.

## 17. À retenir

- TypeScript ajoute une vérification statique au-dessus de JavaScript.
- L'inférence réduit les annotations redondantes.
- Les unions modélisent plusieurs types possibles ; les vérifications affinent le type.
- `type` et `interface` décrivent les formes attendues des données.
- Les fonctions typées rendent les contrats explicites.
- Les génériques préservent l'information de type.
- `unknown` est plus sûr que `any` pour des données non vérifiées.
- Une assertion de type n'est pas une validation à l'exécution.

## Suite de la série

- Précédent : [RES-11 — DOM, événements et interfaces web](./RES-11-dom-evenements-interfaces-web.md)
- Suivant : **RES-13 — Classes, objets et programmation orientée objet en TypeScript** (à créer)

---

HashCode Academy · **LEARN · BUILD · BELONG**
