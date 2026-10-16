# Laboratoire local — Sécurité applicative

**Durée :** 60 min · Aucun système distant

## Mission
Auditer une page locale affichant une valeur utilisateur, corriger le sink DOM, ajouter un test et documenter le risque résiduel.

## Étapes
1. Reproduire le comportement dans un fichier HTML local avec une chaîne inoffensive.
2. Identifier l'entrée non fiable et le point d'insertion.
3. Remplacer l'interprétation HTML par l'affichage texte.
4. Ajouter un test de non-régression qui prouve qu'aucun élément HTML n'est créé.
5. Rechercher les autres points d'insertion similaires.
6. Rédiger un rapport cause/impact/correction/risque résiduel.

## Critères
- [ ] Aucun service public n'est contacté.
- [ ] L'entrée est traitée comme non fiable.
- [ ] La correction préserve l'usage légitime.
- [ ] Un test de non-régression existe.
- [ ] Les preuves sont locales et reproductibles.

## Extension PRO
Écrire des tests d'autorisation sur des utilisateurs et tâches fictifs.