# Contribuer à HashCode Academy

Le dépôt privilégie les ressources exactes, reproductibles, accessibles et utilisables hors ligne.

## Avant de modifier
1. Lire [l'architecture](docs/ARCHITECTURE-REPOSITORY.md) et la [roadmap](docs/ROADMAP-REPOSITORY.md).
2. Chercher une issue existante.
3. Modifier la source canonique plutôt que dupliquer le contenu.
4. Ne jamais ajouter de secret, de données privées ou de code dangereux visant un système public.

## Ajouter une fiche
- Préciser objectifs, prérequis et niveau.
- Ajouter un exemple minimal et son résultat attendu.
- Distinguer les fragments illustratifs du code exécutable.
- Ajouter pièges, exercices, critères de réussite et liens RES/CS.
- Mettre à jour l'index et vérifier les liens.

## Ajouter un exercice
- Séparer consigne, starter, tests et solution de référence.
- Couvrir cas normaux, limites et entrées invalides.
- Ajouter l'exercice au catalogue et valider son contrat.

## Ajouter un cours avancé
- Partir de courses/advanced/templates/course.md.
- Mettre à jour courses/advanced/curriculum.json.
- Conserver le statut presentation tant que cours, labs, exercices, solutions, quiz et grille ne sont pas disponibles.
- Fournir les commandes exactes et vérifier les liens locaux.

## Contrôles avant pull request

    npm install
    npm run check
    npm run check:exercises
    npm run check:repo
    npm test

Lancer aussi la vérification TypeScript si le changement touche des exemples TS. Signaler les contrôles non exécutés ; ne jamais déclarer un test réussi sans résultat.

## Pull request
Décrire le problème, le public visé, les fichiers touchés, les contrôles exécutés, les limites restantes et les captures si l'interface change.
