# Plan d'intégration — Masterclass ultra-immersive

> **Statut :** plan opérationnel (aucune modification de `index.html` depuis ce document).
> **Scope exclusif :** ce fichier. `index.html` est piloté par la lane en cours (voir Lot 1) — ne jamais éditer depuis cette lane.
> **Sources :** `docs/AMELIORATIONS-IMMERSIVES.md`, `docs/PLAN-DIAPORAMA.md`, `docs/ISSUES-RESTANTES.md`, `README.md`.
> **Objectif :** transformer le support 83 écrans (HTML/CSS/JS offline, 120 min) en expérience salle immersive, sans casser les contrats existants (`npm run check`, print, offline).

**Conventions de référence :** `slide NN` = `data-number="NN"` ; `index.html:LL` = ligne du fichier minifié (413 lignes) ; `sic` = citation littérale d'un doc source.

---

## 0. Relecture croisée des 4 docs — cohérences et écarts à trancher

Fait par l'owner de ce plan. À traiter avant d'ouvrir les lots.

- [ ] **Compte d'écrans — contradiction à corriger côté `ISSUES-RESTANTES.md`.** `README.md:19` (`83 écrans`), `PLAN-DIAPORAMA.md:5,62` et `AMELIORATIONS-IMMERSIVES.md:3` disent **83** ; `ISSUES-RESTANTES.md:5,28` dit **18**. Le vrai garde-fou est `scripts/check-slides.mjs:12` (`slideCount !== 83`). **Verdict : 83 fait foi.** Proposer la correction de `ISSUES-RESTANTES.md` (cases §5), sans éditer ce fichier ici.
- [ ] **Skip-list — 2 variantes dans `AMELIORATIONS-IMMERSIVES.md`.** `:119` liste `16,28,49,59` ; `:198` liste `16,28,49,59,74`. La mission impose `16,28,49,59,74`. **Verdict canonique retenu : `16,28,49,59,74`** (74 est un flash 30s `:126`, donc skippable sans perte). Aligner le post-it sur la version 5 éléments.
- [ ] **Jamais couper — cohérent.** `AMELIORATIONS-IMMERSIVES.md:205` et `:206` : `71` (prédiction), `72` (binômes), `75` (tests), `83` (cérémonie). Confirmé, aucune divergence.
- [ ] **Timing 120 min — cohérent entre docs.** Blocs identiques partout : `00–15 / 15–40 / 40–65 / 65–82 / 82–108 / 108–120` (`PLAN-DIAPORAMA.md:33-38`, `README.md:69-74`, `AMELIORATIONS-IMMERSIVES.md:79-137`). **Aucune contradiction de timing.**
- [ ] **Référence `index.html:264-275` obsolète.** `AMELIORATIONS-IMMERSIVES.md:18` cite le print à `264-275`. Le fichier réel fait 413 lignes : le CSS print est à **`index.html:13`** et **`index.html:44`**. Utiliser ces lignes.
- [ ] **Nom du panneau notes.** `AMELIORATIONS-IMMERSIVES.md:30` parle de `aside#notesPanel`. Le DOM réel = panneau `.notes` (`.notes.open`) + bouton `#notesBtn` (`index.html:8`, `index.html:367`). Utiliser ces sélecteurs.
- [ ] **Contrats à ne pas casser par les lots.** `check-slides.mjs:5-9` exige les chaînes littérales `"map transforme"`, `"filter sélectionne"`, `"reduce accumule"`, `data-notes=`, `quiz-option`. `check-slides.mjs:4,12` compte **exactement 83** `<section class="slide...">`. → Toute slide ajoutée (fiche mémo Lot 3) doit porter une **autre classe** que `slide`, ou le script doit être ajusté. **Point de vigilance #1 des lots.**
- [ ] **Hooks techniques disponibles (état actuel).** Handler clavier unique : `index.html:377` (F, N, ←/→, Espace, Home, End, Échap). Barre : `#bar` (`index.html:367`), style `index.html:40-41`. Aucun `AudioContext` présent (`grep` vide) → la P1-7 audio est un build neuf, muet par défaut par construction.

