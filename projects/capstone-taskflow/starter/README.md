# TaskFlow — starter

Ce starter est volontairement incomplet. Il fournit un contrat de domaine et des tâches de réalisation, pas une solution à copier.

## Démarrage
Node.js 20+ est requis. Les commandes complètes seront ajoutées lorsque les modules d'API et d'interface seront assemblés.

## À construire
- [ ] Domaine des tâches et états valides.
- [ ] API HTTP avec validation des entrées.
- [ ] Contrôle d'accès par propriétaire.
- [ ] Interface accessible et états chargement/vide/erreur.
- [ ] Tests unitaires et d'intégration.
- [ ] CI, health check et documentation de livraison.

## Contrat minimal du domaine
Une tâche contient `id`, `ownerId`, `title`, `status`, `createdAt`. Les statuts autorisés sont `todo`, `doing` et `done`. Les entrées externes doivent être validées. Les tests de sécurité utilisent uniquement des utilisateurs fictifs.
