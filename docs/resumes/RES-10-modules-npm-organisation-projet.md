# RES-10 — Modules JavaScript, npm et organisation du projet

> **HashCode Academy · HashCode Masterclass**  
> Série de fiches de révision JavaScript / TypeScript  
> Objectif : découper un programme en modules, gérer ses dépendances et structurer un projet maintenable.


## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : terminal, fichiers JavaScript et fonctions. À la fin, tu dois pouvoir exporter/importer une fonction, lire package.json et expliquer le rôle du lockfile.

**Mise en pratique :** Application : sépare une fonction utilitaire dans un module, importe-la dans un autre fichier et vérifie que l'environnement ESM est correctement configuré.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-14-modules-esm-import-export.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Pourquoi organiser le code en modules ?

Un petit script peut tenir dans un seul fichier. Quand un projet grandit, regrouper toutes les fonctionnalités dans un seul fichier rend le code plus difficile à lire, tester et faire évoluer.

Les modules permettent de :
- séparer les responsabilités ;
- réutiliser du code entre plusieurs fichiers ;
- définir explicitement ce qu'un fichier expose ;
- éviter de multiplier les variables globales ;
- rendre les dépendances plus visibles.

Exemple d'organisation :

```text
mon-projet/
├── package.json
├── package-lock.json
├── src/
│   ├── index.js
│   ├── math.js
│   └── format.js
└── tests/
    └── math.test.js
```

La structure exacte dépend du projet. L'objectif est de séparer les responsabilités sans créer des fichiers minuscules qui compliquent inutilement la navigation.

## 2. Exporter et importer avec les modules ES (ESM)

Les modules ES sont le système standard moderne pour partager du code JavaScript entre fichiers. Ils utilisent `export` et `import`.

### Export nommé

Dans `src/math.js` :

```js
export function additionner(a, b) {
  return a + b;
}

export const PI_APPROX = 3.14159;
```

Dans `src/index.js` :

```js
import { additionner, PI_APPROX } from "./math.js";

console.log(additionner(2, 3)); // 5
console.log(PI_APPROX);
```

Les noms importés doivent correspondre aux exports nommés. Le chemin relatif `./math.js` indique un fichier situé à côté du module courant.

### Export par défaut

Dans `src/format.js` :

```js
export default function formaterNom(nom) {
  return nom.trim().toUpperCase();
}
```

Import :

```js
import formaterNom from "./format.js";

console.log(formaterNom("  awa ")); // "AWA"
```

Un module peut avoir un seul export par défaut. L'import par défaut choisit son propre nom local.

### Combiner les exports

```js
// format.js
export const PREFIXE = "HashCode";

export default function formater(nom) {
  return `${PREFIXE} : ${nom}`;
}
```

```js
import formater, { PREFIXE } from "./format.js";
```

Convention pratique : utilise les exports nommés quand un module expose plusieurs fonctions ou constantes liées ; l'export par défaut convient à une valeur ou fonctionnalité principale. La cohérence au sein d'un projet est plus importante qu'une règle absolue.

## 3. Attention aux chemins d'import

Les chemins relatifs commencent par `./` ou `../`.

```js
import { calculerTotal } from "./cart.js";
import { validerNom } from "../utils/validation.js";
```

- `./` : depuis le dossier courant ;
- `../` : remonter d'un dossier ;
- un chemin comme `node:fs` désigne un module intégré de Node.js ;
- un nom comme `zod` désigne généralement un paquet externe résolu par l'environnement ou l'outil de construction.

Dans les modules ES natifs exécutés directement par le navigateur ou Node.js, il est généralement nécessaire d'écrire l'extension du fichier relatif, par exemple `./cart.js`. Certains outils de construction acceptent d'autres conventions : suis celles de l'environnement utilisé.

## 4. ESM et CommonJS

Node.js prend en charge deux systèmes de modules historiques et modernes :

| ESM | CommonJS |
|---|---|
| `import` / `export` | `require()` / `module.exports` |
| Standard JavaScript moderne | Système historique très utilisé dans Node.js |
| `import { x } from "./x.js"` | `const { x } = require("./x")` |

Exemple CommonJS :

```js
// math.cjs
function additionner(a, b) {
  return a + b;
}

module.exports = { additionner };
```

