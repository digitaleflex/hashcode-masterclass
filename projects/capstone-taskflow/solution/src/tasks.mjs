const VALID_STATUSES = new Set(["todo", "doing", "done"]);

export function createTask({ id, ownerId, title, now = new Date().toISOString() }) {
  if (typeof id !== "string" || id.trim() === "") throw new TypeError("id requis");
  if (typeof ownerId !== "string" || ownerId.trim() === "") throw new TypeError("ownerId requis");
  if (typeof title !== "string" || title.trim() === "" || title.length > 200) {
    throw new RangeError("title doit contenir de 1 à 200 caractères");
  }
  return { id, ownerId, title: title.trim(), status: "todo", createdAt: now };
}

export function transitionTask(task, nextStatus) {
  if (!task || typeof task !== "object") throw new TypeError("task invalide");
  if (!VALID_STATUSES.has(nextStatus)) throw new RangeError("status invalide");
  const allowed = {
    todo: new Set(["doing", "done"]),
    doing: new Set(["todo", "done"]),
    done: new Set(["todo"])
  };
  if (task.status === nextStatus) return { ...task };
  if (!allowed[task.status]?.has(nextStatus)) throw new RangeError("transition interdite");
  return { ...task, status: nextStatus };
}

export function canAccessTask(user, task) {
  return Boolean(user && typeof user.id === "string" && task && user.id === task.ownerId);
}

export function updateTaskTitle(task, user, title) {
  if (!canAccessTask(user, task)) throw new Error("FORBIDDEN");
  if (typeof title !== "string" || title.trim() === "" || title.length > 200) {
    throw new RangeError("title invalide");
  }
  return { ...task, title: title.trim() };
}
