# CS-19 — Principes SOLID et patterns courants

> HashCode Academy · Cheat Sheet

## SOLID
- S — Single Responsibility : une unité a une responsabilité cohérente.
- O — Open/Closed : faciliter l'extension sans modifier constamment du code stable.
- L — Liskov Substitution : une implémentation dérivée respecte le contrat attendu.
- I — Interface Segregation : préférer de petits contrats ciblés.
- D — Dependency Inversion : les politiques métier dépendent d'abstractions, pas de détails concrets.

Ce sont des guides de conception, pas des règles mécaniques.

## Patterns fréquents
- Strategy : remplacer un algorithme par une implémentation interchangeable.
- Factory : centraliser une création complexe.
- Adapter : faire correspondre une API à un contrat attendu.
- Observer / Pub-Sub : notifier des abonnés d'un événement.
- Repository : isoler l'accès aux données.
- Dependency Injection : fournir les dépendances depuis l'extérieur.

## Exemple Strategy
~~~ts
interface PriceStrategy {
  calculate(base: number): number;
}

class StandardPrice implements PriceStrategy {
  calculate(base: number): number { return base; }
}

class DiscountPrice implements PriceStrategy {
  constructor(private readonly rate: number) {}
  calculate(base: number): number { return base * (1 - this.rate); }
}
~~~

## Quand introduire un pattern ?
1. Identifier une variation ou difficulté récurrente.
2. Vérifier qu'une solution plus simple ne suffit pas.
3. Choisir l'abstraction minimale.
4. Tester le comportement, pas seulement la structure.

## Anti-patterns
- Une classe manager qui fait tout.
- Des interfaces sans variation réelle.
- Des hiérarchies d'héritage profondes.
- Des abstractions créées uniquement pour suivre un schéma.
