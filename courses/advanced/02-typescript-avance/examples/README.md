# Exemples — TypeScript avancé

Les fragments ci-dessous sont des exemples de départ : les copier dans des fichiers séparés, les compléter si indiqué, puis exécuter les commandes dans un environnement local. Ne pas les présenter comme un système de production complet.

## Exemple 1 — Contrat central
Les types TypeScript sont effacés à l'exécution. unknown impose une réduction du type ; une assertion ne valide pas les données reçues.

## Exemple 2 — Démonstration du sujet
Unions discriminées, génériques contraints, types mappés/conditionnels, exhaustivité et validation runtime de unknown.

## Exemple 3 — Validation
Créer un cas valide, un cas limite et un cas invalide. Écrire les résultats attendus avant d'exécuter le code. Enregistrer la commande et le résultat dans le README de votre travail.

## Environnement
- JavaScript : Node.js 20+ et modules ESM (.mjs).
- TypeScript : TypeScript 5.x, `strict: true`, tests runtime séparés des tests de types.
- Web APIs : navigateur moderne ; préférer des données locales et éviter les dépendances réseau dans les tests.
- Backend : lier le serveur de laboratoire à `127.0.0.1`, jamais à une interface publique par défaut.
- Sécurité : environnement local uniquement, sans secrets ni cible tierce.
- DevOps : utiliser des secrets de démonstration non sensibles et un environnement jetable.
