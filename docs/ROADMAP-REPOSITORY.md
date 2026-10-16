# Roadmap du dépôt — HashCode Academy

Cette roadmap distingue les ressources présentes des chantiers à réaliser. Une case n'est cochée qu'après vérification du livrable.

## P0 — Fiabiliser l'architecture
- [x] Définir les domaines et leurs responsabilités.
- [x] Documenter la différence entre présentation et cours complet.
- [x] Définir le catalogue des sept modules avancés.
- [ ] Intégrer les contrôles à la CI et consulter un run GitHub réel.
- [x] Vérifier automatiquement les liens locaux Markdown/HTML dans la CI.
- [x] Vérifier les scripts sur une installation CI propre avec Node.js 22.
- [ ] Revoir les PR ouvertes et éviter les changements concurrents sur la même base.

## P1 — Stabiliser les 40 fiches existantes
- [ ] Contrôler tous les liens RES/CS.
- [ ] Vérifier les exemples JavaScript exécutables avec Node.js.
- [ ] Vérifier les exemples TypeScript retenus avec strict: true.
- [ ] Distinguer fragments illustratifs et code exécutable.
- [ ] Vérifier les liens croisés RES ↔ CS.
- [ ] Créer une carte des prérequis et des jalons de progression.
- [ ] Créer un diagnostic d'entrée et un bilan de sortie corrigés.

## P1 — Compléter les cours avancés
Ordre recommandé : JavaScript avancé comme module pilote, puis réutilisation du gabarit.

- [x] Module 01 — cours, exemple exécutable closures/générateur, laboratoire, exercices, corrigé, quiz et grille livrés ; validation CI en cours.
- [x] Module 02 — cours, exemple TypeScript, laboratoire, exercices, corrigé, quiz et grille livrés ; compilation stricte intégrée à la CI.
- [x] Module 03 — cours, exemple sum avec tests Node.js, laboratoire, exercices, corrigé, quiz et grille livrés.
- [ ] Module 04 — mini-application fetch/AbortController, accessibilité et performance.
- [x] Module 05 — cours, serveur HTTP de laboratoire, tests HTTP d'intégration locaux, laboratoire, exercices, corrigé, quiz et grille livrés.
- [x] Module 06 — cours, démo DOM sûre locale, test statique de non-régression, laboratoire, exercices, corrigé, quiz et grille livrés.
- [x] Module 07 — cours, health check avec tests, serveur de démo, Dockerfile, exemple CI, laboratoire, exercices, corrigé, quiz et grille livrés.
- [x] Ajouter quiz, corrigés séparés, rubriques et références à chaque module.
- [ ] Tester manuellement les sept présentations HTML sur desktop/mobile, au clavier et avec réduction des animations.

## P2 — Projets pratiques
- [ ] Définir un contrat commun de projet et une grille de notation.
- [ ] Créer un projet progressif par domaine avant d'élargir le catalogue.
- [ ] Fournir énoncé, critères d'acceptation, starter, tests, solution et barème.
- [ ] Concevoir un projet de synthèse couvrant tests, sécurité, documentation et livraison.
- [ ] Définir soumission et revue par les pairs avant de promettre une plateforme de notation.

## P2 — Gouvernance et publication
- [ ] Définir une licence après confirmation des droits sur contenus et assets.
- [ ] Définir les responsables de revue dans CODEOWNERS lorsque les droits sont confirmés.
- [ ] Configurer la protection de main dans GitHub.
- [ ] Ajouter une checklist d'accessibilité et des contrôles automatisables.
- [ ] Préparer versionnement et notes de version pédagogiques.

## Critères de sortie
Une phase est terminée lorsque les fichiers annoncés existent, les contrôles passent, la documentation décrit les tests réellement exécutés et aucune fonctionnalité incomplète n'est présentée comme opérationnelle.