---

## 1. Vision cible ultra-immersive + critères d'acceptation mesurables

**Vision :** la salle *participe* au lieu d'écouter. Chaque moment clé suit la boucle `Observer → Prédire → Exécuter → Expliquer → Améliorer` (slide 02), avec un rythme : rupture bruit→silence en intro, suspense sur les sorties de code, tension ludique sur les quiz, pic protégé en atelier `63–76`, clôture-engagement `83`.

**Critères d'acceptation mesurables** (repris de `AMELIORATIONS-IMMERSIVES.md:218-224`, rendus vérifiables) :

- [ ] **Vote salle :** ≥ 80 % des participants votent (doigts) à **chacun** des quiz `17,27,44,53,71,77,78`. Mesure : comptage visuel formateur, noté sur le post-it.
- [ ] **Quiz scoré :** le bandeau `SCORE` atteint un total **`/6`** en slide `78` (6 quiz scorables : 17,27,44,53,77,78). Mesure : capture du bandeau en `78`.
- [ ] **Atelier qui tourne :** 100 % des binômes ont un `listTasks()` affichant `✓` et `○` en fin de `72`. Mesure : tour de table `75`, ≥ 1 écran par binôme.
- [ ] **Participants qui expliquent :** ≥ 3 corrections faites par un participant (et non le formateur) sur `42,61,73`. Mesure : comptage formateur.
- [ ] **Ancrage mémorisé :** la salle répète les 3 questions de `79` **sans lire** (entrée ? attendu ? vérif ?). Mesure : observation directe.
- [ ] **Captures postées :** ≥ 5 captures « 2 tâches dont 1 `done` » + `filter` en 1 phrase, **sous 48 h**. Mesure : comptage dépôt/communauté J+2.
- [ ] **Intégrité support :** `npm run check` → `Presentation structure OK: 83 slides; required topics present.` (garde-fou technique non négociable).

---

## 2. Lots de travail

### Lot 0 — Prépa & sauvegarde (effort **S**)

**Objectif :** figer une base saine et un plan de retour arrière avant toute touche.

**Fichiers touchés :** aucun fichier versionné (copie locale) ; éventuel `.gitignore` si `*.bak` à exclure.

**Étapes :**
1. Vérifier l'état : `git status --short` doit être propre hors docs non suivis (`AMELIORATIONS-IMMERSIVES.md`, ce plan).
2. Créer la sauvegarde : `cp index.html index.html.bak` (hors versionnement ou exclue via `.gitignore` — décider et documenter).
3. Prendre la baseline visuelle : ouvrir `index.html`, capturer `01,05,29,71,83` (référence « avant »).
4. Produire le **PDF secours** 83 slides : `Ctrl+P` → toutes les slides → PDF (voir aussi Lot 4).
5. Noter le hash de base : `git rev-parse --short HEAD` (référence de rollback §6).
6. Confirmer le gel : aucune lane n'édite `index.html.bak`.

**Dépendances :** aucune (prérequis de tous les lots).
**Risques :** sauvegarde écrasée par une session parallèle → mitigation : la nommer `index.html.bak.<date>` et copier aussi dans `C:\Users\PC\AppData\Local\Temp\opencode`.
**Test de validation :** `npm run check` renvoie le message OK ; `index.html.bak` existe et fait la même taille que la source.

---

### Lot 1 — P0 code (effort **référencé, non dupliqué**)

**Objectif :** effets salle immédiats (`AMELIORATIONS-IMMERSIVES.md:162-169`) : P0-1 intro/wipe, P0-2 output flouté + `Révéler [R]` + `Exécuter`, P0-3 `P` projecteur (`body.projector`), P0-4 score quiz.

