# CS-01 — JavaScript : syntaxe essentielle

> HashCode Academy · HashCode Masterclass · Cheat Sheet

## Déclarations
~~~js
const name = "Amina"; // réaffectation interdite
let count = 0;        // réaffectation possible
count += 1;
~~~
Préférez const par défaut ; utilisez let si la variable doit être réaffectée. Évitez var dans le code moderne.

## Types primitifs
~~~js
const text = "bonjour";
const integer = 42;
const active = true;
const missing = undefined;
const empty = null;
const unique = Symbol("id");
const large = 123n;
~~~
Vérifiez les valeurs externes avant de les utiliser. typeof null vaut historiquement "object".

## Comparaisons et valeurs
- Utilisez === et !== pour éviter les conversions implicites inattendues.
- Les valeurs falsy comprennent false, 0, -0, 0n, "", null, undefined et NaN.
- `a ?? fallback` utilise fallback seulement si a vaut null ou undefined.
- `a || fallback` utilise fallback pour toute valeur falsy, y compris 0 et chaîne vide.

## Chaînes et modèles
~~~js
const user = "Amina";
const message = `Bonjour, ${user} !`;
~~~

## Déstructuration et spread
~~~js
const [first, ...rest] = [10, 20, 30];
const { id, ...profile } = { id: "u1", name: "Amina" };
const updated = { ...profile, role: "editor" };
~~~
Le spread copie superficiellement : les objets imbriqués restent partagés.

## Contrôle de flux
~~~js
if (score >= 50) {
  console.log("Réussi");
} else {
  console.log("À revoir");
}

for (const item of items) {
  console.log(item);
}
~~~

## Fonctions
~~~js
const sum = (a, b) => a + b;
function greet(name = "ami") {
  return `Bonjour ${name}`;
}
~~~
Une fonction fléchée ne possède pas son propre this. Utilisez return pour renvoyer une valeur.

## Réflexes
- Choisir des noms descriptifs.
- Garder les fonctions courtes et ciblées.
- Éviter les conversions et effets de bord implicites.
- Lancer le code sur les cas limites, pas seulement le cas nominal.
