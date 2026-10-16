# RES-17 — Tests, qualité du code et stratégie de débogage

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 40 à 60 minutes  
**Prérequis :** fonctions, erreurs, TypeScript et gestion asynchrone  
**Objectif :** vérifier le comportement attendu et réduire le risque de régression.

## Objectifs d'apprentissage

- écrire des tests unitaires pour une fonction ;
- choisir entre test unitaire, intégration et bout en bout ;
- couvrir les cas normaux, limites et erreurs ;
- déboguer avec une hypothèse vérifiable ;
- intégrer les vérifications dans un pipeline de livraison.

## 1. Pourquoi tester ?

Un test décrit un comportement attendu et le vérifie automatiquement. Les tests ne prouvent pas qu'un programme est sans défaut, mais ils détectent les régressions et rendent les changements plus sûrs.

Exemple de fonction à tester :

```ts
export function normalizeTitle(value: string): string {
  return value.trim();
}
```

Avec un outil de test tel que Vitest ou Jest, l'intention du test ressemble à ceci :

```ts
import { describe, expect, it } from "vitest";
import { normalizeTitle } from "./normalizeTitle";

describe("normalizeTitle", () => {
  it("supprime les espaces au début et à la fin", () => {
    expect(normalizeTitle("  Réviser  ")).toBe("Réviser");
  });

  it("renvoie une chaîne vide si l'entrée est composée d'espaces", () => {
    expect(normalizeTitle("   ")).toBe("");
  });
});
```

Ce code de test suppose que Vitest est installé et configuré. Les commandes exactes dépendent du dépôt.

## 2. Niveaux de test

| Niveau | Ce qui est vérifié | Exemple |
|---|---|---|
| Unitaire | Une fonction ou une unité isolée | Normalisation d'un titre |
| Intégration | Plusieurs composants ensemble | Service et dépôt de données |
| Bout en bout (E2E) | Un parcours utilisateur complet | Créer puis terminer une tâche |
| Régression | Un comportement déjà corrigé reste valide | Un bug ancien ne revient pas |

Un projet n'a pas besoin d'une quantité identique de chaque type de test. Priorise les règles métier critiques et les zones qui changent souvent.

## 3. Choisir les cas de test

Pour chaque fonction, examine :
1. un cas normal ;
2. une valeur limite ;
3. une valeur vide ou absente ;
4. une entrée invalide ;
5. une erreur de dépendance, si la fonction en utilise une.

Pour une fonction qui vérifie un titre de mission, teste par exemple un titre valide, une chaîne vide, une chaîne avec seulement des espaces et une chaîne qui dépasse la longueur maximale.

## 4. Débogage systématique

1. Reproduis le problème avec les étapes les plus courtes possibles.
2. Écris ce que tu pensais voir et ce que tu observes réellement.
3. Identifie la frontière où la valeur devient incorrecte.
4. Formule une hypothèse.
5. Vérifie-la avec un point d'arrêt, un log ciblé ou un test.
6. Corrige la cause, pas seulement le symptôme.
7. Ajoute un test qui échoue avant la correction et passe après.

Évite de modifier plusieurs éléments à la fois : cela rend la cause plus difficile à isoler.

## 5. Qualité, revue et intégration continue

Une routine simple peut exécuter :
- formatage ou vérification du format ;
- lint ;
- vérification TypeScript ;
- tests ;
- build.

Exemple de scripts, à adapter à la configuration du projet :

```json
{
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "build": "vite build"
  }
}
```

Ne copie pas ces scripts sans installer et configurer les outils correspondants. La CI doit reproduire les commandes réellement utilisées par le projet.

## 6. Erreurs fréquentes

- Tester uniquement le cas qui fonctionne.
- Écrire un test qui répète l'implémentation plutôt que de vérifier le comportement.
- Ignorer les cas limites et les erreurs.
- Utiliser des délais arbitraires pour synchroniser les tests asynchrones.
- Supprimer un test parce qu'il échoue sans comprendre la cause.
- Croire qu'une couverture élevée garantit la qualité.
- Lancer les tests localement mais ne pas les exécuter dans la CI.

## 7. Mini-exercice

Écris une fonction `isValidTitle` qui accepte les titres de 2 à 120 caractères après suppression des espaces externes. Ajoute des tests pour une valeur valide, une chaîne vide, des espaces uniquement, un titre d'un caractère et un titre trop long.

### Critères de réussite
- Les cas normaux et limites sont testés.
- Les tests décrivent le comportement métier.
- Une modification incorrecte de la fonction fait échouer au moins un test.
- Le projet peut exécuter les tests avec une commande documentée.

## Auto-évaluation

1. Quelle différence existe entre un test unitaire et un test E2E ?
2. Pourquoi faut-il tester les limites ?
3. Quelles vérifications devraient précéder le build ?
4. Pourquoi un test qui passe n'est-il pas une preuve d'absence de bugs ?

## Fiches associées
- Précédent : [RES-16 — API HTTP et état](RES-16-async-api-http-etat.md)
- Suite : [RES-18 — Sécurité applicative](RES-18-securite-validation-entrees.md)
- Mémo : [CS-07 — Erreurs et débogage](../cheatsheets/CS-07-erreurs-debugging.md)
- Mémo : [CS-10 — Checklist qualité et livraison](../cheatsheets/CS-10-checklist-qualite-livraison.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**