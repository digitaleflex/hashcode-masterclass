# HashCode Masterclass — JavaScript & TypeScript

Support immersif pour une masterclass de 2 heures destinée aux débutants et aux participants ayant quelques notions.

## Identité visuelle

La présentation suit l'identité HashCode Academy :
- Noir profond : `#000000`
- Vert lime : `#C5F441`
- Blanc : `#FFFFFF`
- Signature : **LEARN · BUILD · BELONG**
- Marque mère : **HashCode Academy**
- Série d'ateliers : **HashCode Masterclass**

Les composants de l'interface privilégient les aplats noirs, les bordures discrètes, la typographie contrastée et les accents lime. La couverture comporte les marques JavaScript (jaune) et TypeScript (bleu), avec une ambiance technique animée en CSS. Les animations respectent la préférence système de réduction des mouvements. Aucun asset distant n'est requis.

## Présentation

Le diaporama comprend **83 écrans pédagogiques courts**. Chaque écran porte une intention précise : expliquer un concept, comparer deux notions, faire prédire une sortie, proposer un exercice, révéler une correction ou vérifier la compréhension.

Le support est écrit en HTML, CSS et JavaScript sans bibliothèque distante indispensable. Ouvre `index.html` dans un navigateur moderne ; la présentation fonctionne hors ligne.

## Démarrage

1. Cloner ou télécharger le dépôt.
2. Ouvrir `index.html` dans Chrome, Firefox ou Edge.
3. Passer en plein écran avec la touche `F`.

Pour lancer une prévisualisation locale :

```bash
npm install
npm run start
```

Puis ouvrir `http://localhost:4173`.

## Navigation

- `←` / `→` ou `Espace` : précédente / suivante
- `Home` / `End` : première / dernière
- `F` : plein écran
- `N` : afficher / masquer les notes du formateur
- `Échap` : fermer les notes

## Interactions et aides visuelles

- Coloration syntaxique locale des blocs JavaScript et TypeScript, sans bibliothèque distante.
- Numérotation des lignes et bouton de copie sur les extraits de code.
- Diagrammes intégrés pour le cycle de développement, `map`, `filter`, `reduce`, le parcours TypeScript et les responsabilités du Task Manager.
- Animations CSS respectant la préférence système de réduction des mouvements.

## Fiches de résumé et exercices pratiques

Les fiches sont des supports de révision autonomes, enrichis de cas d’usage et de mini-défis. Elles complètent le diaporama ; elles ne remplacent pas la pratique.

- [Index pédagogique des 20 fiches RES et 20 fiches CS](docs/INDEX-PEDAGOGIQUE.md)
- [Exercices guidés — lot pilote de 12 exercices](exercises/EXERCICES.md)
- [Catalogue des exercices](exercises/curriculum.json) et [schéma contractuel](exercises/schema.json)
- [Guide du parcours pratique](exercises/README.md)
- [Navigateur interactif des exercices](exercises/index.html) — recherche, filtres, indices et progression locale
- [Modèle de contribution](exercises/templates/README.md)
- [Premier exercice autonome](exercises/EX-JS-001-panier/README.md) — consigne, starter, corrigé et tests séparés
- [Exercices TypeScript stricts](exercises/typescript/README.md)
- [Spécification du navigateur d’exercices](exercises/navigation/README.md)
- [Guide d’export PDF imprimable](fiches/EXPORT-PDF.md)
- [Plan pédagogique du diaporama](docs/PLAN-DIAPORAMA.md)

**Parcours conseillé :** lire la fiche correspondant à la notion, prédire le résultat d’un exemple, exécuter le code, modifier une donnée, puis expliquer ce qui change. Les fiches sont en Markdown et peuvent être imprimées depuis GitHub ou converties en PDF avec un outil Markdown.

## Parcours pédagogique

| Séquence | Contenu |
|---|---|
| 1. Ouverture | Contrat pédagogique, diagnostic et itinéraire |
| 2. Carte de l'écosystème | JavaScript, TypeScript, navigateur, Node.js, npm, Vite, React et Next.js |
| 3. Installation et outils | Terminal, projet, package.json et diagnostic d'erreurs |
| 4. Fondamentaux JavaScript | Variables, types, conditions, boucles, fonctions, tableaux, objets et méthodes de tableau |
| 5. Fondamentaux TypeScript | Annotations, inférence, fonctions, unions, interfaces, propriétés optionnelles et limites du typage |
| 6. Atelier Task Manager | Modèle, ajout, liste, complétion, suppression et scénarios de test |
| 7. Ancrage | Quiz, synthèse et plan de pratique sur 7 jours |

## Déroulé de 120 minutes

| Temps | Séquence |
|---|---|
| 00–15 min | Accueil, objectifs, diagnostic et carte mentale |
| 15–40 min | Environnements, outils et exécution |
| 40–65 min | Fondamentaux JavaScript + mini-exercice |
| 65–82 min | Fondamentaux TypeScript et exercices de typage |
| 82–108 min | Atelier guidé Task Manager |
| 108–120 min | Quiz, synthèse et suite du parcours |

Les 83 écrans ne doivent pas être traités comme 83 mini-cours indépendants. Certains sont des transitions visuelles de quelques secondes ; les exercices et démonstrations prennent davantage de temps. Le formateur peut sauter une diapositive de rappel si le groupe maîtrise déjà la notion.

## Structure

```text
.
├── index.html
├── package.json
├── README.md
├── .gitignore
├── docs/
│   ├── PLAN-DIAPORAMA.md
│   └── LOCAL-SETUP.md
├── exercises/
│   └── EXERCICES.md
├── scripts/
│   ├── check-slides.mjs
│   ├── check-markdown-links.mjs
│   └── validate-exercises.mjs
└── exercises/
    ├── EXERCICES.md
    ├── curriculum.json
    ├── schema.json
    ├── templates/
    ├── EX-JS-001-panier/
    ├── typescript/
    ├── async/
    ├── web/
    └── navigation/
```

## Avant la séance

- [ ] Tester le diaporama sur la machine et l'écran de projection.
- [ ] Vérifier navigation, plein écran, notes et quiz.
- [ ] Exécuter et vérifier les exemples de code.
- [ ] Préparer le projet TypeScript avant l'atelier.
- [ ] Garder une copie locale et produire un PDF de secours.
- [ ] Adapter la densité des diapositives à la taille de la salle.

## Choix techniques

- Palette : graphite et vert lime HashCode `#C5F441`.
- Format de conception : 16:9.
- Notes du formateur intégrées à chaque écran.
- Navigation au clavier, progression, quiz interactifs et styles d'impression.
- Les types TypeScript aident à détecter certaines incohérences statiques, mais ne valident pas automatiquement les données à l'exécution.

## Licence

À définir avant redistribution publique.