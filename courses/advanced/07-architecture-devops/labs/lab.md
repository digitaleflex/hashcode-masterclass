# Laboratoire — Architecture, DevOps et production

**Durée :** 75 min · **Livrables :** pipeline CI, checklist release et rapport d'incident.

## Mission
Créer une pipeline, un health check démarrage/ok/dégradé et un plan de rollback qui tient compte des migrations.

## Étapes
1. Exécuter les contrôles sur chaque pull request.
2. Identifier l'artefact par le commit source.
3. Ajouter un health check distinguant démarrage, ok et dégradé.
4. Écrire une checklist de déploiement : configuration, migrations, santé et métriques.
5. Définir un rollback et ses limites.
6. Simuler localement une dépendance indisponible et rédiger le rapport.

## Critères
- [ ] La CI échoue si un test échoue.
- [ ] L'artefact est traçable.
- [ ] Aucun secret n'est versionné ou intégré à l'image.
- [ ] Le health check reflète l'état utile.
- [ ] Le rollback tient compte des données.
- [ ] Le rapport inclut impact, chronologie, mitigation et actions.

## Extension PRO
Comparer canary et blue-green dans un scénario fictif, avec risques et coûts.