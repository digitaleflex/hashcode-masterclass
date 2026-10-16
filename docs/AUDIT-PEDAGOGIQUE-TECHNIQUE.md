# Audit pédagogique et technique — HashCode Masterclass

**Périmètre :** 20 fiches RES et 20 fiches CS  
**Public visé :** apprenants débutants à intermédiaires en JavaScript et TypeScript  
**Statut :** audit de structure et de cohérence effectué sur les fichiers du dépôt ; revue ligne par ligne de chaque exemple exécutable et exécution automatisée non encore réalisées.

## 1. Bilan exécutif

Le corpus a une base solide : objectifs identifiables, exemples concrets, exercices avec corrigés sur plusieurs fiches, rappels de sécurité, et un projet de synthèse. La progression RES-01 à RES-20 couvre le chemin allant de l'environnement de développement jusqu'à un projet typé, testé et livré.

Les améliorations prioritaires concernent surtout la cohérence de navigation et la normalisation du format. Les RES-13 à RES-20 ont été enrichies avec objectifs, explications, pièges, exercices et critères de réussite. Les RES-01 à RES-12 disposent de repères d’apprentissage complémentaires ; les RES-07 à RES-11 ont été vérifiées comme déjà munies de cette section, et RES-12 vient d’être complétée.

## 2. Points positifs à préserver

- La distinction entre langage, runtime, gestionnaire de paquets, outil de build et framework.
- Les explications sur les limites du typage statique et la nécessité de valider les données à l'exécution.
- Les exercices où l'apprenant prédit d'abord le résultat.
- Les corrections et critères de réussite quand ils sont présents.
- Les exemples métier cohérents autour des tâches, profils, prix et statuts.
- Les rappels de sécurité concernant le rendu HTML, les secrets, l'authentification et l'autorisation.
- Le projet de synthèse RES-20 qui donne une finalité concrète au parcours.

## 3. Constats prioritaires

### P0 — À corriger avant de diffuser le support

1. **Navigation de fin de fiche incohérente.** Plusieurs fiches historiques contenaient des mentions indiquant que la fiche suivante était « à créer », alors que la série est désormais complète. Les mentions ont été nettoyées sur RES-04 à RES-12 ; les renvois restent à vérifier systématiquement.
2. **Index central manquant.** Un index pédagogique a été ajouté dans `docs/INDEX-PEDAGOGIQUE.md`, avec les 40 liens, les usages des deux collections et des jalons d'apprentissage.
3. **Vérification des liens automatisée absente.** Avant publication finale, contrôler que chaque lien local existe et que chaque référence RES/CS pointe vers le bon sujet.
4. **Revue d'exécution absente.** La présence d'exemples dans un fichier Markdown ne garantit pas qu'ils s'exécutent tels quels. Les blocs JavaScript/TypeScript doivent être séparés des fragments illustratifs, puis exécutés ou vérifiés par un outil approprié.

### P1 — Améliorations pédagogiques à fort impact

1. **Gabarit commun pour les 20 RES.** Ajouter systématiquement : prérequis, objectifs observables, vocabulaire, explication, exemple guidé, pièges, exercices gradués, corrigés séparés ou repliables selon la plateforme, critères de réussite et lien vers la suite.
2. **Gradation des exercices.** Prévoir au moins trois niveaux : compréhension/prédiction, application guidée, transfert autonome dans un petit cas pratique. Un corrigé ne doit pas apparaître avant que l'apprenant ait eu la possibilité de chercher.
3. **Critères de maîtrise.** Évaluer des comportements observables (« expliquer pourquoi », « corriger », « écrire sans copier », « tester le cas limite »), pas uniquement la mémorisation d'une définition.
4. **Cohérence des termes.** Définir une fois les termes « runtime », « build », « narrowing », « immutabilité », « concurrence » et « validation à l'exécution », puis employer les mêmes termes partout.
5. **Rappels espacés.** À la fin des RES, proposer 3 à 5 questions de rappel qui réutilisent des notions précédentes, plutôt que de tester uniquement le sujet de la fiche courante.
6. **Accessibilité hors ligne.** Conserver les exemples essentiels dans les fichiers Markdown, limiter les dépendances aux liens externes et fournir des instructions locales pour exécuter les exemples.

### P1 — Équilibre du niveau

