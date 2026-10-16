# RES-02 — Préparer son environnement de développement

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Débutant  
**Référence pédagogique :** HashCode Masterclass JavaScript & TypeScript, séquence « Installation & outils »  
**Objectif :** vérifier les outils essentiels, organiser un dossier de travail, exécuter un fichier JavaScript et commencer à diagnostiquer les erreurs.

---



## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : naviguer dans les dossiers et utiliser un éditeur. Tu dois pouvoir vérifier Node.js/npm et exécuter un fichier depuis le bon répertoire.

**Mise en pratique :** Crée un dossier propre, lance le programme, provoque une erreur de chemin et diagnostique-la.

**Mémo associé :** [CS-08-npm-git-projet.md](../cheatsheets/CS-08-npm-git-projet.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur et prédis le résultat. Si tu ne peux pas expliquer pourquoi le résultat change, révise la notion avant de poursuivre.

## Repères d'apprentissage

**Prérequis et maîtrise attendue :** Prérequis : savoir naviguer dans les dossiers et utiliser un éditeur de texte. À la fin, tu dois pouvoir vérifier Node.js/npm et exécuter un fichier JavaScript depuis le bon répertoire.

**Mise en pratique :** Application : crée un dossier propre, lance le programme, provoque volontairement une erreur de chemin et diagnostique-la à partir du message.

**Mémo associé :** [Ouvrir la cheat sheet correspondante](../cheatsheets/CS-08-npm-git-projet.md)

**Méthode conseillée :** lis une section, ferme la fiche, reformule la règle sans la recopier, exécute l'exemple, puis change une valeur pour voir si tu peux prédire le nouveau résultat. Si tu ne peux pas expliquer pourquoi le résultat change, reviens à la notion avant de passer à la suite.

## 1. Qu’est-ce qu’un environnement de développement ?

Un environnement de développement regroupe les outils nécessaires pour écrire, exécuter et vérifier un programme.

Pour démarrer avec JavaScript, on utilise généralement :

| Outil | Rôle |
|---|---|
| Éditeur de code | Écrire et modifier les fichiers, par exemple VS Code |
| Terminal | Saisir des commandes et lire les résultats |
| Runtime JavaScript | Exécuter du code JavaScript, par exemple Node.js |
| npm | Installer des paquets et exécuter les scripts du projet |
| Navigateur | Exécuter du JavaScript dans une page web et inspecter son comportement |
| Git (recommandé) | Suivre les modifications du code dans le temps |

Tous les projets n’ont pas besoin des mêmes outils. Pour les premiers exercices, un éditeur, un terminal et un environnement JavaScript suffisent.

## 2. Vérifier l’installation

Ouvre un terminal. Selon le système, il peut s’agir du terminal intégré à VS Code, de PowerShell, de Windows Terminal ou d’un terminal Linux/macOS.

Vérifie Node.js :

```bash
node --version
```

Vérifie npm :

```bash
npm --version
```

Ces commandes affichent les versions installées, par exemple `v22.x.x` pour Node.js. Le numéro exact dépend de l’installation.

Pour vérifier que Node.js exécute du code :

```bash
node -e "console.log('Environnement prêt')"
```

Résultat attendu :

```text
Environnement prêt
```

**Important :** npm est généralement installé avec Node.js. Si une commande n’est pas reconnue, Node.js peut être absent, mal installé ou ne pas être accessible dans la variable d’environnement `PATH`. Ferme et rouvre le terminal après une installation avant de refaire le test.

## 3. Créer un dossier de travail

Choisis un emplacement pour tes exercices, puis crée un dossier de projet.

Sur Windows avec PowerShell :

```powershell
mkdir js-fondamentaux
cd js-fondamentaux
```

Sur Linux ou macOS :

```bash
mkdir js-fondamentaux
cd js-fondamentaux
```

Les commandes sont identiques dans les deux environnements pour cet exemple.

Vérifie le dossier courant :

- PowerShell : `Get-Location`
- Linux/macOS : `pwd`

Le terminal travaille dans un dossier à la fois. Une commande peut échouer si elle est exécutée depuis le mauvais emplacement.

## 4. Créer le premier fichier JavaScript

Dans le dossier du projet, crée un fichier nommé `app.js`.

Contenu :

```js
const learner = "HashCode";
console.log("Bienvenue chez " + learner);
```

Enregistre le fichier. Puis, dans le terminal situé dans le même dossier, exécute :

```bash
node app.js
```

Résultat attendu :

```text
Bienvenue chez HashCode
```

### Ce qui se passe

1. Le terminal reçoit la commande `node app.js`.
2. Node.js cherche le fichier dans le dossier courant.
3. Le runtime exécute le code JavaScript.
4. `console.log()` écrit le résultat dans le terminal.

Si le fichier se trouve dans un autre dossier, il faut se déplacer dans ce dossier ou fournir le chemin correct.

## 5. Comprendre les fichiers d’un projet

Un projet simple peut ressembler à ceci :

```text
js-fondamentaux/
├── app.js
└── README.md
```

- `app.js` contient le code JavaScript.
- `README.md` peut expliquer le but du projet et la façon de l’exécuter.

Un projet utilisant npm contient généralement aussi un fichier `package.json`. Il décrit notamment le projet, ses dépendances et ses scripts.

Pour initialiser un projet npm simple :

```bash
npm init -y
```

Cette commande crée un `package.json` avec des valeurs par défaut. Elle n’installe pas automatiquement un framework et n’est pas nécessaire pour exécuter un simple fichier `app.js` avec Node.js.

Exemple de script qu’on peut ajouter dans `package.json` :

```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

On peut alors lancer :

```bash
npm run start
```

Le contenu exact de `package.json` dépend du projet. Si le fichier existe déjà, évite de le remplacer par cet exemple minimal.

## 6. Lire les erreurs sans paniquer

Une erreur est une information de diagnostic. Lis-la avant de modifier le code au hasard.

### Cas A — Le fichier n’existe pas à cet emplacement

Exemple de message possible :

```text
Error: Cannot find module '.../app.js'
```

Vérifie :
- le nom exact du fichier ;
- son extension ;
- le dossier courant du terminal ;
- le chemin fourni à la commande.

### Cas B — Erreur de syntaxe

Code incorrect :

```js
console.log("Bonjour"
```

La parenthèse fermante manque. Le moteur signale une erreur de syntaxe au lieu d’exécuter normalement le fichier.

Correction :

```js
console.log("Bonjour");
```

### Cas C — Erreur pendant l’exécution

```js
console.log(userName);
```

Si aucune variable `userName` n’a été déclarée dans la portée accessible, JavaScript peut signaler une `ReferenceError`.

Avant de corriger, identifie le nom mentionné dans le message et vérifie où il est déclaré et utilisé.

### Méthode de diagnostic en cinq étapes

1. Lis le type et le texte de l’erreur.
2. Repère le fichier et la ligne indiqués, si disponibles.
3. Vérifie les noms, les chemins, les parenthèses, les guillemets et les accolades.
4. Corrige une cause à la fois.
5. Relance le programme et vérifie son résultat.

Une erreur n’indique pas toujours directement la cause profonde, mais elle fournit un point de départ utile.

## 7. Prédire avant d’exécuter

Lire le code et prédire son résultat développe le raisonnement.

Considère :

```js
const price = 1500;
const quantity = 3;
console.log(price * quantity);
```

Avant de lancer le fichier, calcule le résultat attendu. Puis exécute le code et compare.

Résultat attendu :

```text
4500
```

Si le résultat diffère de ta prédiction, vérifie les valeurs, les opérations et l’ordre d’exécution.

## 8. Erreurs fréquentes de débutant

| Problème | Vérification à faire |
|---|---|
| `node` n’est pas reconnu | Vérifier l’installation de Node.js et le `PATH`, puis rouvrir le terminal |
| `npm` n’est pas reconnu | Vérifier Node.js/npm et l’environnement du terminal |
| Le fichier est introuvable | Vérifier le dossier courant, le nom et l’extension |
| Le programme ne produit rien | Vérifier si le code affiche quelque chose et si le fichier exécuté est le bon |
| Le résultat est inattendu | Prédire la sortie, vérifier les valeurs et les opérations |
| Le code contient une erreur de syntaxe | Examiner les parenthèses, guillemets, accolades et séparateurs |
| Une commande npm échoue | Lire le message complet et vérifier le dossier ainsi que les scripts déclarés |

**Bonne pratique :** ne copie pas aveuglément une commande trouvée en ligne. Comprends son rôle, son répertoire d’exécution et ses effets avant de la lancer.

## 9. Mini-exercice pratique

Crée un dossier `premier-programme`, puis un fichier `app.js`.

Le programme doit :

1. déclarer une variable `name` contenant ton prénom ;
2. déclarer une variable `goal` contenant ce que tu veux apprendre ;
3. afficher un message qui contient les deux valeurs ;
4. être exécuté depuis le terminal avec Node.js.

Point de départ :

```js
const name = "Ton prénom";
const goal = "JavaScript";

// TODO : afficher un message de bienvenue.
```

### Correction possible

```js
const name = "Amina";
const goal = "JavaScript";

console.log(`Bonjour ${name}, je veux apprendre ${goal}.`);
```

Exécution :

```bash
node app.js
```

Résultat :

```text
Bonjour Amina, je veux apprendre JavaScript.
```

### Critères de réussite

- Le fichier est enregistré sous le nom `app.js`.
- Le terminal est placé dans le bon dossier.
- La commande s’exécute sans erreur.
- Le message affiché contient les deux valeurs attendues.
- Le participant peut expliquer le rôle de `node` et de `console.log()`.

## 10. L’essentiel à retenir

- Le terminal permet d’exécuter des commandes et d’observer leurs résultats.
- Node.js exécute JavaScript hors du navigateur.
- `node --version` et `npm --version` vérifient les versions disponibles.
- Un fichier JavaScript simple peut être exécuté avec `node app.js`.
- `package.json` décrit notamment les scripts et dépendances d’un projet npm.
- Une erreur doit être lue, localisée, comprise puis vérifiée après correction.

---

**Fiche précédente :** [RES-01 — Comprendre l’écosystème JavaScript](RES-01-ecosysteme-javascript.md)  
**Suite recommandée :** `RES-03 — Variables et types JavaScript`.

**HashCode Academy — LEARN · BUILD · BELONG**