**Propriété :** **lane `index.html` en cours** (session active). ⚠️ Ce plan **ne réédite pas** ces étapes — il définit seulement le **contrat d'interface** et les tests que la lane doit satisfaire.

**Contrat d'interface attendu (à valider au merge, pas à coder ici) :**
- [ ] Classe projetée : `body.projector` togglable depuis la touche `P` (branchée dans le handler unique `index.html:377`).
- [ ] Reveal sortie : les blocs `.output` (`index.html:8`) sont masqués/floutés par défaut et exposés par `R` ; sur `22,29,42,71`.
- [ ] `Exécuter` JS pur : sandbox `new Function` limitée (`console,Math,Array`), jamais d'accès DOM/réseau.
- [ ] Score : total `SCORE …/6` visible en `78`, bouton `Rejouer`, reste cliquable **et** clavier (`check-slides.mjs` exige `quiz-option`).
- [ ] Non-régression : les chaînes `"map transforme"`, `"filter sélectionne"`, `"reduce accumule"` sont conservées (`check-slides.mjs:8`).

**Dépendances :** Lot 0. Bloque Lots 2–3 (les hooks P0 sont le socle).
**Risques :** conflit d'édition si Lot 2/3 ouvrent `index.html` avant merge → mitigation : **geler Lot 2/3 jusqu'au merge P0** ; travailler sur branches/worktrees séparés puis rebaser.
**Test de validation :** `npm run check` OK ; `P` change la taille des texte à l'écran ; `R` révèle la sortie de `29` ; `Exécuter` sur `29/31` donne `"52"`, `3`, `false` ; score incrémente sur un quiz et totalit `/6` en `78`.

---

### Lot 2 — P1 théâtralisation (effort **M**)

**Objectif :** rythme, énergie, mode formateur (`AMELIORATIONS-IMMERSIVES.md:171-177`).

**Fichiers touchés :** `index.html` (CSS `<style>` + handler `index.html:377` + footer `index.html:367`), `package.json`/`scripts/` **non modifiés**.

