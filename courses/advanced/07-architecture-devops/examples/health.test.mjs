import test from "node:test";
import assert from "node:assert/strict";
import { healthStatus } from "./health.mjs";
test("reports starting before readiness", () => {
  assert.deepEqual(healthStatus({ ready: false, dependencies: [] }), { status: "starting" });
});
test("reports healthy when dependencies are healthy", () => {
  assert.deepEqual(healthStatus({ ready: true, dependencies: [{ name: "db", healthy: true }] }), { status: "ok" });
});
test("reports unavailable dependencies", () => {
  assert.deepEqual(healthStatus({ ready: true, dependencies: [{ name: "db", healthy: false }] }), { status: "degraded", unavailable: ["db"] });
});
