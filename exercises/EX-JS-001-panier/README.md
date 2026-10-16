# EX-JS-001 — Calculer un panier

- **Niveau :** INIT
- **Durée :** 15 minutes
- **Prérequis :** variables, nombres, opérateur de multiplication et console
- **Objectif :** calculer un total à partir d’un prix unitaire et d’une quantité.

## Consigne

Complète `starter/cart.mjs` pour que `calculateCartTotal(unitPrice, quantity)` renvoie le total.

## Contrat

- `unitPrice` doit être un nombre fini supérieur ou égal à zéro.
- `quantity` doit être un entier strictement positif.
- Une entrée invalide déclenche une `RangeError`.
- La fonction ne modifie aucune donnée reçue.

## Critères d’acceptation

- 2500 × 3 renvoie 7500.
- Un prix de 0 est accepté.
- Un prix négatif, `NaN` ou `Infinity` est refusé.
- Une quantité nulle, négative ou décimale est refusée.

## Indices progressifs

1. Vérifie le prix et la quantité séparément.
2. Utilise `Number.isFinite` et `Number.isInteger`.
3. Retourne le produit uniquement après validation.

Le corrigé se trouve dans `solution/cart.mjs`. Essaie d’abord sans l’ouvrir.
