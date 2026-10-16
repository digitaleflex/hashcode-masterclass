# RES-01 — Comprendre l’écosystème JavaScript

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Débutant  
**Référence pédagogique :** HashCode Masterclass JavaScript & TypeScript, séquence « Carte de l’écosystème »  
**Objectif :** distinguer le langage, son environnement d’exécution et les outils utilisés pour construire une application.

---


## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : aucun. À la fin, tu dois pouvoir expliquer avec tes propres mots le rôle du langage, du runtime, du gestionnaire de paquets et de l'outil de build.

**Mise en pratique :** Application : classe les outils d'un projet réel par rôle et justifie pourquoi ils ne sont pas interchangeables.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-01-javascript-syntaxe-essentielle.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. La carte mentale

Un projet JavaScript mobilise plusieurs éléments qui ont des rôles différents :

| Élément | Rôle | Exemple |
|---|---|---|
| Langage | Décrire le comportement du programme | JavaScript |
| Système de types | Décrire et vérifier certaines formes de données avant l’exécution | TypeScript |
| Environnement d’exécution (*runtime*) | Exécuter le code JavaScript et fournir des API | Navigateur, Node.js |
| Gestionnaire de paquets | Installer des dépendances et exécuter des scripts de projet | npm |
| Outil de développement/build | Servir le projet pendant le développement et préparer les fichiers de production | Vite |
| Bibliothèque d’interface | Fournir des outils pour construire des interfaces | React |
| Framework | Proposer une structure et des conventions plus larges pour une application | Next.js |

**À retenir :** ces éléments ne sont pas interchangeables. JavaScript est un langage ; Node.js est un runtime ; npm gère les paquets ; Vite est un outil de développement/build ; React est une bibliothèque ; Next.js est un framework basé sur React.

## 2. JavaScript : le langage

JavaScript permet d’écrire la logique d’un programme : variables, conditions, boucles, fonctions, tableaux et objets.

Exemple :

```js
const learner = "Amina";
console.log(`Bienvenue, ${learner} !`);
```

Résultat :

```text
Bienvenue, Amina !
```

Le code doit être exécuté par un environnement compatible avec JavaScript, par exemple un navigateur ou Node.js.

## 3. TypeScript : des informations de types en plus

TypeScript ajoute un système de types statiques à JavaScript. Il aide à repérer certaines incohérences avant l’exécution et est généralement transformé en JavaScript pour être exécuté.

```ts
const learner: string = "Amina";
console.log(learner);
```

L’annotation `: string` indique que `learner` doit être une chaîne de caractères.

**Attention :** les types ne remplacent ni les tests ni la validation des données reçues à l’exécution. Une API externe peut toujours envoyer une valeur inattendue.

## 4. Navigateur et Node.js : deux environnements différents

### Dans le navigateur

Le navigateur exécute JavaScript côté utilisateur et fournit des API adaptées aux pages web, par exemple le DOM, les événements et `fetch()`.

Exemple :

```js
document.querySelector("h1").textContent = "Bonjour";
```

Ce code suppose qu’un élément `h1` existe dans la page. L’objet `document` appartient à l’environnement navigateur.

### Dans Node.js

Node.js permet d’exécuter JavaScript hors du navigateur, notamment pour des scripts, des outils de développement et des serveurs.

```js
console.log("Exécuté avec Node.js");
```

Dans un terminal, avec Node.js installé :

```bash
node app.js
```

Le code qui utilise `document` ne fonctionne pas directement dans Node.js, car ce runtime ne fournit pas le DOM d’une page web par défaut.

## 5. npm : paquets et scripts

npm sert notamment à installer les dépendances d’un projet et à lancer les scripts définis dans `package.json`.

Commandes courantes :

```bash
npm install
npm install nom-du-paquet
npm run
```

- `npm install` installe les dépendances déclarées du projet.
- `npm install nom-du-paquet` ajoute généralement un paquet au projet.
- `npm run` liste les scripts disponibles.

Un script peut par exemple être déclaré dans `package.json` :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

Puis lancé avec :

```bash
npm run dev
npm run build
```

Les scripts exacts dépendent du projet.

## 6. Vite, React et Next.js

- **Vite** fournit un serveur de développement rapide et des outils de build.
- **React** est une bibliothèque pour construire des interfaces utilisateur à partir de composants.
- **Next.js** est un framework basé sur React qui fournit notamment une structure d’application et des fonctionnalités de routage et de rendu.

Ils peuvent être utilisés ensemble, mais ils ne remplissent pas le même rôle. Vite n’est pas un langage, React n’est pas un runtime et Next.js n’est pas un gestionnaire de paquets.

## 7. Comment ces éléments s’articulent-ils ?

Pour une application web typique :

1. Le développeur écrit le code en JavaScript ou TypeScript.
2. npm installe les dépendances et permet de lancer les scripts.
3. Vite ou un autre outil prépare et sert l’application.
4. Le navigateur exécute le JavaScript côté utilisateur.
5. Si l’application utilise React ou Next.js, ces outils structurent l’interface et l’application selon leur rôle.

Le détail varie selon l’architecture : tous les projets n’utilisent pas Vite, React ou Next.js.

## 8. Confusions fréquentes

| Confusion | Correction |
|---|---|
| « TypeScript remplace le navigateur. » | TypeScript ajoute des types ; le code final s’exécute dans un runtime adapté. |
| « npm exécute le langage. » | npm gère des paquets et lance des scripts ; il s’appuie sur l’environnement installé. |
| « Node.js est un framework front-end. » | Node.js est un runtime JavaScript hors navigateur. |
| « Vite et React font la même chose. » | Vite outille le développement/build ; React construit l’interface. |
| « Le code qui fonctionne dans le navigateur fonctionne partout. » | Il peut dépendre d’API disponibles uniquement dans un environnement. |
| « TypeScript garantit que les données reçues sont valides. » | Le typage statique ne remplace pas la validation à l’exécution. |

## 9. Mini-exercice

Associe chaque élément à son rôle :

1. JavaScript
2. Node.js
3. npm
4. Vite
5. React
6. Next.js
7. TypeScript

Rôles possibles :

- A. Bibliothèque d’interface utilisateur
- B. Langage de programmation
- C. Framework basé sur React
- D. Gestionnaire de paquets et de scripts
- E. Système de types statiques pour JavaScript
- F. Runtime JavaScript hors navigateur
- G. Outil de développement et de build

### Correction

1 → B · 2 → F · 3 → D · 4 → G · 5 → A · 6 → C · 7 → E

## 10. L’essentiel à retenir

- JavaScript est le langage qui décrit la logique du programme.
- TypeScript ajoute des informations de types et aide à détecter certaines erreurs avant l’exécution.
- Le navigateur et Node.js sont des environnements d’exécution différents.
- npm gère les paquets et les scripts ; Vite aide au développement et au build.
- React et Next.js structurent la construction d’interfaces et d’applications, à des niveaux différents.

---

**Suite recommandée :** `RES-02 — Préparer son environnement de développement`.

**HashCode Academy — LEARN · BUILD · BELONG**
