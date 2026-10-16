# Exercices — Backend Node.js et API

## INIT
Définir les statuts HTTP attendus pour création, lecture, validation invalide, absence et erreur interne.

## CORE
Créer une API locale de tâches avec GET/POST/PATCH/DELETE, validation serveur, erreurs structurées et tests d'accès par propriétaire.

## PRO
Ajouter pagination `limit`/curseur, plafonner limit et définir l'autorisation par propriétaire. Écrire un test IDOR qui prouve qu'un utilisateur ne lit ni ne modifie la tâche d'un autre.

## Robustesse
Tester JSON mal formé, corps trop volumineux, content-type incorrect, méthode inconnue et erreur de stockage.