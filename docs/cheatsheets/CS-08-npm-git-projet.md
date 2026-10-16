# CS-08 — npm, Git et workflow de projet

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 02 environnement de developpement](../resumes/RES-02-environnement-de-developpement.md) · [RES 10 modules npm organisation projet](../resumes/RES-10-modules-npm-organisation-projet.md)

**Application pratique :** Avant toute commande, vérifie le dossier courant, le script visé et les fichiers qui seront ajoutés au commit.

## npm
~~~bash
npm init -y
npm install lodash
npm install -D typescript vitest
npm run
npm test
~~~
- dependencies : nécessaires à l'exécution de l'application.
- devDependencies : outils de développement et de test.
- package.json : métadonnées, scripts et plages de versions.
- package-lock.json : versions résolues pour une installation reproductible.

## Git au quotidien
~~~bash
git status
git switch -c feat/task-filter
git add src/
git commit -m "feat: add task filtering"
git push -u origin feat/task-filter
~~~

## Cycle recommandé
1. Lire l'issue et clarifier le résultat attendu.
2. Créer une branche dédiée.
3. Modifier un périmètre limité.
4. Exécuter lint, types, tests et build.
5. Examiner `git diff`.
6. Committer avec un message descriptif.
7. Ouvrir une pull request et expliquer les changements.

## Fichiers à ignorer
Exemples habituels : node_modules/, dist/, .env, fichiers temporaires et sorties de test. Ne jamais ignorer le lockfile d'un projet applicatif sans raison explicite.

## Messages conventionnels
- feat: nouvelle fonctionnalité
- fix: correction
- docs: documentation
- test: tests
- refactor: restructuration sans changement fonctionnel
- chore: maintenance

## Sécurité
Ne committez jamais de secrets. Un fichier .env.example peut documenter les noms des variables requises avec des valeurs fictives. Si un secret est publié, révoquez-le et remplacez-le : supprimer le fichier du dernier commit ne suffit pas.
