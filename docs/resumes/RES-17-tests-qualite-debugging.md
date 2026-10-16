# RES-17 — Tests, qualité du code et stratégie de débogage

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Écrire des tests utiles, distinguer les niveaux de test et diagnostiquer les causes d'un problème.

## 1. Tests unitaires
Un test documente le comportement attendu et détecte les régressions. Un bon test est ciblé, lisible, déterministe et indépendant des autres tests.

~~~ts
export function normalizeTitle(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}
~~~

Exemple avec Vitest :
~~~ts
import { describe, expect, it } from "vitest";
import { normalizeTitle } from "./normalizeTitle";

describe("normalizeTitle", () => {
  it("supprime les espaces aux extrémités", () => {
    expect(normalizeTitle("  Réviser  ")).toBe("Réviser");
  });

  it("réduit les espaces consécutifs", () => {
    expect(normalizeTitle("Lire   TypeScript")).toBe("Lire TypeScript");
  });

  it("normalise une chaîne vide", () => {
    expect(normalizeTitle("   ")).toBe("");
  });
});
~~~

Le comportement attendu dépend du contrat métier. Si un titre vide est interdit, validez cette règle explicitement et testez-la.

## 2. Niveaux de test
- **Unitaire** : une fonction ou unité isolée.
- **Intégration** : plusieurs composants collaborent, par exemple un service et une base de données.
- **End-to-end (E2E)** : parcours utilisateur complet dans un environnement proche de la production.

Les mocks sont utiles, mais ne prouvent pas que la vraie dépendance fonctionne.

## 3. Cas à couvrir
Pour chaque fonction, pensez aux cas nominaux, limites, valeurs vides, entrées invalides, erreurs de dépendances et permissions insuffisantes lorsque pertinent. Testez les résultats observables plutôt que de recopier l'implémentation dans les assertions.

## 4. Débogage systématique
1. Reproduire le problème.
2. Lire le message d'erreur et la trace.
3. Réduire le cas à un exemple minimal.
4. Inspecter les valeurs et les types au moment de l'échec.
5. Formuler puis vérifier une hypothèse.
6. Corriger la cause et ajouter un test de régression.
7. Lancer les tests ciblés, puis la suite complète.

Utilisez les points d'arrêt du debugger, la console, l'inspecteur réseau et les rapports de test. Ne journalisez pas de mots de passe, tokens ou données sensibles.

## 5. Qualité et CI
Une pipeline peut exécuter le formatage, le lint, la vérification TypeScript (tsc --noEmit), les tests et le build. Une vérification de types n'est pas un test fonctionnel ; un build réussi ne prouve pas que toutes les règles métier sont correctes.

## Erreurs fréquentes
- Tester seulement le chemin heureux.
- Dépendre de l'ordre des tests.
- Modifier le test pour faire passer un bug.
- Ignorer les erreurs asynchrones.
- Appeler un service externe instable depuis un test unitaire.

## Mini-exercice
Écrivez des tests pour normalizeTitle, puis introduisez temporairement un bug qui ne normalise que le premier groupe d'espaces. Vérifiez que le test détecte le problème avant de corriger la fonction.

**Suite :** RES-18 — Sécurité applicative et validation des entrées.
