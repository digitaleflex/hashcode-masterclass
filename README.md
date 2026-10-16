# HashCode Masterclass — JavaScript & TypeScript

Support interactif pour une masterclass de 2 heures destinée aux débutants et aux personnes ayant quelques notions.

## Présentation

La présentation est écrite en HTML, CSS et JavaScript et ne charge aucune dépendance distante pour afficher les diapositives. Ouvre `index.html` dans un navigateur moderne ; une connexion Internet n'est pas nécessaire.

## Démarrage

1. Cloner ou télécharger le dépôt.
2. Ouvrir `index.html` dans Chrome, Firefox ou Edge.
3. Passer en plein écran depuis le bouton ou avec la touche `F`.

Une prévisualisation locale via npm est également disponible :

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

## Contenu pédagogique

Le diaporama comprend 18 diapositives :

1. Couverture HashCode
2. Méthode : comprendre, expérimenter, construire
3. Objectifs pédagogiques
4. Diagnostic du groupe
5. Cartographie de l'écosystème
6. Navigateur et Node.js
7. Node.js, npm et package.json
8. Premier programme
9. Variables, conditions et fonctions
10. Tableaux et objets
11. Mini-défi JavaScript
12. Pourquoi TypeScript
13. Fonctions typées
14. Interfaces et données
15. Atelier HashCode Task Manager
16. Exécution et résultat attendu
17. Quiz de sortie
18. Challenge et suite du parcours

## Déroulé de 120 minutes

| Temps | Séquence |
|---|---|
| 00–10 min | Accueil et diagnostic |
| 10–25 min | Cartographie de l'écosystème |
| 25–40 min | Environnement et premier programme |
| 40–58 min | Fondamentaux JavaScript |
| 58–63 min | Mini-défi JavaScript |
| 63–80 min | Introduction à TypeScript |
| 80–105 min | Atelier guidé |
| 105–115 min | Challenge et quiz |
| 115–120 min | Bilan et prochaines étapes |

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
└── scripts/
    └── check-slides.mjs
```

## Qualité avant l'événement

- [ ] Tester la présentation sur la machine et l'écran utilisés pendant l'événement.
- [ ] Tester flèches, espace, plein écran et notes du formateur.
- [ ] Tester les choix du quiz.
- [ ] Préparer le projet TypeScript de l'atelier à l'avance.
- [ ] Garder une copie locale de tous les supports.
- [ ] Exporter une version PDF de secours.

## Choix techniques

- Palette : graphite et vert lime HashCode `#C5F441`.
- Format de conception : 16:9.
- Présentation autonome pour privilégier la fiabilité et le fonctionnement hors ligne.
- Les types TypeScript aident à détecter certaines incohérences statiques, mais ne valident pas automatiquement les données à l'exécution.

## Licence

À définir avant redistribution publique.