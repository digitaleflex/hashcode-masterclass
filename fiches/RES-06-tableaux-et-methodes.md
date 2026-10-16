# RES-06 — Tableaux et méthodes

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
Un tableau ordonne plusieurs valeurs. Les indices commencent à zéro. Les méthodes `map`, `filter` et `reduce` permettent de transformer, sélectionner et agréger les éléments.

## Trois méthodes à distinguer
```js
const prices = [1000, 2500, 1500, 500];

const withTax = prices.map((price) => price * 1.1);
// [1100, 2750, 1650, 550]

const expensive = prices.filter((price) => price >= 1500);
// [2500, 1500]

const total = prices.reduce((sum, price) => sum + price, 0);
// 5500
```

| Méthode | Question | Résultat |
|---|---|---|
| `map` | Que devient chaque élément ? | Un nouveau tableau transformé |
| `filter` | Quels éléments conserver ? | Un tableau filtré |
| `reduce` | Quelle valeur cumulée obtenir ? | Une valeur finale, selon l’accumulateur |

## Indices et longueur
```js
const colors = ["lime", "white", "black"];
console.log(colors[0]); // "lime"
console.log(colors.length); // 3
```

Le dernier indice valide est `length - 1`. Un indice hors limites donne généralement `undefined`.

## À retenir
- `map` et `filter` renvoient un nouveau tableau.
- `reduce` a besoin d’une logique d’accumulation claire ; l’initialiser avec `0` est adapté à une somme numérique.
- Ne choisis pas une méthode uniquement parce qu’elle est moderne : choisis celle qui exprime le mieux l’intention.

## Vérification rapide
Quelle méthode choisir pour garder uniquement les prix supérieurs ou égaux à 1 500 ? **filter**. Pour obtenir leur somme ? **reduce**, après filtrage si c’est la règle voulue.