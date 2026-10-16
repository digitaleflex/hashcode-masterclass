# RES-12 — Construire un Task Manager

**Parcours :** HashCode Masterclass · **Domaine :** Atelier de synthèse · **Niveau :** Débutant

## Objectif
Construire un gestionnaire de tâches minimal en séparant le modèle de données, la logique métier et l’interface.

## Modèle
```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

## Responsabilités
- **Modèle :** décrire la forme d’une tâche.
- **Logique métier :** ajouter, terminer, supprimer et filtrer les tâches.
- **Interface :** afficher les données et déclencher les actions.
- **Tests :** vérifier les résultats et les cas limites.

## Fonctions attendues
1. `addTask(title)` : ajouter une tâche dont le titre n’est pas vide.
2. `completeTask(id)` : marquer comme terminée la tâche trouvée.
3. `removeTask(id)` : supprimer la tâche correspondant à l’identifiant.
4. `getPendingTasks(tasks)` : renvoyer les tâches non terminées.
5. `getCompletedTasks(tasks)` : renvoyer les tâches terminées.

## Cas limites obligatoires
- Le titre est vide ou ne contient que des espaces.
- L’identifiant demandé n’existe pas.
- Le tableau de tâches est vide.
- Une tâche est déjà terminée.
- Deux tâches reçoivent accidentellement le même identifiant.
- La suppression concerne le premier, le dernier ou l’unique élément.

## Critères de réussite
- Les types TypeScript correspondent aux données réelles.
- Chaque fonction a une responsabilité claire.
- Les règles métier sont vérifiées indépendamment de l’interface.
- Les cas limites ont un comportement défini et testé.
- Le participant peut expliquer ses décisions, pas seulement montrer du code qui fonctionne.

## Défi bonus
Persister les tâches dans le stockage local du navigateur, puis ajouter un filtre « Toutes / En cours / Terminées ». Rappelle-toi que les données persistées doivent être vérifiées lorsqu’elles sont relues.

## Auto-évaluation
- [ ] Je peux expliquer le modèle `Task`.
- [ ] Je peux écrire et typer les fonctions métier.
- [ ] Je teste les cas nominaux et les cas limites.
- [ ] Je sais distinguer une erreur de type d’un bug logique.
- [ ] Je peux expliquer comment l’interface utilise les fonctions sans contenir toute la logique métier.