# CS-13 — Map, Set et itérateurs

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 06 tableaux et methodes fonctionnelles](../resumes/RES-06-tableaux-et-methodes-fonctionnelles.md) · [RES 07 objets destructuration spread](../resumes/RES-07-objets-destructuration-spread.md)

**Application pratique :** Choisis une collection selon le besoin : index ordonné, clé-valeur ou unicité. Teste aussi l'itération sur une collection vide.

## Map
~~~js
const scores = new Map();
scores.set("amina", 18);
scores.set("noah", 15);
scores.get("amina");
scores.has("noah");
scores.delete("noah");
scores.size;
~~~
Map accepte des clés de types variés et conserve l'ordre d'insertion. Pour les clés objet, l'identité de référence compte.

## Set
~~~js
const ids = new Set(["a", "b", "a"]);
[...ids]; // ["a", "b"]
ids.add("c");
ids.has("b");
ids.delete("a");
~~~
Set stocke des valeurs uniques ; pour les objets, il déduplique les références, pas les objets au contenu identique.

## Parcourir
~~~js
for (const [name, score] of scores) console.log(name, score);
for (const id of ids) console.log(id);
~~~

## Choisir la bonne collection
- Map : dictionnaire dynamique avec clés variées.
- Set : dédoublonnage et test d'appartenance.
- Objet : entité avec propriétés nommées.
- Tableau : collection ordonnée où les doublons peuvent être significatifs.

Les tableaux, chaînes, Map et Set sont itérables. for...of parcourt les valeurs ; for...in parcourt les clés énumérables d'un objet.

## Pièges
Map.get peut renvoyer undefined. Object.keys ne remplace pas l'itération d'une Map.
