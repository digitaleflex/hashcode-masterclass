# TaskFlow — solution de référence (domaine)

Cette solution couvre le modèle de domaine et ses tests unitaires. Elle ne prétend pas être une application complète avec UI, authentification réelle, base de données ou déploiement. Elle sert de référence pour les invariants de tâches et l'autorisation par propriétaire.

## Exécution
Depuis la racine du dépôt : `node --test projects/capstone-taskflow/solution/test/*.test.mjs`.

## Invariants
- Un titre non vide, limité à 200 caractères.
- Statuts limités à todo, doing et done.
- Chaque tâche appartient à un ownerId.
- Une tâche ne peut être modifiée par un utilisateur différent de son propriétaire.
- Les données invalides produisent des erreurs explicites.
