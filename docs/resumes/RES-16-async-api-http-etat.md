# RES-16 — Programmation asynchrone, API HTTP et gestion d'état

> HashCode Academy · HashCode Masterclass · Série RES

## Objectifs
Comprendre les promesses, utiliser async/await, appeler une API avec fetch et gérer les erreurs HTTP.

## 1. Promise et async/await
Une Promise représente une valeur future ou un échec. Une fonction async renvoie toujours une promesse.

~~~ts
async function loadMessage(): Promise<string> {
  return "Données chargées";
}
~~~

## 2. Appeler une API
~~~ts
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

async function fetchTasks(): Promise<Task[]> {
  const response = await fetch("/api/tasks");
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) {
    throw new Error("Format de réponse invalide");
  }

  // Contrôle minimal : valider aussi chaque propriété en production.
  return payload as Task[];
}
~~~

fetch ne rejette pas automatiquement sa promesse pour les statuts HTTP 400 ou 500 : vérifiez response.ok. Vérifier seulement Array.isArray ne prouve pas que chaque élément respecte le type Task.

## 3. Représenter l'état
Une interface distingue généralement idle, loading, success et error. Une union discriminée rend ces états explicites.

~~~ts
type LoadState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

async function loadTaskState(): Promise<LoadState<Task[]>> {
  try {
    return { status: "success", data: await fetchTasks() };
  } catch (error: unknown) {
    const message = error instanceof Error
      ? error.message
      : "Une erreur inconnue est survenue";
    return { status: "error", message };
  }
}
~~~

## 4. Méthodes HTTP
- GET : lire une ressource.
- POST : créer ou déclencher une opération.
- PUT : remplacer une ressource selon le contrat de l'API.
- PATCH : modifier partiellement.
- DELETE : supprimer.

~~~ts
const response = await fetch("/api/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Réviser TypeScript" }),
});

if (!response.ok) throw new Error("Création impossible");
~~~

Vérifiez la réponse, validez les données reçues, gérez l'authentification et les erreurs. Ne placez aucun secret serveur dans le code livré au navigateur.

## 5. Annulation
~~~ts
const controller = new AbortController();
const response = await fetch("/api/tasks", {
  signal: controller.signal,
});
// Si la réponse n'est plus utile : controller.abort();
~~~

L'annulation est utile lors d'une navigation ou d'une recherche rapide. Distinguez une annulation attendue d'une erreur réseau.

## Erreurs fréquentes
- Oublier response.ok.
- Croire qu'une assertion de type valide le JSON.
- Afficher des erreurs techniques brutes à l'utilisateur.
- Laisser une réponse ancienne remplacer les résultats les plus récents.
- Exposer une clé secrète dans le frontend.

## Mini-exercice
Écrivez createTask(title) avec une requête POST, une vérification du statut et une validation des données retournées. Testez les réponses de succès, d'erreur HTTP et de réseau.

**Suite :** RES-17 — Tests, qualité du code et stratégie de débogage.
