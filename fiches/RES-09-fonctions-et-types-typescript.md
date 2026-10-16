# RES-09 — Fonctions et types TypeScript

**Parcours :** HashCode Masterclass · **Domaine :** TypeScript · **Niveau :** Débutant

## L’idée essentielle
Les types des paramètres et du retour définissent le contrat d’une fonction. Les unions autorisent plusieurs types de valeurs bien identifiés.

## Paramètres et retour
```ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

Ici, les deux entrées et le résultat attendu sont des nombres. Passer une chaîne comme prix provoque une erreur de type dans du code correctement vérifié.

## Fonction fléchée typée
```ts
const formatTaskTitle = (title: string): string => {
  return `Tâche : ${title}`;
};
```

## Types unions
```ts
type TaskStatus = "todo" | "in-progress" | "done";

function isFinished(status: TaskStatus): boolean {
  return status === "done";
}
```

Le type `TaskStatus` autorise seulement trois chaînes précises. Une valeur comme `"finished"` ne correspond pas à ce contrat.

## Bonnes pratiques
- Donne des noms explicites aux types.
- Évite `any` lorsqu’un type plus précis est possible.
- Le type de retour rend le contrat visible et aide à repérer les oublis.
- Le type ne remplace pas les tests : une fonction peut respecter son type et produire un résultat métier incorrect.

## Vérification rapide
Quels statuts sont valides dans l’exemple ? **todo, in-progress et done**. La chaîne `"blocked"` est-elle valide ? **Non, pas sans modifier le type union**.

## Cas d’usage pratique — limiter les statuts d’une tâche
Dans un Task Manager, seuls `"todo"`, `"in-progress"` et `"done"` sont autorisés. Le type union empêche le code correctement vérifié d’utiliser accidentellement `"finished"` ou `"blocked"`.

**Mini-défi :** ajoute un statut `"blocked"` au type et adapte une fonction qui indique si une tâche est terminée. Explique pourquoi le type ne garantit pas, à lui seul, que la transition métier est autorisée.
