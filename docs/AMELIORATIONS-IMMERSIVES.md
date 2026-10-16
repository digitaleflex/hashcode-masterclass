# Rendre la Masterclass hyper-immersive — Guide expert formateur

> Support : `index.html` — 83 écrans, HTML/CSS/JS offline, 120 min
> Identité : HashCode Academy — noir `#000000`, lime `#C5F441`, blanc `#FFFFFF` — LEARN · BUILD · BELONG
> Public : débutants (A), quelques notions (B), petit projet déjà fait (C)
> Devise d'animation : **Observer → Prédire → Exécuter → Expliquer → Améliorer** (slide 02)

Ce document centralise le diagnostic et va plus loin : posture de formateur, psychologie des débutants, scénarisation minute-par-minute, interactions sans outil externe, upgrades visuels offline et checklist opérationnelle.

---

## 1. Diagnostic express

### 1.1. Cinq forces à exploiter

1. **1 écran = 1 idée, règle tenue.** Comparaisons A/B (`09,13,26,34,48`), distinction `À RETENIR` vs `À VOUS`. C'est déjà un rythme.
2. **Rituels déjà câblés.** Diagnostic `05` (A/B/C), prédictions `22,71`, exercice → correction `41→42, 60→61`, mini-plan de test `75`. Il suffit de les théâtraliser, pas de les créer.
3. **Offline robuste.** Navigation `←/→/Espace/Home/End/F/N/Échap`, quiz sans backend, `print` CSS (`index.html:264-275`). Zéro dépendance réseau = plan B naturel.
4. **Exactitude technique saine.** Cf. `docs/PLAN-DIAPORAMA.md:51-58` : TS ≠ runtime, `map/filter/reduce` corrects, `?.` slide 11 bien noté, `npm/Vite/React/Next` bien classés.
5. **Atelier convergent `64→76`.** Problème → modèle `65` → socle `67-70` → défi `73` → test `75` → bilan `76`. Belle boucle BUILD.

### 1.2. Cinq tueurs d'immersion

| # | Risque | Slides | Symptôme débutant |
|---|--------|--------|-------------------|
| 1 | **Tout se ressemble** | Tous gabarits `cards/compare/code/callout/quiz` | Après slide 10, le cerveau décroche : plus de surprise, plus de signal « moment important ». |
| 2 | **Réponse affichée d'emblée** | `22,29,42,71` (code + sortie en clair) | On ne prédit pas, on lit. Le réflexe « prédisez » des `data-notes` n'a aucun support visuel. |
| 3 | **Quiz sans jeu** | `17,27,44,53,77,78` | One-shot, `disabled` définitif, pas de score, pas de rejouer. Inaudible au fond de salle. |
| 4 | **Tunnels magistraux** | `07-16` taxonomie, `29-40` JS en chaîne, `48-59` TS abstrait | A noyé dès `reduce` (38), C frustré par panier trop facile (41), B perdu en `union` (54) / `bio?` (57). |
| 5 | **Clôture molle + mode formateur inutilisable** | `83` = 1 phrase ; `aside#notesPanel` masque le slide projeté | On finit sur « merci » au lieu d'un engagement. Formateur sans vue temps restant / slide suivante. |

Détails visuels (audit complet) : texte trop petit pour projecteur (`code 12px`, `feedback 13px`, gris `#B8B8B8` délavé en salle claire), une seule animation `enter .18s`, `progress 3px` invisible à distance, `overflow:auto` risque de scroll caché, `À VOUS` et `À RETENIR` même style, slides `16` et `28` quasi vides.

---

## 2. Comprendre les débutants — ce que l'experte ne rate jamais

### 2.1. Les 5 peurs d'un débutant en salle

1. **Peur de paraître bête.** Ne répondra jamais si la première réponse est jugée. → Toujours proposer `poing levé = je ne sais pas`, valorisé autant qu'une bonne réponse.
2. **Surcharge cognitive.** 5 bullets abstraits `04,07,49,59` = mémoire saturée. → Règle des 3 : max 3 idées neuves par tranche de 10 min, le reste = répétition déguisée.
3. **Anxiété du terminal.** `18-21` (`node --version`, `npm init -y`) fait peur aux A, ennuie les C. → Ne jamais faire taper toute la salle en même temps. 2 pilotes projetés, les autres observent et prédisent.
4. **Illusion de compréhension.** « J'ai compris » après lecture passive `36-38`. → Exiger une prédiction écrite ou gestuelle **avant** chaque reveal. Pas de vote = pas de reveal.
5. **Perte du fil.** 83 écrans = 1,4 min/écran en moyenne. → Annoncer l'itinéraire (slide 06) et dire constamment « où on est » : rituel « Vous êtes ici » sur chaque transition `24,46,63`.

