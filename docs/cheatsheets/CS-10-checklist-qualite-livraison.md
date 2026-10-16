# CS-10 — Checklist qualité et livraison

> HashCode Academy · Cheat Sheet

## Avant de commencer
- [ ] Le besoin et les critères d'acceptation sont clairs.
- [ ] Le changement est découpé en étapes réalisables.
- [ ] Les contrats d'entrée et de sortie sont identifiés.
- [ ] Les contraintes de sécurité et d'accessibilité sont prises en compte.

## Pendant le développement
- [ ] Noms explicites et fonctions focalisées.
- [ ] Responsabilités séparées.
- [ ] Entrées externes validées.
- [ ] Cas limites et erreurs pris en compte.
- [ ] Pas de secrets ni de logs sensibles.
- [ ] Changements limités au périmètre demandé.

## Avant commit / pull request
~~~bash
git status
git diff --check
npm run lint
npx tsc --noEmit
npm test
npm run build
~~~
Adaptez les commandes aux scripts réellement présents dans package.json. Ne déclarez pas un contrôle réussi s'il n'a pas été exécuté.

- [ ] Les tests couvrent le comportement attendu.
- [ ] Les noms et messages de commit sont explicites.
- [ ] La documentation est mise à jour.
- [ ] Les dépendances ajoutées sont justifiées.
- [ ] La pull request décrit le problème, la solution et les risques.

## Avant déploiement
- [ ] Configuration de production vérifiée.
- [ ] Secrets configurés dans l'environnement serveur.
- [ ] Migrations préparées et testées.
- [ ] Build et tests exécutés dans la CI.
- [ ] Plan de retour arrière connu.
- [ ] Vérifications post-déploiement définies.

## Après livraison
- [ ] Vérifier les journaux et indicateurs utiles.
- [ ] Tester les parcours critiques.
- [ ] Documenter les incidents ou écarts.
- [ ] Supprimer les branches temporaires si elles ne sont plus nécessaires.

## Principe final
Une livraison est prête lorsque les critères d'acceptation sont remplis, les contrôles nécessaires sont passés et les risques connus sont explicités — pas simplement lorsque le code compile.
