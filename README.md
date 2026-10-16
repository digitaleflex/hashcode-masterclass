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
- [Catalogue des exercices](exercises/curriculum.json)
- [Guide du parcours pratique](exercises/README.md)
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

L'arborescence actuelle comprend le support initial, les 40 fiches de référence, le catalogue d'exercices, les sept présentations avancées, les scripts de contrôle et la documentation de gouvernance.

- `index.html` : masterclass initiale.
- `docs/resumes/` et `docs/cheatsheets/` : fiches RES et CS.
- `docs/INDEX-PEDAGOGIQUE.md` : index pédagogique global.
- `exercises/` : catalogue, exercices guidés et interface de progression.
- `courses/advanced/` : présentations avancées, catalogue JSON, schéma et gabarit de cours.
- `scripts/` et `tests/` : contrôles structurels et tests automatisés.
- `.github/workflows/` : intégration continue.
- `docs/ARCHITECTURE-REPOSITORY.md` : architecture cible et règles de maintenance.
- `docs/ROADMAP-REPOSITORY.md` : étapes restantes.
- `CONTRIBUTING.md` et `SECURITY.md` : contribution et sécurité.

Consulter l'[architecture complète](docs/ARCHITECTURE-REPOSITORY.md) pour la structure cible et les responsabilités détaillées.

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

## Cours avancés

Le parcours avancé propose sept présentations HTML autonomes : JavaScript avancé, TypeScript avancé, tests et qualité, Web APIs/performance, backend Node.js, sécurité applicative, architecture/DevOps.

- [Catalogue des cours avancés](courses/advanced/README.md)
- [Catalogue machine-readable](courses/advanced/curriculum.json)
- [Architecture du dépôt](docs/ARCHITECTURE-REPOSITORY.md)
- [Roadmap qualité et pédagogie](docs/ROADMAP-REPOSITORY.md)
- [Critères de fin de réalisation](docs/DEFINITION-OF-DONE.md)
- [Guide de contribution](CONTRIBUTING.md)
- [Politique de sécurité](SECURITY.md)

**Important :** ces sept fichiers sont actuellement des présentations, pas encore des cours complets. Les laboratoires guidés, exemples exécutables, exercices, solutions, quiz et rubriques d'évaluation restent à produire. Le statut détaillé est maintenu dans le catalogue.

## Contrôles qualité

Avec Node.js 20 ou plus récent :

```bash
npm install
npm run check
npm run check:exercises
npm run check:repo
npm test
```

Le contrôle du dépôt vérifie les liens locaux Markdown/HTML et le contrat de base du catalogue avancé. La CI ne remplace pas la revue technique des exemples ni les tests visuels sur navigateur.


## Projets pratiques

Les cours avancés sont prolongés par un cadre de projets avec contrat, gabarit, barème et projet de synthèse en préparation.

- [Catalogue des projets](projects/README.md)
- [Contrat commun](projects/PROJECT-CONTRACT.md)
- [Projet de synthèse TaskFlow sécurisé](projects/capstone-taskflow/README.md)
- [Catalogue JSON](projects/curriculum.json)