### 2.2. Posture du formateur immersif

- **Debout, voix haute, silence assumé.** Après chaque question (`05,22,71`), compter 10 secondes en silence en regardant la salle. C'est le silence qui fait voter, pas la répétition de la question.
- **Ne jamais donner la réponse en premier.** Correction toujours par un participant (`42,61,73`), le formateur complète et nomme : « Merci Awa, exacte intuition sur `reduce`. »
- **Lire l'erreur à voix haute, méthode slide 23.** Type → fichier:ligne → 1 seul changement → retester. Planter exprès (`addTask("   ")`, `Task sans title`, `5 == "5"`) désacralise le bug.
- **Différencier sans stigmatiser.** Dès `05`, assigner des rôles : A = posent les questions (prime à la question « naïve »), B = expliquent au voisin, C = bonus + aide sans toucher le clavier des autres.
- **Timebox annoncé à voix haute.** « 3 minutes, chrono lancé, écrans baissés sauf les 2 pilotes. » Sonne la fin même si tout le monde n'a pas fini : l'énergie prime sur l'exhaustivité.

### 2.3. Les 4 ponts oraux à apprendre par cœur

Coller sur post-it machine, dire mot pour mot à chaque transition :

- `06→07` : « On a la carte, on prépare le moteur. »
- `24` : « Carte + moteur en place. Maintenant le langage. »
- `46` : « Le code est ambigu. On va écrire le contrat. »
- `63` : « Les contrats sont clairs. On construit le produit. »
- `77` : « Le produit tourne. On prouve qu'on a compris. »

---

## 3. Scénarisation 120 minutes — le déroulé qui tient la salle

Principe de timeboxing : **20s = transition, 60-90s = notion, 2-3 min = code live, 5 min = interaction.** ~60 écrans en <60s, 23 écrans prennent 85% du temps.

```
Énergie
  ^                             **** Atelier 82-108 ****    * Finale *
  |  * Ouverture *  * JS live * *                          * 108-120 *
  | * 00-15 *      \ 40-65  \_/         \_________________/
  |              creux 15-40   creux TS 65-75
  +--------------------------------------------------------> 120 min
```

### 3.1. 00–15 Ouverture — pacte + tension (01–06)

| Min | Slides | Animation |
|-----|--------|-----------|
| 00-03 | `01` 20s, `02` 60s | Entrée pleine énergie. Boucle Observer→Prédire→Exécuter. Promesse : « vous repartirez avec Task Manager qui tourne ». `F` plein écran. |
| 03-08 | `03,04` 2×60s | Contrat : « pas expert en 2h ». Faire lire les 5 objectifs `04` par 5 voix différentes. « On s'auto-notera en 82. » |
| 08-13 | `05` **5 min, moment clé** | Main levée A/B/C + comptage à voix haute. Question : « quel mot vous embrouille le plus entre JS/TS/framework ? » Noter 3 mots au tableau, y revenir en `45,62,82`. |
| 13-15 | `06` 60s + amorce `07` 60s | Itinéraire + phrase-pont. |

### 3.2. 15–40 Outils — le creux à gamifier (07–23)

Viser 18 min + 7 min buffer. Ne pas faire 25 min magistral.

- **Flash 20-30s :** `08,10,12,14,15,18` — titre + 1 phrase, avancer. `16 Vite/React/Next` : 60s max, « classer, pas maîtriser ».
- **Code 90s :** `11 ?.`, `19 node --version`, `20 npm init -y`, `21 node hello.js` — terminal pré-ouvert, copier-coller, ne pas tout taper.
- **Interactions :** `17` quiz Node.js **3 min battle** gauche vs droite (cri, perdant applaudit). `22` prédiction Cotonou **3 min rituel doigts**. `23` 90s : vraie stack trace, lire la méthode à voix haute.
- **Gestion niveaux :** A rassuré (« on ne fixe pas l'install aujourd'hui, machine prête »), C missionné (« explique à ton voisin pourquoi `document` casse sous Node », slide 13).
- **Plan B :** si `node` absent : slide `19` → « versions sur capture PDF », on continue. Jamais d'install live devant 30 personnes.

