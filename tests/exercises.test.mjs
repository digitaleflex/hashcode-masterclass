import test from "node:test";
import assert from "node:assert/strict";

export function calculateCartTotal(unitPrice, quantity) {
  if (!Number.isFinite(unitPrice) || unitPrice < 0) throw new RangeError("Prix invalide");
  if (!Number.isInteger(quantity) || quantity < 1) throw new RangeError("Quantité invalide");
  return unitPrice * quantity;
}

export function parseQuantity(value) {
  if (typeof value !== "string" && typeof value !== "number") {
    throw new TypeError("La quantité doit être un texte ou un nombre.");
  }
  if (typeof value === "string" && value.trim() === "") {
    throw new RangeError("La quantité ne peut pas être vide.");
  }
  const quantity = Number(value);
  if (!Number.isFinite(quantity) || !Number.isInteger(quantity) || quantity < 1) {
    throw new RangeError("La quantité doit être un entier positif.");
  }
  return quantity;
}

export function sumPrices(prices) {
  if (!Array.isArray(prices)) throw new TypeError("Les prix doivent être un tableau.");
  return prices.reduce((sum, price) => {
    if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
      throw new RangeError("Chaque prix doit être un nombre fini positif ou nul.");
    }
    return sum + price;
  }, 0);
}

export function removeTask(tasks, id) {
  if (!Array.isArray(tasks)) throw new TypeError("Les tâches doivent être un tableau.");
  return tasks.filter((task) => task.id !== id);
}

export function calculateDiscount(subtotal) {
  if (typeof subtotal !== "number" || !Number.isFinite(subtotal) || subtotal < 0) {
    throw new RangeError("Le sous-total doit être un nombre fini positif ou nul.");
  }
  return subtotal >= 10_000 ? subtotal * 0.1 : 0;
}

test("EX-JS-001: calcule un panier et refuse une quantité invalide", () => {
  assert.equal(calculateCartTotal(2500, 3), 7500);
  assert.equal(calculateCartTotal(2500, 4), 10000);
  assert.throws(() => calculateCartTotal(2500, 0), RangeError);
});

test("EX-JS-004: parse une quantité et traite les frontières", () => {
  assert.equal(parseQuantity("3"), 3);
  assert.equal(parseQuantity(1), 1);
  for (const value of ["", " ", "1.5", "0", "-2", "NaN", Infinity, NaN, null]) {
    assert.throws(() => parseQuantity(value));
  }
});

test("EX-JS-005: somme les prix sans mutation", () => {
  const prices = [1000, 2500, 1500];
  assert.equal(sumPrices(prices), 5000);
  assert.equal(sumPrices([]), 0);
  assert.deepEqual(prices, [1000, 2500, 1500]);
  assert.throws(() => sumPrices([100, NaN]), RangeError);
});

test("EX-TS-003: retire une tâche sans modifier le tableau initial", () => {
  const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const result = removeTask(tasks, 2);
  assert.deepEqual(result, [{ id: 1 }, { id: 3 }]);
  assert.deepEqual(tasks, [{ id: 1 }, { id: 2 }, { id: 3 }]);
  assert.deepEqual(removeTask(tasks, 99), tasks);
  assert.deepEqual(removeTask([], 1), []);
});

test("EX-TEST-001: calcule la remise avec seuil inclusif", () => {
  assert.equal(calculateDiscount(9999), 0);
  assert.equal(calculateDiscount(10000), 1000);
  assert.equal(calculateDiscount(12000), 1200);
  assert.throws(() => calculateDiscount(-1), RangeError);
  assert.throws(() => calculateDiscount(Infinity), RangeError);
});
