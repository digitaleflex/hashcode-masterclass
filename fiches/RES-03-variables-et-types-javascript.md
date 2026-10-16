# RES-03 — Variables et types JavaScript

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
Une variable est un nom associé à une valeur. En JavaScript, privilégie `const` par défaut et utilise `let` lorsqu’une réaffectation est nécessaire. Évite `var` dans le code moderne d’apprentissage.

## const et let
```js
const price = 2500;
let quantity = 3;

quantity = 4; // autorisé : quantity est déclarée avec let
// price = 3000; // TypeError : réaffectation interdite
console.log(price * quantity); // 10000
```

`const` interdit de réaffecter la liaison, mais ne rend pas automatiquement un objet ou un tableau immuable.

## Types primitifs fréquents
- `string` : texte, par exemple `"Bonjour"`
- `number` : nombres, par exemple `42` ou `3.14`
- `boolean` : `true` ou `false`
- `undefined` : valeur par défaut d’une variable déclarée sans valeur
- `null` : absence de valeur représentée explicitement
- `bigint` et `symbol` : types primitifs plus spécialisés

## Conversions : attention
```js
console.log("5" + 2);  // "52" : concaténation
console.log("5" - 2);  // 3 : conversion numérique
console.log(Number("5") + 2); // 7
```

Utilise une conversion explicite quand elle rend l’intention plus claire.

## Vérification rapide
1. Quelle déclaration choisir si la valeur doit être réaffectée ? **let**.
2. `typeof "5"` renvoie quoi ? **"string"**.
3. `const user = { name: "Ada" }` permet-il de modifier `user.name` ? **Oui**, la propriété peut changer, même si `user` ne peut pas être réaffectée.

**Erreur fréquente :** supposer que `+` fait toujours une addition numérique.

## Cas d’usage pratique — calculer le panier d’un client
Une boutique vend trois articles à 2 500 FCFA chacun. Le prix est fixe pendant le calcul : utilise `const`. La quantité peut changer si le client ajoute un article : utilise `let` si tu réaffectes cette variable.

```js
const unitPrice = 2500;
let quantity = 3;
quantity = 4;
const total = unitPrice * quantity;
console.log(total); // 10000
```

**Mini-défi :** que se passe-t-il si la quantité arrive d’un formulaire sous forme de chaîne `"4"` ? Convertis-la explicitement avec `Number()` et vérifie que la valeur obtenue est bien un nombre.