# RES-05 — Fonctions JavaScript

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
Une fonction regroupe une opération réutilisable. Les paramètres sont les entrées ; `return` fournit le résultat à l’appelant.

## Déclaration classique
```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(2500, 3);
console.log(total); // 7500
```

## Fonction fléchée
```js
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// Forme courte, lorsque l’expression tient sur une ligne :
const double = (number) => number * 2;
```

Une fonction fléchée à expression concise renvoie automatiquement cette expression. Avec des accolades, il faut généralement écrire `return` pour renvoyer une valeur.

## Pourquoi utiliser des fonctions ?
- Nommer une intention.
- Éviter de dupliquer la même logique.
- Séparer les responsabilités.
- Tester une règle indépendamment de l’interface.

## À surveiller
- Une fonction qui ne renvoie rien explicitement renvoie `undefined`.
- Le nom devrait décrire l’action ou le résultat.
- Les paramètres doivent avoir un sens clair.
- Évite de faire trop de choses différentes dans une seule fonction.

## Vérification rapide
Que renvoie `calculateTotal(1000, 4)` ? **4000**.

Que renvoie `const show = () => { console.log("Salut"); }` ? **La fonction affiche “Salut” lorsqu’elle est appelée, mais ne renvoie pas cette chaîne**.