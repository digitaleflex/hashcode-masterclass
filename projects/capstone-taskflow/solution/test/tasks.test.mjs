import test from "node:test";
import assert from "node:assert/strict";
import { createTask, transitionTask, canAccessTask, updateTaskTitle } from "../src/tasks.mjs";

test("creates a normalized task with a known initial state", () => {
  const task = createTask({ id: "t1", ownerId: "u1", title: "  Étudier  ", now: "2026-01-01T00:00:00.000Z" });
  assert.equal(task.title, "Étudier");
  assert.equal(task.status, "todo");
  assert.equal(task.ownerId, "u1");
});

test("rejects invalid task input", () => {
  assert.throws(() => createTask({ id: "t1", ownerId: "u1", title: " " }), RangeError);
  assert.throws(() => createTask({ id: "t1", ownerId: "u1", title: "x".repeat(201) }), RangeError);
});

test("enforces allowed status transitions without mutating input", () => {
  const task = createTask({ id: "t1", ownerId: "u1", title: "Tâche" });
  const updated = transitionTask(task, "doing");
  assert.equal(updated.status, "doing");
  assert.equal(task.status, "todo");
  assert.throws(() => transitionTask(updated, "unknown"), RangeError);
});

test("prevents cross-owner updates", () => {
  const task = createTask({ id: "t1", ownerId: "u1", title: "Tâche" });
  assert.equal(canAccessTask({ id: "u2" }, task), false);
  assert.throws(() => updateTaskTitle(task, { id: "u2" }, "Autre"), /FORBIDDEN/);
  assert.equal(updateTaskTitle(task, { id: "u1" }, "  Nouveau titre  ").title, "Nouveau titre");
});
