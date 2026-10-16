# HashCode Masterclass — JavaScript & TypeScript

Support de présentation interactif pour une masterclass de 2 heures destinée aux débutants et aux participants ayant quelques notions.

## Présentation

Le support est une présentation web HTML/CSS/JavaScript conçue pour être lisible en projection et utilisable hors ligne. Elle utilise un système de diapositives léger, sans dépendance externe chargée depuis Internet au démarrage.

### Ouvrir le diaporama

Ouvre simplement [`index.html`](./index.html) dans un navigateur moderne. Aucun serveur ni installation n'est requis pour la présentation.

### Navigation

- **← / →** : diapositive précédente / suivante
- **Espace** : avancer
- **F** : plein écran
- **N** : afficher/masquer les notes du formateur
- **Home / End** : première / dernière diapositive
- **?** : afficher les raccourcis

Les raccourcis sont documentés dans la présentation. Pour le plein écran, le navigateur peut demander une interaction utilisateur.

## Contenu

Le diaporama couvre :
1. Accueil et diagnostic
2. Cartographie de l'écosystème JavaScript/TypeScript
3. Navigateur, Node.js, npm et outils de développement
4. Fondamentaux JavaScript
5. Mini-défi JavaScript
6. Types, fonctions et interfaces TypeScript
7. Atelier HashCode Task Manager
8. Challenge, quiz et prochaines étapes

## Structure du dépôt

```text
.
├── index.html              # Présentation autonome
├── README.md               # Présentation du dépôt et mode d'emploi
├── docs/
│   └── PLAN-DIAPORAMA.md   # Plan pédagogique des 18 diapositives
└── exercises/
    └── README.md           # À venir : exercices et corrigés
```

## Ligne éditoriale et design

- Langue : français
- Format cible : 16:9
- Identité visuelle : graphite, vert lime `#C5F441`, typographie moderne
- Style : visuel, démonstratif, peu de texte par diapositive
- Durée : 120 minutes
- Public : débutants et participants ayant quelques notions

## Déroulé en 120 minutes

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
| 115–120 min | Bilan et suite du parcours |

## Prochaines étapes

- [ ] Réviser et valider le rendu du diaporama sur un vidéoprojecteur.
- [ ] Compléter les notes du formateur et les consignes orales.
- [ ] Ajouter le mini-projet TypeScript avec corrigé.
- [ ] Ajouter une fiche mémo JavaScript/TypeScript.
- [ ] Générer une version PDF de secours.
- [ ] Ajouter des tests manuels pour vérifier navigation et quiz.

## Licence

À définir par les mainteneurs du dépôt avant redistribution publique du contenu.
