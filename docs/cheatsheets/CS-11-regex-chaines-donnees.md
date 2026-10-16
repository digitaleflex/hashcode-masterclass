# CS-11 — Expressions régulières et chaînes

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 03 variables et types javascript](../resumes/RES-03-variables-et-types-javascript.md) · [RES 08 gestion erreurs debogage](../resumes/RES-08-gestion-erreurs-debogage.md)

**Application pratique :** Teste les expressions régulières sur une valeur valide, une valeur invalide et une chaîne vide. N'utilise pas une regex pour remplacer une vraie analyse de structure.

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
