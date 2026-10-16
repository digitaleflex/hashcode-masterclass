# Corrigés commentés — Architecture, DevOps et production

## CI minimale
- Installer une version Node explicite.
- Utiliser une installation déterministe si un lockfile est maintenu.
- Exécuter vérifications, tests et build.
- Publier un artefact traçable.
- Protéger les secrets et séparer les étapes de déploiement.
- Ne pas masquer un échec pour faire passer la pipeline.

## Rollback
Le rollback applicatif n'annule pas automatiquement une migration. Préférer des migrations compatibles entre ancienne et nouvelle version pendant la transition. Pour une opération destructive, prévoir sauvegarde et test de restauration.

## Rapport d'incident
Résumé, début/fin, utilisateurs affectés, détection, chronologie, cause contributive, mitigation, récupération et actions avec responsable/indicateur.

La CI détecte des régressions sans garantir zéro bug. Le rollback du code n'annule pas une migration destructive.
Vérifier CI rouge, artefact lié au commit, absence de secrets et rapport d'incident factuel.