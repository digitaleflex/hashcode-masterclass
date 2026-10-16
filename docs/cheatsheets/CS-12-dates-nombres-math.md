# CS-12 — Dates, nombres et Math

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 03 variables et types javascript](../resumes/RES-03-variables-et-types-javascript.md) · [RES 06 tableaux et methodes fonctionnelles](../resumes/RES-06-tableaux-et-methodes-fonctionnelles.md)

**Application pratique :** Vérifie les fuseaux horaires, les formats d'affichage et les cas limites numériques. N'interprète pas une date sans préciser son format.

## Nombres
~~~js
Number("42");
Number.isNaN(Number("abc"));
Number.isFinite(42);
Math.round(3.6);
Math.floor(3.9);
Math.ceil(3.1);
Math.max(3, 9, 2);
~~~
N'utilisez pas === NaN ; préférez Number.isNaN. Les nombres flottants peuvent introduire des imprécisions financières : stockez souvent les montants en unités mineures entières ou utilisez une bibliothèque décimale adaptée.

## Dates
~~~js
const now = new Date();
const date = new Date("2026-10-16T10:00:00Z");
date.toISOString();
date.getTime();
~~~
Une date-heure avec Z représente UTC. Les dates locales et UTC diffèrent selon le fuseau. Définissez explicitement le fuseau pour les échéances métier.

## Comparaison
~~~js
const earlier = new Date("2026-01-01T00:00:00Z");
const later = new Date("2026-02-01T00:00:00Z");
const isEarlier = earlier.getTime() < later.getTime();
~~~

## Formatage international
~~~js
new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
}).format(1299.5);
~~~
Utilisez Intl.DateTimeFormat pour formater les dates avec une locale et un fuseau adaptés.

## Pièges
- Vérifier les dates invalides avec Number.isNaN(date.getTime()).
- toISOString() renvoie toujours UTC.
- Ajouter 24 heures ne signifie pas toujours « lendemain local » lors d'un changement d'heure.
- Math.random() n'est pas adapté aux secrets cryptographiques.
