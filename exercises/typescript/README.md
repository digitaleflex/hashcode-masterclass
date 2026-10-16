# Exercices TypeScript — validation stricte

Les sources de référence sont dans `src/`. Le projet active `strict`, `exactOptionalPropertyTypes` et `noUncheckedIndexedAccess`.

## Lancer la vérification

Avec Node.js 20+ et une connexion permettant de récupérer le compilateur :

```bash
npm run check:types
```

Le script utilise TypeScript 5.9.3 via `npx`, sans ajouter de dépendance à l’application. La première exécution nécessite un accès au registre npm. Pour une utilisation entièrement hors ligne, installe TypeScript dans le cache ou dans le projet local et adapte le script pour utiliser le binaire local.

## Distinction essentielle

- **Vérification statique :** le compilateur détecte des incompatibilités dans le code TypeScript.
- **Validation à l’exécution :** `parseTask` vérifie les données inconnues provenant d’une API ou d’un stockage.
- **Tests :** vérifient le comportement observé dans des scénarios précis.

Aucune de ces couches ne remplace les deux autres.
