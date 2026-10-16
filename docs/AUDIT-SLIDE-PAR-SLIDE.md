# Audit slide par slide — 83 écrans (ce qui nous avait échappé)

> Fichier audité : `index.html` (83 slides vérifiées, `check-slides.mjs: OK`)
> Méthode : 3 audits croisés (01-28 / 29-62 / 63-83) — chaque snippet rejoué mentalement, chaque slide relue vs `data-notes` vs `docs/PLAN-DIAPORAMA.md`.
> Légende : 🔴 bloquant · 🟠 majeur · 🟡 mineur · ✅ OK

---

## Top 10 à corriger en priorité

| Rang | Slide | Problème | Gravité |
|------|-------|----------|---------|
| 1 | 65 vs 39-40/55-56 | Modèle `Task` incohérent : `completed:boolean` puis `status:"todo"\|"done"` sans pont | 🔴 bloquant péda |
| 2 | 16 | Écran vide : titre Vite/React/Next sans contenu alors que la note exige « savoir les classer » | 🟠 majeur |
| 3 | 28 | Écran vide : « types primitifs » sans liste ni `typeof` | 🟠 majeur |
| 4 | 24 | « Partie 02 » orpheline : aucune Partie 01 n'existe | 🟠 majeur |
| 5 | 63-83 | `Exécuter` sandboxé absent de l'atelier (`RUNNABLE` exclut 64-83) — promesse code vivant rompue là où elle aiderait le plus | 🔴 bloquant expérientiel |
| 6 | 68/70/73/75 | `throw` (titre vide) vs `false` (id inconnu) jamais expliqué + cas 999 qui n'affiche rien | 🟠 majeur |
| 7 | 74 + 83 | 74 quasi vide (118 car.), 83 sans CTA/lien/QR — fin de session sans action | 🟠 majeur |
| 8 | 50/56 | Blocs « RÉSULTAT ATTENDU » = prose, pas une sortie (56 montre même un objet valide avec texte d'erreur) | 🟠 majeur |
| 9 | Navigation | Après clic souris sur « Suivant », les flèches meurent (focus bouton + garde `matches(button)`); double handler quiz (2 listeners) | 🟠 majeur usage présentateur |
| 10 | 41/60 | Exercices sans critères de réussite affichés (viole `PLAN-DIAPORAMA.md:46`) | 🟠 majeur |

---

## 1. Ouverture / Écosystème / Outils (01-28)

| N° | Titre | Verdict |
|----|-------|---------|
| 01 | Couverture JS & TS | ✅ rituel 3·2·1·CODE OK |
| 02 | Le code s'apprend en faisant | ✅ |
| 03 | Contrat masterclass | ✅ « 2h = fondamentaux » tenu |
| 04 | Résultats attendus | ✅ repris en 82 |
| 05 | Diagnostic A/B/C | 🟡 affiché mais jamais réexploité ensuite → ajouter renvoi ex. 41/72 « niveau A/B/C » |
| 06 | Itinéraire 120 min | ✅ (🟡 carte 04 « Pourquoi TS » → renommer « Typage » pour coller au plan) |
| 07 | Langage ≠ framework | ✅ classifications exactes |
| 08 | Carte mentale 1 ligne | 🟡 `.concept-node` 12px non agrandi en projecteur + 4 cartes + schéma denses en 16:9 |
| 09 | JS et TS | ✅ « transformé/émis » correct |
| 10 | Que fait le navigateur ? | ✅ same-origin exact |
| 11 | JS dans navigateur (`?.`) | ✅ sortie floutée [R] OK |
| 12 | Que fait Node.js ? | ✅ « runtime, pas framework » |
| 13 | Navigateur ou Node ? | ✅ |
| 14 | À quoi sert npm ? | ✅ |
| 15 | Fichiers projet | ✅ (🟡 note dit « commité » → « versionné ») |
| 16 | Vite, React, Next | 🟠 **vide** (116 car.) → ajouter Vite=build / React=biblio UI / Next=framework React |
| 17 | Quiz 01 | ✅ `data-answer=1` Node.js (🟡 distractor CSS trivial + lead à harmoniser) |
| 18 | Boîte à outils | ✅ (🟡 Git = bonus, plan ne le cite pas) |
| 19 | `node --version` | ✅ |
| 20 | `mkdir/cd/npm init -y` | ✅ |
| 21 | `node hello.js` | ✅ |
| 22 | Prédisez Cotonou | ✅ |
| 23 | Lire erreur sans paniquer | ✅ |
| 24 | Partie 02 | 🟠 **orpheline** → créer Partie 01 avant 07 ou renuméroter |
| 25 | Variable = liaison | ✅ |
| 26 | const ou let ? | ✅ |
| 27 | Quiz 02 | ✅ answer=let |
| 28 | Primitifs | 🟠 **vide** (150 car.) → lister string/number/boolean/null/undefined/object/symbol/bigint + `typeof` |

Transverses 01-28 : double handler quiz (2 listeners/clic → ne garder que `initQuiz`) 🟡 ; focus « Suivant » tue les flèches 🟠 ; micro-gris `#63705f/#777/#727272` < 4.5:1 🟡 ; slides sans `role=group/aria-label` 🟡 ; bloc 24-45 dense (22 écrans/25 min → noter les sautables).

## 2. JS / TS (29-62) — sortie réelle vs affichée

| N° | Code | Réelle → Affichée | Verdict |
|----|------|-------------------|---------|
| 29 | `"5"+2`, `"5"-2`, `Boolean("")` | `52/3/false` → `"52"/3/false` | 🟡 retirer guillemets (console n'en met pas) |
| 30 | `==` vs `===` | `true/false` → inline OK | ✅ |
| 31 | if score=72 | `Validé` → rien | ✅ (🟡 ajouter RÉSULTAT pour cohérence règle §44) |
| 32 | `for 1..3` | `Étape 1..3` → rien | ✅ (🟡 idem) |
| 33 | `greet("Eurin")` | `Bonjour Eurin` → rien | ✅ (🟡 idem) |
| 34 | fn vs fléchée | hoisting + this corrects | ✅ |
| 35 | length/[0] | `3/1000` → `3/1000` | ✅ |
| 36 | `map ×1.18` | `[1180,2950,1770]`, immutabilité dite | ✅ |
| 37 | `filter ≥50` | `[82,91]` | ✅ |
| 38 | `reduce(...,0)` | `5000`, 0 initial présent | ✅ |
| 39 | `task.title` | `Apprendre JavaScript` | ✅ |
| 40 | `filter(!completed)` | `[{id:2…}]` → rien | ✅ (🟡 afficher `todo`) |
| 41 | Exo panier | 4500/3 art. | 🟠 sans critères → ajouter somme/affichage/bonus length |
| 42 | Correction panier | `Total:4500/Articles:3` | ✅ |
| 43 | `user.email` | `undefined` inline | ✅ |
| 44 | Quiz map | `[2,4,6]` answer=B | ✅ |
| 45 | Récap JS | — | ✅ |
| 46 | Partie 03 | — | ✅ |
| 47 | `double("bonjour")` | `NaN` silencieux → rien | 🟡 piège non signalé → montrer `NaN` |
| 48 | JS vs TS | — | ✅ |
| 49 | Typage avant exécution | — | ✅ |
| 50 | Annotations | aucune sortie → prose « doivent correspondre » | 🟠 **sortie fausse** → « aucune sortie (déclarations valides) » |
| 51 | Inférence | inline `// string/number` | ✅ |
| 52 | `calculateTotal` | — | ✅ |
| 53 | Quiz repeat | incompat = C | ✅ |
| 54 | `Status` union | — | ✅ |
| 55 | `interface Task` | — | ✅ |
| 56 | `task: Task` valide | 0 erreur → texte « manquante/incompatible déclenche erreur » | 🟠 **valide décrit comme erreur** → distinguer conforme vs variante invalide |
| 57 | `bio?` | — | ✅ |
| 58 | `number[]`/`Task[]` | — | ✅ |
| 59 | Types ≠ tests | — | ✅ |
| 60 | Exo formatTitle | — | 🟠 sans critères → signature `(title:string):string` + `trim` + bonus |
| 61 | Correction formatTitle | — | ✅ |
| 62 | Récap TS | — | ✅ |

## 3. Atelier / Ancrage (63-83)

| N° | Verdict |
|----|---------|
| 63 | ✅ transition wipe réussie |
| 64 | 🟠 contrat sans SUPPRIMER alors que `removeTask` arrive en 66/73 |
| 65 | 🔴 `status` union sans pont depuis `completed:boolean` (39-40/55-56) → 1 ligne pont ou réalignement |
| 66 | 🟡 schéma dit `add/toggle/remove` ≠ vraies fonctions `add/list/complete/remove` |
| 67 | ✅ non-persistance dite |
| 68 | 🟠 `throw` OK mais convention vs `false` jamais expliquée |
| 69 | 🟡 manque mini `.output` exemple `✓/○` avant prédiction 71 |
| 70 | 🟠 `find+false` OK, même incohérence throw/false |
| 71 | ✅ scénario `✓1/○2` correct |
| 72 | 🟠 « refuser titre vide » déjà codé en 68 → reformuler (doublons + id inconnu + removeTask) |
| 73 | ✅ `findIndex/-1/splice` bien expliqué |
| 74 | 🟠 quasi vide → 3 puces (`tsc` ne prouve rien + ex. total faux mais typé → renvoi 75) ou fusion 75 |
| 75 | 🟠 cas 999 ne logue rien → afficher `if(!completeTask(999)) console.log("id inconnu")` |
| 76 | ✅ bonne synthèse |
| 77 | ✅ quiz typecheck answer=0 |
| 78 | ✅ quiz filter + total session `/6` cohérent |
| 79 | ✅ |
| 80 | 🟡 préciser `filter(status==="done")` + « choisissez 1 niveau, 15 min » |
| 81 | 🟡 7 puces denses en projecteur → tester / 2 colonnes |
| 82 | ✅ boucle avec 04 |
| 83 | 🟠 pas de lien dépôt/QR/consigne photo alors que la note les promet → 1 callout action |

---

## Correctifs proposés (lots)

- **Lot A — contenu (sans risque)** : remplir 16/28/74, pont 65, critères 41/60, sorties 29/31-33/40/47/50/56, libellés 64/66/72/75/80/83, typo 15.
- **Lot B — code** : `RUNNABLE` étendu à 67-73/75, dédupliquer handler quiz, `blur()` prev/next pour flèches, `.concept-node` en projecteur, `role=group` slides.
- **Jamais couper** : 71/72/75/83. **Sautables** : 16/28/49/59/74 si retard.
