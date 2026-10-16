# RES-20 — Projet de synthèse, révision générale et évaluation

> HashCode Academy · HashCode Masterclass · Fiche finale

## Mission : construire un gestionnaire de tâches typé
Le projet doit créer, afficher, terminer et filtrer des tâches. L'objectif est de produire un code correct, compréhensible, testable et sûr.

## 1. Cahier des charges
- Créer une tâche avec un identifiant unique et un titre valide.
- Afficher toutes les tâches.
- Marquer une tâche comme terminée.
- Filtrer par état.
- Gérer les erreurs et le chargement si une API est utilisée.
- Tester les règles métier et documenter l'installation.

## 2. Modèle de domaine de départ
~~~ts
type TaskStatus = "todo" | "done";

type Task = {
  readonly id: string;
  title: string;
  status: TaskStatus;
  createdAt: Date;
};

function createTask(id: string, rawTitle: unknown): Task {
  if (typeof rawTitle !== "string") {
    throw new Error("Le titre doit être une chaîne");
  }

  const title = rawTitle.trim();
  if (title.length < 3 || title.length > 120) {
    throw new Error("Le titre doit contenir entre 3 et 120 caractères");
  }

  return { id, title, status: "todo", createdAt: new Date() };
}

function completeTask(task: Task): Task {
  return { ...task, status: "done" };
}

function filterTasks(tasks: readonly Task[], status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}
~~~

Ce modèle utilise un type plutôt qu'une classe parce qu'il représente surtout des données et des fonctions pures. Une classe peut être justifiée si le domaine doit encapsuler des invariants et du comportement. readonly protège l'affectation via TypeScript, pas toute mutation externe à l'exécution.

## 3. Étapes recommandées
1. Définir les règles métier et les types.
2. Écrire des fonctions métier indépendantes du DOM.
3. Tester les cas nominaux et les limites.
4. Créer une interface HTML accessible.
5. Connecter les événements sans mélanger logique et rendu.
6. Ajouter une API seulement si nécessaire.
7. Vérifier types, lint, tests et build.
8. Rédiger le README avec installation, scripts, fonctionnalités et limites.

## 4. Grille d'évaluation
Attribuez une note de 0 à 4 par critère : 0 = absent ; 1 = très incomplet ; 2 = partiellement correct ; 3 = correct ; 4 = solide et expliqué.

| Critère | Points max. |
|---|---:|
| Types et modèle de données | 4 |
| Règles métier et validation | 4 |
| Lisibilité et séparation des responsabilités | 4 |
| Interface accessible et événements | 4 |
| Tests pertinents | 4 |
| Gestion des erreurs et cas limites | 4 |
| Sécurité et données externes | 4 |
| Git, documentation et reproductibilité | 4 |
| **Total** | **32** |

Repères : 28–32 = maîtrise solide ; 22–27 = bon niveau ; 16–21 = bases acquises, révisions nécessaires ; moins de 16 = reprendre les notions fondamentales.

## 5. Questions de révision
1. Quelle différence entre const, let et readonly ?
2. Quelle différence entre type et interface ?
3. Pourquoi une valeur unknown doit-elle être vérifiée ?
4. Quand choisir une classe plutôt qu'un objet typé ?
5. Pourquoi fetch nécessite-t-il response.ok ?
6. Quelle différence entre tests unitaires, intégration et E2E ?
7. Pourquoi la validation frontend ne suffit-elle pas ?
8. Quelles responsabilités doivent rester côté serveur ?
9. Pourquoi séparer le domaine de l'accès aux données ?
10. Quelles étapes automatiser dans la CI ?

## 6. Checklist finale
- [ ] Le projet compile sans erreur TypeScript.
- [ ] Les entrées sont validées selon les règles définies.
- [ ] Les cas limites sont testés.
- [ ] L'interface fonctionne au clavier et présente les erreurs.
- [ ] Les appels réseau traitent les erreurs HTTP.
- [ ] Aucun secret n'est commité ni exposé au navigateur.
- [ ] Les responsabilités sont clairement séparées.
- [ ] Le README permet à une autre personne de lancer le projet.
- [ ] Les tests et le build passent dans un environnement propre.

## Bilan
La compétence ne se mesure pas à la quantité de syntaxe mémorisée, mais à la capacité de choisir une solution adaptée, d'expliquer ses compromis, de vérifier son comportement et de la maintenir.

**Fin du parcours RES-01 à RES-20.** Utilisez les fiches comme aide-mémoire, puis consolidez les acquis en réalisant le projet sans recopier les corrections.
