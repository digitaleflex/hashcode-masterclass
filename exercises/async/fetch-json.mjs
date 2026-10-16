/**
 * Fetch JSON et traite explicitement les statuts HTTP non réussis.
 * fetchImpl est injectable pour que les tests soient déterministes et hors ligne.
 */
export async function fetchJson(url, fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== "function") throw new TypeError("Une implémentation fetch est requise.");
  let response;
  try {
    response = await fetchImpl(url);
  } catch (cause) {
    throw new Error("Échec réseau pendant la requête.", { cause });
  }
  if (!response || typeof response.ok !== "boolean") {
    throw new TypeError("Réponse HTTP invalide.");
  }
  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status}.`);
  }
  try {
    return await response.json();
  } catch (cause) {
    throw new Error("La réponse ne contient pas un JSON valide.", { cause });
  }
}
