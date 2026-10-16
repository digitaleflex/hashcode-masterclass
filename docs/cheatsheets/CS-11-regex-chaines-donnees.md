# CS-11 — Expressions régulières et chaînes

> HashCode Academy · Cheat Sheet

## Méthodes utiles
~~~js
const value = "  HashCode Academy  ";
value.trim();
value.toLowerCase();
value.includes("Code");
value.replaceAll(" ", "-");
"alpha,beta,gamma".split(",");
["alpha", "beta"].join(" · ");
~~~
Les chaînes sont immuables : ces méthodes renvoient une nouvelle chaîne.

## Expressions régulières
~~~js
const codePattern = /^[A-Z]{3}-\d{4}$/;
codePattern.test("ABC-1234"); // true
const digits = "Commande #4821".match(/\d+/);
const cleaned = "a   b\tc".replace(/\s+/g, " ");
~~~
- ^ début ; $ fin.
- \d chiffre ; \s espace blanc.
- + une ou plusieurs occurrences ; * zéro ou plus ; ? facultatif.
- [A-Z] classe de caractères ; {3} répétition exacte.
- () groupe ; | alternative.

## Limites et pièges
Une regex vérifie un format, pas toutes les règles métier. Les valeurs externes doivent être validées à l'exécution. Les regex avec flags g ou y conservent un état via lastIndex ; attention aux appels répétés à test(). Des motifs mal conçus peuvent coûter cher sur des entrées longues.

## Exercice
Vérifiez un identifiant composé de deux lettres majuscules, un tiret et quatre chiffres.
~~~js
const pattern = /^[A-Z]{2}-\d{4}$/;
~~~
