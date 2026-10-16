# RES-19 — Architecture, organisation et livraison d'un projet

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 40 à 60 minutes  
**Prérequis :** modules, TypeScript, tests, sécurité et Git  
**Objectif :** organiser une petite application de façon lisible, testable et livrable.

## Objectifs d'apprentissage

- séparer les responsabilités du code ;
- définir des frontières entre interface, logique métier et accès aux données ;
- organiser les modules et leurs dépendances ;
- utiliser Git pour collaborer ;
- préparer un pipeline de vérification et une livraison reproductible.

## 1. Exemple d'organisation

Pour une petite application de tâches, une structure possible est :

```text
src/
  domain/
    task.ts
    task-service.ts
  data/
    task-repository.ts
  ui/
    task-form.ts
    task-list.ts
  main.ts
tests/
  task-service.test.ts
```

Cette structure est un exemple, pas une règle universelle. Pour un projet très petit, trop de dossiers peuvent compliquer la navigation. Organise le code autour des responsabilités réelles et fais évoluer la structure lorsque les besoins deviennent visibles.

## 2. Séparer les responsabilités

- **Domaine :** règles métier et modèles.
- **Accès aux données :** chargement et sauvegarde.
- **Interface :** affichage, événements et retour utilisateur.
- **Point d'entrée :** assemble les dépendances et démarre l'application.

La logique métier devrait pouvoir être testée sans devoir démarrer le navigateur ou appeler un vrai service distant.

## 3. Flux de dépendances

Le code d'interface peut appeler un service métier. Le service peut dépendre d'un contrat de dépôt de données. Évite que les règles métier soient dispersées dans les composants visuels ou que chaque module importe tout le reste.

```ts
type Task = { id: string; title: string; completed: boolean };

interface TaskRepository {
  list(): Promise<Task[]>;
  save(task: Task): Promise<void>;
}

class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async listOpenTasks(): Promise<Task[]> {
    const tasks = await this.repository.list();
    return tasks.filter(task => !task.completed);
  }
}
```

L'interface `TaskRepository` représente un contrat. Une implémentation peut utiliser une API, une base de données ou un faux dépôt de test.

## 4. Contrats, erreurs et configuration

- Définis les données d'entrée et de sortie des modules.
- Décide où les erreurs sont converties en messages utilisateur.
- Centralise les valeurs de configuration.
- N'enregistre pas les secrets dans Git.
- Documente les prérequis et les commandes réellement utilisées.

Un contrat de fonction doit être suffisamment clair pour que son appelant sache ce qu'il peut fournir et ce qu'il recevra en retour.

## 5. Git et collaboration

Workflow de base :

```bash
git status
git switch -c feat/task-validation
git add src tests
git commit -m "feat: validate task titles"
git push -u origin feat/task-validation
```

Avant `git add`, examine ce qui sera inclus. N'ajoute pas automatiquement les fichiers d'environnement, les clés, les exports de données ou les fichiers générés. Les commandes et le nom de branche sont des exemples.

Une bonne pull request décrit le problème, la solution, les tests effectués et les risques connus. Les changements doivent rester assez petits pour être relus.

## 6. Intégration continue et livraison

Une pipeline peut exécuter, dans cet ordre :
1. installation reproductible des dépendances ;
2. lint ou contrôle de style ;
3. vérification des types ;
4. tests ;
5. build ;
6. vérifications supplémentaires adaptées au projet.

Le déploiement ne devrait pas être considéré comme réussi simplement parce que le build passe. Vérifie la configuration de production, les migrations éventuelles, les logs et le fonctionnement des parcours critiques.

## 7. Erreurs fréquentes

- Mélanger interface et règles métier dans un même gros fichier.
- Créer trop de couches avant d'en avoir besoin.
- Importer un module dans un sens qui crée un cycle difficile à comprendre.
- Committer des secrets.
- Déployer sans tests ou sans procédure de retour arrière.
- Utiliser des commandes de CI qui ne correspondent pas à celles du poste local.
- Oublier de documenter les variables de configuration requises.

## 8. Mini-exercice

Réorganise un petit gestionnaire de tâches en séparant modèle, service métier, accès aux données et interface. Écris un test du service métier avec un dépôt simulé, puis documente les commandes d'installation, de test et de build.

### Critères de réussite
- Chaque module a une responsabilité compréhensible.
- La logique métier peut être testée sans interface.
- Les dépendances sont injectées ou clairement délimitées.
- Les commandes du README correspondent au projet.
- Aucun secret n'est nécessaire pour exécuter les tests unitaires.

## Auto-évaluation

1. Pourquoi séparer domaine et interface ?
2. Quel avantage apporte un contrat de dépôt ?
3. Quelles vérifications doivent passer avant la livraison ?
4. Quels fichiers ne doivent pas être commités ?

## Fiches associées
- Précédent : [RES-18 — Sécurité applicative](RES-18-securite-validation-entrees.md)
- Suite : [RES-20 — Projet de synthèse](RES-20-projet-synthese-evaluation.md)
- Mémo : [CS-08 — npm, Git et workflow](../cheatsheets/CS-08-npm-git-projet.md)
- Mémo : [CS-10 — Checklist qualité et livraison](../cheatsheets/CS-10-checklist-qualite-livraison.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**