# Exemples — Web APIs et performance

## fetch robuste
```js
export async function fetchJson(url, signal) {
  const response = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("application/json")) throw new TypeError("JSON attendu");
  return response.json();
}
```

## Notion clé
fetch, erreurs HTTP, AbortController, stockage, accessibilité clavier, mesures de performance et réponses obsolètes.

## Vérification
Tester 200/404, JSON invalide, annulation, réponses hors ordre, clavier et focus ; mesurer avant d'optimiser.

Ne pas stocker de secrets dans localStorage ; traiter JSON invalide et quota indisponible.