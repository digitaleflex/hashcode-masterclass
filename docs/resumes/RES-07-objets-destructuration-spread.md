# RES-07 — Objets, déstructuration et opérateur spread

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : représenter des données structurées, accéder à leurs propriétés et créer des copies ou transformations explicites.

## 1. Comprendre les objets

Un objet JavaScript regroupe des données sous forme de paires **clé–valeur**. Il peut aussi contenir des fonctions, appelées méthodes lorsqu'elles sont définies comme propriétés d'un objet.

```js
const utilisateur = {
  nom: "Awa",
  age: 24,
  actif: true,
};

console.log(utilisateur.nom);      // "Awa"
console.log(utilisateur["age"]);   // 24
```

Utilise la notation pointée (`objet.propriete`) quand le nom de propriété est connu. Utilise les crochets (`objet[cle]`) quand la clé est stockée dans une variable ou construite dynamiquement.

```js
const cle = "nom";
console.log(utilisateur[cle]); // "Awa"
```

## 2. Ajouter, modifier et supprimer une propriété

```js
const produit = {
  nom: "Clavier",
  prix: 12000,
};

produit.disponible = true; // ajoute une propriété
produit.prix = 13500;      // modifie une propriété

delete produit.disponible; // supprime la propriété

console.log(produit); // { nom: "Clavier", prix: 13500 }
```

Attention : `const` empêche de réaffecter la variable, mais ne rend pas automatiquement l'objet immuable. Ses propriétés peuvent encore être modifiées.

## 3. Méthodes d'objet et `this`

```js
const compte = {
  nom: "Awa",
  afficherNom() {
    return this.nom;
  },
};

console.log(compte.afficherNom()); // "Awa"
```

Dans une méthode appelée comme `compte.afficherNom()`, `this` fait référence à l'objet utilisé pour l'appel. La valeur de `this` dépend du mode d'appel : ne suppose pas qu'elle sera identique si la méthode est extraite dans une variable ou passée comme callback.

Les fonctions fléchées ne possèdent pas leur propre `this`. Pour une méthode d'objet qui doit utiliser l'objet appelant, une méthode classique est souvent le choix le plus simple.

## 4. Propriétés calculées

Tu peux calculer le nom d'une propriété au moment de créer l'objet grâce aux crochets.

```js
const champ = "email";

const profil = {
  nom: "Sami",
  [champ]: "sami@example.com",
};

console.log(profil.email); // "sami@example.com"
```

Cette syntaxe est pratique quand tu construis des objets à partir de données dynamiques.

## 5. Déstructuration d'objet

La déstructuration (*destructuring*) permet d'extraire des propriétés d'un objet dans des variables.

```js
const utilisateur = {
  nom: "Awa",
  age: 24,
  ville: "Cotonou",
};

const { nom, age } = utilisateur;

console.log(nom); // "Awa"
console.log(age); // 24
```

### Renommer une variable

```js
const { nom: nomUtilisateur } = utilisateur;
console.log(nomUtilisateur); // "Awa"
```

Dans cet exemple, `nom` est la propriété source et `nomUtilisateur` est le nom de la variable créée.

### Valeurs par défaut

```js
const options = { theme: "sombre" };
const { theme, langue = "fr" } = options;

console.log(theme);  // "sombre"
console.log(langue); // "fr"
```

La valeur par défaut est utilisée si la propriété vaut `undefined` ou est absente. Une valeur explicite `null` ne déclenche pas cette valeur par défaut.

### Déstructurer dans les paramètres d'une fonction

```js
function afficherProfil({ nom, ville }) {
  return `${nom} habite à ${ville}`;
}

console.log(afficherProfil({ nom: "Awa", ville: "Cotonou" }));
```

Le paramètre doit recevoir un objet qui contient les propriétés attendues. En TypeScript, on peut décrire précisément la forme de cet objet.

## 6. Déstructuration des tableaux

Les tableaux sont déstructurés selon leur position, contrairement aux objets qui utilisent les noms de propriétés.

```js
const couleurs = ["noir", "blanc", "vert"];

const [premiere, deuxieme] = couleurs;

console.log(premiere); // "noir"
console.log(deuxieme); // "blanc"
```

Ignorer une position :

```js
const [premier, , troisieme] = couleurs;
console.log(troisieme); // "vert"
```

Échanger deux variables :

```js
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 2 1
```

## 7. L'opérateur spread `...`

L'opérateur spread (*étalement*) développe les éléments d'un itérable, comme un tableau, ou les propriétés propres énumérables d'un objet dans un nouvel objet.

### Copier et étendre un tableau

```js
const base = ["HTML", "CSS"];
const complet = [...base, "JavaScript"];

console.log(complet); // ["HTML", "CSS", "JavaScript"]
```

### Copier et mettre à jour un objet

```js
const utilisateur = {
  nom: "Awa",
  ville: "Cotonou",
};

const utilisateurMisAJour = {
  ...utilisateur,
  ville: "Porto-Novo",
  actif: true,
};

console.log(utilisateurMisAJour);
// { nom: "Awa", ville: "Porto-Novo", actif: true }
```

Lorsqu'une clé apparaît plusieurs fois, la dernière valeur définie l'emporte. Ici, `ville` devient `"Porto-Novo"`.

**Important :** spread crée une copie superficielle. Les objets imbriqués ne sont pas clonés en profondeur.

## 8. L'opérateur rest `...`

La même syntaxe `...` est utilisée pour collecter les éléments restants. On parle alors de **rest** (*reste*), et non de spread.

### Récupérer les propriétés restantes

```js
const utilisateur = {
  id: 7,
  nom: "Awa",
  email: "awa@example.com",
};

const { id, ...informationsPubliques } = utilisateur;

console.log(id); // 7
console.log(informationsPubliques);
// { nom: "Awa", email: "awa@example.com" }
```

