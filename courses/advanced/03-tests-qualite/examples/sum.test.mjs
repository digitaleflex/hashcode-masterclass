import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "./sum.mjs";

test("additionne deux nombres", () => assert.equal(sum(2, 3), 5));
test("gère les négatifs", () => assert.equal(sum(-2, -3), -5));
test("refuse NaN", () => assert.throws(() => sum(Number.NaN, 1), TypeError));
test("refuse les chaînes", () => assert.throws(() => sum("2", 3), TypeError));
