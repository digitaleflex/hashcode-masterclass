# RES-08 — Introduction à TypeScript

**Parcours :** HashCode Masterclass · **Domaine :** TypeScript · **Niveau :** Débutant

## L’idée essentielle
TypeScript ajoute un système de types à JavaScript et détecte de nombreuses incohérences avant l’exécution. Le code TypeScript est transformé en JavaScript pour être exécuté dans un environnement compatible.

## Annotation et inférence
```ts
const username: string = "Ada";
const score: number = 42;

const city = "Cotonou"; // TypeScript infère string
```

Une annotation est utile lorsqu’elle clarifie un contrat. Il n’est pas nécessaire d’annoter chaque variable si le type est évident et correctement inféré.

## Le flux de travail
1. Écrire du TypeScript.
2. Lancer le vérificateur de types, par exemple `tsc --noEmit`.
3. Corriger les erreurs de types.
4. Transpiler ou compiler vers JavaScript selon l’outillage.
5. Exécuter et tester le programme.

## Limite importante
Les types TypeScript sont principalement vérifiés à la compilation et ne valident pas automatiquement les données externes au runtime. Une réponse d’API, un fichier JSON ou une entrée utilisateur doit être validé à l’exécution si sa fiabilité compte.

## JavaScript ou TypeScript ?
- JavaScript : langage exécuté par le runtime.
- TypeScript : apporte une analyse statique et des outils de développement ; il ne remplace pas le runtime JavaScript.

## Vérification rapide
Une interface TypeScript valide-t-elle automatiquement une réponse HTTP réelle ? **Non**. Il faut une validation runtime adaptée.