# RES-20 — Projet de synthèse, révision générale et évaluation

**Collection :** HashCode Academy — Fiche de synthèse finale  
**Niveau :** Intermédiaire  
**Durée indicative :** 3 à 6 heures, selon le niveau d'accompagnement  
**Prérequis :** RES-01 à RES-19 ; les notions non maîtrisées doivent être révisées avant la livraison  
**Objectif :** construire un gestionnaire de tâches typé, testable, accessible et documenté.

## Mission

Construis une petite application de gestion de tâches. Elle doit permettre d'ajouter une tâche, d'afficher la liste, de marquer une tâche comme terminée et de filtrer les tâches. L'objectif n'est pas d'accumuler des fonctionnalités : il est de démontrer une maîtrise fiable des fondamentaux.

## 1. Cahier des charges

### Fonctionnalités minimales
- Ajouter une tâche avec un titre non vide.
- Afficher toutes les tâches.
- Marquer une tâche comme terminée ou non terminée.
- Filtrer par statut : toutes, à faire, terminées.
- Afficher un état vide compréhensible.
- Afficher des erreurs de saisie accessibles.
- Préserver les données si le choix de stockage retenu le permet.

### Contraintes techniques
- TypeScript avec `strict: true).
- Modèle de données explicite.
- Fonctions métier séparées du DOM.
- Rendu des textes utilisateur avec `textContent` ou une approche sûre équivalente.
- Tests unitaires des règles métier.
- README contenant les prérequis et les commandes de lancement, test et build.

### Hors périmètre initial
L'authentification, le partage entre utilisateurs, les notifications, les rôles complexes et le déploiement cloud sont des extensions. Ne les ajoute pas avant d'avoir terminé et testé le périmètre minimal.

## 2. Modèle de domaine de départ

```ts
type TaskStatus = "todo" | "completed";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
};

type TaskFilter = "all" | TaskStatus;
```

Réfléchis à la génération d'identifiants, au format de date et aux règles de validation. Le modèle est un point de départ, pas une solution imposée. Justifie les choix dans le README.

## 3. Étapes recommandées

### Étape A — Préparer
- Crée le dépôt et le README.
- Documente la version de Node.js et le gestionnaire de paquets utilisés.
- Ajoute une commande de vérification des types et une commande de test.

### Étape B — Modéliser
- Définis les types et les règles métier.
- Écris une fonction de normalisation du titre.
- Écris les opérations de création, de terminaison et de filtrage.

### Étape C — Tester la logique
- Teste les titres valides et invalides.
- Teste la transition de statut.
- Teste les filtres et la liste vide.
- Vérifie qu'une opération ne modifie pas involontairement des données partagées.

### Étape D — Construire l'interface
- Crée le formulaire et les contrôles.
- Ajoute les labels et les messages d'erreur.
- Gère les événements sans mettre toute la logique métier dans les callbacks.
- Affiche correctement les états vides et les résultats filtrés.

### Étape E — Persistance, si retenue
- Choisis explicitement entre mémoire, stockage navigateur ou API.
- Traite les données lues comme potentiellement invalides.
- Explique les limites du stockage choisi : un stockage local navigateur n'est ni une sauvegarde garantie ni une base partagée sécurisée.

### Étape F — Vérifier et livrer
- Lance lint, vérification TypeScript, tests et build.
- Teste le parcours complet au clavier.
- Vérifie les cas limites et les erreurs.
- Documente les limites connues et les améliorations possibles.

## 4. Grille d'évaluation

| Critère | Points | Ce qui est attendu |
|---|---:|---|
| Fonctionnalités | 20 | Les scénarios demandés fonctionnent |
| Modèle et TypeScript | 15 | Types explicites, strict, peu ou pas de contournements injustifiés |
| Organisation | 15 | Responsabilités séparées, noms clairs, modules cohérents |
| Tests | 15 | Cas normaux, limites et erreurs couverts |
| UX et accessibilité | 10 | Labels, messages compréhensibles, clavier et états visibles |
| Sécurité | 10 | Rendu sûr, validation et absence de secrets |
| Robustesse | 5 | États vides, erreurs et données inattendues traités |
| Documentation | 5 | README reproductible |
| Explication orale/écrite | 5 | L'apprenant justifie ses choix |
| **Total** | **100** | |

Interprétation indicative : 90–100 = maîtrise solide ; 75–89 = acquis satisfaisants avec quelques points à revoir ; 60–74 = fonctionnalités principales présentes mais plusieurs fragilités ; moins de 60 = revoir les notions fondamentales et reprendre les étapes concernées. Ajuste ces seuils à la politique réelle de la formation.

## 5. Questions de révision

1. Pourquoi privilégier `const` lorsque la réaffectation n'est pas nécessaire ?
2. Quelle différence existe entre `map`, `filter` et `reduce` ?
3. Pourquoi `return` n'est-il pas équivalent à `console.log` ?
4. Comment traiter une erreur HTTP lors d'un appel `fetch` ?
5. Pourquoi TypeScript ne valide-t-il pas automatiquement un JSON ?
6. Pourquoi faut-il éviter d'insérer directement une saisie utilisateur dans `innerHTML` ?
7. Quelle différence existe entre authentification et autorisation ?
8. Comment un test peut-il prévenir une régression ?
9. Pourquoi séparer la logique métier du DOM ?
10. Quelles vérifications exécuter avant de livrer ?

## 6. Checklist finale

- [ ] Le périmètre minimal est entièrement implémenté.
- [ ] Les noms et types du modèle sont cohérents.
- [ ] Les règles métier sont testées sans dépendre du DOM.
- [ ] Les cas invalides et limites sont couverts.
- [ ] Le formulaire est utilisable au clavier.
- [ ] Les erreurs sont visibles et compréhensibles.
- [ ] Les données utilisateur sont affichées de façon sûre.
- [ ] Aucune clé ou donnée sensible n'est commitée.
- [ ] Les commandes de test et de build fonctionnent.
- [ ] Le README permet à une autre personne de démarrer le projet.
- [ ] L'apprenant peut expliquer les choix et les limites du produit.

## 7. Bilan réflexif

Après la livraison, réponds à ces questions :
- Quelle notion as-tu le mieux comprise en l'appliquant ?
- Quelle erreur t'a le plus appris et comment l'as-tu diagnostiquée ?
- Quel test a permis de découvrir ou prévenir un bug ?
- Quelle dette technique reste acceptable pour ce projet ?
- Quelle serait la prochaine amélioration et pourquoi ?

**Règle de progression :** une fonctionnalité simple, testée et expliquée vaut mieux qu'une fonctionnalité avancée copiée sans compréhension.

## Fiches associées
- Précédent : [RES-19 — Architecture et livraison](RES-19-architecture-organisation-livraison.md)
- Mémo : [CS-10 — Checklist qualité et livraison](../cheatsheets/CS-10-checklist-qualite-livraison.md)
- Mémo : [CS-20 — Configuration TypeScript et build](../cheatsheets/CS-20-typescript-configuration-build.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**