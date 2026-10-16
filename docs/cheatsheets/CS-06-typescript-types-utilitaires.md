# CS-06 — TypeScript : types, interfaces et utilitaires

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 12 typescript types interfaces fonctions](../resumes/RES-12-typescript-types-interfaces-fonctions.md) · [RES 14 types avances unions narrowing generiques](../resumes/RES-14-types-avances-unions-narrowing-generiques.md)

**Application pratique :** Essaie de supprimer une annotation puis explique ce que TypeScript infère et ce qu'il ne peut pas garantir à l'exécution.

## Types simples et annotations
~~~ts
let username: string = "Amina";
let score: number = 10;
let enabled: boolean = true;
const names: string[] = ["Amina", "Noah"];
~~~
L'inférence permet souvent d'éviter une annotation redondante.

## type et interface
~~~ts
type Role = "admin" | "member";
type Point = { x: number; y: number };

interface User {
  id: string;
  name: string;
  email?: string;
}
~~~
Les deux décrivent des formes d'objets. type convient aussi aux unions et intersections ; interface peut être étendue et fusionnée par déclaration.

## Union et narrowing
~~~ts
function format(value: string | number): string {
  return typeof value === "number" ? value.toFixed(2) : value.trim();
}
~~~

## Génériques
~~~ts
function first<T>(values: readonly T[]): T | undefined {
  return values[0];
}
~~~

## Types utilitaires
~~~ts
type UserPreview = Pick<User, "id" | "name">;
type UserPatch = Partial<Pick<User, "name" | "email">>;
type UserWithoutEmail = Omit<User, "email">;
type FrozenUser = Readonly<User>;
type Counts = Record<string, number>;
~~~

## unknown vs any
- unknown : vérifier avant utilisation.
- any : désactive de nombreux contrôles ; limiter son usage.
- Une assertion `value as User` ne valide pas les données à l'exécution.

## Options utiles
- strict : active des contrôles stricts.
- noImplicitAny : signale les any implicites.
- noUncheckedIndexedAccess : rend les accès par index plus prudents.
- exactOptionalPropertyTypes : distingue mieux l'absence d'une propriété de la valeur undefined selon la configuration.

## Réflexe
Types statiques pour le code ; validation runtime pour les données externes.
