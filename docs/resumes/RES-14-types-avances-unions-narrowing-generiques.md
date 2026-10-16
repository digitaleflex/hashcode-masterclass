# RES-14 — Types avancés, unions, narrowing et génériques

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Modéliser les données avec précision, réduire les valeurs invalides et créer des fonctions réutilisables sans perdre la sécurité des types.

## 1. Union et intersection
Une union A | B signifie « A ou B ». Une intersection A & B combine les exigences de plusieurs types.

~~~ts
type Id = string | number;
type Timestamped = { createdAt: Date };
type Identified = { id: string };
type RecordInfo = Timestamped & Identified;
~~~

## 2. Narrowing et unions discriminées
TypeScript affine un type grâce aux conditions et aux vérifications.

~~~ts
function formatId(id: string | number): string {
  if (typeof id === "number") return id.toFixed(0);
  return id.trim();
}

type Success = { status: "success"; data: string[] };
type Failure = { status: "error"; message: string };
type Result = Success | Failure;

function display(result: Result): string {
  if (result.status === "success") return result.data.join(", ");
  return result.message;
}
~~~

Un champ littéral commun comme status forme une union discriminée. Dans un switch, une valeur de type never peut aider à vérifier que tous les cas sont traités.

~~~ts
function assertNever(value: never): never {
  throw new Error(`Cas inattendu : ${String(value)}`);
}
~~~

## 3. Types utilitaires
~~~ts
type User = {
  id: string;
  name: string;
  email?: string;
};

type UserPreview = Pick<User, "id" | "name">;
type UserUpdate = Partial<Pick<User, "name" | "email">>;
type UserWithoutEmail = Omit<User, "email">;
type ReadonlyUser = Readonly<User>;
type Counts = Record<string, number>;
~~~

Utilitaires utiles : Partial, Required, Readonly, Pick, Omit, Record et ReturnType. Des types nommés explicites sont préférables à des combinaisons illisibles.

## 4. Génériques
Les génériques conservent la relation entre le type d'entrée et celui de sortie.

~~~ts
function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

type ApiResponse<T> = {
  data: T;
  requestId: string;
};

function getId<T extends { id: string }>(item: T): string {
  return item.id;
}
~~~

La contrainte extends exige que T possède au moins une propriété id de type string.

## 5. unknown et données externes
unknown impose une vérification avant usage ; any désactive une grande partie des contrôles. Les données d'une API doivent être validées à l'exécution.

~~~ts
function isUser(value: unknown): value is { id: string; name: string } {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.id === "string"
    && typeof candidate.name === "string";
}
~~~

Cette garde vérifie uniquement les champs indiqués. Une application réelle doit aussi valider les contraintes métier et les données imbriquées. Une assertion de type ne transforme pas les données.

## Erreurs fréquentes
- Utiliser any pour faire disparaître une erreur.
- Oublier une variante d'une union discriminée.
- Confondre contrôle statique et validation runtime.
- Ajouter des génériques inutiles.

## Mini-exercice
Écrivez getById<T> qui reçoit une liste d'éléments possédant id: string et renvoie l'élément correspondant ou undefined.

~~~ts
function getById<T extends { id: string }>(
  items: readonly T[],
  id: string,
): T | undefined {
  return items.find(item => item.id === id);
}
~~~

**À retenir :** utilisez les unions pour exprimer les alternatives, le narrowing pour vérifier les variantes, et les génériques pour préserver les relations entre types.

**Suite :** RES-15 — TypeScript dans le navigateur : DOM, formulaires et événements.
