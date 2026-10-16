export function calculateCartTotal(unitPrice, quantity) {
  if (typeof unitPrice !== "number" || !Number.isFinite(unitPrice) || unitPrice < 0) {
    throw new RangeError("Prix invalide");
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new RangeError("Quantité invalide");
  }
  return unitPrice * quantity;
}
