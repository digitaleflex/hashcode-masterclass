# RES-08 — Gestion des erreurs et débogage

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : détecter, comprendre et corriger les erreurs sans masquer les problèmes.



## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : fonctions, conditions et exécution de scripts. Tu dois distinguer erreur de syntaxe, d'exécution et de logique.

**Mise en pratique :** Reproduis un bug, note attendu/observé, formule une hypothèse et ajoute un test de non-régression.

**Mémo associé :** [CS-07-erreurs-debugging.md](../cheatsheets/CS-07-erreurs-debugging.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur et prédis le résultat. Si tu ne peux pas expliquer pourquoi le résultat change, révise la notion avant de poursuivre.

## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : fonctions, conditions et exécution de scripts. À la fin, tu dois pouvoir distinguer erreur de syntaxe, erreur d'exécution et erreur logique, puis choisir entre validation et gestion d'exception.

**Mise en pratique :** Application : reproduis un bug, note le résultat attendu et le résultat observé, formule une hypothèse, puis ajoute un test qui prévient sa réapparition.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-07-erreurs-debugging.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Les trois grandes catégories d'erreurs

### Erreurs de syntaxe

Le moteur ne peut pas analyser le code.

```js
// Parenthèse fermante manquante
console.log("Bonjour";
```

Le message d'erreur indique souvent le fichier et la position où l'analyse a échoué. L'endroit signalé n'est pas toujours exactement celui où se trouve la cause : vérifie aussi les lignes précédentes.

### Erreurs d'exécution

Le code est syntaxiquement valide, mais une opération échoue pendant l'exécution.

```js
const user = null;
console.log(user.name); // TypeError
```

### Erreurs de logique

Le programme s'exécute, mais produit un résultat incorrect.

```js
function aireRectangle(longueur, largeur) {
  return longueur + largeur; // Erreur logique : il faut multiplier
}
```

Le programme ne signale pas nécessairement une erreur. Il faut comparer le résultat obtenu au résultat attendu.

## 2. Lire un message d'erreur

Un message d'erreur contient généralement :
- le type d'erreur, par exemple `TypeError` ou `ReferenceError` ;
- un message expliquant l'opération qui a échoué ;
- une trace d'appels (*stack trace*) indiquant les fonctions et lignes impliquées.

Exemple :

```text
ReferenceError: total is not defined
    at calculerPanier (app.js:12:5)
```

Méthode de lecture :
1. Lis le type et le message.
2. Repère le premier emplacement qui appartient à ton code.
3. Ouvre le fichier à la ligne indiquée.
4. Vérifie les variables, arguments et valeurs utilisées.
5. Reproduis le problème avec le plus petit exemple possible.

Les numéros de ligne peuvent varier selon l'environnement ou le code compilé. Si une source map est disponible, elle peut relier le code exécuté au code source original.

## 3. Les erreurs JavaScript courantes

### `ReferenceError`

Une variable ou un identifiant est utilisé alors qu'il n'est pas accessible dans ce contexte.

```js
console.log(prixTotal); // ReferenceError si l'identifiant n'existe pas
```

Vérifie l'orthographe, la déclaration de la variable et sa portée.

### `TypeError`

Une opération n'est pas compatible avec la valeur utilisée.

```js
const user = null;
console.log(user.name); // TypeError
```

Vérifie si la valeur peut être `null` ou `undefined` avant d'accéder à ses propriétés.

### `SyntaxError`

Le code ne respecte pas la grammaire JavaScript.

```js
// const = 3; // déclaration invalide
```

### Erreurs de données

Un tableau vide, une propriété absente ou une valeur de type inattendu peut provoquer un résultat incorrect ou une exception.

```js
const users = [];
const firstUser = users[0];

if (firstUser) {
  console.log(firstUser.name);
} else {
  console.log("Aucun utilisateur");
}
```

## 4. Gérer une exception avec `try / catch`

Utilise `try` pour exécuter du code susceptible de lever une exception, et `catch` pour traiter l'erreur si elle survient.

```js
try {
  const result = JSON.parse('{"nom":"Awa"}');
  console.log(result.nom);
} catch (error) {
  console.error("Impossible de lire le JSON :", error.message);
}
```

Exemple avec un JSON invalide :

```js
try {
  JSON.parse("{nom: Awa}");
} catch (error) {
  console.error("JSON invalide :", error.message);
}
```

Bonnes pratiques :
- Place dans `try` uniquement le code dont tu veux gérer les exceptions.
- Donne un traitement utile dans `catch` : journaliser, afficher un message adapté ou permettre une récupération.
- N'ignore pas silencieusement l'erreur.
- Évite de remplacer une erreur précise par un message générique qui empêche de comprendre la cause.

## 5. Lever une erreur avec `throw`

`throw` permet d'interrompre le chemin normal et de signaler une situation invalide.

```js
function calculerRemise(prix, taux) {
  if (prix < 0) {
    throw new RangeError("Le prix ne peut pas être négatif.");
  }

  if (taux < 0 || taux > 1) {
    throw new RangeError("Le taux doit être compris entre 0 et 1.");
  }

  return prix * (1 - taux);
}

console.log(calculerRemise(10000, 0.1)); // 9000
```

Privilégie les objets d'erreur standards, comme `Error`, `TypeError` ou `RangeError`, plutôt que de lancer des chaînes de caractères.

```js
throw new Error("Une opération a échoué.");
```

Une exception remonte dans la pile d'appels jusqu'à être interceptée par un `catch` approprié. Si elle n'est interceptée nulle part, elle peut terminer l'exécution courante et apparaître comme une erreur non gérée.

## 6. Utiliser `finally`

Le bloc `finally` s'exécute après le bloc `try` et, le cas échéant, après `catch`, que l'opération ait réussi ou échoué dans les cas ordinaires.

```js
try {
  console.log("Traitement en cours");
  // opération susceptible d'échouer
} catch (error) {
  console.error("Échec :", error.message);
} finally {
  console.log("Fin du traitement");
}
```

Il est utile pour libérer des ressources ou rétablir un état. Dans du code asynchrone, assure-toi que l'opération attendue est bien attendue (*await*) avant de compter sur le nettoyage.

## 7. Ne pas confondre exception et validation

Une entrée invalide n'a pas toujours besoin de déclencher une exception. Pour une validation attendue dans une interface, retourner un résultat explicite peut être plus approprié.

```js
function validerNom(nom) {
  if (typeof nom !== "string" || nom.trim() === "") {
    return {
      ok: false,
      message: "Le nom est obligatoire.",
    };
  }

  return {
    ok: true,
    value: nom.trim(),
  };
}

const resultat = validerNom("  Awa  ");

if (resultat.ok) {
  console.log(resultat.value); // "Awa"
} else {
  console.error(resultat.message);
}
```

Choisis une stratégie cohérente :
- **Validation** : vérifier une donnée attendue et présenter les erreurs à l'utilisateur.
- **Exception** : signaler une situation qui empêche l'opération normale.
- **Récupération** : proposer une action de repli quand elle est sûre et pertinente.

## 8. Déboguer avec `console`

Quelques outils utiles :
- `console.log(valeur)` : afficher une valeur ;
- `console.error(erreur)` : signaler une erreur ;
- `console.table(tableau)` : afficher des données tabulaires ;
- `console.count("étiquette")` : compter les passages à un endroit ;
- `console.assert(condition, message)` : signaler si une assertion est fausse.

```js
const tasks = [
  { id: 1, title: "Réviser", completed: false },
  { id: 2, title: "Tester", completed: true },
];

console.table(tasks);
console.assert(tasks.length === 2, "On attend deux tâches");
```

Les sorties de console aident à observer l'état du programme, mais elles ne remplacent pas les tests automatisés.

## 9. Utiliser les points d'arrêt (*breakpoints*)

Dans les outils de développement du navigateur ou le débogueur de VS Code, un point d'arrêt suspend l'exécution à une ligne donnée.

Procédure :
1. Reproduis le problème.
2. Place un point d'arrêt avant l'opération suspecte.
3. Exécute le programme.
4. Observe les variables et la pile d'appels.
5. Avance pas à pas (*step over*, *step into*, *step out*).
6. Vérifie où la valeur devient incorrecte.
7. Corrige la cause et reproduis le scénario pour confirmer.

Le débogueur est souvent plus efficace que d'ajouter de nombreux `console.log` dans le code.

## 10. Déboguer une fonction avec des tests simples

```js
function calculerTotal(prix, quantite) {
  return prix * quantite;
}

console.assert(calculerTotal(100, 2) === 200, "Cas simple");
console.assert(calculerTotal(0, 5) === 0, "Prix nul");
console.assert(calculerTotal(100, 0) === 0, "Quantité nulle");
```

Ces assertions constituent une vérification rapide, mais elles ne forment pas à elles seules une suite de tests complète. Pour un projet plus grand, utilise un outil de test et couvre les cas limites pertinents.

## 11. Débogage asynchrone : promesses et `async/await`

Les erreurs d'une promesse peuvent être gérées avec `.catch()` ou avec `try/catch` autour d'un `await`.

```js
async function chargerUtilisateur() {
  try {
    const response = await fetch("/api/user");

    if (!response.ok) {
      throw new Error(`Requête échouée : HTTP ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Chargement impossible :", error);
    throw error; // propage l'erreur au niveau appelant
  }
}
```

À noter :
- `fetch` ne rejette pas automatiquement sa promesse pour chaque réponse HTTP d'erreur comme 404 ou 500 ; vérifie `response.ok`.
- `response.json()` peut lui-même échouer si le corps ne contient pas un JSON valide.
- Si tu interceptes une erreur uniquement pour la journaliser, décide si elle doit être propagée ou convertie en résultat de repli. Ne masque pas involontairement l'échec.

## 12. Atelier — sécuriser l'ajout d'une tâche

```js
function addTask(tasks, title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("Le titre de la tâche est obligatoire.");
  }

  const newTask = {
    id: tasks.length + 1,
    title: title.trim(),
    completed: false,
  };

  return [...tasks, newTask];
}

