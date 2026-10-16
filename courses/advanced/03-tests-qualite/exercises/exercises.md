# Exercices — Tests avancés et qualité logicielle

## INIT — Comprendre
Reformuler les concepts clés avec ses propres mots. Construire un exemple minimal, prédire sa sortie et vérifier cette prédiction. Expliquer toute différence.

## CORE — Appliquer
Implémenter retry(operation,attempts) puis écrire des tests indépendants pour succès immédiat, succès tardif, épuisement et paramètre invalide.

Ajouter les tests suivants :
- cas nominal ;
- entrée vide ou minimale ;
- entrée invalide ;
- limite de domaine ;
- erreur de dépendance ou opération interrompue, lorsque pertinent.

## PRO — Transférer
Adapter la solution à une nouvelle contrainte : volume plus grand, erreur inattendue, état concurrent ou nouvelle règle de sécurité. Documenter le compromis choisi et pourquoi la solution reste correcte.

## Définition de réussite
L'exercice est réussi si les critères d'acceptation sont démontrés par des tests ou une vérification reproductible, pas uniquement affirmés dans le README.
