# CS-19 — Principes SOLID et patterns courants

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 13 classes poo typescript](../resumes/RES-13-classes-poo-typescript.md) · [RES 19 architecture organisation livraison](../resumes/RES-19-architecture-organisation-livraison.md)

**Application pratique :** N'introduis un pattern que s'il résout un problème concret. Explique le coût en abstraction et la manière dont il sera testé.

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
