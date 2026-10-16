import test from "node:test";
import assert from "node:assert/strict";
import { calculateCartTotal } from "../solution/cart.mjs";

test("calcule le total", () => {
  assert.equal(calculateCartTotal(2500, 3), 7500);
  assert.equal(calculateCartTotal(0, 2), 0);
});

test("refuse un prix invalide", () => {
  for (const value of [-1, NaN, Infinity, "2500"]) {
    assert.throws(() => calculateCartTotal(value, 2), RangeError);
  }
});

test("refuse une quantité invalide", () => {
  for (const value of [0, -1, 1.5, NaN, Infinity]) {
    assert.throws(() => calculateCartTotal(2500, value), RangeError);
  }
});
