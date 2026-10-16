# Corrigés commentés — Sécurité applicative

## Correction DOM
Utiliser `textContent` lorsqu'il s'agit d'afficher du texte. Le test doit vérifier que les caractères `<` et `>` restent du texte visible et qu'aucun élément n'est créé.

## Threat model de référence
- Actifs : tâches, identités, sessions, secrets de configuration.
- Entrées : corps HTTP, paramètres, en-têtes et cookies.
- Menaces : accès horizontal non autorisé, injection, fuite par logs, session compromise.
- Contrôles : validation serveur, requêtes paramétrées, autorisation par ressource, cookies sûrs, logs expurgés.
- Risque résiduel : erreurs de configuration et défauts non détectés ; prévoir revue, tests et monitoring.

## Règle
Utiliser textContent pour du texte ; la validation seule ne remplace pas l'encodage contextuel. L'autorisation doit être vérifiée côté serveur.

Exclusivement fichiers et environnements locaux autorisés. Aucun scan de tiers, aucun secret réel.