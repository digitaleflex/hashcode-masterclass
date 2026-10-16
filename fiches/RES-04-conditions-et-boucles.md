# RES-04 — Conditions et boucles

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
Une condition choisit une branche. Une boucle répète un traitement. Les comparaisons et les conditions doivent exprimer clairement la règle métier.

## Conditions
```js
const score = 72;

if (score >= 80) {
  console.log("Très bien");
} else if (score >= 50) {
  console.log("Réussi");
} else {
  console.log("À retravailler");
}
```

Les branches sont évaluées dans l’ordre. Dès qu’une condition est vraie, sa branche est exécutée et les suivantes sont ignorées.

## Comparaisons
- `===` : égalité stricte, sans conversion implicite des types.
- `!==` : différence stricte.
- `>`, `<`, `>=`, `<=` : comparaisons d’ordre.
- `&&` : ET logique ; `||` : OU logique ; `!` : négation.

## Boucles
```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, puis 1, puis 2
}

const names = ["Ada", "Linus", "Grace"];
for (const name of names) {
  console.log(name);
}
```

La condition `i < 3` évite d’itérer une quatrième fois. Vérifie toujours qu’une boucle peut se terminer.

## Vérification rapide
- Pourquoi préférer souvent `===` à `==` ? **Pour éviter les conversions implicites surprenantes**.
- Combien de fois le premier exemple s’exécute-t-il ? **Trois fois**.
- Quel risque existe si la condition d’un `while` ne devient jamais fausse ? **Une boucle infinie**.

## Cas d’usage pratique — déterminer l’accès à une formation
Un participant a un score de 72/100. Une règle simple peut afficher « Réussi » à partir de 50 et « Très bien » à partir de 80. Une boucle peut ensuite parcourir les participants pour afficher leur résultat.

**Mini-défi :** teste les scores 49, 50, 79 et 80. Les frontières sont-elles traitées comme prévu ? Ce sont souvent les valeurs limites qui révèlent une erreur.