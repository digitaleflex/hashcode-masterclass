# RES-18 — Sécurité applicative et validation des entrées

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Appliquer les bases de sécurité : validation, contrôle d'accès, gestion des secrets, rendu sûr et erreurs maîtrisées.

## 1. Ne jamais faire confiance aux entrées
Les données issues d'un formulaire, d'une URL, d'un fichier ou d'une API sont non fiables. Les types TypeScript disparaissent à l'exécution et ne valident pas les données reçues.

~~~ts
function parseTitle(value: unknown): string {
  if (typeof value !== "string") {
    throw new Error("Le titre doit être une chaîne");
  }

  const title = value.trim();
  if (title.length < 3 || title.length > 120) {
    throw new Error("Le titre doit contenir entre 3 et 120 caractères");
  }

  return title;
}
~~~

Validez la forme, la longueur, le format et les contraintes métier. Pour les modèles complexes, utilisez un validateur runtime à schéma.

## 2. Prévenir les injections
- Pour du texte dans le navigateur, préférez textContent à l'assemblage HTML.
- Évitez eval et la génération dynamique de code.
- Si du HTML riche est nécessaire, utilisez une stratégie de sanitisation éprouvée.
- Ne construisez pas de SQL par concaténation ; utilisez des requêtes paramétrées ou un ORM correctement configuré.

## 3. Authentification et autorisation
L'authentification répond à « qui est cet utilisateur ? ». L'autorisation répond à « peut-il effectuer cette action ? ».

Vérifiez les permissions côté serveur pour chaque ressource et opération. Cacher un bouton dans l'interface n'est pas un contrôle d'accès. Appliquez le principe du moindre privilège.

## 4. Secrets et données sensibles
- Ne commitez jamais de secrets.
- Utilisez des variables d'environnement côté serveur et un gestionnaire de secrets adapté.
- Les variables exposées au client ne doivent contenir aucun secret.
- Ne journalisez pas de mots de passe, jetons ou données personnelles inutiles.
- Faites tourner un secret compromis : le supprimer du dernier commit ne suffit pas s'il a été exposé dans l'historique.

## 5. Erreurs et dépendances
Retournez des messages compréhensibles à l'utilisateur et gardez les détails techniques dans des journaux contrôlés. Ne renvoyez pas de stack trace à un client public.

Mettez à jour les dépendances, vérifiez les alertes, conservez le lockfile et examinez les changements avant installation. CORS n'est pas un mécanisme d'authentification ; les protections CSRF, cookies sécurisés et Content Security Policy dépendent de l'architecture.

## Checklist avant livraison
- [ ] Les entrées sont validées côté serveur.
- [ ] Les permissions sont vérifiées pour chaque action sensible.
- [ ] Aucun secret n'est exposé dans le frontend ou le dépôt.
- [ ] Les requêtes à la base sont paramétrées.
- [ ] Les erreurs ne divulguent pas de détails internes.
- [ ] Les dépendances et configurations sont contrôlées.
- [ ] Les tests couvrent les entrées invalides et les accès refusés.

## Mini-exercice
Une API reçoit un titre de type unknown. Écrivez un parseur acceptant uniquement une chaîne de 3 à 120 caractères, sans espaces aux extrémités. Expliquez pourquoi le frontend peut également valider, mais ne remplace pas le serveur.

**Correction :** la fonction parseTitle de la section 1 couvre cette règle. Le frontend améliore l'expérience ; le serveur reste l'autorité, car une requête peut être envoyée sans utiliser l'interface officielle.

**Suite :** RES-19 — Architecture, organisation et livraison d'un projet.
