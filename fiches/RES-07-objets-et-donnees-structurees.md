# RES-07 — Objets et données structurées

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
Un objet regroupe des informations nommées sous forme de propriétés. Un tableau d’objets représente souvent une collection d’entités métier.

## Lire et modifier un objet
```js
const task = {
  id: 1,
  title: "Réviser JavaScript",
  completed: false,
};

console.log(task.title); // "Réviser JavaScript"
task.completed = true;
```

## Tableau d’objets
```js
const tasks = [
  { id: 1, title: "Lire", completed: true },
  { id: 2, title: "Pratiquer", completed: false },
];

const pendingTasks = tasks.filter((task) => !task.completed);
```

Chaque objet est une tâche ; `filter` crée un tableau contenant uniquement les tâches non terminées.

## Valeurs absentes
- Une propriété inexistante renvoie `undefined`.
- `null` sert à représenter explicitement l’absence d’une valeur.
- Une propriété optionnelle peut être absente ; vérifie sa présence avant de l’utiliser.
- Les données reçues d’une API peuvent être incorrectes, même si le code local utilise TypeScript.

## Exemple de garde
```js
if (task.description !== undefined) {
  console.log(task.description);
}
```

Cette vérification teste spécifiquement l’absence de `undefined`. Selon le besoin, on peut devoir vérifier aussi `null`, le type ou une chaîne vide.

## Vérification rapide
Pourquoi utiliser un identifiant `id` ? **Pour distinguer et retrouver une tâche sans dépendre de sa position dans le tableau**.

**Erreur fréquente :** supposer que toute propriété existe simplement parce qu’elle apparaît dans un exemple.