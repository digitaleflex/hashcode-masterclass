# CS-03 — Fonctions, portée et this

> HashCode Academy · Cheat Sheet

## Déclaration de fonctions
~~~js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
const greet = (name = "ami") => `Bonjour ${name}`;
~~~
Les fonctions déclarées sont généralement disponibles avant leur définition grâce au hoisting. Les expressions de fonction affectées à const ne peuvent pas être utilisées avant l'initialisation.

## Paramètres et retour
- Les primitives sont passées par valeur.
- Les objets sont transmis par valeur de référence : une fonction peut muter l'objet partagé.
- Une fonction sans return explicite renvoie undefined.
- Un paramètre par défaut s'applique à undefined, pas à null.

## Portée
- portée globale : disponible dans le contexte global ;
- portée de fonction : limitée à la fonction ;
- portée de bloc : let et const sont limités au bloc ;
- fermeture (closure) : une fonction conserve l'accès à son environnement lexical.

~~~js
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
next(); // 1
next(); // 2
~~~

## Comprendre this
- Dans une méthode appelée comme `object.method()`, this référence généralement object.
- Une fonction fléchée capture le this lexical de son environnement.
- Détacher une méthode peut changer son this.
- Les règles exactes dépendent du mode d'appel et du contexte.

~~~js
const user = {
  name: "Amina",
  greet() { return `Bonjour ${this.name}`; },
};
~~~

## Bonnes pratiques
- Une fonction = une responsabilité claire.
- Préférer les fonctions pures pour la logique métier.
- Nommer les effets de bord de façon explicite.
- Ne pas utiliser une flèche automatiquement pour toutes les méthodes.
- Documenter les préconditions et le type de retour attendu.
