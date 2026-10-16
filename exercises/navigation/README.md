# Spécification UX — navigateur d’exercices

## Objectif
Permettre à un apprenant de trouver un exercice, de le résoudre par étapes et de revenir à sa progression, même sans connexion.

## Écran de liste
- Recherche par identifiant, titre et mot-clé.
- Filtres combinables : niveau (INIT/CORE/PRO), domaine (JS/TS/DOM/ASYNC/TEST/SEC), état (à faire/en cours/terminé).
- Résultats accessibles au clavier, compteur de résultats et état vide explicite.
- Tri stable par parcours puis par identifiant.

## Fiche exercice
- Objectif, durée, prérequis, consigne, entrées/sorties et critères d’acceptation.
- Indices progressifs révélés un à un, sans afficher immédiatement la correction.
- Corrigé dans une section distincte avec explication et complexité si pertinente.
- Liens vers fiches RES/CS et exercices prérequis.

## Progression et confidentialité
- Progression locale facultative, avec possibilité d’effacer les données.
- Aucun compte, suivi distant ou analytics requis pour le mode local.
- Ne jamais marquer un exercice terminé uniquement parce que sa page a été ouverte.

## Accessibilité et responsive
- Parcours complet au clavier, focus visible, structure de titres cohérente, labels explicites.
- Ne pas dépendre uniquement de la couleur.
- Réduire les animations selon `prefers-reduced-motion`.
- À 320 px de largeur, éviter le défilement horizontal global ; les blocs de code peuvent défiler horizontalement.

## Sécurité
La V1 ne doit pas exécuter du code arbitraire dans le contexte de l’application. Préférer fichiers téléchargeables, instructions d’exécution locale et tests de référence. Un futur runner nécessiterait un sandbox isolé, limites CPU/mémoire/temps, restrictions réseau et analyse de risques dédiée.

## Critères d’acceptation
- Les filtres peuvent être combinés et réinitialisés.
- Les indices et corrections restent séparés.
- La navigation est utilisable au clavier et sur mobile.
- La progression peut être effacée et n’est pas envoyée sur un serveur.
- Aucun moteur d’exécution arbitraire n’est inclus dans cette première version.
