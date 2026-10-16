# CS-07 — Erreurs et débogage

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 08 gestion erreurs debogage](../resumes/RES-08-gestion-erreurs-debogage.md) · [RES 17 tests qualite debugging](../resumes/RES-17-tests-qualite-debugging.md)

**Application pratique :** Reproduis le bug, formule une hypothèse, écris un test de reproduction et vérifie la correction.

## Catégories
- Syntaxe : le code ne peut pas être analysé.
- Exécution : une opération échoue à l'exécution.
- Logique : le programme s'exécute, mais le résultat est incorrect.
- Réseau/configuration : endpoint, permissions, variables ou dépendances incorrects.

## try/catch
~~~js
try {
  const result = await operation();
  console.log(result);
} catch (error) {
  const message = error instanceof Error ? error.message : "Erreur inconnue";
  console.error(message);
}
~~~
Ne capturez pas une erreur si vous ne pouvez ni la traiter ni ajouter de contexte utile. Évitez les catch vides.

## Routine de débogage
1. Reproduire l'erreur.
2. Lire le message et la trace.
3. Réduire le cas.
4. Inspecter les valeurs et types.
5. Formuler une hypothèse.
6. Tester une seule modification.
7. Ajouter un test de régression.

## Console utile
~~~js
console.log(value);
console.table(records);
console.error(error);
console.time("operation");
// opération
console.timeEnd("operation");
~~~

## DevTools
- Sources : points d'arrêt et exécution pas à pas.
- Network : requêtes, statuts, payloads et temps.
- Console : erreurs et valeurs.
- Application/Storage : cookies et stockage local.
- Inspecteur DOM : structure, styles et accessibilité.

## Bonnes pratiques
- Ne pas journaliser mots de passe, tokens ou données privées.
- Corriger la cause plutôt que masquer le symptôme.
- Tester le cas qui échouait après la correction.
- Distinguer erreur attendue et incident inattendu.
