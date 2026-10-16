# CS-14 — Modules JavaScript : import et export

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 10 modules npm organisation projet](../resumes/RES-10-modules-npm-organisation-projet.md) · [RES 19 architecture organisation livraison](../resumes/RES-19-architecture-organisation-livraison.md)

**Application pratique :** Exécute les imports dans le même environnement que le projet réel et vérifie les chemins, les extensions et la configuration ESM.

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
