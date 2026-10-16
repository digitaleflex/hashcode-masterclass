# RES-18 — Sécurité applicative et validation des entrées

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 40 à 55 minutes  
**Prérequis :** fonctions, DOM, API HTTP et notions de serveur  
**Objectif :** réduire les risques liés aux données non fiables et appliquer les contrôles au bon endroit.

## Objectifs d'apprentissage

- identifier les sources de données non fiables ;
- valider les données selon un contrat ;
- éviter les injections dans le rendu web et les requêtes ;
- distinguer authentification et autorisation ;
- protéger les secrets et traiter les erreurs sans fuite d'information.

## 1. Ne jamais faire confiance à une entrée

Une entrée non fiable peut venir d'un formulaire, d'une URL, d'un fichier, d'un stockage navigateur, d'un webhook ou d'une API externe. La validation doit porter sur le type, le format, les limites, les valeurs autorisées et les règles métier.

Exemple :

```ts
type CreateTaskInput = {
  title: string;
};

function validateCreateTaskInput(value: unknown): CreateTaskInput {
  if (typeof value !== "object" || value === null || !("title" in value)) {
    throw new Error("Entrée invalide");
  }

  const title = value.title;
  if (typeof title !== "string") {
    throw new Error("Le titre doit être du texte");
  }

  const normalized = title.trim();
  if (normalized.length < 2 || normalized.length > 120) {
    throw new Error("Le titre doit contenir entre 2 et 120 caractères");
  }

  return { title: normalized };
}
```

Cette fonction illustre une validation ciblée. Les règles réelles doivent suivre le contrat du produit et être exécutées sur le serveur lorsqu'elles protègent des données ou des opérations sensibles.

## 2. Prévenir les injections

### Rendu web

Privilégie `textContent` pour afficher du texte fourni par un utilisateur :

```js
messageElement.textContent = userProvidedText;
```

Évite de concaténer des données non fiables dans `innerHTML). Si une application doit afficher du HTML riche, elle a besoin d'une stratégie d'assainissement adaptée et maintenue.

### Requêtes vers une base de données

Côté serveur, utilise les requêtes paramétrées ou l'API sûre de ton ORM. Ne construis pas une requête SQL en concaténant directement des valeurs utilisateur.

La validation et l'échappement sont complémentaires, mais ne remplacent pas les mécanismes sûrs fournis par le contexte d'utilisation.

## 3. Authentification et autorisation

- **Authentification :** établir qui est l'utilisateur.
- **Autorisation :** déterminer ce que cet utilisateur a le droit de faire.

Un utilisateur connecté n'est pas automatiquement autorisé à lire ou modifier toutes les ressources. Chaque opération sensible doit vérifier l'identité et les permissions côté serveur.

## 4. Secrets et données sensibles

- Ne place pas de clé privée, mot de passe ou jeton privilégié dans le code frontend.
- Ne committe pas les fichiers d'environnement contenant des secrets.
- Utilise des variables d'environnement et une gestion des secrets adaptée au déploiement.
- Masque les jetons et données personnelles dans les logs.
- Prévois la rotation d'un secret qui a été exposé.
- Ne considère pas un dépôt privé comme un coffre-fort.

Une variable préfixée pour être exposée au client par un outil de build ne doit contenir que des valeurs publiques.

## 5. HTTP, CORS et contrôle d'accès

CORS est un mécanisme appliqué par le navigateur pour encadrer certaines lectures cross-origin. Ce n'est ni une authentification ni une autorisation. Une API doit toujours vérifier ses permissions et valider les données indépendamment de CORS.

Les contrôles côté client améliorent l'expérience utilisateur, mais ils peuvent être contournés. Les décisions de sécurité doivent être appliquées dans la couche de confiance.

## 6. Erreurs et dépendances

- Renvoie un message compréhensible, sans trace de pile ni secret.
- Conserve des logs côté serveur avec le contexte utile, sans données sensibles inutiles.
- Mets à jour les dépendances et examine les alertes de sécurité.
- Limite les permissions et l'exposition des endpoints.
- Applique des limites de taille, de fréquence et de pagination aux opérations adaptées.
- Utilise HTTPS en production et configure les cookies de session de façon appropriée.

## 7. Checklist avant livraison

- [ ] Les entrées sont validées côté serveur.
- [ ] Les permissions sont vérifiées pour chaque action sensible.
- [ ] Les données utilisateur ne sont pas injectées directement dans du HTML.
- [ ] Les requêtes base de données utilisent des paramètres.
- [ ] Aucun secret n'est exposé au navigateur ou commité.
- [ ] Les erreurs publiques ne révèlent pas de détails internes.
- [ ] Les tests couvrent des entrées invalides et des accès interdits.

## 8. Mini-exercice

Une API permet de modifier le titre d'une tâche. Liste les validations à effectuer, puis écris une fonction qui vérifie le type et la longueur du titre. Explique pourquoi le serveur doit vérifier que l'utilisateur est autorisé à modifier cette tâche.

### Critères de réussite
- Le contrat d'entrée est explicite.
- Le contrôle d'accès est séparé de la validation de format.
- La réponse d'erreur ne révèle pas d'information sensible.
- Le rendu du titre ne crée pas d'injection HTML.

## Auto-évaluation

1. Pourquoi un type TypeScript ne suffit-il pas à valider un JSON ?
2. Quelle différence existe entre authentification et autorisation ?
3. Pourquoi CORS n'est-il pas une barrière d'accès suffisante ?
4. Où doit être conservé un secret privilégié ?

## Fiches associées
- Précédent : [RES-17 — Tests et qualité](RES-17-tests-qualite-debugging.md)
- Suite : [RES-19 — Architecture et livraison](RES-19-architecture-organisation-livraison.md)
- Mémo : [CS-09 — Sécurité web essentielle](../cheatsheets/CS-09-securite-web-essentielle.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**