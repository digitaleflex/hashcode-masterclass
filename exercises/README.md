# Exercices pratiques — HashCode Masterclass

Ce répertoire complète les fiches RES et CS. Le cahier [EXERCICES.md](EXERCICES.md) présente les 12 exercices. Le catalogue est défini dans [curriculum.json](curriculum.json), avec son [schéma JSON](schema.json).

## Interface de navigation

Ouvre [le navigateur d’exercices](index.html) dans un navigateur moderne, ou sers le dépôt localement avec `npm run start`, puis visite `/exercises/`. L’interface fonctionne sans compte ni API externe. Elle permet de rechercher et filtrer les exercices, de révéler des indices progressivement, de consulter séparément les corrigés et de suivre une progression locale. La progression est stockée dans le navigateur utilisé et peut être effacée.

- [Modèle de contribution](templates/README.md) : consigne, starter, corrigé et tests séparés.
- [Premier exercice autonome](EX-JS-001-panier/README.md) : consigne, starter, solution et tests.
- [Exercices TypeScript stricts](typescript/README.md) : typage statique et validation runtime.
- [Exemple DOM sécurisé](web/safe-render.mjs) : affiche une saisie comme du texte.
- [Exemple asynchrone](async/fetch-json.mjs) : gère erreurs réseau, statuts HTTP et JSON invalide.
- [Spécification UX](navigation/README.md) : exigences et limites de sécurité.

## Méthode de travail

1. Lire l’objectif, les critères d’acceptation et les entrées/sorties.
2. Prédire le résultat lorsque l’exercice s’y prête.
3. Résoudre dans `starter/` sans regarder `solution/`.
4. Exécuter les tests de contrat et traiter un cas limite.
5. Expliquer les choix et noter les difficultés.

## Niveaux

- **INIT** : comprendre et appliquer une notion avec peu de contraintes.
- **CORE** : résoudre un problème autonome, traiter les cas limites et tester.
- **PRO** : combiner plusieurs notions et justifier une solution robuste.

## Validation locale

Prérequis : Node.js 20+. La vérification TypeScript utilise TypeScript 5.9.3 via `npx` et nécessite un accès initial au registre npm si le compilateur n’est pas en cache.

```bash
npm ci
npm run check
npm run check:exercises
npm run check:links
npm run check:types
npm test
```

Les tests sont déterministes et ne contactent pas de service externe. Ils vérifient les contrats ciblés, mais pas tous les extraits de tous les documents.

Ne jamais exécuter du code utilisateur arbitraire dans le processus principal d'un serveur de production. Un futur runner en ligne nécessiterait un sandbox isolé avec limites de ressources et restrictions réseau.
