# Module 02 — TypeScript avancé

> HashCode Academy · Niveau intermédiaire · Durée indicative : 4 h · Langue : français

## Objectifs observables
À la fin du module, l'apprenant sait expliquer les concepts clés, les appliquer dans un exemple reproductible, traiter les cas limites, écrire des tests et expliciter les risques et limites.

## Prérequis
Maîtriser les fondamentaux JavaScript, modules et fonctions ; suivre les prérequis particuliers du sujet. Préparer Node.js 20+ pour les exemples serveur et de test. Les exercices navigateur s'exécutent dans un navigateur moderne.

## Concepts essentiels
Unions discriminées, génériques contraints, types mappés/conditionnels, exhaustivité et validation runtime de unknown.

## Parcours conseillé
1. **Comprendre (30 min)** : expliquer le modèle mental et les termes.
2. **Observer (30 min)** : exécuter un exemple et prédire le résultat avant de le lancer.
3. **Construire (60 min)** : suivre le laboratoire guidé.
4. **Pratiquer (45 min)** : réaliser INIT puis CORE sans consulter le corrigé.
5. **Transférer (45 min)** : réaliser PRO dans un contexte légèrement différent.
6. **Évaluer (30 min)** : passer le quiz et utiliser la grille d'évaluation.

## Démonstration guidée
Les types TypeScript sont effacés à l'exécution. unknown impose une réduction du type ; une assertion ne valide pas les données reçues.

## Laboratoire central
Construire un domaine de tâches avec statuts discriminés, reducer exhaustif et parseTask(input: unknown) qui valide réellement chaque propriété.

## Erreurs fréquentes à éviter
- Confondre une démonstration courte avec une solution complète de production.
- Omettre les entrées invalides, les erreurs et les cas frontières.
- Ajouter une abstraction ou une dépendance sans besoin démontré.
- Annoncer une réussite sans avoir exécuté les contrôles correspondants.
- Ignorer l'accessibilité, la sécurité ou la documentation des limites.

## Livrables attendus
- Exemple reproductible et explication de son résultat.
- Solution au laboratoire avec critères d'acceptation cochés.
- Tests ciblant le comportement, les frontières et les échecs.
- Bref compte rendu des décisions, compromis et risques résiduels.

## Critères de maîtrise
L'apprenant peut expliquer le concept sans lire le support, refaire l'exemple, traiter au moins un cas limite, exécuter les tests et décrire ce que les tests ne garantissent pas.

## Références
Voir les liens de documentation officielle dans le README de cette série. Vérifier les versions de Node.js, TypeScript ou du navigateur lorsque le comportement en dépend.
