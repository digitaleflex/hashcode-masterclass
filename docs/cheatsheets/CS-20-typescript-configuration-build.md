# CS-20 — Configuration TypeScript, compilation et build

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 12 typescript types interfaces fonctions](../resumes/RES-12-typescript-types-interfaces-fonctions.md) · [RES 19 architecture organisation livraison](../resumes/RES-19-architecture-organisation-livraison.md)

**Application pratique :** Exécute le contrôle des types et le build dans un environnement propre. Ne confonds pas la vérification statique, la compilation et les tests.

## Initialiser
~~~bash
npm init -y
npm install -D typescript
npx tsc --init
~~~

## Vérifier les types
~~~bash
npx tsc --noEmit
~~~
Adaptez la commande aux options du projet.

## Options courantes
~~~json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "noEmit": true,
    "noUncheckedIndexedAccess": true
  }
}
~~~
Cet extrait n'est pas universel. module, moduleResolution, target et noEmit doivent correspondre à l'environnement de build et d'exécution.

## Scripts
~~~json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  }
}
~~~

## Compilation et exécution
- TypeScript fournit une vérification statique et des constructions de type.
- Le navigateur ou Node exécute du JavaScript.
- Un bundler peut transformer, regrouper et optimiser les modules.
- Le type-checker et le bundler peuvent avoir des responsabilités différentes.
- Le type-checking ne valide pas les données d'une API à l'exécution.

## Pipeline
1. Installation reproductible depuis le lockfile.
2. Lint et formatage.
3. Vérification des types.
4. Tests.
5. Build.
6. Contrôles de sécurité et publication.

## Erreurs fréquentes
- Masquer les erreurs avec any ou des suppressions.
- Choisir une configuration incompatible avec le runtime.
- Croire que la compilation valide les réponses d'API.
- Modifier les dépendances sans vérifier le lockfile.
