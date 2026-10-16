# Modèle de contribution d’un exercice

Chaque exercice est un dossier autonome et lisible hors ligne :

```text
EX-XXX-001-nom/
├── README.md       # consigne, objectifs, critères et indices progressifs
├── starter/        # fichiers fournis à l'apprenant
├── solution/       # corrigé et explication
└── tests/          # tests de référence, indépendants de la solution
```

## Règles

1. Un identifiant stable et unique : `EX-[A-Z]+-NNN`.
2. Le README doit préciser niveau (INIT/CORE/PRO), durée, prérequis, objectif, contexte, consigne, entrées/sorties, critères d’acceptation, cas limites et indices.
3. Les fichiers `starter/` ne doivent pas contenir le corrigé.
4. Le corrigé explique le raisonnement et au moins une alternative si elle est pédagogique.
5. Les tests de référence vérifient le contrat public, pas les détails d’implémentation.
6. Les exercices doivent fonctionner sans réseau, sauf exercice explicitement consacré à une API ; même celui-ci doit utiliser des réponses simulées dans les tests.
7. Ne jamais exécuter le code fourni par un apprenant dans le processus principal d’un service.

Copier ce dossier et remplacer les exemples. Garder les noms de fichiers explicites et les consignes en français.
