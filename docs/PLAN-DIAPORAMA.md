# Plan pédagogique — HashCode Masterclass JavaScript & TypeScript

**Format :** masterclass immersive, 120 minutes  
**Public :** débutants et participants ayant quelques notions  
**Support :** présentation HTML autonome de 83 écrans  
**Principe :** un écran = une idée, une action ou une vérification clairement identifiable.

## Architecture pédagogique

| Séquence | Objectif | Méthodes |
|---|---|---|
| Ouverture | Aligner les attentes et situer le niveau du groupe | Diagnostic, objectifs, contrat pédagogique |
| Carte de l'écosystème | Distinguer langage, runtime, gestionnaire de paquets, bibliothèque et framework | Schémas, comparaisons, quiz |
| Installation et outils | Comprendre l'exécution et lire les messages du terminal | Démonstration guidée, prédiction de sortie |
| JavaScript | Manipuler les primitives, décisions, fonctions et collections | Code en direct, exercices, corrections |
| TypeScript | Décrire les contrats, typer les fonctions et modéliser les données | Comparaison JS/TS, erreurs à diagnostiquer, exercices |
| Atelier Task Manager | Assembler les notions dans un programme cohérent | Construction incrémentale, cas limites, tests manuels |
| Ancrage | Vérifier les acquis et organiser la pratique suivante | Quiz, synthèse, challenge de communauté |

## Chronologie de 120 minutes

| Temps | Séquence | Durée |
|---|---|---:|
| 00–15 min | Ouverture, diagnostic et carte mentale | 15 min |
| 15–40 min | Environnements, outils et exécution | 25 min |
| 40–65 min | JavaScript et mini-exercice | 25 min |
| 65–82 min | TypeScript et exercices de typage | 17 min |
| 82–108 min | Atelier Task Manager | 26 min |
| 108–120 min | Quiz, synthèse et suite | 12 min |

## Règles de conception des diapositives

1. Chaque écran répond à une question pédagogique précise.
2. Les notions abstraites sont reliées à un exemple concret.
3. Le code source est distinct du résultat attendu.
4. Les écrans de prédiction précèdent la correction.
5. Les exercices précisent l'action attendue et les critères de réussite.
6. Les notes du formateur contiennent la question à poser, le piège à éviter ou l'explication à approfondir.
7. Les écrans sont courts, mais le formateur doit laisser du temps aux participants pour raisonner et coder.
8. Les 83 écrans ne sont pas 83 exposés indépendants : certains sont des transitions ou des checkpoints de 20 à 60 secondes.

## Exactitude technique

- JavaScript est le langage exécuté par le moteur du navigateur ou par un runtime comme Node.js.
- TypeScript ajoute un système de types statiques ; il ne remplace pas le runtime JavaScript.
- Le typage statique ne remplace pas la validation des données à l'exécution ni les tests comportementaux.
- npm installe des paquets et exécute les scripts déclarés dans package.json.
- Vite est un outil de développement/build ; React est une bibliothèque UI ; Next.js est un framework basé sur React.
- map transforme une collection, filter sélectionne des éléments et reduce accumule une valeur.

## Critères d'acceptation avant la masterclass

- [ ] Le navigateur affiche les 83 écrans dans le bon ordre.
- [ ] La navigation au clavier et les boutons fonctionnent.
- [ ] Les notes sont propres à chaque diapositive.
- [ ] Les quiz affichent la réponse et une explication.
- [ ] Les exemples de code ont été vérifiés sur l'environnement de démonstration.
- [ ] Le rendu est lisible au vidéoprojecteur.
- [ ] Une copie locale et un PDF de secours sont disponibles.