### 3.3. 40–65 JavaScript — remontée par le live (24–45)

| Min | Slides | Animation |
|-----|--------|-----------|
| 40-42 | `24` 20s, `25,26` 2×60s | Changer de voix, se lever. `const/let` : « prix fixe ? compteur ? » |
| 42-44 | `27` quiz 2 min | Vote doigts. Faire justifier la mauvaise réponse. |
| 44-50 | `28` 30s, `29,30,31,32` 4×90s | Chaque code = prédiction 10s. `29` faire crier `"52"`, `3`, `false`. `30 ===` : marteler la règle. |
| 50-56 | `33-38` 6×60-90s | Enchaîné rapide. Geste main : transformer / filtrer / accumuler. `34` : « aujourd'hui lisibilité, `this` un autre jour ». |
| 56-62 | `39,40` 2×60s + `41` **5 min exo panier** + `42` 2 min | `41` : « écris en 1 phrase ce que fait ton programme avant coder ». Binômes A+B, C fait bonus `length` + version boucle si `reduce` bloque. Correction par binôme. |
| 62-65 | `43` 60s, `44` quiz 2 min, `45` 60s | `44` piège `6 vs [2,4,6]` : « pourquoi 6 = reduce ? ». `45` : 5 volontaires reformulent 1 repère chacun. Pont vers TS. |

### 3.4. 65–82 TypeScript — abstraction dangereuse, rythme haché (46–62)

- **Flash 60s :** `46,49,51,59` — lus vite, sinon endormissement.
- **Cœur :** `47 double("bonjour")` 2 min live bug, `48` JS vs TS 90s, `50` 60s, `52 calculateTotal` 90s (« quantity string ? »).
- **Quiz `53` 2 min battle.** Modèle `54-58` : 5×60-90s, montrer erreur compilateur réelle pré-capturée (manque `title`, `completed:"non"`). Insister : optionnel `?` ≠ nullable.
- **Exo `60` 3 min + `61` 90s.** Différenciation : A = signature seule, B = + corps `trim()`, C = + bonus `priority:number` + « titre vide ? ».
- `62` 60s : transition atelier.

### 3.5. 82–108 Atelier — pic d'immersion, à protéger (63–76)

Ne jamais sacrifier ici pour rattraper du retard. Couper avant (`16,28,49,59` sautables).

| Min | Slides |
|-----|--------|
| 82-86 | `63` 20s, `64` 2 min critères, `65` 90s modèle, `66` 60s, `67` 90s `tasks/nextId` + limite « mémoire, pas DB » |
| 86-94 | `68,69,70` 3×2-3 min live codé. Lire `trim/throw/find/void/?:` à voix haute. Planter volontaire `addTask("")`. |
| 94-97 | `71` **3 min rituel prédiction**. Attendu : `✓1 Lire doc, ○2 Pratiquer`. Vote avant `listTasks()`. |
| 97-104 | `72` **5-6 min binômes** + `73` 2 min + `74` 30s + `75` **3 min tests**. Consigne : 1 cas normal + 1 cas limite (`999 → false` sans planter). Circuler, ne pas donner la solution. C = `removeTask`, A = refaire `completeTask(1)`. |
| 104-108 | `76` 90s bilan. « Quel concept le plus utile / à retravailler ? » |

Plan B démo : dossier `tasks-demo.ts` prêt + capture PDF + 3 signatures au tableau blanc. Si TS ne compile pas : bascule JS pur, contrat dit à l'oral, corrigé promis.

### 3.6. 108–120 Ancrage — clôture mémorable (77–83)

- `77,78` 2×2 min battle finale, score salle.
- `79` 60s : faire répéter en chœur les 3 questions (entrée ? attendu ? vérif ?).
- `80` 90s : engagement niveau 1/2/3 main levée, lien avec A/B/C initial.
- `81` 60s plan 7j, `82` 90s auto-note 0-5 vs objectifs `04`.
- `83` **3 min cérémonie**, debout : « Comprendre. Construire. Partager. Montrez-moi 2 tâches dont 1 done — postez capture, expliquez `filter` en 1 phrase. LEARN · BUILD · BELONG. » Photo, applaudissements. Ne jamais finir sur la logistique.

