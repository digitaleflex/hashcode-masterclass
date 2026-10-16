# Corrigés commentés — Backend Node.js et API

## Contrat de statuts
- 200 : lecture ou mise à jour réussie.
- 201 : création.
- 204 : suppression sans corps.
- 400 : entrée invalide.
- 401 : identité absente/invalide.
- 403 : action interdite pour l'identité reconnue.
- 404 : ressource absente ou non visible selon la politique.
- 409 : conflit métier.
- 500 : erreur inattendue, sans détail interne dans la réponse.

## Autorisation
Vérifier côté serveur pour chaque lecture/modification, pas seulement dans l'interface. Un test doit prouver qu'un utilisateur A ne peut lire ni modifier une ressource de B.

## Validation
Authentification établit l'identité ; autorisation contrôle chaque action/ressource. Les données HTTP sont non fiables.

## Contrôle
Tests d'intégration locaux : routes, erreurs, corps trop volumineux, méthodes inconnues et accès interdit.