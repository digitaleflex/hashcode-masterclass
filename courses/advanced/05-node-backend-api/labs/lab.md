# Laboratoire guidé — Backend Node.js et API

**Durée :** 90 min · **Périmètre :** localhost

## Mission
Créer une API locale de tâches avec GET/POST/PATCH/DELETE, validation serveur, erreurs structurées et tests d'accès par propriétaire.

## Routes
GET /health, GET /tasks, POST /tasks, GET /tasks/:id, PATCH /tasks/:id, DELETE /tasks/:id.

## Étapes
1. Implémenter le contrat avec stockage mémoire.
2. Valider corps JSON, taille, titre et statut.
3. Retourner 400 pour entrée invalide, 201 pour création et 404 pour ressource absente.
4. Séparer routeur et logique métier.
5. Tester les permissions sur chaque ressource avec des identités fictives.
6. Ajouter des tests d'intégration locaux.

## Critères
- [ ] Erreurs structurées et cohérentes.
- [ ] Entrées validées côté serveur.
- [ ] Aucune stack trace dans les réponses.
- [ ] Permissions testées sur chaque route.
- [ ] Tests reproductibles sans réseau public.

## Extension PRO
Remplacer le stockage mémoire par PostgreSQL avec migrations et requêtes paramétrées.