---

## 4. Boîte à outils du formateur — 12 techniques qui marchent avec des débutants

1. **Vote doigts 10s** (`22,27,44,53,71,77,78`). 1/2/3 doigts, poing = perdu. 100% participation, zéro outil, zéro honte.
2. **Binômes imposés A+C** dès `41`. C explique sans toucher le clavier, A tape. Inverser en `72`. C progresse en enseignant, A en manipulant.
3. **Lecture chorale** (`04,79,82`). Objectifs, réflexe, synthèse lus par la salle, pas par le formateur. Mémorisation + énergie.
4. **Tableau vivant.** Reporter confusions `05`, sortie `29`, contrat `48`, 3 scénarios `75`. Ne rien effacer avant `82` : le tableau est la mémoire du groupe.
5. **Timer vocal strict.** « 3 min, chrono lancé. » Sonne la fin même si inachevé : l'énergie prime sur l'exhaustivité.
6. **Question relance des `data-notes`.** Les utiliser telles quelles au lieu d'improviser : « pourquoi 6 = reduce ? » (44), « pourquoi cas 999 important ? » (75), « que change `===` ? » (30).
7. **Écrans baissés sauf pilotes.** Pendant chaque `À VOUS`, 2 pilotes projetés codent, les autres raisonnent. Évite le décrochage silencieux sur clavier.
8. **Bataille de moitiés de salle.** Quiz en duel gauche/droite avec cri. Perdant applaudit. Ridicule 30 secondes, souvenir 2 heures.
9. **Bug volontaire + autopsie.** Planter exprès, rester calme, appliquer slide 23 à voix haute. Leçon : l'erreur est une info, pas une faute.
10. **Phrase avant code.** Exiger « en 1 phrase, que doit faire ton programme ? » (`41,60,72`). Divise par deux les hors-sujet.
11. **Skip-list annoncée et assumée.** « On survole `16,28,49,59`, la fiche vous couvre. » Autorise le rythme sans culpabilité.
12. **Célébration explicite.** Nommer les bonnes intuitions, applaudir le premier `✓ done`, photographier le tableau final. BELONG n'est pas un slogan, c'est ce moment.

---

## 5. Upgrades du support — priorisés, offline, identité préservée

Contraintes : aucune dépendance distante, garder `#000/#C5F441/#FFF`, `radius 2-3px`, `LEARN·BUILD·BELONG`, tester `print` après chaque ajout, respecter `prefers-reduced-motion`.

### P0 — effet salle immédiat (~1h de dev)

| # | Problème (slides) | Proposition | Effet |
|---|-------------------|-------------|-------|
| P0-1 | Ouverture identique aux autres (`01,24,46,63`) | Compte à rebours `3·2·1·CODE` lime 90px CSS seul + stagger `h1→lead→tags→orb` + grand chiffre `02/04` et wipe lime 600ms sur transitions | Rupture bruit→silence, repère 120 min |
| P0-2 | Sortie affichée d'emblée (`22,29,42,71`) | `.output` flouté `blur(6px)` + bouton `Révéler [R]` ; bouton `Exécuter` via `new Function` sandboxé (`console,Math,Array`) pour JS pur ; timer 20s sur `22,71` | Suspense + erreur autorisée, cœur de la promesse slide 02 |
| P0-3 | Illisible à 8m | Touche `P` + bouton footer → `body.projector` : `bullets 20px, code 18px/1.7, lead 22px, muted→#FFF, bordures lime 2px` | Confort, moins de fatigue, souveraineté salle claire/sombre |
| P0-4 | Quiz amnésique (`17,27,44,53,77,78`) | Bandeau `SCORE 03·SÉRIE 🔥2`, +100 + flash lime 300ms / shake 200ms, bouton `Rejouer`, icône `?` quiz vs `!` débat, total `/6` en `78` | Tension ludique sans infantilisation |

### P1 — théâtralisation sobre (~2h)

