# Exercices pratiques — HashCode Masterclass

Ce répertoire complète les fiches RES et CS. Le cahier [EXERCICES.md](EXERCICES.md) présente les 12 exercices du parcours. Le catalogue contractuel est défini dans [curriculum.json](curriculum.json), avec son [schéma JSON](schema.json).

## Organisation autonome

- [Modèle de contribution](templates/README.md) : structure consigne / fichiers de départ / corrigé / tests.
- [Premier exercice complet](EX-JS-001-panier/README.md) : consigne, starter, solution et tests séparés.
- [Exercices TypeScript stricts](typescript/README.md) : vérification statique et validation à l’exécution.
- [Exemple DOM sécurisé](web/safe-render.mjs) : affiche une saisie comme du texte.
- [Exemple asynchrone](async/fetch-json.mjs) : gère erreurs réseau, statuts HTTP et JSON invalide.
- [Spécification du navigateur d’exercices](navigation/README.md) : recherche, filtres, progression, accessibilité et limites de sécurité.

## Méthode de travail

1. Lire l’objectif, les critères d’acceptation et les entrées/sorties.
2. Prédire le résultat lorsque l’exercice s’y prête.
3. Résoudre dans `starter/` sans regarder `solution/`.
4. Exécuter les tests de contrat et traiter au moins un cas limite.
5. Expliquer les choix et noter les difficultés.

## Niveaux

- **INIT** : comprendre et appliquer une notion avec peu de contraintes.
- **CORE** : résoudre un problème autonome, traiter les cas limites et tester.
- **PRO** : combiner plusieurs notions et justifier une solution robuste.

## Validation locale

Prérequis : Node.js 20+. La vérification TypeScript utilise TypeScript 5.9.3 via `npx` et nécessite un accès initial au registre npm si le compilateur n’est pas déjà en cache.

```bash
npm ci
npm run check
npm run check:exercises
npm run check:links
npm run check:types
npm test
```

Les tests sont déterministes et ne contactent pas de service externe. Ils vérifient les contrats ciblés ; ils ne signifient pas que tous les extraits de tous les documents sont exécutés automatiquement.

Ne jamais exécuter du code utilisateur arbitraire dans le processus principal d'un serveur de production. Une future fonctionnalité d’exécution en ligne nécessiterait un sandbox isolé avec limites de ressources et restrictions réseau.
