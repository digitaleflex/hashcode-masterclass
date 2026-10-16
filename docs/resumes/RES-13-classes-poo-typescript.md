# RES-13 — Classes et programmation orientée objet en TypeScript

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Créer des classes, encapsuler l'état, utiliser l'héritage et choisir la composition lorsqu'elle est plus simple.

## 1. Classes et instances
Une classe décrit les propriétés et comportements d'objets similaires. Une instance est un objet créé à partir de cette classe.

~~~ts
class User {
  constructor(
    public readonly id: string,
    public name: string,
  ) {}

  greet(): string {
    return `Bonjour, ${this.name} !`;
  }
}

const user = new User("u-01", "Amina");
console.log(user.greet());
~~~

Les propriétés déclarées dans les paramètres du constructeur sont des *parameter properties* : TypeScript crée et initialise automatiquement les propriétés.

## 2. Visibilité et immutabilité
- **public** : accessible depuis l'extérieur ; visibilité par défaut.
- **private** : accessible uniquement dans la classe selon le contrôle TypeScript.
- **protected** : accessible dans la classe et ses sous-classes.
- **readonly** : empêche la réaffectation ordinaire via TypeScript après initialisation.

~~~ts
class BankAccount {
  constructor(
    public readonly number: string,
    private balance: number,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Montant invalide");
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
~~~

Le mot-clé private de TypeScript est principalement une restriction statique. La syntaxe ECMAScript #balance fournit un champ privé natif à l'exécution. Aucun de ces mécanismes ne remplace les contrôles de sécurité côté serveur.

## 3. Héritage, interfaces et classes abstraites
~~~ts
interface Notifiable {
  notify(message: string): void;
}

abstract class NotificationService {
  constructor(protected readonly sender: string) {}
  abstract send(message: string): Promise<void>;

  log(message: string): void {
    console.log(`[${this.sender}] ${message}`);
  }
}

class EmailService extends NotificationService implements Notifiable {
  async send(message: string): Promise<void> {
    this.log(message);
    // Connecter ici un fournisseur d'e-mail réel.
  }

  notify(message: string): void {
    void this.send(message);
  }
}
~~~

- **extends** hérite d'une classe ; le constructeur enfant appelle super avant d'utiliser this.
- **implements** vérifie qu'une classe respecte le contrat d'une interface ; ce contrôle ne valide pas les données à l'exécution.
- **abstract** empêche l'instanciation directe et peut imposer des méthodes.
- **override** indique explicitement qu'une méthode remplace une méthode héritée.

## 4. Membres statiques et composition
Un membre static appartient à la classe plutôt qu'à chaque instance. Les accesseurs get/set permettent de contrôler l'accès à une valeur, mais doivent rester prévisibles.

~~~ts
interface Logger {
  info(message: string): void;
}

class TaskService {
  constructor(private readonly logger: Logger) {}

  create(title: string): void {
    this.logger.info(`Tâche créée : ${title}`);
  }
}
~~~

La composition assemble des composants spécialisés. Elle est souvent plus flexible qu'une hiérarchie d'héritage profonde.

## Erreurs fréquentes
- Rendre toutes les propriétés publiques et laisser l'état être modifié sans règle.
- Employer l'héritage uniquement pour partager quelques lignes de code.
- Oublier super dans un constructeur dérivé.
- Croire que implements valide un objet JSON reçu d'une API.
- Créer une classe pour de simples données sans comportement particulier.

## Mini-exercice
Créez une classe Task avec id en lecture seule, title, completed et une méthode complete(). Ajoutez un service qui journalise la création via une interface Logger.

~~~ts
class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public completed = false,
  ) {}

  complete(): void {
    this.completed = true;
  }
}

interface Logger {
  info(message: string): void;
}

class TaskService {
  constructor(private readonly logger: Logger) {}

  create(task: Task): Task {
    this.logger.info(`Création de ${task.title}`);
    return task;
  }
}
~~~

**À retenir :** une classe regroupe état et comportement ; une interface définit un contrat ; l'héritage exprime « est-un » ; la composition exprime « utilise/contient ».

**Suite :** RES-14 — Types avancés, unions, narrowing et génériques.
