# RES-19 — Architecture, organisation et livraison d'un projet

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Organiser un projet maintenable, séparer les responsabilités et mettre en place une livraison reproductible.

## 1. Exemple d'organisation
~~~text
src/
  domain/       # modèles et règles métier
  services/     # cas d'utilisation
  repositories/ # accès aux données
  api/          # routes et contrats HTTP
  ui/           # interface
  shared/       # utilitaires réellement partagés
tests/
~~~

Ce schéma est indicatif. Choisissez l'organisation selon la taille du projet. Le but est de garder les règles métier indépendantes du DOM, de la base de données et du framework lorsque cela apporte une vraie valeur.

## 2. Flux de dépendances
~~~text
Interface ou route
        ↓
Validation d'entrée
        ↓
Service métier
        ↓
Interface de dépôt
        ↓
Base de données
~~~

Évitez de disperser les règles métier entre composants, contrôleurs et requêtes SQL. Introduisez une abstraction lorsqu'elle améliore la séparation ou les tests, pas par principe.

## 3. Contrats et erreurs
Définissez les entrées et sorties des fonctions et services. Distinguez les erreurs métier (tâche introuvable, transition interdite) des erreurs techniques (base indisponible). Traduisez-les au niveau de l'API sans exposer les détails internes.

## 4. Git et collaboration
- Faites des commits petits et descriptifs.
- Utilisez des branches de travail et des pull requests.
- Faites relire les changements sensibles.
- Ne commitez pas de secrets, fichiers de build ou dépendances installées.
- Documentez les décisions d'architecture importantes et leurs compromis.

## 5. Intégration continue
Une pipeline de base peut exécuter :
1. installation reproductible à partir du lockfile ;
2. formatage et lint ;
3. vérification des types ;
4. tests ;
5. build ;
6. vérifications de sécurité adaptées.

La pipeline doit échouer si une étape obligatoire échoue. Les secrets de déploiement doivent avoir des permissions minimales.

## 6. Configuration et livraison
Séparez la configuration du code : développement, test et production peuvent utiliser des URL différentes. Validez les variables obligatoires au démarrage. Fournissez un exemple de configuration sans secrets, une procédure d'installation et les commandes de test.

Une livraison reproductible précise la version, les changements, les migrations éventuelles, le retour arrière et les vérifications post-déploiement.

## Erreurs fréquentes
- Complexifier l'architecture sans besoin réel.
- Mélanger logique métier, rendu et accès aux données.
- Stocker des secrets en dur.
- Déployer sans tests ni procédure de retour arrière.
- Traiter tous les échecs comme une seule erreur générique.

## Mini-exercice
Proposez l'organisation d'un gestionnaire de tâches avec création, liste et achèvement. Identifiez les responsabilités du domaine, du service, du dépôt et de l'interface. Énumérez les étapes de CI.

**Suite :** RES-20 — Projet de synthèse, révision générale et évaluation.