```js
// index.cjs
const { additionner } = require("./math.cjs");
console.log(additionner(2, 3));
```

Ne mélange pas arbitrairement les deux systèmes. Le comportement exact dépend du format de fichier, de la configuration du paquet et de la version de Node.js. Pour un nouveau projet moderne, choisis une convention explicite et conserve-la.

## 5. Déclarer le type de module dans Node.js

Dans un projet Node.js utilisant ESM, on peut déclarer le format dans `package.json` :

```json
{
  "name": "masterclass-demo",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/index.js"
  }
}
```

Avec `"type": "module"`, les fichiers `.js` de ce paquet sont interprétés comme des modules ES, sous réserve des règles de Node.js. Les fichiers `.cjs` restent CommonJS et les fichiers `.mjs` sont explicitement ESM.

## 6. Qu'est-ce que npm ?

**npm** est un gestionnaire de paquets couramment utilisé avec Node.js. Il permet notamment de :
- déclarer les dépendances d'un projet ;
- installer des bibliothèques ;
- exécuter des scripts ;
- maintenir un fichier de verrouillage des versions résolues.

Vérifier les outils :

```bash
node --version
npm --version
```

Initialiser un projet :

```bash
mkdir masterclass-demo
cd masterclass-demo
npm init -y
```

La commande crée un fichier `package.json` de base. Tu peux ensuite le modifier pour définir le nom, le type de module, les scripts et les dépendances.

## 7. Comprendre `package.json`

Exemple minimal :

```json
{
  "name": "hashcode-masterclass-demo",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "check": "node --check src/index.js"
  }
}
```

Champs importants :
- `name` : nom du paquet ;
- `version` : version du projet ;
- `private` : empêche la publication accidentelle sur le registre npm ;
- `type` : influence l'interprétation des fichiers `.js` par Node.js ;
- `scripts` : commandes nommées exécutables avec npm ;
- `dependencies` : paquets nécessaires à l'exécution ;
- `devDependencies` : paquets utiles au développement, aux tests ou à la construction.

Les scripts s'exécutent avec :

```bash
npm run start
npm run check
```

Le script spécial `start` peut aussi s'exécuter avec `npm start`.

## 8. Installer et retirer des dépendances

Installer un paquet utilisé par l'application :

```bash
npm install nom-du-paquet
```

Installer un outil de développement :

```bash
npm install --save-dev nom-de-loutil
```

Retirer une dépendance :

```bash
npm uninstall nom-du-paquet
```

Les commandes modifient généralement `package.json` et le fichier de verrouillage. Examine les changements avant de les valider dans Git.

N'installe pas un paquet uniquement parce que son nom semble approprié : vérifie sa documentation, sa maintenance, sa licence, sa compatibilité et ses risques de sécurité.

## 9. `package-lock.json` et installations reproductibles

`package-lock.json` enregistre l'arbre de dépendances résolu par npm. Il contribue à rendre les installations cohérentes entre machines et environnements.

- Dans une application, versionne généralement `package-lock.json` avec le code.
- Pour une installation reproductible à partir du verrou, utilise `npm ci` dans un environnement où le fichier de verrouillage est présent et cohérent avec `package.json`.
- `npm install` peut mettre à jour le verrouillage selon les changements de dépendances.
- Ne modifie pas manuellement le fichier de verrouillage sans raison précise.

```bash
npm ci
```

`npm ci` est particulièrement utile en intégration continue. Il supprime le dossier de dépendances existant avant l'installation et échoue si le verrouillage est incompatible avec le manifeste.

## 10. Installer les dépendances et lancer le projet

Flux de travail classique :

```bash
# Installer les dépendances déclarées
npm install

# Exécuter le script start
npm start

# Exécuter un script nommé test, s'il existe
npm test
```

Attention : `npm test` ne fonctionne que si un script `test` est défini et correctement configuré. npm n'invente pas la suite de tests.

## 11. Exemple complet en deux modules

Structure :

```text
masterclass-demo/
├── package.json
└── src/
    ├── math.js
    └── index.js
```

`package.json` :

```json
{
  "name": "masterclass-demo",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node src/index.js"
  }
}
```

`src/math.js` :

```js
export function calculerTotal(prix, quantite) {
  return prix * quantite;
}
```

`src/index.js` :

