# CS-02 — Tableaux, objets et méthodes courantes

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 06 tableaux et methodes fonctionnelles](../resumes/RES-06-tableaux-et-methodes-fonctionnelles.md) · [RES 07 objets destructuration spread](../resumes/RES-07-objets-destructuration-spread.md)

**Application pratique :** Vérifie pour chaque méthode si elle renvoie un nouveau tableau, une valeur ou modifie le tableau initial.

## Méthodes de tableaux
~~~js
const numbers = [1, 2, 3, 4];

numbers.map(n => n * 2);               // transforme chaque élément
numbers.filter(n => n % 2 === 0);      // conserve certains éléments
numbers.find(n => n > 2);              // premier élément correspondant
numbers.some(n => n < 0);              // au moins un ?
numbers.every(n => n > 0);             // tous ?
numbers.reduce((sum, n) => sum + n, 0);// accumule
numbers.includes(3);                   // contient ?
~~~

- `map` transforme ; `filter` sélectionne ; `find` renvoie un élément ou undefined.
- `forEach` sert à effectuer une action, pas à construire un nouveau tableau.
- `sort` modifie le tableau d'origine. Pour un tri numérique : `[...numbers].sort((a, b) => a - b)`.
- `slice` copie une portion ; `splice` modifie le tableau.
- `push` ajoute à la fin ; `pop` retire le dernier élément.

## Objets
~~~js
const user = { id: "u1", name: "Amina", active: true };
const { name, ...rest } = user;
const copy = { ...user, active: false };
~~~
Le spread réalise une copie superficielle. Pour des objets imbriqués, choisissez une stratégie de copie adaptée.

## Immutabilité et mise à jour
~~~js
const updated = users.map(user =>
  user.id === targetId ? { ...user, active: false } : user
);
~~~

## Pièges courants
- `sort()` sans comparateur trie les valeurs comme des chaînes.
- `find()` peut renvoyer undefined.
- `reduce()` doit généralement avoir une valeur initiale explicite.
- Une égalité entre objets compare leur identité, pas leur contenu.
- Un objet déclaré const peut encore voir ses propriétés mutées.

## Choisir rapidement
| Besoin | Méthode |
|---|---|
| Transformer | map |
| Filtrer | filter |
| Trouver un élément | find |
| Tester au moins un | some |
| Tester tous | every |
| Calculer une valeur agrégée | reduce |
