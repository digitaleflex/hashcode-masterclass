# Laboratoire guidé — TypeScript avancé

**Durée :** 60 à 90 minutes  
**Livrables :** code source, tests, README d'exécution et courte note de décision.

## Mission
Construire un domaine de tâches avec statuts discriminés, reducer exhaustif et parseTask(input: unknown) qui valide réellement chaque propriété.

## Étapes
1. Créer un répertoire de travail et noter les versions de l'environnement.
2. Écrire le contrat : entrées, sorties, erreurs et invariants.
3. Construire la plus petite version fonctionnelle.
4. Ajouter les validations et les erreurs explicites.
5. Ajouter les tests avant de traiter les extensions.
6. Exécuter tous les contrôles et noter le résultat réel.
7. Écrire une note : choix effectué, alternative considérée, limites restantes.

## Critères d'acceptation
- [ ] Le comportement nominal est démontré.
- [ ] Les entrées invalides sont rejetées proprement.
- [ ] Au moins deux cas limites sont couverts.
- [ ] Les erreurs sont testées et compréhensibles.
- [ ] Les tests sont reproductibles sans service public.
- [ ] Le README contient les commandes exactes et les résultats attendus.
- [ ] Les limites et les risques résiduels sont documentés.

## Dépannage
Si un test échoue, réduire le cas à un exemple minimal, examiner l'entrée et la sortie réelles, puis corriger la cause plutôt que supprimer l'assertion.