Les RES-01 à RES-12 sont relativement détaillées ; RES-13 à RES-20 sont nettement plus courtes. Recommandation : choisir explicitement l'une des deux politiques suivantes et l'appliquer à toutes les fiches :

- **Option A — Fiches de résumé :** conserver des fiches courtes, mais ajouter objectifs précis, prérequis, exemple minimal, pièges et exercice corrigé à chaque fiche.
- **Option B — Supports de cours :** développer les fiches avancées avec exemples progressifs, mini-projet, critères d'évaluation et liens vers les fiches CS correspondantes.

Pour une collection appelée « fiches de résumé », l'option A est la plus cohérente ; les ateliers plus longs peuvent vivre dans les supports de cours séparés.

## 4. Vérifications techniques à systématiser

### JavaScript

- Vérifier les sorties attendues et les cas limites de chaque exemple.
- Distinguer mutation, réaffectation et copie superficielle.
- Vérifier les différences entre `||` et `??`, entre `==` et `===`, ainsi qu'entre `return` et `console.log`.
- Pour l'asynchronisme, préciser les différences entre rejet d'une promesse, erreur HTTP et erreur réseau.
- Pour `fetch`, rappeler qu'une réponse HTTP 404/500 ne rejette pas automatiquement la promesse : il faut inspecter `response.ok` ou `response.status`.
- Pour le DOM, vérifier l'existence des éléments sélectionnés et éviter `innerHTML` avec des données non fiables.
- Pour les modules, tester les exemples selon le contexte réel : navigateur avec `type="module"`, ou Node.js avec une configuration ESM cohérente.

### TypeScript

- Vérifier les exemples avec une configuration stricte, idéalement `strict: true`.
- Ne pas présenter une assertion `as SomeType` comme une validation.
- Illustrer la différence entre `any`, `unknown`, les unions et le narrowing.
- Vérifier les types DOM et les possibilités d’obtenir `null` après les sélections.
- Expliquer que les types sont effacés à l'exécution et ne protègent pas à eux seuls une API ou une base de données.
- Veiller à ne pas mélanger les fonctionnalités du compilateur TypeScript et celles d'un outil de bundling.

### Sécurité

- Séparer validation côté client et validation côté serveur.
- Préciser que CORS n'est pas un mécanisme d'authentification.
- Ne jamais exposer de secrets dans le code client ou dans le dépôt.
- Utiliser des requêtes paramétrées côté serveur pour les bases de données.
- Traiter les données affichées comme non fiables et préférer `textContent` à l'insertion HTML directe.
- Pour l'authentification, rappeler que les contrôles d'autorisation doivent être appliqués côté serveur.

## 5. Recommandations par phase

### Phase 1 — Stabiliser la documentation

- [x] Créer l'index central des 40 fiches.
- [x] Nettoyer les mentions « à créer » dans les fins de RES-04 à RES-12.
- [ ] Vérifier tous les liens relatifs des 40 fichiers.
- [ ] Harmoniser les renvois RES et CS sur chaque fiche.
- [x] Enrichir les RES-13 à RES-20 avec objectifs, exemples, pièges, exercices et critères de réussite.
- [x] Ajouter aux CS une section d’utilisation, des liens vers les RES associées et une pratique conseillée.

### Phase 2 — Contrôle technique

- [ ] Extraire les blocs de code des 40 fichiers.
- [ ] Exécuter les blocs JavaScript compatibles avec Node.js.
- [ ] Vérifier les blocs TypeScript avec une version fixée du compilateur et `strict: true`.
- [ ] Identifier explicitement les fragments incomplets ou pseudocode pour éviter de les confondre avec du code exécutable.
- [ ] Ajouter un contrôle de liens et de syntaxe dans la CI du dépôt.

### Phase 3 — Amélioration de l'expérience d'apprentissage

- [ ] Ajouter une carte des prérequis et dépendances entre les notions.
- [ ] Créer un quiz de diagnostic avant RES-01 et un bilan après RES-20.
- [ ] Ajouter des mini-challenges cumulatifs après RES-04, RES-08, RES-12, RES-16 et RES-20.
- [ ] Créer une grille de correction commune : exactitude, lisibilité, robustesse, tests et sécurité.
- [ ] Suivre les notions que les apprenants échouent à expliquer ou à appliquer, puis réviser les fiches concernées.

## 5 bis. Intégration du parcours d'exercices pratiques

