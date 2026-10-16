# RES-11 — Vérification et tests

**Parcours :** HashCode Masterclass · **Domaine :** Qualité · **Niveau :** Débutant

## L’idée essentielle
La vérification des types, la validation runtime et les tests répondent à des questions différentes. Un programme fiable a besoin de ces trois niveaux selon le contexte.

## Trois niveaux complémentaires

| Mécanisme | Question principale | Exemple |
|---|---|---|
| Vérification statique | Le code respecte-t-il les contrats de types ? | `tsc --noEmit` |
| Validation runtime | Les données réelles ont-elles la forme attendue ? | Vérifier un JSON reçu d’une API |
| Test | Le comportement produit-il le résultat attendu ? | Vérifier que le total vaut 7 500 |

## Exemple de test manuel
```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.assert(calculateTotal(2500, 3) === 7500, "Total incorrect");
console.assert(calculateTotal(1000, 0) === 0, "La quantité zéro doit être gérée");
```

`console.assert` est utile pour une vérification simple, mais un vrai projet bénéficie généralement d’un framework de tests et d’une commande reproductible.

## Cas limites à essayer
- Tableau vide.
- Élément introuvable.
- Quantité égale à zéro.
- Valeur absente ou d’un type inattendu.
- Identifiants dupliqués.
- Chaîne vide ou espaces seuls.

## Bon réflexe
Pour chaque fonction, écris : **entrée → résultat attendu → cas limite → comportement en cas d’erreur**. Les tests doivent vérifier le comportement, pas simplement recopier l’implémentation.

## Vérification rapide
Un code sans erreur TypeScript peut-il encore contenir un bug logique ? **Oui**. Un test réussi prouve-t-il l’absence de tous les bugs ? **Non : il couvre seulement les scénarios testés**.

## Cas d’usage pratique — vérifier une fonction avant de la livrer
Avant de livrer `calculateTotal`, teste un panier normal, une quantité zéro et une entrée invalide. Le vérificateur TypeScript contrôle les types ; la validation runtime examine les données réelles ; les tests vérifient les résultats et règles métier.

**Mini-défi :** écris un test pour un tableau vide et un autre pour une tâche introuvable. Indique le résultat attendu avant d’exécuter le code.
