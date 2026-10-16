# Architecture du dépôt — HashCode Academy

**Statut :** architecture cible v1.0  
**Périmètre :** supports pédagogiques, fiches de référence, exercices et cours avancés.

## 1. Mission

Ce dépôt est le référentiel pédagogique versionné de HashCode Academy pour JavaScript et TypeScript. Il doit permettre de préparer une séance hors ligne, d'apprendre en autonomie, de pratiquer sur des exercices reproductibles et de contribuer sans casser la navigation.

Ce dépôt n'est pas une plateforme d'exécution de code en ligne. Aucun code arbitraire d'apprenant ne doit être exécuté dans un serveur de production.

## 2. Domaines et responsabilités

| Domaine | Chemin canonique | Responsabilité |
|---|---|---|
| Présentation de la masterclass | index.html | Support visuel autonome |
| Fiches de résumé | docs/resumes/ | Explications pédagogiques |
| Références rapides | docs/cheatsheets/ | Syntaxe et décisions rapides |
| Index pédagogique | docs/INDEX-PEDAGOGIQUE.md | Point d'entrée vers les ressources |
| Exercices | exercises/ | Catalogue, consignes, starters, corrections et validation |
| Cours avancés | courses/advanced/ | Présentations et futurs laboratoires par module |
| Contrôles | scripts/ et tests/ | Validation reproductible |
| Intégration continue | .github/workflows/ | Contrôles sur push et pull request |

### Source de vérité

- Le catalogue JSON décrit les modules avancés et leurs ressources.
- Les pages HTML restent des supports de présentation ; elles ne remplacent pas les cours, laboratoires ou évaluations.
- Les fiches RES expliquent ; les CS condensent ; les exercices vérifient l'application.
- Les index référencent les ressources canoniques sans recopier leur contenu.
- Toute ressource annoncée comme complète, testée ou disponible doit exister et avoir passé le contrôle correspondant.

## 3. Arborescence cible

    .
    ├── index.html
    ├── README.md
    ├── package.json
    ├── CONTRIBUTING.md
    ├── SECURITY.md
    ├── docs/
    │   ├── ARCHITECTURE-REPOSITORY.md
    │   ├── ROADMAP-REPOSITORY.md
    │   ├── INDEX-PEDAGOGIQUE.md
    │   ├── AUDIT-PEDAGOGIQUE-TECHNIQUE.md
    │   ├── LOCAL-SETUP.md
    │   ├── resumes/
    │   └── cheatsheets/
    ├── exercises/
    │   ├── curriculum.json
    │   ├── schemas/
    │   ├── templates/
    │   └── tests/
    ├── courses/advanced/
    │   ├── README.md
    │   ├── curriculum.json
    │   ├── schemas/
    │   ├── templates/
    │   └── [module]/
    │       ├── presentation.html
    │       ├── course.md
    │       ├── examples/
    │       ├── labs/
    │       ├── exercises/
    │       ├── solutions/
    │       ├── quiz.json
    │       └── rubric.md
    ├── scripts/
    ├── tests/
    └── .github/workflows/

Cette arborescence est une cible progressive. Ne pas créer des dossiers vides uniquement pour donner une impression de complétude.

## 4. Contrat minimal d'un cours avancé

Un module est une **présentation disponible** lorsque sa page HTML fonctionne et est référencée depuis l'index.

Il est un **cours complet** uniquement lorsque sont présents :
1. objectifs observables, public, niveau, durée et prérequis ;
2. notes de cours et vocabulaire ;
3. exemples exécutables et instructions ;
4. au moins un laboratoire guidé avec critères de réussite ;
5. exercices indépendants ;
6. corrigés distincts du starter ;
7. quiz avec réponses expliquées ;
8. grille d'évaluation ;
9. références fiables ;
10. liens locaux validés et tests pertinents en CI.

Le catalogue doit refléter le statut réel. Ne pas promouvoir un support HTML en « cours complet » sans ces ressources.

## 5. Contrats de qualité

### Pédagogie
- Langue principale : français ; définir les termes techniques à leur première occurrence.
- Exemples minimaux, reproductibles et accompagnés de résultats attendus.
- Distinguer pseudocode, fragments illustratifs et code exécutable.
- Montrer les cas limites, erreurs et limites de sécurité.
- Indiquer les versions nécessaires quand le résultat dépend d'une version.

### Code et sécurité
- TypeScript strict pour les exemples TS vérifiés.
- Aucun secret, donnée personnelle ou clé réelle dans le dépôt.
- Dépendances minimales et tests hors ligne autant que possible.
- Exercices de sécurité locaux et autorisés.
- Ne jamais exécuter du code non fiable dans un processus privilégié.

### Accessibilité
- Navigation clavier et focus visibles.
- Titres hiérarchisés, liens explicites et noms accessibles.
- Contraste suffisant et prise en compte de la réduction des animations.
- Ne pas transmettre une information uniquement par la couleur.

## 6. Stratégie de validation

1. Structure : présence du diaporama et des ressources attendues.
2. Catalogue : JSON valide, identifiants uniques, statuts cohérents et chemins existants.
3. Liens locaux : destinations Markdown et HTML locales.
4. Tests de comportement : suite Node.js.
5. TypeScript : vérification stricte des projets qui l'exigent.
6. Revue manuelle : exactitude, accessibilité et cohérence pédagogique.
7. Navigateur : contrôle des interactions et de l'affichage avant diffusion.

Une CI verte ne prouve pas à elle seule l'exactitude pédagogique ou le bon rendu visuel.

## 7. Flux de contribution

1. Ouvrir une issue avec critères d'acceptation.
2. Créer une branche courte depuis main.
3. Modifier la source canonique et les index concernés.
4. Exécuter les contrôles documentés.
5. Ouvrir une pull request décrivant changements, tests et limites.
6. Corriger les commentaires et attendre les checks CI.
7. Fusionner uniquement quand les contrôles requis passent.

Branches recommandées : docs/, feat/, fix/, test/, chore/.  
Commits recommandés : Conventional Commits, par exemple docs:, feat:, fix:, test: et chore:.

## 8. Décisions et non-objectifs

- Pas de framework web ajouté uniquement pour héberger des documents utilisables hors ligne.
- Pas d'exécution de code arbitraire en ligne dans cette version.
- Pas de dépendance obligatoire à un service externe pour lire les supports.
- Les règles de protection de main doivent être configurées dans les paramètres GitHub ; les fichiers du dépôt ne peuvent pas les activer seuls.

## Documents liés

- [Index pédagogique](INDEX-PEDAGOGIQUE.md)
- [Audit pédagogique et technique](AUDIT-PEDAGOGIQUE-TECHNIQUE.md)
- [Roadmap du dépôt](ROADMAP-REPOSITORY.md)
- [Critères de fin de réalisation](DEFINITION-OF-DONE.md)
- [Configuration locale](LOCAL-SETUP.md)
- [Cours avancés](../courses/advanced/README.md)
