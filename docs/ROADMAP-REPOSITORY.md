# Roadmap du dépôt — HashCode Academy

Cette roadmap distingue les ressources présentes des chantiers à réaliser. Une case n'est cochée qu'après vérification du livrable.

## P0 — Fiabiliser l'architecture
- [x] Définir les domaines et leurs responsabilités.
- [x] Documenter la différence entre présentation et cours complet.
- [x] Définir le catalogue des sept modules avancés.
- [ ] Intégrer les contrôles à la CI et consulter un run GitHub réel.
- [ ] Vérifier tous les liens locaux du dépôt, y compris HTML.
- [ ] Confirmer la compatibilité des scripts avec Node.js 20+ sur installation propre.
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

- [ ] Module 01 — exemples exécutables : closures, event loop, itérateurs, async.
- [ ] Module 02 — projet TypeScript strict, types avancés et validation runtime.
- [ ] Module 03 — tests unitaires/intégration, cas limites et débogage.
- [ ] Module 04 — mini-application fetch/AbortController, accessibilité et performance.
- [ ] Module 05 — API Node.js locale avec validation et tests HTTP.
- [ ] Module 06 — laboratoire sécurité local, correction et non-régression.
- [ ] Module 07 — CI, conteneurisation, observabilité et rollback.
- [ ] Ajouter quiz, corrigés séparés, rubriques et références à chaque module.
- [ ] Tester les pages HTML desktop/mobile, au clavier et avec réduction des animations.

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
