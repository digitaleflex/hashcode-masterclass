# Corrigés commentés — Tests avancés et qualité logicielle

## Démarche attendue
1. Définir le contrat et les invariants avant le code.
2. Traiter les entrées comme non fiables.
3. Garder les responsabilités lisibles et les dépendances explicites.
4. Ajouter des tests pour les cas nominaux, limites et erreurs.
5. Vérifier la correction par une exécution reproductible.

## Principes de solution
retry valide attempts entier positif, renvoie au premier succès et propage l'erreur finale après épuisement ; injecter horloge/délai pour éviter les attentes fragiles.

## Vérification minimale
node:test et assert/strict ; introduire une mutation volontaire et confirmer qu'un test la détecte.

## Revue du résultat
- Le code correspond-il au contrat ?
- Un test échouerait-il si l'on introduisait un défaut représentatif ?
- Les erreurs sont-elles observables sans exposer de données sensibles ?
- Les cas limites sont-ils explicitement traités ?
- Le README indique-t-il ce qui a réellement été exécuté ?

Un corrigé de référence n'est pas la seule implémentation possible. Une alternative est acceptable si elle respecte le contrat, les tests et les contraintes de sécurité.