Le dépôt possède désormais un lot pilote de 12 exercices, un manifeste de catalogue, des tests automatisés Node.js et un workflow GitHub Actions dédié. Les exercices sont reliés aux fiches RES/CS pertinentes.

- [x] Documenter les niveaux INIT, CORE et PRO.
- [x] Structurer 12 exercices pilotes : compréhension, katas, débogage, TypeScript, tests, sécurité et mini-projet.
- [x] Ajouter des tests de référence pour les fonctions métier du pilote.
- [x] Ajouter un validateur du nombre, de l’unicité et de la correspondance des identifiants du catalogue, ainsi que des liens de cours détectés dans le cahier.
- [x] Ajouter les commandes `npm run check:exercises` et `npm test`.
- [x] Ajouter une CI ciblée sur les changements d’exercices.
- [ ] Exécuter la CI sur GitHub et vérifier le résultat réel.
- [ ] Étendre les tests aux exemples TypeScript et aux scénarios DOM/API.
- [ ] Séparer à terme les corrigés du contenu distribué aux apprenants si une plateforme publique de défis est créée.

Le lot pilote constitue une première tranche d’intégration, pas encore une banque exhaustive d’exercices pour les 20 fiches. Les tests automatiques couvrent les fonctions de référence ajoutées au dossier `tests/` ; ils ne valident pas automatiquement chaque bloc de code présent dans les documents Markdown.

## 6. Gabarit minimal recommandé pour chaque RES

1. Titre, niveau, durée indicative et prérequis.
2. Objectifs d'apprentissage formulés avec des verbes observables.
3. Vocabulaire indispensable.
4. Explication courte, en langage simple.
5. Exemple minimal commenté et résultat attendu.
6. Pièges fréquents avec correction.
7. Exercices : prédire, modifier, créer.
8. Corrigés clairement séparés.
9. Checklist de maîtrise.
10. Fiche précédente, fiche suivante et CS associées.

## 7. Politique recommandée pour les CS

Les cheat sheets doivent rester compactes. Elles devraient privilégier les syntaxes, tableaux de décision, pièges et exemples de quelques lignes. Éviter de transformer les CS en duplications des RES. Chaque CS devrait pointer vers une ou plusieurs RES pour les explications complètes, et signaler toute limite importante qui pourrait conduire à un usage incorrect.

## 8. Décision pédagogique recommandée

**Ne pas ajouter de nouvelles fiches tout de suite.** Les 40 documents couvrent déjà un périmètre large. La priorité est de fiabiliser les liens, de vérifier les exemples et d'uniformiser la pédagogie. Après cette stabilisation, les éventuels manques doivent être décidés à partir des objectifs de la masterclass et des difficultés réelles des apprenants, pas par accumulation de sujets avancés.

---

**Index du parcours :** [INDEX-PEDAGOGIQUE.md](INDEX-PEDAGOGIQUE.md)  
**HashCode Academy · LEARN · BUILD · BELONG**


## 9. Architecture et nouveaux cours avancés

L'architecture cible est documentée dans [ARCHITECTURE-REPOSITORY.md](ARCHITECTURE-REPOSITORY.md) et son plan de réalisation dans [ROADMAP-REPOSITORY.md](ROADMAP-REPOSITORY.md). Les sept présentations avancées sont désormais répertoriées dans le catalogue machine-readable `courses/advanced/curriculum.json`. Le statut `presentation` est volontairement conservé pour chacune : les ressources de cours, exemples, labs, exercices, solutions, quiz et grilles d'évaluation ne sont pas encore livrés.

### État réel des vérifications

- [x] Indexer les sept présentations dans l'index pédagogique.
- [x] Définir un contrat de catalogue et un gabarit de cours avancé.
- [x] Ajouter un contrôle automatisé de liens locaux Markdown/HTML et de cohérence du catalogue.
- [x] Exécuter les contrôles sur une installation CI propre avec Node.js 22.
- [x] Consulter un run GitHub Actions réel : Repository quality run 47 et Exercises CI run 61, tous deux réussis sur la branche de travail.
- [ ] Tester les sept présentations en navigateur et au clavier.
- [ ] Compléter les laboratoires et évaluations des sept modules.
- [ ] Terminer la vérification des liens et exemples des 40 fiches RES/CS.

Ne pas interpréter l'ajout des scripts ou du workflow comme la preuve que la CI a déjà réussi. Le résultat doit être confirmé dans GitHub Actions.
