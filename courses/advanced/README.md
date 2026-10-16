# Cours avancés — HashCode Academy

Sept modules en français, avec présentation HTML, notes de cours, laboratoire guidé, exercices, corrigés, quiz et grille d'évaluation. Le catalogue JSON reflète les chemins canoniques et le statut des ressources.

## Parcours

| Module | Cours | Exemples | Laboratoire | Exercices | Corrigés | Quiz | Barème |
|---|---|---|---|---|---|---|---|
| 01 — JavaScript avancé | [Cours](01-javascript-avance/course.md) · [Diaporama](01-javascript-avance.html) | [Exemples](01-javascript-avance/examples/README.md) · [Code](01-javascript-avance/examples/closures.mjs) | [Lab](01-javascript-avance/labs/lab.md) | [Exercices](01-javascript-avance/exercises/exercises.md) | [Solutions](01-javascript-avance/solutions/solutions.md) | [Quiz](01-javascript-avance/quiz.json) | [Grille](01-javascript-avance/rubric.md) |
| 02 — TypeScript avancé | [Cours](02-typescript-avance/course.md) · [Diaporama](02-typescript-avance.html) | [Exemples](02-typescript-avance/examples/README.md) · [Code TS](02-typescript-avance/examples/advanced-types.ts) | [Lab](02-typescript-avance/labs/lab.md) | [Exercices](02-typescript-avance/exercises/exercises.md) | [Solutions](02-typescript-avance/solutions/solutions.md) | [Quiz](02-typescript-avance/quiz.json) | [Grille](02-typescript-avance/rubric.md) |
| 03 — Tests et qualité | [Cours](03-tests-qualite/course.md) · [Diaporama](03-tests-qualite.html) | [Exemples](03-tests-qualite/examples/README.md) | [Lab](03-tests-qualite/labs/lab.md) | [Exercices](03-tests-qualite/exercises/exercises.md) | [Solutions](03-tests-qualite/solutions/solutions.md) | [Quiz](03-tests-qualite/quiz.json) | [Grille](03-tests-qualite/rubric.md) |
| 04 — Web APIs et performance | [Cours](04-web-apis-performance/course.md) · [Diaporama](04-web-apis-performance.html) | [Exemples](04-web-apis-performance/examples/README.md) · [Démo HTML](04-web-apis-performance/examples/fetch-demo.html) | [Lab](04-web-apis-performance/labs/lab.md) | [Exercices](04-web-apis-performance/exercises/exercises.md) | [Solutions](04-web-apis-performance/solutions/solutions.md) | [Quiz](04-web-apis-performance/quiz.json) | [Grille](04-web-apis-performance/rubric.md) |
| 05 — Backend Node.js | [Cours](05-node-backend-api/course.md) · [Diaporama](05-node-backend-api.html) | [Exemples](05-node-backend-api/examples/README.md) · [API locale](05-node-backend-api/examples/server.mjs) | [Lab](05-node-backend-api/labs/lab.md) | [Exercices](05-node-backend-api/exercises/exercises.md) | [Solutions](05-node-backend-api/solutions/solutions.md) | [Quiz](05-node-backend-api/quiz.json) | [Grille](05-node-backend-api/rubric.md) |
| 06 — Sécurité applicative | [Cours](06-securite-applicative/course.md) · [Diaporama](06-securite-applicative.html) | [Exemples](06-securite-applicative/examples/README.md) · [DOM sûr](06-securite-applicative/examples/safe-dom.html) | [Lab](06-securite-applicative/labs/lab.md) | [Exercices](06-securite-applicative/exercises/exercises.md) | [Solutions](06-securite-applicative/solutions/solutions.md) | [Quiz](06-securite-applicative/quiz.json) | [Grille](06-securite-applicative/rubric.md) |
| 07 — Architecture et DevOps | [Cours](07-architecture-devops/course.md) · [Diaporama](07-architecture-devops.html) | [Exemples](07-architecture-devops/examples/README.md) · [Health check](07-architecture-devops/examples/health.mjs) | [Lab](07-architecture-devops/labs/lab.md) | [Exercices](07-architecture-devops/exercises/exercises.md) | [Solutions](07-architecture-devops/solutions/solutions.md) | [Quiz](07-architecture-devops/quiz.json) | [Grille](07-architecture-devops/rubric.md) |

## Démarrage local

Depuis la racine du dépôt :

```bash
npm install
npm run check:repo
npm test
```

Pour le serveur de démonstration du module 05, exécuter `node courses/advanced/05-node-backend-api/examples/server.mjs`, puis tester uniquement `http://127.0.0.1:3000/health`. Il s'agit d'un exemple pédagogique, pas d'une API de production.

Pour ouvrir la démo Web du module 04 ou du module 06, ouvrir le fichier HTML correspondant dans un navigateur. Les données de recherche sont locales.

## Références officielles

- [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Node.js — Test runner](https://nodejs.org/api/test.html)
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [OWASP — JavaScript and TypeScript Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JavaScript_and_TypeScript_Security_Cheat_Sheet.html)
- [OWASP — Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Docker — Documentation](https://docs.docker.com/)

## Statut pédagogique

Les sept modules disposent maintenant des ressources documentaires principales. Le statut `course` indique que cours, pratique et évaluation de base sont répertoriés ; il ne signifie pas que chaque exemple a été validé sur tous les environnements ni que les supports sont prêts à être certifiés. Les tests automatisés et la revue pédagogique restent nécessaires.
