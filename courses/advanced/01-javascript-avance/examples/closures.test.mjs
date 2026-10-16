import test from "node:test";
import assert from "node:assert/strict";
import { createCounter, paginate } from "./closures.mjs";

test("closure encapsulates counter state", () => {
  const counter = createCounter(2);
  assert.equal(counter.next(), 3);
  assert.equal(counter.current(), 3);
  counter.reset();
  assert.equal(counter.current(), 2);
});

test("paginate returns pages without mutating source", () => {
  const input = [1, 2, 3, 4, 5];
  assert.deepEqual([...paginate(input, 2)], [[1, 2], [3, 4], [5]]);
  assert.deepEqual(input, [1, 2, 3, 4, 5]);
});

test("paginate rejects an invalid page size", () => {
  assert.throws(() => [...paginate([1], 0)], RangeError);
});
