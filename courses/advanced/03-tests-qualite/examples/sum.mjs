export function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError("Entrées numériques requises");
  return a + b;
}