### Paramètres rest d'une fonction

```js
function additionner(...nombres) {
  return nombres.reduce((total, nombre) => total + nombre, 0);
}

console.log(additionner(2, 3, 5)); // 10
```

À retenir :
- **Spread** étale des éléments ou des propriétés.
- **Rest** rassemble les éléments ou propriétés restants.
- Dans une déstructuration ou une liste de paramètres, rest doit se trouver à la position autorisée, généralement à la fin.

## 9. Copie superficielle et données imbriquées

```js
const original = {
  nom: "Awa",
  preferences: {
    theme: "clair",
  },
};

const copie = { ...original };
copie.nom = "Sami";
copie.preferences.theme = "sombre";

console.log(original.nom); // "Awa"
console.log(original.preferences.theme); // "sombre"
```

Pourquoi ? La propriété `preferences` pointe encore vers le même objet imbriqué dans les deux structures. Modifier cet objet affecte donc les deux références.

Pour modifier une propriété imbriquée sans changer la référence d'origine :

```js
const miseAJour = {
  ...original,
  preferences: {
    ...original.preferences,
    theme: "sombre",
  },
};
```

Pour des données plus profondément imbriquées, il faut copier chaque niveau concerné ou choisir une stratégie de copie profonde adaptée. Ne suppose pas que spread réalise une copie profonde.

## 10. Vérifier les propriétés et gérer les valeurs manquantes

```js
const profil = { nom: "Sami" };

console.log("nom" in profil);  // true
console.log("email" in profil); // false
console.log(profil.email); // undefined
```

- `"cle" in objet` vérifie si la propriété existe dans l'objet ou sa chaîne de prototypes.
- `Object.hasOwn(objet, "cle")` vérifie si l'objet possède directement cette propriété.
- Une propriété absente produit généralement `undefined` lors de sa lecture.

Pour une valeur de remplacement, choisis l'opérateur selon la règle attendue :

```js
const nom1 = profil.nom || "Visiteur";
const nom2 = profil.nom ?? "Visiteur";
```

- `||` utilise la valeur de secours si la valeur de gauche est falsy, notamment `""`, `0`, `false`, `null` ou `undefined`.
- `??` utilise la valeur de secours uniquement si la valeur de gauche est `null` ou `undefined`.

Exemple : `0 || 10` vaut `10`, tandis que `0 ?? 10` vaut `0`.

## 11. TypeScript : décrire la forme d'un objet

```ts
type User = {
  id: number;
  name: string;
  email?: string;
  active: boolean;
};

const user: User = {
  id: 1,
  name: "Awa",
  active: true,
};
```

- `id: number` et `name: string` sont obligatoires.
- `email?: string` est optionnel ; sa lecture peut produire `undefined`.
- TypeScript vérifie que les objets utilisés correspondent au type déclaré.

Une interface convient également :

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
}
```

Les types et interfaces sont des outils de vérification statique. Ils ne valident pas automatiquement les données externes à l'exécution.

## 12. Atelier — mettre à jour un profil sans mutation directe

```js
const profil = {
  id: "u-1",
  nom: "Awa",
  ville: "Cotonou",
  preferences: {
    theme: "clair",
    notifications: true,
  },
};

const profilMisAJour = {
  ...profil,
  ville: "Abomey-Calavi",
  preferences: {
    ...profil.preferences,
    theme: "sombre",
  },
};

console.log(profil.ville); // "Cotonou"
console.log(profil.preferences.theme); // "clair"
console.log(profilMisAJour.ville); // "Abomey-Calavi"
console.log(profilMisAJour.preferences.theme); // "sombre"
```

**Défis :**
1. Extrais `nom` et `ville` avec la déstructuration.
2. Crée un objet qui ajoute une propriété `role: "member"`.
3. Retire `id` de l'objet en utilisant rest.
4. Écris une fonction qui reçoit un objet `User` et renvoie une chaîne contenant son nom.
5. Explique pourquoi copier seulement `{ ...profil }` ne suffit pas à isoler `preferences`.

## 13. Exercices avec corrigés

### Exercice A — déstructuration et renommage

```js
const article = { title: "Guide JS", price: 5000 };
```

Extrais `title` dans une variable appelée `titre`.

**Corrigé :**

```js
const { title: titre } = article;
console.log(titre); // "Guide JS"
```

### Exercice B — spread et priorité des clés

```js
const a = { couleur: "vert", taille: "M" };
const b = { ...a, couleur: "jaune" };
```

**Corrigé :** `b` vaut `{ couleur: "jaune", taille: "M" }`, car la dernière propriété `couleur` remplace la précédente.

### Exercice C — distinguer `||` et `??`

Que renvoient `0 || 5` et `0 ?? 5` ?

**Corrigé :** respectivement `5` et `0`. `||` réagit aux valeurs falsy ; `??` seulement à `null` et `undefined`.

## 14. À retenir

- Les objets regroupent des propriétés accessibles par point ou crochets.
- La déstructuration extrait les propriétés ou les positions dans des variables.
- Spread copie/étale ; rest rassemble ce qui reste.
- `const` n'empêche pas de modifier les propriétés d'un objet.
- Spread et les copies de tableaux sont superficiels.
- `||` et `??` ne gèrent pas les valeurs manquantes de la même façon.
- TypeScript aide à décrire la forme attendue des objets, mais ne remplace pas la validation à l'exécution.

## Suite de la série

- Précédent : [RES-06 — Tableaux et méthodes fonctionnelles](./RES-06-tableaux-et-methodes-fonctionnelles.md)
- Suivant : **RES-08 — Gestion des erreurs et débogage**

---

HashCode Academy · **LEARN · BUILD · BELONG**
