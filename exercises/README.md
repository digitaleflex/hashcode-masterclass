# Exercices pratiques — HashCode Masterclass

Ce répertoire complète les fiches RES et CS. Le lot pilote est décrit dans [EXERCICES.md](EXERCICES.md), avec les consignes, résultats attendus, indices et corrigés.

## Méthode de travail

1. Lire l'objectif et les critères de réussite.
2. Prédire le résultat lorsque l'exercice s'y prête.
3. Résoudre sans regarder la correction.
4. Exécuter les tests et traiter au moins un cas limite.
5. Expliquer les choix et noter les difficultés.

## Niveaux

- **INIT** : comprendre et appliquer une notion avec peu de contraintes.
- **CORE** : résoudre un problème autonome, traiter les cas limites et tester.
- **PRO** : combiner plusieurs notions et justifier une solution robuste.

## Validation locale

Node.js 20 ou plus récent est requis.

```bash
npm install
npm run check
npm run check:exercises
npm test
```

Le dépôt est conçu pour une utilisation locale. Les tests vérifient les fonctions de référence du lot pilote ; ils ne signifient pas que tous les extraits de tous les documents sont exécutés automatiquement.

Ne jamais exécuter du code utilisateur arbitraire dans le processus principal d'un serveur de production.