```js
import { calculerTotal } from "./math.js";

const total = calculerTotal(2500, 3);
console.log(`Total : ${total} FCFA`);
```

Lancer :

```bash
npm start
```

Résultat :

```text
Total : 7500 FCFA
```

## 12. Variables d'environnement et secrets

Les configurations peuvent dépendre de l'environnement : URL d'une API, mode de développement ou identifiants de service. Évite de coder en dur les secrets dans le dépôt.

Avec Node.js, les variables d'environnement sont accessibles via `process.env` :

```js
const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error("La variable API_URL est obligatoire.");
}
```

Bonnes pratiques :
- ne committe jamais les mots de passe, clés privées ou jetons d'accès ;
- utilise un fichier local comme `.env` uniquement avec une stratégie adaptée au projet ;
- ajoute les fichiers contenant des secrets au `.gitignore` ;
- fournis un fichier `.env.example` avec des noms de variables et des valeurs fictives ;
- en production, privilégie le mécanisme de configuration sécurisé de la plateforme.

Node.js ne charge pas automatiquement toutes les configurations `.env` dans tous les contextes : le mécanisme dépend de la version, des options utilisées et des bibliothèques choisies.

## 13. Organisation recommandée pour un petit projet

```text
src/
├── index.js        # point d'entrée
├── services/       # logique métier et accès externes
├── utils/          # fonctions utilitaires réutilisables
└── models/         # structures ou transformations de données
tests/              # tests automatisés
README.md           # instructions d'installation et d'utilisation
package.json        # scripts et dépendances
package-lock.json   # verrouillage npm
.gitignore          # fichiers à exclure de Git
```

N'adopte cette structure que si elle aide le projet. Pour un script de quelques lignes, un seul fichier peut suffire. Pour une application plus importante, ajoute des dossiers par responsabilité et définis des conventions d'import.

## 14. Atelier — créer un mini module de panier

**Étape 1 —** Crée `src/cart.js` :

```js
export function calculerTotal(items) {
  return items.reduce((total, item) => {
    return total + item.prix * item.quantite;
  }, 0);
}
```

**Étape 2 —** Crée `src/index.js` :

```js
import { calculerTotal } from "./cart.js";

const panier = [
  { nom: "Cahier", prix: 500, quantite: 2 },
  { nom: "Stylo", prix: 200, quantite: 3 },
];

console.log(calculerTotal(panier)); // 1600
```

**Défis :**
1. Ajoute une fonction exportée `compterArticles(items)`.
2. Ajoute une validation pour refuser un prix négatif ou une quantité invalide.
3. Définis un script `start` dans `package.json`.
4. Ajoute un script de test adapté à l'outil choisi.
5. Explique pourquoi il faut conserver le fichier de verrouillage npm dans un projet d'équipe.

## 15. Exercices avec corrigés

### Exercice A — choisir l'import

Un module exporte `export function saluer() {}`. Comment l'importer par son nom ?

**Corrigé :**

```js
import { saluer } from "./saluer.js";
```

### Exercice B — comprendre npm

À quoi sert principalement `package-lock.json` ?

**Corrigé :** il enregistre l'arbre de dépendances résolu afin de rendre les installations plus reproductibles. Il doit rester cohérent avec `package.json`.

### Exercice C — script manquant

Pourquoi `npm test` peut-il échouer dans un projet fraîchement initialisé ?

**Corrigé :** aucun script `test` n'a peut-être été défini, ou l'outil de test référencé n'est pas installé/configuré. Ajoute le script et configure l'outil de test voulu.

## 16. À retenir

- Les modules séparent le code et exposent explicitement des fonctionnalités.
- ESM utilise `import` et `export`; CommonJS utilise `require` et `module.exports`.
- `package.json` décrit le projet, ses scripts et ses dépendances.
- `npm install` installe les dépendances ; `npm ci` réalise une installation reproductible à partir du verrouillage.
- Conserve `package-lock.json` dans un projet npm versionné.
- N'expose jamais de secrets dans le dépôt.
- Structure le projet selon ses besoins réels plutôt que par habitude.

## Suite de la série

- Précédent : [RES-09 — Asynchronisme, promesses et async/await](./RES-09-async-promises-async-await.md)
- Suivant : **RES-11 — DOM, événements et interfaces web**

---

HashCode Academy · **LEARN · BUILD · BELONG**
