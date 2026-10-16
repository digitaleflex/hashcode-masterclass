# RES-01 — Écosystème JavaScript

**Parcours :** HashCode Masterclass · **Domaine :** JavaScript · **Niveau :** Débutant

## L’idée essentielle
JavaScript est un **langage**. Pour exécuter du code, il faut un **environnement d’exécution** (*runtime*), par exemple un navigateur ou Node.js. Les autres outils ont des rôles différents : ne les confonds pas.

## Les éléments à distinguer

| Élément | Rôle | Exemple |
|---|---|---|
| JavaScript | Langage de programmation | Variables, fonctions, objets |
| Navigateur | Exécute JavaScript dans une page web | Chrome, Firefox |
| Node.js | Exécute JavaScript hors du navigateur | Script CLI, serveur |
| npm | Installe et gère les dépendances d’un projet | `npm install` |
| Vite | Outil de développement et de build | Serveur local rapide |
| React | Bibliothèque d’interface utilisateur | Composants |
| Next.js | Framework web fondé sur React | Routage, rendu, serveur |

## À retenir
- **Langage ≠ runtime ≠ gestionnaire de paquets ≠ bibliothèque ≠ framework.**
- React ne remplace pas JavaScript : il s’appuie dessus.
- npm installe des paquets ; il n’exécute pas à lui seul le code applicatif.
- Vite et Next.js répondent à des besoins différents : ne les présente pas comme deux langages.

## Exemple
```js
const message = "Bonjour HashCode";
console.log(message);
```

Le code est écrit en JavaScript. Le navigateur ou Node.js peut l’exécuter. `console.log` affiche une information dans la console.

## Vérification rapide
1. Quel outil exécute un script JavaScript côté serveur ? **Node.js**.
2. Quel outil sert à gérer les paquets ? **npm**.
3. React est-il un langage ? **Non, c’est une bibliothèque JavaScript**.

**Erreur fréquente :** apprendre les noms des outils sans comprendre leurs responsabilités.

## Cas d’usage pratique — lancer une petite application
Tu construis un catalogue de formations pour HashCode Academy. JavaScript contient les règles d’affichage ; Node.js peut exécuter un script de préparation ; npm installe les dépendances ; Vite peut servir l’application en développement ; React construit l’interface ; Next.js peut fournir une architecture web plus complète.

**Choix à expliquer :** pour un simple script qui calcule des statistiques, commence avec JavaScript et Node.js. N’ajoute pas React ou Next.js si aucune interface web n’est nécessaire.

**Mini-défi :** associe chaque outil à une responsabilité dans un projet que tu connais.