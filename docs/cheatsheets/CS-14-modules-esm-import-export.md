# CS-14 — Modules JavaScript : import et export

> HashCode Academy · Cheat Sheet

## Export nommé
~~~js
// math.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// app.js
import { PI, add } from "./math.js";
~~~

## Export par défaut
~~~js
// logger.js
export default function log(message) {
  console.log(message);
}

// app.js
import log from "./logger.js";
~~~

## Alias et réexport
~~~js
import { add as sum } from "./math.js";
export { add, PI } from "./math.js";
~~~

## Principes
- Les modules ES utilisent import et export.
- Les chemins doivent correspondre au système de modules et à l'outil de build.
- Les imports statiques sont évalués avant le corps du module.
- Les dépendances circulaires peuvent rendre l'initialisation difficile à comprendre.
- Restez cohérent entre exports nommés et export par défaut.

## Dans le navigateur
~~~html
<script type="module" src="./app.js"></script>
~~~
Les modules sont différés par défaut. En développement, servez les fichiers via HTTP plutôt que de compter sur file://.

## Erreurs fréquentes
- Oublier l'extension attendue par l'environnement.
- Mélanger CommonJS et ES modules sans configuration cohérente.
- Importer un nom non exporté.
- Multiplier les fichiers de réexport sans avantage clair.
