/**
 * Affiche une valeur utilisateur comme du texte brut.
 * L'injection de la dépendance DOM permet de tester sans navigateur.
 */
export function renderUserText(element, value) {
  if (!element || !("textContent" in element)) {
    throw new TypeError("Un élément DOM avec textContent est requis.");
  }
  element.textContent = String(value);
}
