# RES-09 — Asynchronisme, promesses et async/await

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : comprendre les opérations asynchrones et gérer leurs résultats sans bloquer inutilement le programme.

## 1. Pourquoi l'asynchronisme ?

Certaines opérations prennent du temps : appels réseau, accès à des fichiers, temporisateurs ou échanges avec une base de données. L'asynchronisme permet au programme de continuer à traiter d'autres tâches pendant que ces opérations attendent leur résultat.

Exemples d'opérations souvent asynchrones :
- récupérer des données avec `fetch` ;
- lire un fichier avec une API asynchrone de Node.js ;
- attendre une réponse d'un serveur ;
- utiliser un temporisateur avec `setTimeout`.

## 2. JavaScript, pile d'appels et boucle d'événements

JavaScript exécute le code synchrone sur sa pile d'appels. L'environnement (navigateur ou Node.js) fournit des mécanismes pour gérer les opérations asynchrones. Quand une promesse est résolue, ses réactions sont planifiées dans la file des microtâches (*microtask queue*).

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Résultat habituel :

```text
A
D
C
B
```

Pourquoi ?
1. Le code synchrone affiche `A`, puis programme le temporisateur.
2. Le callback de la promesse est planifié comme microtâche.
3. Le code synchrone affiche `D`.
4. Les microtâches prêtes sont exécutées avant le prochain callback de temporisateur.

Un délai de `0` ne signifie pas « exécuter immédiatement » : il signifie que le callback pourra être exécuté lorsque l'environnement le permettra.

## 3. Les promesses (*Promises*)

Une promesse représente le résultat futur d'une opération asynchrone. Elle se trouve dans l'un de ces états :
- **pending** : en attente ;
- **fulfilled** : réussie, avec une valeur ;
- **rejected** : échouée, avec une raison.

Une promesse est réglée une seule fois : après avoir été résolue ou rejetée, son état ne change plus.

```js
const promesse = new Promise((resolve, reject) => {
  const operationReussie = true;

  if (operationReussie) {
    resolve("Données chargées");
  } else {
    reject(new Error("Échec du chargement"));
  }
});
```

Le constructeur `Promise` exécute son exécuteur immédiatement. Il est surtout utile pour envelopper une API qui ne retourne pas déjà une promesse ; on n'a généralement pas besoin de créer manuellement une promesse autour de `fetch`.

## 4. Traiter une promesse avec `then`, `catch` et `finally`

```js
promesse
  .then(resultat => {
    console.log(resultat);
    return resultat.toUpperCase();
  })
  .then(texte => {
    console.log(texte);
  })
  .catch(erreur => {
    console.error("Erreur :", erreur.message);
  })
  .finally(() => {
    console.log("Opération terminée");
  });
```

- `then` traite une réussite et renvoie une nouvelle promesse.
- `catch` traite un rejet ou une exception survenue dans la chaîne précédente.
- `finally` exécute un traitement de clôture, quelle que soit l'issue normale de la promesse.

Le résultat renvoyé par un callback de `then` devient la valeur de la promesse suivante. Si le callback renvoie lui-même une promesse, la chaîne attend son règlement.

## 5. Créer une promesse rejetée et propager l'erreur

```js
function chargerProfil() {
  return fetch("/api/profile").then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  });
}

chargerProfil()
  .then(profil => console.log(profil))
  .catch(erreur => console.error("Impossible de charger le profil :", erreur));
```

Une erreur levée dans un callback de `then` rejette la promesse renvoyée par ce `then`. Elle peut donc être traitée par un `catch` situé plus loin dans la chaîne.

Évite de mettre un `catch` qui ignore l'erreur : cela peut transformer silencieusement un échec en apparente réussite.

## 6. La syntaxe `async/await`

Une fonction déclarée `async` renvoie toujours une promesse. `await` suspend l'exécution de cette fonction jusqu'au règlement de la promesse attendue, sans bloquer le fil d'exécution JavaScript entier.

```js
async function obtenirMessage() {
  return "Bonjour";
}

obtenirMessage().then(console.log); // "Bonjour"
```

Même si la valeur renvoyée est une chaîne, l'appel à une fonction `async` renvoie une promesse qui sera résolue avec cette chaîne.

### Attendre une promesse

