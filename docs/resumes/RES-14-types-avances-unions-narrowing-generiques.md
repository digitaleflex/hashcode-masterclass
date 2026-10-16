# RES-14 — Types avancés, unions, narrowing et génériques

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 35 à 50 minutes  
**Prérequis :** RES-12, fonctions TypeScript et objets  
**Objectif :** représenter plusieurs formes de données sans perdre la sécurité du typage.

## Objectifs d'apprentissage

Tu dois pouvoir choisir entre union et intersection, réduire un type avec le *narrowing*, utiliser une union discriminée, appliquer des types utilitaires et écrire une fonction générique.

## 1. Union et intersection

Une union `A | B` signifie qu'une valeur est compatible avec A **ou** B. Une intersection `A & B` combine les contraintes de A et B.

```ts
type Identifier = string | number;

function formatId(id: Identifier): string {
  return String(id);
}

type HasId = { id: string };
type HasTitle = { title: string };
type TaskSummary = HasId & HasTitle;

const task: TaskSummary = { id: "t-01", title: "Lire" };
```

Avec une union, tu ne peux utiliser que les opérations valides pour tous les membres possibles, sauf si tu as d'abord réduit le type.

## 2. Narrowing : préciser le type par une vérification

Le *narrowing* est le processus par lequel TypeScript affine le type à partir d'une condition.

```ts
function display(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

Autres outils utiles :
- `typeof` pour plusieurs types primitifs ;
- `in` pour vérifier une propriété ;
- `instanceof` pour certaines instances de classes ;
- des fonctions de garde de type lorsque la vérification métier est plus complexe.

Ne contourne pas une erreur de typage avec `as` sans preuve : une assertion change ce que le compilateur croit, pas la valeur réelle.

## 3. Unions discriminées

Une propriété littérale commune permet de distinguer plusieurs variantes d'un modèle.

```ts
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function renderResult<T>(result: Result<T>): string {
  if (result.status === "success") {
    return "Données reçues";
  }
  return `Erreur : ${result.message}`;
}
```

Cette forme est pratique pour représenter les états d'une interface : chargement, succès et erreur. Elle évite les combinaisons incohérentes comme « succès sans données » si le modèle est bien conçu.

## 4. Génériques : conserver le lien entre entrée et sortie

Un générique représente un type paramétrable. Il est utile quand la même logique fonctionne avec plusieurs types tout en préservant leur information.

```ts
function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

const firstName = first(["Awa", "Koffi"]); // string | undefined
const firstScore = first([12, 18, 20]);    // number | undefined
```

Le paramètre `T` est déduit depuis l'argument. Le type de retour reste lié au type d'entrée. Évite les génériques qui ajoutent de la complexité sans préserver une relation utile.

## 5. Types utilitaires

| Type | Utilité | Exemple |
|---|---|---|
| `Partial<T>` | Rend les propriétés optionnelles | Formulaire de mise à jour |
| `Required<T>` | Rend les propriétés obligatoires | Contrat normalisé |
| `Pick<T, K>` | Sélectionne des propriétés | Vue compacte |
| `Omit<T, K>` | Retire des propriétés | DTO sans champ interne |
| `Record<K, V>` | Associe des clés à un type de valeur | Table de statuts |

```ts
type Task = { id: string; title: string; completed: boolean };
type TaskUpdate = Partial<Pick<Task, "title" | "completed">>;

const update: TaskUpdate = { completed: true };
```

Les types utilitaires modifient les contrats de types pendant le développement ; ils ne valident pas un JSON reçu d'un réseau.

## 6. unknown, any et données externes

`any` désactive une grande partie des contrôles sur la valeur. `unknown` oblige à vérifier le type avant d'utiliser la valeur.

```ts
function parsePayload(payload: unknown): string | null {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "name" in payload &&
    typeof payload.name === "string"
  ) {
    return payload.name;
  }
  return null;
}
```

Cet exemple est une garde simple. Dans une vraie application, une validation complète du schéma peut nécessiter une fonction dédiée ou une bibliothèque de validation.

## 7. Erreurs fréquentes

- Lire une propriété spécifique d'une union avant d'avoir réduit le type.
- Utiliser `any` pour faire disparaître une erreur au lieu de la comprendre.
- Confondre une assertion de type avec une validation.
- Rendre toutes les propriétés optionnelles sans réfléchir aux états incohérents.
- Utiliser un générique là où un type concret serait plus simple.
- Oublier le cas `undefined` lors de l'accès à un tableau.

## 8. Mini-exercice

Modélise une réponse d'API contenant soit une liste de tâches, soit un message d'erreur. Utilise une union discriminée avec une propriété `status`. Écris une fonction qui affiche le nombre de tâches en cas de succès et le message en cas d'erreur.

### Critères de réussite
- Les deux états sont distingués par une propriété littérale.
- Chaque branche accède uniquement aux propriétés disponibles.
- Aucun `any` n'est nécessaire.
- Le cas vide est défini explicitement.

## Auto-évaluation

1. Que signifie `A | B` ?
2. Pourquoi le narrowing est-il nécessaire ?
3. Quelle relation un générique permet-il de préserver ?
4. Pourquoi `Partial<T>` ne valide-t-il pas une requête entrante ?

## Fiches associées
- Précédent : [RES-13 — Classes et POO](RES-13-classes-poo-typescript.md)
- Suite : [RES-15 — TypeScript dans le navigateur](RES-15-typescript-dom-formulaires-evenements.md)
- Mémo : [CS-06 — Types TypeScript](../cheatsheets/CS-06-typescript-types-utilitaires.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**