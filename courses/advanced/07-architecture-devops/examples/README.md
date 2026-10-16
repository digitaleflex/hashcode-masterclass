# Exemples — Architecture, DevOps et production

## Health check
```js
export function healthStatus({ ready, dependencies }) {
  if (!ready) return { status: "starting" };
  const unavailable = dependencies.filter(dep => !dep.healthy).map(dep => dep.name);
  return unavailable.length ? { status: "degraded", unavailable } : { status: "ok" };
}
```

## Pipeline conceptuelle
Étapes attendues : checkout, installation reproductible, vérifications, tests, build, artefact traçable et déploiement contrôlé. Ne jamais placer de secrets dans le dépôt.

## Concepts
Frontières de modules, revue Git, CI, artefacts traçables, conteneurs, observabilité, health checks, incidents et rollback.

## Contrôle
Vérifier CI rouge, artefact lié au commit, absence de secrets et rapport d'incident factuel.