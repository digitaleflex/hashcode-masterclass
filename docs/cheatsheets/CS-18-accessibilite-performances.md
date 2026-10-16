# CS-18 — Accessibilité et performance frontend

> HashCode Academy · Cheat Sheet


## Comment utiliser cette fiche

Cette fiche est une référence rapide, pas un remplacement du cours. Commence par la notion qui te bloque, copie un exemple dans un petit fichier de test, puis modifie-le pour vérifier que tu comprends ses effets. Ne mémorise pas uniquement la syntaxe : comprends les conditions dans lesquelles elle est correcte.

**Fiches de cours associées :** [RES 15 typescript dom formulaires evenements](../resumes/RES-15-typescript-dom-formulaires-evenements.md) · [RES 19 architecture organisation livraison](../resumes/RES-19-architecture-organisation-livraison.md)

**Application pratique :** Vérifie le parcours clavier, les messages d'erreur, la hiérarchie des titres et le comportement sur une connexion lente.

## Accessibilité
- Utiliser des éléments HTML sémantiques.
- Associer un label à chaque champ.
- Assurer la navigation clavier et un focus visible.
- Maintenir un contraste suffisant.
- Ne pas transmettre une information uniquement par la couleur.
- Fournir un texte alternatif pertinent aux images informatives.
- Signaler clairement les erreurs et changements de statut.
- Respecter la préférence de réduction des animations.

## Images et chargement
- Adapter dimensions et compression.
- Utiliser des formats modernes appropriés.
- Réserver l'espace des images pour limiter les décalages de mise en page.
- Charger paresseusement les images hors écran lorsque cela convient.
- Éviter le lazy-loading sur l'image principale immédiatement visible.

## JavaScript et réseau
- Réduire les scripts et dépendances inutiles.
- Découper le code si le chargement différé est bénéfique.
- Éviter les calculs coûteux dans les événements fréquents.
- Mesurer avant d'optimiser.
- Mettre en cache les ressources statiques avec des règles adaptées.
- Ne pas mettre en cache des données privées comme si elles étaient publiques.

## Checklist
- [ ] Navigation clavier testée.
- [ ] Focus visible.
- [ ] Labels et messages explicites.
- [ ] Images optimisées.
- [ ] Scripts et requêtes inutiles supprimés.
- [ ] Performance mesurée sur un appareil et un réseau représentatifs.
