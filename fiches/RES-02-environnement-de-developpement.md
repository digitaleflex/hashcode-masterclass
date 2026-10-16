# RES-02 — Environnement de développement

**Parcours :** HashCode Masterclass · **Domaine :** Outils · **Niveau :** Débutant

## L’idée essentielle
Un environnement de développement est l’ensemble des outils et fichiers qui permettent d’écrire, d’exécuter et de vérifier un programme.

## Le cycle de travail
1. **Écrire** le code dans un fichier.
2. **Enregistrer** le fichier.
3. **Exécuter** la commande adaptée.
4. **Observer** la sortie ou l’erreur.
5. **Corriger**, puis recommencer.

## Commandes utiles
```bash
pwd          # afficher le répertoire courant
ls           # lister les fichiers (Linux/macOS)
node app.js  # exécuter un fichier JavaScript avec Node.js
npm install  # installer les dépendances du projet
npm run dev  # lancer le script dev défini dans package.json
```

Les commandes disponibles dépendent du système et du projet. Sous Windows, `dir` peut remplacer `ls` dans l’invite de commandes classique.

## Lire une erreur
- **SyntaxError** : le code ne respecte pas la syntaxe attendue.
- **ReferenceError** : une référence est introuvable, par exemple une variable non définie.
- **TypeError** : une opération n’est pas valide pour la valeur concernée.
- Le numéro de ligne et la pile d’appels sont des indices, pas une explication complète.

## Bon réflexe
Lis le **premier message pertinent**, repère le fichier et la ligne, reproduis le problème, puis corrige une chose à la fois. Ne masque pas une erreur sans comprendre sa cause.

## Vérification rapide
- Quel fichier déclare les scripts npm ? **package.json**.
- Que fait `node app.js` ? **Il demande à Node.js d’exécuter le fichier**.
- Une erreur est-elle toujours un échec inutile ? **Non : c’est une information pour diagnostiquer le programme**.