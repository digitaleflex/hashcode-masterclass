# RES-16 — Programmation asynchrone, API HTTP et gestion d'état

**Collection :** HashCode Academy — Fiches de résumé  
**Niveau :** Intermédiaire  
**Durée indicative :** 40 à 55 minutes  
**Prérequis :** promesses, async/await, types, DOM  
**Objectif :** appeler une API, interpréter la réponse HTTP et représenter clairement les états d'une interface.

## Objectifs d'apprentissage

- appeler une API avec `fetch` ;
- distinguer erreur réseau, rejet et statut HTTP d'erreur ;
- typer prudemment les données reçues ;
- représenter les états chargement, succès et erreur ;
- annuler une requête lorsque cela est nécessaire.

## 1. Appeler une API

```ts
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

async function fetchTasks(signal?: AbortSignal): Promise<Task[]> {
  const response = await fetch("/api/tasks", { signal });

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) {
    throw new Error("Format de réponse inattendu");
  }

  // Cette vérification n'est que structurelle et minimale :
  // il faut valider chaque élément avant de le traiter comme Task.
  return payload as Task[];
}
```

Point essentiel : `fetch` rejette généralement sa promesse en cas de problème réseau ou d'annulation, mais pas automatiquement pour les statuts HTTP 404 ou 500. Vérifie `response.ok` ou `response.status`.

L'assertion `as Task[]` ci-dessus ne constitue pas une validation complète. Dans une application de production, valider les propriétés de chaque objet ou utiliser un validateur de schéma.

## 2. Les différents types d'échec

| Situation | Exemple | Réaction recommandée |
|---|---|---|
| Réseau | Connexion interrompue | Message de connexion et possibilité de réessayer |
| HTTP | 401, 403, 404, 500 | Traiter selon le statut et le contrat API |
| Format inattendu | JSON qui ne correspond pas au modèle | Refuser les données invalides |
| Annulation | L'utilisateur quitte l'écran | Éviter d'afficher une erreur comme si la requête avait échoué normalement |
| Erreur métier | Titre déjà utilisé | Afficher un message adapté au champ ou à l'action |

Ne présente pas un message technique brut au public. Les détails peuvent être consignés dans les logs, sans exposer de secrets ou de données sensibles.

## 3. Représenter l'état de l'interface

Une union discriminée rend les états explicites :

```ts
type LoadState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function describeState<T>(state: LoadState<T>): string {
  switch (state.status) {
    case "loading":
      return "Chargement…";
    case "success":
      return "Chargement terminé";
    case "error":
      return state.message;
  }
}
```

Évite d'accumuler des booléens indépendants comme `isLoading`, `hasError` et `isSuccess` si cela permet des combinaisons contradictoires. Un modèle d'état explicite facilite le rendu et les tests.

## 4. Annuler une requête

```ts
const controller = new AbortController();

try {
  const tasks = await fetchTasks(controller.signal);
  console.log(tasks);
} catch (error) {
  if (error instanceof DOMException && error.name === "AbortError") {
    // Annulation attendue : ne pas afficher un message d'échec générique.
  } else {
    throw error;
  }
}

// Lorsque l'opération n'est plus utile :
// controller.abort();
```

Dans une interface, annule une requête lorsqu'un composant est démonté ou qu'une nouvelle recherche rend l'ancienne inutile. Le traitement exact dépend du framework et du cycle de vie de l'écran.

## 5. Écriture HTTP et contrats

- `GET` : lire une ressource.
- `POST` : soumettre une création ou une action.
- `PUT` : remplacer une ressource selon le contrat de l'API.
- `PATCH` : modifier une partie d'une ressource.
- `DELETE` : demander la suppression d'une ressource.

Les méthodes et les statuts ne remplacent pas la documentation du contrat. Vérifie le format du corps, les codes de réponse, l'authentification requise et les erreurs métier.

## 6. Erreurs fréquentes

- Oublier `response.ok`.
- Faire confiance au JSON uniquement parce qu'il est syntaxiquement valide.
- Utiliser une assertion TypeScript comme validation d'entrée.
- Afficher un écran vide pendant le chargement sans indicateur.
- Ne pas distinguer l'état vide d'une erreur.
- Afficher un message d'erreur après une annulation volontaire.
- Autoriser plusieurs soumissions simultanées sans politique claire.

## 7. Mini-exercice

Construis une fonction qui charge des tâches et renvoie un état `LoadState<Task[]>`. Elle doit représenter chargement, succès et erreur. Ajoute une action « Réessayer » conceptuelle et explique quand la requête doit être annulée.

### Critères de réussite
- Les erreurs HTTP sont détectées.
- Les données externes ne sont pas considérées fiables par défaut.
- L'état vide est distinct de l'état erreur.
- L'annulation est traitée séparément.
- Les messages utilisateurs restent compréhensibles.

## Auto-évaluation

1. Pourquoi un 404 ne déclenche-t-il pas automatiquement un rejet de `fetch` ?
2. Pourquoi le type `Task[]` ne garantit-il pas la forme du JSON ?
3. Quels états une interface de chargement devrait-elle distinguer ?
4. Quand annuler une requête ?

## Fiches associées
- Précédent : [RES-15 — TypeScript dans le navigateur](RES-15-typescript-dom-formulaires-evenements.md)
- Suite : [RES-17 — Tests et qualité](RES-17-tests-qualite-debugging.md)
- Mémo : [CS-05 — Promesses, async/await et fetch](../cheatsheets/CS-05-async-promises-fetch.md)
- Mémo : [CS-16 — Concurrence asynchrone](../cheatsheets/CS-16-promesses-concurrence.md)

---
**HashCode Academy · LEARN · BUILD · BELONG**