# Exercices pratiques — HashCode Masterclass

## Exercice 1 — JavaScript : calculer un total

```js
const prices = [1000, 2500, 1500];

// TODO : calculer la somme et l'afficher.
```

Résultat attendu : `5000`.

Correction possible :

```js
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);
```

## Exercice 2 — TypeScript : modéliser une tâche

Définir une interface `Task` contenant `id: number`, `title: string` et `completed: boolean`, puis créer un objet valide.

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const task: Task = {
  id: 1,
  title: "Mon premier projet",
  completed: false,
};
```

## Exercice 3 — Défi : supprimer une tâche

Compléter une fonction `removeTask(id: number): void` qui recherche la tâche, signale si elle n'existe pas et la supprime si elle existe.

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

## Critères d'évaluation

- Le programme fonctionne.
- Les données respectent les types annoncés.
- Les cas limites simples sont traités.
- Le participant peut expliquer sa solution.