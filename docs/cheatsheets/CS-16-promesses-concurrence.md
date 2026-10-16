# CS-16 — Promesses et concurrence asynchrone

> HashCode Academy · Cheat Sheet

## Séquentiel ou concurrent ?
~~~js
const a = await fetch("/api/a");
const b = await fetch("/api/b");
~~~
Cette version attend successivement. Pour deux appels indépendants :
~~~js
const [a, b] = await Promise.all([
  fetch("/api/a"),
  fetch("/api/b"),
]);
~~~

## Méthodes Promise
- Promise.all : réussit si toutes réussissent ; rejette si l'une rejette.
- Promise.allSettled : attend toutes les issues.
- Promise.race : se règle selon la première promesse réglée.
- Promise.any : réussit à la première réussite ; échoue si toutes échouent.

Ces méthodes ne vérifient pas le statut HTTP des réponses fetch : examinez response.ok.

## Résultats partiels
~~~js
const results = await Promise.allSettled(tasks.map(runTask));
for (const result of results) {
  if (result.status === "fulfilled") console.log(result.value);
  else console.error(result.reason);
}
~~~

## Limiter la concurrence
Pour des milliers d'opérations, ne les lancez pas toutes automatiquement. Utilisez une file ou un limiteur et gérez les quotas du service distant.

## Annulation
AbortController peut annuler les opérations qui prennent en charge un signal. Une course avec un timer ne stoppe pas nécessairement l'opération sous-jacente : annulez-la explicitement lorsque possible.

## Choix rapide
- Dépendances séquentielles : await successivement.
- Opérations indépendantes : Promise.all.
- Résultats partiels : Promise.allSettled.
- Premier succès : Promise.any.
