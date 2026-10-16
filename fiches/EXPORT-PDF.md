# Préparer une version PDF des fiches

Les fiches sources sont en Markdown. Pour obtenir un PDF imprimable, deux méthodes sont possibles.

## Méthode 1 — sans installation

1. Ouvre [l’index des fiches](README.md) sur GitHub.
2. Ouvre la fiche à imprimer.
3. Dans le navigateur, utilise **Imprimer** (`Ctrl+P` sous Windows/Linux, `Cmd+P` sous macOS).
4. Choisis **Enregistrer au format PDF** comme destination.
5. Active les arrière-plans si tu souhaites conserver les couleurs du thème ; sinon, privilégie un fond blanc pour économiser l’encre.
6. Vérifie les sauts de page et les blocs de code dans l’aperçu avant d’enregistrer.

Cette méthode exporte une fiche à la fois et dépend du rendu Markdown affiché par GitHub.

## Méthode 2 — assembler les fiches avec Pandoc

Si Pandoc est installé, depuis la racine du dépôt, assemble les fiches dans l’ordre pédagogique :

```bash
pandoc fiches/RES-01-ecosysteme-javascript.md fiches/RES-02-environnement-de-developpement.md fiches/RES-03-variables-et-types-javascript.md fiches/RES-04-conditions-et-boucles.md fiches/RES-05-fonctions-javascript.md fiches/RES-06-tableaux-et-methodes.md fiches/RES-07-objets-et-donnees-structurees.md fiches/RES-08-introduction-typescript.md fiches/RES-09-fonctions-et-types-typescript.md fiches/RES-10-interfaces-et-modeles.md fiches/RES-11-verification-et-tests.md fiches/RES-12-construire-un-task-manager.md --toc --number-sections -o fiches/hashcode-masterclass-fiches.pdf
```

Selon l’installation de Pandoc, la création du PDF peut nécessiter un moteur LaTeX. Si cette dépendance n’est pas disponible, utiliser la méthode 1 ou installer un moteur compatible.

## Contrôle qualité avant diffusion

- [ ] Vérifier le rendu des caractères accentués.
- [ ] Vérifier les blocs de code et les tableaux.
- [ ] Vérifier qu’aucun exemple n’est coupé entre deux pages de façon illisible.
- [ ] Ajouter la date ou la version du support si les fiches sont distribuées aux apprenants.
- [ ] Tester au moins une impression en niveaux de gris.

**Note :** ce document explique comment produire le PDF ; il ne prétend pas qu’un fichier PDF a déjà été généré ou testé.
