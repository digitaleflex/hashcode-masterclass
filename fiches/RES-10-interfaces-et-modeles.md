# RES-10 — Interfaces et modèles

**Parcours :** HashCode Masterclass · **Domaine :** TypeScript · **Niveau :** Débutant

## L’idée essentielle
Une interface décrit la forme attendue d’un objet. Elle rend le modèle de données explicite et facilite le partage d’un contrat entre fonctions.

## Définir un modèle
```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

const task: Task = {
  id: 1,
  title: "Étudier TypeScript",
  completed: false,
};
```

Le point d’interrogation dans `description?` signifie que cette propriété est optionnelle.

## Tableaux typés
```ts
const tasks: Task[] = [
  { id: 1, title: "Lire", completed: true },
  { id: 2, title: "Pratiquer", completed: false },
];
```

Chaque élément doit respecter la forme `Task` lors de la vérification statique.

## Ce que l’interface ne fait pas
- Elle ne crée pas automatiquement une valeur.
- Elle ne vérifie pas une donnée JSON au runtime.
- Elle n’impose pas toutes les règles métier : par exemple, elle ne garantit pas que deux tâches ont des identifiants uniques.

## Vérification rapide
Que se passe-t-il si `completed: "non"` est fourni ? **Une erreur de type est attendue**, car la propriété doit être un booléen.

**À retenir :** modèle de données, règles métier et validation runtime sont trois responsabilités liées, mais distinctes.

## Cas d’usage pratique — partager un modèle entre plusieurs fonctions
L’interface `Task` peut être utilisée par l’ajout, l’affichage et la suppression d’une tâche. Si `completed` est défini comme booléen, le code qui construit une tâche ne doit pas lui donner la chaîne `"non"`.

**Mini-défi :** rends `description` optionnelle, puis ajoute une règle métier qui interdit un titre vide. Pourquoi cette règle ne relève-t-elle pas uniquement de l’interface TypeScript ?
