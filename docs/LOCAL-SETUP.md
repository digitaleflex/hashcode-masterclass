# Développement local

## Prévisualiser

La présentation `index.html` est autonome : double-clique dessus pour l'ouvrir dans un navigateur. Elle ne charge pas de bibliothèque distante au démarrage.

Pour servir le répertoire localement avec Node.js déjà installé :

```bash
npx http-server . -p 4173 -c-1
```

Puis ouvrir `http://localhost:4173`.

## Vérification structurelle

Le dépôt contient `scripts/check-slides.mjs`, qui contrôle la présence des 18 diapositives et du contenu principal.

```bash
npm run check
```

## Avant la séance

- Tester sur le navigateur et l'écran qui seront utilisés.
- Vérifier que les notes du formateur s'ouvrent et se ferment.
- Vérifier le plein écran et la navigation au clavier.
- Vérifier le quiz et l'affichage sur un écran plus petit.
- Préparer les fichiers du mini-projet en local afin de ne pas dépendre du réseau pendant l'atelier.