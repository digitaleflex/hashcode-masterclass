# Corrigés commentés — Web APIs et performance

## Contrat fetch
1. Vérifier `response.ok`.
2. Vérifier `Content-Type` si le contrat exige JSON.
3. Distinguer erreurs réseau, erreurs HTTP et JSON invalide.
4. Propager une erreur contextualisée sans masquer le statut HTTP.

## Gestion des courses
Garder le contrôleur courant ; annuler l'ancien avant une nouvelle recherche et ignorer les erreurs AbortError. L'annulation ne remplace pas la vérification de pertinence d'une réponse.

## Performance
La bonne optimisation dépend des mesures. Documenter environnement, données, scénario et mesure ; ne pas optimiser sans goulot observé.

## Vérification
Tester 200/404, JSON invalide, annulation, réponses hors ordre, clavier et focus ; mesurer avant d'optimiser.