```js
function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Début");
  await attendre(500);
  console.log("Après l'attente");
}

demo();
```

`await` peut être utilisé dans une fonction `async` (ainsi qu'au niveau supérieur dans certains contextes de modules). Il ne rend pas automatiquement toute opération plus rapide : il rend le code asynchrone plus lisible.

## 7. Gérer les erreurs avec `try/catch` et `await`

```js
async function chargerDonnees() {
  try {
    const response = await fetch("/api/data");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Échec du chargement :", error);
    throw error;
  }
}
```

- Une promesse rejetée attendue avec `await` lève une exception à cet endroit.
- `try/catch` permet de traiter l'erreur.
- Le `throw error` final propage l'échec à l'appelant. Si tu préfères renvoyer une valeur de repli, fais-le explicitement et documente ce comportement.

**Piège important :** `fetch` ne rejette pas automatiquement sa promesse pour les réponses HTTP comme 404 ou 500. Vérifie `response.ok`. Des erreurs réseau, en revanche, peuvent rejeter la promesse.

## 8. Exécuter plusieurs opérations avec `Promise.all`

Quand plusieurs opérations indépendantes doivent toutes réussir, `Promise.all` permet de les attendre en parallèle.

```js
async function chargerDashboard() {
  const [profilResponse, tasksResponse] = await Promise.all([
    fetch("/api/profile"),
    fetch("/api/tasks"),
  ]);

  if (!profilResponse.ok || !tasksResponse.ok) {
    throw new Error("Une requête HTTP a échoué.");
  }

  const [profil, tasks] = await Promise.all([
    profilResponse.json(),
    tasksResponse.json(),
  ]);

  return { profil, tasks };
}
```

`Promise.all` :
- démarre le traitement des promesses qui lui sont fournies (les opérations démarrent généralement lors de leur création) ;
- conserve l'ordre des résultats selon l'ordre du tableau d'entrée ;
- rejette si l'une des promesses rejetées fait échouer l'ensemble.

Un rejet de `Promise.all` ne signifie pas que les autres opérations déjà démarrées sont automatiquement annulées.

## 9. Choisir la bonne méthode de combinaison

| Méthode | Comportement |
|---|---|
| `Promise.all([...])` | Réussit si toutes les promesses réussissent ; rejette dès qu'une promesse rejette |
| `Promise.allSettled([...])` | Attend que toutes les promesses soient réglées et décrit chaque résultat |
| `Promise.race([...])` | Se règle selon la première promesse réglée, réussite ou rejet |
| `Promise.any([...])` | Réussit à la première réussite ; rejette avec `AggregateError` si toutes échouent |

Exemple de résultats partiels avec `allSettled` :

```js
const resultats = await Promise.allSettled([
  Promise.resolve("OK"),
  Promise.reject(new Error("Indisponible")),
]);

console.log(resultats);
// [
//   { status: "fulfilled", value: "OK" },
//   { status: "rejected", reason: Error(...) }
// ]
```

Utilise `allSettled` quand tu as besoin de connaître l'issue de chaque opération même si certaines échouent.

## 10. Éviter les attentes séquentielles inutiles

Si deux opérations sont indépendantes, les attendre l'une après l'autre augmente le temps total d'attente.

Séquentiel :

```js
const profil = await chargerProfil();
const notifications = await chargerNotifications();
```

En parallèle :

```js
const [profil, notifications] = await Promise.all([
  chargerProfil(),
  chargerNotifications(),
]);
```

Ne lance pas en parallèle des opérations qui dépendent réellement les unes des autres. Dans ce cas, l'ordre séquentiel est nécessaire.

## 11. Boucles et opérations asynchrones

Cette forme attend chaque opération avant de passer à l'élément suivant :

```js
for (const id of ids) {
  const resultat = await chargerParId(id);
  console.log(resultat);
}
```

Pour des opérations indépendantes, une approche parallèle peut être appropriée :

```js
const resultats = await Promise.all(ids.map(id => chargerParId(id)));
console.log(resultats);
```

Attention à la charge : lancer des milliers de requêtes en même temps peut saturer le serveur ou atteindre les limites d'une API. Pour de gros volumes, utilise une stratégie de concurrence limitée.

`forEach` n'attend pas automatiquement les promesses renvoyées par un callback async :

```js
// À éviter si tu dois attendre la fin de toutes les opérations :
ids.forEach(async id => {
  await chargerParId(id);
});
```

Préférer une boucle `for...of` avec `await` pour le séquentiel ou `Promise.all(ids.map(...))` pour le parallèle.

## 12. Annuler une requête avec `AbortController`

Certaines opérations comme `fetch` peuvent être annulées avec un signal.

```js
const controller = new AbortController();

try {
  const response = await fetch("/api/data", {
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Requête annulée");
  } else {
    console.error("Erreur de chargement :", error);
  }
}

// À appeler si l'application n'a plus besoin du résultat :
controller.abort();
```

Dans une vraie application, conserve le contrôleur à l'endroit où tu peux déclencher l'annulation, par exemple lorsqu'un utilisateur quitte une page ou lance une nouvelle recherche.

## 13. TypeScript et les résultats asynchrones

TypeScript infère le type d'une promesse à partir de la valeur qu'elle résout.

```ts
type User = {
  id: number;
  name: string;
};

async function getUser(): Promise<User> {
  return { id: 1, name: "Awa" };
}
```

L'annotation `Promise<User>` décrit le résultat attendu quand la promesse réussit. Elle ne garantit pas que des données externes sont réellement un objet `User` : une réponse réseau doit être validée si elle n'est pas fiable.

## 14. Atelier — charger les tâches d'un gestionnaire

```js
async function getTasks() {
  const response = await fetch("/api/tasks");

  if (!response.ok) {
    throw new Error(`Impossible de charger les tâches (HTTP ${response.status})`);
  }

  const tasks = await response.json();
  return tasks;
}

async function afficherTasks() {
  try {
    const tasks = await getTasks();
    console.table(tasks);
  } catch (error) {
    console.error("Le tableau de bord ne peut pas être chargé :", error.message);
  }
}
```

**Défis :**
1. Ajoute un état de chargement avant l'appel et réinitialise-le dans un `finally`.
2. Traite séparément une erreur réseau et une réponse HTTP non réussie.
3. Charge le profil et les tâches en parallèle.
4. Propose une stratégie pour annuler la requête quand l'utilisateur quitte la page.
5. Ajoute un type TypeScript pour `Task` et déclare `getTasks(): Promise<Task[]>`, en expliquant pourquoi cette annotation ne valide pas le JSON à elle seule.

## 15. Exercices avec corrigés

### Exercice A — prédire l'ordre

```js
console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");
```

**Corrigé :** `1`, `3`, puis `2`. Le callback de `then` est exécuté après le code synchrone courant.

### Exercice B — détecter le problème

Pourquoi ce code n'attend-il pas la fin de toutes les opérations ?

```js
items.forEach(async item => {
  await traiter(item);
});
console.log("Terminé");
```

**Corrigé :** `forEach` n'attend pas les promesses renvoyées par les callbacks. Utilise `for...of` avec `await` ou `await Promise.all(items.map(item => traiter(item)))`, selon que tu veux un traitement séquentiel ou parallèle.

### Exercice C — gérer une réponse HTTP

Pourquoi vérifier `response.ok` après `fetch` ?

**Corrigé :** les réponses HTTP 404 et 500 sont des réponses HTTP reçues, et ne rejettent pas nécessairement la promesse `fetch`. Vérifie explicitement le statut avant de traiter le corps.

## 16. À retenir

- L'asynchronisme permet d'attendre des opérations sans bloquer toute l'exécution JavaScript.
- Une fonction `async` renvoie toujours une promesse.
- `await` rend la gestion d'une promesse plus lisible.
- Traite les erreurs avec `catch` ou `try/catch`, sans les masquer.
- Vérifie `response.ok` avec `fetch`.
- `Promise.all` convient aux opérations indépendantes qui doivent toutes réussir.
- `Promise.allSettled` permet d'inspecter chaque résultat.
- Évite les `forEach(async ...)` lorsque tu dois attendre les opérations.
- Contrôle la concurrence pour les gros volumes et annule les requêtes devenues inutiles.

## Suite de la série

- Précédent : [RES-08 — Gestion des erreurs et débogage](./RES-08-gestion-erreurs-debogage.md)
- Suivant : **RES-10 — Modules JavaScript, npm et organisation du projet**

---

HashCode Academy · **LEARN · BUILD · BELONG**
