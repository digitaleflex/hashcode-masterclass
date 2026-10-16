# CS-05 — Promesses, async/await et fetch

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 09 async promises async await](../resumes/RES-09-async-promises-async-await.md) · [RES 16 async api http etat](../resumes/RES-16-async-api-http-etat.md)

**Application pratique :** Teste séparément une réponse réussie, un statut HTTP d'erreur, une panne réseau et une annulation.

## Promesse
~~~js
async function loadData() {
  const response = await fetch("/api/data");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

loadData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
~~~
Une fonction async renvoie une Promise. await attend son règlement dans une fonction async.

## Points importants
- fetch rejette pour certaines erreurs réseau, mais pas automatiquement pour un statut HTTP 400 ou 500.
- Vérifiez response.ok.
- response.json() est asynchrone et ne garantit pas la forme du contenu.
- Validez les données externes à l'exécution.
- Utilisez try/catch pour traiter une erreur que vous pouvez réellement gérer.

## Requête POST
~~~js
const response = await fetch("/api/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Réviser" }),
});
if (!response.ok) throw new Error("Création impossible");
~~~

## Annulation
~~~js
const controller = new AbortController();
const request = fetch("/api/data", { signal: controller.signal });
// Plus tard, si inutile :
controller.abort();
~~~

## États d'interface
Représentez explicitement : idle, loading, success, error. Évitez plusieurs booléens qui peuvent former des états contradictoires.

## Erreurs courantes
- Oublier await ou return.
- Oublier response.ok.
- Avaler une erreur sans la signaler.
- Exposer une clé secrète dans le frontend.
- Laisser une réponse ancienne écraser une recherche récente.
