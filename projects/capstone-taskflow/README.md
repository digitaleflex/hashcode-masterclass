# Projet de synthèse — TaskFlow sécurisé

> Statut : draft · Domaine : Web Engineering, Testing, Security, DevOps · Niveau : intermédiaire · Durée : 12–16 h

## Contexte
Construire une application locale de gestion de tâches pour une petite équipe. Le projet doit démontrer un cycle complet : modélisation, interface, API, validation, tests, sécurité et livraison reproductible.

## Objectifs observables
- [ ] Modéliser les tâches et leurs états sans états impossibles.
- [ ] Construire une interface accessible au clavier avec états chargement/vide/erreur.
- [ ] Implémenter une API avec validation serveur et erreurs cohérentes.
- [ ] Tester les règles métier, les routes et les permissions.
- [ ] Prévenir l'accès à une tâche appartenant à un autre utilisateur.
- [ ] Fournir une CI, une image de démonstration et un plan de rollback.

## Périmètre
### Inclus
- CRUD de tâches, statut, filtre et recherche.
- Utilisateurs fictifs ou authentification de démonstration clairement isolée.
- Autorisation par propriétaire.
- Tests unitaires et intégration locaux.
- Journalisation expurgée et health check.

### Exclu
- Déploiement public avec de vrais comptes.
- Paiement, données personnelles réelles ou intégration à des services tiers.
- Exécution de code fourni par les utilisateurs.

## User stories
- En tant qu'utilisateur, je peux créer, consulter, modifier et supprimer mes tâches.
- En tant qu'utilisateur, je ne peux pas lire ou modifier la tâche d'un autre utilisateur.
- En tant que contributeur, je peux exécuter les tests et comprendre un échec.
- En tant que mainteneur, je peux identifier la version livrée et revenir à une version saine.

## Critères d'acceptation
- [ ] Les champs obligatoires sont validés côté serveur.
- [ ] Les statuts HTTP distinguent succès, entrée invalide, ressource absente et erreur interne.
- [ ] Les tests couvrent les règles métier, erreurs et accès interdits.
- [ ] L'interface a des labels, un focus visible et des messages d'état.
- [ ] Les logs ne contiennent ni mot de passe, ni jeton, ni données sensibles.
- [ ] La CI exécute validation, tests et build.
- [ ] Le README explique installation, configuration locale, tests et limites.
- [ ] Un plan de rollback tient compte des migrations de données.

## Architecture suggérée
- UI : composants accessibles et état explicite.
- API : routes minces, validation en frontière, services métier.
- Domaine : règles de tâches indépendantes du transport.
- Persistance : interface de repository ; stockage mémoire initial puis base SQL si le groupe maîtrise les migrations.
- Tests : unitaires pour le domaine, intégration pour API et persistance.
- Livraison : CI, artefact identifié par commit, health check et procédure de retour arrière.

## Starter et solution
- [Starter incomplet](starter/README.md) : points à réaliser, sans solution pré-remplie.
- [Solution de référence du domaine](solution/README.md) : implémentation des invariants de tâches.
- [Code du domaine](solution/src/tasks.mjs) et [tests unitaires](solution/test/tasks.test.mjs).

Le projet reste au statut `draft` : le domaine et ses tests existent, mais l'interface, l'API complète, les tests d'intégration, la livraison et leur validation de bout en bout restent à réaliser.

## Barème
Utiliser [la grille commune](../templates/RUBRIC.md). Défauts critiques : accès inter-utilisateurs, secrets versionnés ou tests qui n'exécutent pas les assertions annoncées.

## Rétrospective
Chaque équipe documente au moins trois décisions, un compromis, un risque résiduel et une amélioration prioritaire.