**Étapes:**
1. **Timer 60s** (stations `05,28,45,62,75`) : cercle SVG + `setInterval` 60s, démarrage sur la slide, arrêt/reprise, respect de `prefers-reduced-motion` (pas d'animation de pulsation). Hook : slide `data-section` existant.
2. **WebAudio muet par défaut** : `AudioContext` créé au **1er clic** (autoplay policy, `:175`). Bips `660Hz` succès / `180Hz` erreur / arpège transition. Touche `M` + bouton `🔇` **branchés dans le handler `index.html:377`**. Flag `?mute=1` prioritaire (voir §6).
3. **Mode formateur `?presenter=1`** (+ touche `D`) : slide + colonne notes + `minute X/120` + « suivante » ; **notes masquées pour le public**. Réutiliser `.notes`/`#notesBtn` (`index.html:8,367`) plutôt que créer un 2e panneau.
4. **Progress 5 jalons** : remplacer la barre 3px (`index.html:40-41,367`) par 5 points de chapitre + point pulsant ; jalons alignés sur les blocs de §3.6 du doc source. Couper l'animation < 760px et en `reduced-motion`.
5. Remplir les slides fantômes `16` (table Vite/React/Next) et `28` (chips 7 primitifs) — **dans des conteneurs existants**, sans créer de `<section class="slide">` supplémentaire (contrainte §0).
6. Vérifier chaque touche ajoutée : ne pas écraser `F`, `N`, `Home`, `End`, `Échap` (`index.html:377`).

**Dépendances :** Lot 1 mergé (socle P0 + handler clavier stable).
**Risques :**
- Audio non démarré sans interaction → mitigation : init au 1er clic + indicateur visuel d'état son.
- Surcharge du handler unique `:377` (P0 ajoute `P`/`R`, P1 ajoute `M`/`D`) → mitigation : table de raccourcis unique, une lettre = une action, test exhaustif clavier.
- Jalon progress = `<section>` accidentel → mitigation : compter les slides après édition (`npm run check`).
**Test de validation :** `npm run check` OK ; timer démarre à `05` et s'arrête à la sortie ; son **off par défaut**, `M` l'active puis le coupe ; `?presenter=1` affiche note + minute + suivante ; 5 jalons visibles sur `24,46,63,82,108+`, animation coupée en `reduced-motion` ; navigation clavier complète (flèches, Espace, N, F, Home, End, Échap, P, R, M, D).

---

### Lot 3 — P2 polish (effort **M**)

**Objectif :** révélation progressive, finale engageante, fiche mémo imprimable (`AMELIORATIONS-IMMERSIVES.md:179-183`).

**Étapes :**
1. **Révélation progressive** `04,07,30,48,59` : `Espace` révèle les `<li>` un par un (les autres à 25 % d'opacité) + compteur `2/5`. ⚠️ `Espace` est déjà « slide suivante » (`:377`) → n'activer le mode « reveal » **que** sur ces 5 slides (flag `data-reveal`), sinon comportement inchangé.
2. **Finale `83`** : `MERCI + QR SVG inline + challenge 1/2/3 + Revoir mon score + #HashCode`, confetti lime CSS unique (coupé en `reduced-motion`). Lien « Revoir mon score » réutilise le bandeau du Lot 1.
3. **Fiche mémo print-only** : bloc à afficher **uniquement** en `@media print`, **classe ≠ `slide`** (ex. `.memo-print`), accolé au CSS print existant (`index.html:13,44`). Ne pas ajouter de `<section class="slide">` (contrainte §0).
4. Vérifier que `check-slides.mjs` (compte 83 + chaînes littérales) reste vert.

**Dépendances :** Lots 1–2 mergés.
**Risques :**
- Révélation progressive qui casse la navigation (`Espace`) → mitigation : opt-in par `data-reveal`, test sur une slide non concernée.
- Fiche mémo comptée comme slide → mitigation : classe dédiée + `npm run check` immédiat.
- Conflit « Revoir mon score » vs début de présentation → mitigation : action explicite (retour `78`), pas de reset silencieux.
**Test de validation :** `npm run check` OK ; `Espace` révèle puis avance normalement hors slides `data-reveal` ; `83` affiche QR + challenge + lien score ; `Ctrl+P` produit une fiche mémo 1 page **sans** dupliquer les 83 slides ; confetti absent en `reduced-motion`.

---

### Lot 4 — Répète / test salle + PDF secours (effort **S/M**)

**Objectif :** valider en conditions réelles, verrouiller le plan B.

**Étapes :**
1. Répétition chronométrée complète 120 min avec les garde-fous §3 (chrono lancé à `00`).
2. Test projecteur réel : `P` (projecteur), `F` (plein écran), lisibilité à 8 m (`AMELIORATIONS-IMMERSIVES.md:168`).
3. Test `print` → PDF 83 slides + fiche mémo ; vérifier `-webkit-print-color-adjust:exact` (`index.html:13`).
4. Test plan B : `node`/`npm` absents → capture slide `19` prête ; TS ne compile pas → dossier démo + 3 signatures tableau blanc (`:129`).
5. Test matériel : sono/lumière, micro, machine salle (couleurs noir/lime OK).

**Dépendances :** Lots 1–3 mergés + `index.html.bak` disponible.
**Risques :** test seulement sur écran dev → mitigation : répéter sur **le** vidéoprojecteur de la salle ; toujours garder PDF + `.bak`.
**Test de validation :** la répétition tient dans 120 min (ou skip-list §3 appliquée) ; PDF ouvrable hors ligne ; navigation + clavier validés sur la machine de salle.

---

## 3. Ordonnancement 120-min risk-aware

### 3.1. Fenêtres de tâches (avant J)

- [ ] **J-3 :** Lots 0 → 1 (merge P0) → 2.
- [ ] **J-1 :** Lot 3 + première répétition chronométrée.
- [ ] **Jour J-0 matin :** Lot 4 (test salle, PDF, plan B).

### 3.2. Skip-list (à couper en premier si retard)

À annoncer et assumer à voix haute (`AMELIORATIONS-IMMERSIVES.md:153`) :

- [ ] `16` — Vite/React/Next : 60s → 20s, ou survol.
- [ ] `28` — quasi vide : 20s.
- [ ] `49` — flash taxonomie réduit.
- [ ] `59` — flash réduit.
- [ ] `74` — 30s, sautable (flash).

Règle de rattrapage (`:203-204`) :
- [ ] Retard > 5 min à `40` → `16,28` en 20s ; **garder `41` (exo panier) intact**.
- [ ] Retard > 8 min à `65` → `49,51,59` en flash ; **garder `60` (exo typage) intact**.

### 3.3. Ce qu'on ne coupe JAMAIS

- [ ] `71` — rituel prédiction (3 min).
- [ ] `72` — binômes (5-6 min).
- [ ] `75` — tests manuels (3 min).
- [ ] `83` — cérémonie d'engagement (3 min).

Corollaire : **l'atelier `63–76` est protégé** ; on coupe avant (`:119`).

### 3.4. Budget par bloc (rappel, source `AMELIORATIONS-IMMERSIVES.md:79-137`)

| Bloc | Slides | Cible |
|---|---|---|
| 00–15 | 01–06 | pacte + diagnostic `05` (5 min) |
| 15–40 | 07–23 | 18 min visés + 7 min buffer |
| 40–65 | 24–45 | remontée par le live ; exo `41` (5 min) |
| 65–82 | 46–62 | rythme haché ; exo `60` (3 min) |
| 82–108 | 63–76 | **protégé** ; `71`+`72`+`75` intacts |
| 108–120 | 77–83 | battles + cérémonie `83` |

---

## 4. Checklist J-3 / J-1 / Jour J / J+2

### 4.1. J-3 — prépa & gel

- [ ] Lot 0 exécuté : `index.html.bak.<date>` + copie Temp.
- [ ] Hash de base noté (`git rev-parse --short HEAD`).
- [ ] Lot 1 (P0) mergé et `npm run check` vert.
- [ ] Windows de tâches Lot 2 ouverts.

### 4.2. J-1 — builds & répète

- [ ] Lot 2 (timer/audio muet/presenter/progress) validé.
- [ ] Lot 3 (reveal/final 83/fiche mémo) validé.
- [ ] `npm run check` → 83 slides OK.
- [ ] Répétition chronométrée 120 min (chrono réel).
- [ ] PDF 83 slides + fiche mémo générés et testés hors ligne.
- [ ] Parcours clavier complet validé (`⇐/⇒`, Espace, N, F, Home, End, Échap, P, R, M, D).
- [ ] Dossier démo TS prêt + 3 signatures tableau blanc + captures d'erreurs (`Task sans title`, `completed:"non"`, `addTask("   ")`).

### 4.3. Jour J — salle

- [ ] Test projecteur de la salle : `P` + `F`, lisibilité 8 m, mode clair/sombre.
- [ ] Son **muet par défaut** confirmé ; montée `M` testée si sono dispo.
- [ ] `node --version` / `npm --version` affichables sans réseau, sinon capture `19` prête.
- [ ] Post-it formateur : 4 ponts oraux (`24,46,63,77`) + skip-list `16,28,49,59,74` + minuteur.
- [ ] Garde-fous temps réel armés (§3.2) ; `71,72,75,83` marqués « ne pas couper ».
- [ ] PDF secours ouvert dans un onglet (plan B si `index.html` défaille).

### 4.4. J+2 — conversion de l'énergie

- [ ] Dépôt + corrigé + fiche mémo partagés sous 24 h (consigne « 2 tâches dont 1 done + `filter` en 1 phrase »).
- [ ] Relance J+2 (jour 3 du plan 7j, slide `80`) : « niveau 1/2/3 ? ».
- [ ] Comptage critères §1 (vote, score `/6`, captures ≥ 5, ≥ 3 explications).
- [ ] 3 feedbacks collectés (plus clair / plus confus / ce qui a été construit).

### 4.5. Mise à jour `ISSUES-RESTANTES.md` — cases **proposées** (ne pas éditer ce fichier depuis ce plan)

À reporter dans `docs/ISSUES-RESTANTES.md` :

- [ ] **Corriger** `:5` et `:28` : « 18 diapositives » → **83 diapositives** (aligné sur `README.md:19`, `check-slides.mjs:12`).
- [ ] P0 : cocher « parcourir les 83 diapositives » (remplacer « 18 »).
- [ ] P0 : ajouter « valider `npm run check` → 83 slides ».
- [ ] P1 : ajouter « implémenter P0 immersif dans `index.html` (intro, projecteur, score, reveal) ».
- [ ] P1 : ajouter « final `83` avec QR + challenge » et « fiche mémo print-only ».
- [ ] P1 : ajouter « mode formateur `?presenter=1` + timer 60s + audio muet par défaut ».
- [ ] P1 : créer le projet complet `hashcode-task-manager` (README, scripts, types).
- [ ] Critère d'acceptation : remplacer « 18 diapositives présentes » par « **83 diapositives présentes**, `npm run check` vert ».

---

## 5. Rollback plan

**Principe :** toute modification de `index.html` est annulable en < 1 min, sans perte de la sauvegarde.

- [ ] **Sauvegarde :** `index.html.bak` (Lot 0) conservée jusqu'à J+2 ; copie additionnelle dans `…\Temp\opencode`.
- [ ] **Retour instantané :** `cp index.html.bak index.html` → `npm run check` (doit dire 83 slides OK) → recharger le navigateur.
- [ ] **Retour git :** `git status` + `git diff index.html` avant tout commit ; si régression, `git checkout -- index.html` (revient au dernier commit propre).
- [ ] **Revue obligatoire :** aucune PR/commit sans `git diff --stat` + relecture du diff `index.html` (fichier minifié → vérifier les chaînes protégées : `map transforme`, `filter sélectionne`, `reduce accumule`).
- [ ] **Feature flags de neutralisation (rollback doux, sans git) :**
  - `?mute=1` → audio coupé, quel que soit l'état.
  - `?presenter=1` → mode formateur ; retirer le paramètre revient au mode public par défaut.
  - `P` / `R` / `M` / `D` → chaque format salle désactivable par simple non-appui ; aucune option n'est activée par défaut (sauf rien), donc un lancement nu = comportement sûr.
- [ ] **Plan B absolu :** PDF secours 83 slides — si `index.html` ne repart pas, présenter le PDF et garder le Chrome de secours déjà ouvert.
- [ ] **Interdiction de commit** si `npm run check` échoue (83 slides + chaînes littérales).

---

## Annexe — Index des références (file:line)

| Élément | Emplacement réel |
|---|---|
| CSS print principal | `index.html:13` |
| CSS print couleurs noir/lime | `index.html:44` |
| Barre de progression | `index.html:367` (`#bar`), style `index.html:40-41` |
| Handler clavier unique | `index.html:377` |
| Panneau notes | `.notes` (`index.html:8`) + `#notesBtn` (`index.html:367`) |
| Footer / compteur `01 / 83` | `index.html:367` |
| Garde-fou slides | `scripts/check-slides.mjs:4,12` |
| Garde-fou chaînes | `scripts/check-slides.mjs:5-9` |
| Script de contrôle | `package.json` → `"check": "node scripts/check-slides.mjs"` |
| Skip-list canonique | `16,28,49,59,74` |
| Ne jamais couper | `71,72,75,83` |

*Owner de la validation : relecture croisée des 4 docs sources (§0). Prochaine étape : exécuter Lot 0, puis coordonner le merge de la lane `index.html` (Lot 1) avant d'ouvrir Lot 2.*
