# RES-13 — Classes et programmation orientée objet en TypeScript

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 35 à 50 minutes  
**Prérequis :** fonctions, objets, interfaces TypeScript, types de base  
**Objectif :** modéliser un concept avec une classe, protéger son état et choisir entre héritage et composition.

## Objectifs d'apprentissage

À la fin de cette fiche, tu dois pouvoir :
- expliquer la différence entre une classe et une instance ;
- définir un constructeur et des méthodes ;
- utiliser `public`, `private`, `protected` et `readonly) avec discernement ;
- distinguer héritage et composition ;
- expliquer pourquoi une classe n'est pas nécessaire pour chaque objet.

## 1. Classe, instance et état

Une **classe** décrit une structure et des comportements. Une **instance** est un objet créé à partir de cette classe. Les propriétés représentent l'état ; les méthodes représentent les opérations permises.

```ts
class Task {
  public readonly id: string;
  private completed = false;

  constructor(id: string, public title: string) {
    this.id = id;
  }

  complete(): void {
    this.completed = true;
  }

  isCompleted(): boolean {
    return this.completed;
  }
}

const task = new Task("task-01", "Réviser TypeScript");
task.complete();
console.log(task.isCompleted()); // true
```

Le constructeur initialise l'instance. `this` désigne l'instance courante. La propriété `completed` est privée : le code appelant doit utiliser les méthodes publiques pour la consulter ou la modifier.

## 2. Visibilité et immutabilité

| Modificateur | Rôle | À retenir |
|---|---|---|
| `public` | Accessible depuis l'extérieur | Valeur par défaut |
| `private` | Accessible uniquement dans la classe | Protège l'usage de l'API de la classe au niveau TypeScript |
| `protected` | Accessible dans la classe et ses sous-classes | À réserver à un vrai besoin d'extension |
| `readonly` | Empêche la réaffectation après initialisation | Ne rend pas automatiquement un objet imbriqué immuable |

TypeScript vérifie ces modificateurs pendant le développement. Les annotations de types sont effacées à l'exécution : ne les présente pas comme une barrière de sécurité contre un utilisateur malveillant.

## 3. Héritage : spécialiser un comportement

L'héritage permet à une classe dérivée de reprendre et spécialiser un contrat de classe de base.

```ts
class Notification {
  constructor(public readonly message: string) {}

  send(): string {
    return this.message;
  }
}

class EmailNotification extends Notification {
  constructor(message: string, public readonly recipient: string) {
    super(message);
  }

  describe(): string {
    return `Email pour ${this.recipient} : ${this.message}`;
  }
}
```

Une sous-classe appelle `super(...)` pour initialiser la partie héritée. L'héritage crée un lien fort entre les classes : il faut l'utiliser lorsque la relation « est un » est réelle et durable, pas seulement pour partager quelques lignes de code.

## 4. Composition : assembler des responsabilités

La composition consiste à construire un objet à partir de collaborateurs plus petits. Elle est souvent plus souple que l'héritage.

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class TaskService {
  constructor(private readonly logger: Logger) {}

  create(title: string): void {
    this.logger.log(`Tâche créée : ${title}`);
  }
}
```

`TaskService` dépend d'un contrat (`Logger`), pas nécessairement d'une implémentation précise. Cette approche facilite les tests : un faux logger peut être injecté dans un test.

## 5. Interface, classe abstraite ou classe concrète ?

- **Interface :** décrit un contrat de forme ou de comportement ; elle n'est pas instanciée directement.
- **Classe abstraite :** partage du code et impose des membres à ses sous-classes.
- **Classe concrète :** peut être instanciée.
- **Objet littéral :** souvent suffisant pour transporter des données sans comportement complexe.

Ne crée pas une hiérarchie de classes pour un simple objet de données. Commence par la solution la plus simple, puis introduis une classe lorsque l'état et les règles métier justifient ce modèle.

## 6. Erreurs fréquentes

- Oublier `super()` dans le constructeur d'une classe dérivée.
- Exposer toutes les propriétés et permettre des états incohérents.
- Utiliser l'héritage uniquement pour réutiliser du code.
- Croire que `private` TypeScript sécurise des données côté client.
- Créer une classe pour chaque type, même lorsqu'un type ou une interface suffit.
- Faire dépendre une classe concrète d'une autre classe concrète alors qu'un contrat simple serait plus flexible.

## 7. Mini-exercice

Crée une classe `LearningMission` avec :
- un identifiant en lecture seule ;
- un titre non vide ;
- un état initial `"todo"` ;
- une méthode `start()` qui fait passer l'état à `"in_progress"` ;
- une méthode `complete()` qui fait passer l'état à `"completed"` ;
- une méthode `getStatus()` qui renvoie l'état.

**Défi :** définis un type union pour les états et empêche une mission terminée de revenir à `"todo"` sans règle explicite.

### Critères de réussite
- Le code compile avec `strict: true`.
- L'identifiant ne peut pas être réaffecté depuis l'extérieur.
- Les transitions sont centralisées dans des méthodes.
- Tu peux expliquer pourquoi l'état est privé.

## Auto-évaluation

1. Quelle différence existe entre une classe et une instance ?
2. Pourquoi `readonly` ne garantit-il pas l'immutabilité profonde ?
3. Dans quel cas la composition est-elle préférable à l'héritage ?
4. Pourquoi un modificateur TypeScript ne remplace-t-il pas un contrôle d'accès serveur ?

**Réponses attendues :** une classe est un plan, une instance est un objet créé depuis ce plan ; `readonly` protège la liaison/propriété ciblée, pas nécessairement les objets imbriqués ; la composition est utile pour assembler des capacités indépendantes ; les contrôles de sécurité doivent être appliqués à l'exécution côté serveur.

## Fiches associées
- Précédent : [RES-12 — TypeScript : types, interfaces et fonctions](RES-12-typescript-types-interfaces-fonctions.md)
- Suite : [RES-14 — Types avancés](RES-14-types-avances-unions-narrowing-generiques.md)
- Mémo : [CS-15 — Classes et POO en TypeScript](../cheatsheets/CS-15-classes-poo-typescript.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**