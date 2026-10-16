# CS-15 — Classes et programmation orientée objet en TypeScript

> HashCode Academy · Cheat Sheet

## Classe
~~~ts
class Task {
  constructor(
    public readonly id: string,
    public title: string,
    private completed = false,
  ) {}

  complete(): void {
    this.completed = true;
  }

  isCompleted(): boolean {
    return this.completed;
  }
}
~~~

## Visibilité
- public : accessible partout.
- private : accessible dans la classe selon les règles TypeScript.
- protected : accessible dans la classe et les sous-classes.
- readonly : interdit la réaffectation ordinaire après initialisation.

La syntaxe #field crée un champ privé natif JavaScript ; private TypeScript est principalement vérifié à la compilation.

## Héritage et contrat
~~~ts
interface Logger {
  info(message: string): void;
}

class ConsoleLogger implements Logger {
  info(message: string): void {
    console.info(message);
  }
}

class PremiumTask extends Task {
  constructor(id: string, title: string, private readonly priority: number) {
    super(id, title);
  }
}
~~~
Une classe dérivée doit appeler super() avant d'utiliser this. implements vérifie le contrat statiquement ; il ne valide pas un JSON à l'exécution.

## Composition ou héritage ?
- Héritage : relation « est un ».
- Composition : un objet utilise ou contient un autre objet.
- Préférez une composition simple à une hiérarchie profonde si les comportements doivent être interchangeables.

## Quand éviter une classe ?
Un type et des fonctions pures suffisent souvent pour des données simples. Choisissez une classe lorsque l'encapsulation d'état et de comportement apporte une vraie valeur.