const tasks = [];

try {
  const updatedTasks = addTask(tasks, "  Réviser les erreurs  ");
  console.table(updatedTasks);
} catch (error) {
  console.error("Impossible d'ajouter la tâche :", error.message);
}
```

**Défis :**
1. Essaie d'ajouter une chaîne vide et vérifie le message d'erreur.
2. Vérifie que le tableau d'origine reste inchangé.
3. Ajoute une validation pour refuser un titre de plus de 100 caractères.
4. Réfléchis à la façon de générer un identifiant réellement unique dans une application persistante : `tasks.length + 1` n'est pas suffisant pour tous les cas.

## 13. Exercices avec corrigés

### Exercice A — identifier le type d'erreur

```js
console.log(utilisateur.nom);
```

Si `utilisateur` n'a jamais été déclaré, quel type d'erreur obtiens-tu ?

**Corrigé :** un `ReferenceError`. Si `utilisateur` existe mais vaut `null` ou `undefined`, l'accès à `.nom` provoque plutôt un `TypeError`.

### Exercice B — corriger une gestion d'erreur

Pourquoi ce code est-il dangereux ?

```js
try {
  enregistrerDonnees();
} catch (error) {
  // rien
}
```

**Corrigé :** l'erreur est ignorée. Le programme peut donner l'impression que l'enregistrement a réussi. Journalise l'erreur, informe l'appelant ou renvoie un résultat explicite selon le contexte.

### Exercice C — traiter une réponse HTTP

Pourquoi est-il utile de vérifier `response.ok` après `fetch` ?

**Corrigé :** une réponse HTTP comme 404 ou 500 n'entraîne pas nécessairement le rejet de la promesse `fetch`. Il faut vérifier le statut pour traiter ces réponses comme des échecs applicatifs.

## 14. Checklist de diagnostic

Quand un programme échoue, pose-toi ces questions :

- [ ] Puis-je reproduire le problème de manière fiable ?
- [ ] Quel est le type d'erreur et quel message apparaît ?
- [ ] Quelle ligne de mon code est impliquée ?
- [ ] Les variables et les arguments contiennent-ils les valeurs attendues ?
- [ ] Ai-je vérifié les cas `null`, `undefined`, tableaux vides et entrées invalides ?
- [ ] Ai-je isolé le plus petit exemple qui reproduit l'erreur ?
- [ ] Le correctif fonctionne-t-il sur le scénario initial et les cas limites ?
- [ ] Ai-je supprimé les logs temporaires inutiles et ajouté un test pertinent ?

## 15. À retenir

- Une erreur de syntaxe empêche l'analyse ; une erreur d'exécution survient pendant le traitement ; une erreur logique produit un mauvais résultat.
- Lis le type, le message et la trace d'appels.
- `try/catch` doit traiter l'erreur utilement, pas la faire disparaître.
- `throw` signale une opération impossible dans le contexte courant.
- `finally` sert notamment au nettoyage.
- Avec `fetch`, vérifie `response.ok`.
- Le débogage consiste à isoler la cause, tester une hypothèse et vérifier le correctif.

## Suite de la série

- Précédent : [RES-07 — Objets, déstructuration et spread](./RES-07-objets-destructuration-spread.md)
- Suivant : **RES-09 — Asynchronisme, promesses et async/await**

---

HashCode Academy · **LEARN · BUILD · BELONG**
