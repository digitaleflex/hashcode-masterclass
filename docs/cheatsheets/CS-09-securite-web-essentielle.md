# CS-09 — Sécurité web essentielle

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 18 securite validation entrees](../resumes/RES-18-securite-validation-entrees.md) · [RES 11 dom evenements interfaces web](../resumes/RES-11-dom-evenements-interfaces-web.md)

**Application pratique :** Pour chaque entrée, identifie sa source, la validation requise, le contexte de rendu et le contrôle côté serveur.

## Règles de base
- Toute entrée externe est non fiable.
- Valider les données côté serveur, même si le navigateur les valide aussi.
- Autoriser chaque opération côté serveur ; masquer un bouton n'est pas une permission.
- Utiliser des requêtes SQL paramétrées.
- Maintenir les dépendances et examiner les alertes de sécurité.
- Ne pas exposer les secrets dans le code client, les logs ou le dépôt.

## Rendu sûr
~~~js
element.textContent = userProvidedText;
~~~
Évitez d'injecter des données non fiables dans innerHTML. Si du HTML riche est nécessaire, utilisez une stratégie de sanitisation reconnue.

## Authentification vs autorisation
- Authentification : qui est l'utilisateur ?
- Autorisation : peut-il réaliser cette action sur cette ressource ?
Vérifiez l'autorisation sur le serveur à chaque requête sensible.

## Secrets
- Garder les secrets dans une configuration serveur sécurisée.
- Limiter leurs permissions et leur durée de vie lorsque possible.
- Révoquer et faire tourner tout secret exposé.
- Les variables frontend ne sont pas secrètes, même si leur nom est inhabituel.

## HTTP et navigateur
- HTTPS protège le transport, pas la logique métier.
- CORS contrôle certains accès cross-origin du navigateur ; ce n'est pas une authentification.
- Les cookies d'authentification doivent avoir des attributs adaptés (Secure, HttpOnly, SameSite selon le besoin).
- Évaluer les protections CSRF selon le mécanisme d'authentification.

## Checklist
- [ ] Validation serveur
- [ ] Contrôles d'accès par ressource
- [ ] Requêtes paramétrées
- [ ] Pas de secrets côté client
- [ ] Gestion d'erreurs sans fuite de détails
- [ ] Dépendances et configuration vérifiées
- [ ] Tests des cas invalides et refus d'accès