- **P1-5 Transitions chapitres** (`24,46,63`) : bandeau lime 4px traversant 500ms + miniature « Vous êtes ici » reprise de `06`.
- **P1-6 Stations énergie** (`05,28,45,62,75`) : minuteur 60s cercle SVG `setInterval` + consigne physique (« levez main A/B/C », « expliquez au voisin en 20s »). Remplir slides fantômes `16` (table Vite/React/Next) et `28` (7 primitifs en chips).
- **P1-7 Son/lumière offline, coupés par défaut** : WebAudio natif (bip `660Hz` succès, `180Hz` erreur, arpège transition), bouton `🔇` / touche `M`, flash lime 150ms. Contexte créé au 1er clic (autoplay policy).
- **P1-8 Vrai mode formateur** : `?presenter=1` ou touche `D` → slide + colonne notes + `minute X/120 + suivante`. Public : notes masquées. Garder `print` pour handout.
- **P1-9 Progress + hero vivants** : progress en 5 jalons chapitres (point pulsant), hero `01` orbite lente `rotate 24s` des 4 tags, ombre lime douce sur `orb`. Couper <760px et en `reduced-motion`.

### P2 — polish si temps

- **P2-10 Révélation progressive** (`04,07,30,48,59`) : `Espace` révèle `li` un par un (autres à 25% opacité) + compteur `2/5`. Le formateur raconte, le public suit.
- **P2-11 Final qui engage** (`80-83`) : `83` = `MERCI + QR SVG inline + challenge 1/2/3 + Revoir mon score + #HashCode`. Confetti lime CSS unique.
- **P2-12 Mobile rattrapage** : hint `← swipe →`, `quiz-option min-height 48px`, `output` non flouté par défaut. Desktop-first assumé (16:9 projeté).

Ordre conseillé : P0 en 1h (intro + projecteur + score + floutage), puis P1 (wipe + timer + presenter + bip muet), puis P2 si temps.

---

## 6. Checklist opérationnelle

### Avant la séance (J-3 → J-1)

- [ ] Tester `index.html` sur machine + projecteur de la salle : nav, `F`, `N`, quiz, progress.
- [ ] Préparer dossier démo TS prêt + capture PDF de secours + 3 signatures au tableau blanc.
- [ ] Vérifier `node --version` / `npm --version` affichables sans réseau ; sinon capture prête (slide 19).
- [ ] Pré-capturer erreurs : `Task sans title`, `completed:"non"`, `addTask("   ")` (slides 56, 68).
- [ ] Imprimer fiche mémo 1 page (ou prévoir `Ctrl+P` section `print-only`) + PDF secours 83 slides.
- [ ] Post-it machine : 4 ponts oraux + skip-list `16,28,49,59,74` + minuteur.
- [ ] Adapter densité à la salle : activer `body.projector` si salle claire / >30 personnes.

### Pendant — garde-fous temps réel

- [ ] Si retard >5 min à `40` : passer `16,28` en 20s, garder `41` exo panier intact.
- [ ] Si retard >8 min à `65` : passer `49,51,59` en flash, garder `60` exo typage.
- [ ] Ne jamais couper `71` (prédiction), `72` (binômes), `75` (tests), `83` (cérémonie).
- [ ] Changer de position/voix à chaque `section-screen` (`24,46,63`).
- [ ] Faire voter avant chaque reveal, sans exception.

### Après — convertir l'énergie

- [ ] Partager dépôt + corrigé + fiche mémo sous 24h avec consigne : « postez capture 2 tâches dont 1 done + `filter` en 1 phrase ».
- [ ] Relancer J+2 (jour 3 du plan 7j) : « où en êtes-vous du niveau 1/2/3 ? » (slide 80).
- [ ] Collecter 3 feedbacks : le plus clair / le plus confus / ce que tu as construit.
- [ ] Mettre à jour `docs/ISSUES-RESTANTES.md` : cocher P0 séance, créer `hashcode-task-manager` complet + guide transitions (P1 manquants).

---

## 7. Indicateurs que c'était immersif

- 80%+ de la salle vote à chaque quiz (doigts visibles).
- Au moins 3 participants expliquent une correction au lieu du formateur.
- Tous les binômes ont un `listTasks()` qui affiche `✓` et `○` en fin d'atelier.
- La salle répète les 3 questions `79` sans lire.
- 5+ captures Task Manager postées sous 48h avec explication `filter`.

---

*Fichier généré à partir de l'audit `index.html` (83 écrans), `README.md`, `docs/PLAN-DIAPORAMA.md`, `docs/ISSUES-RESTANTES.md`. Prochaine étape au choix : enrichir les `data-notes` avec les questions de relance, ou implémenter les 4 fix P0 dans `index.html`.*
