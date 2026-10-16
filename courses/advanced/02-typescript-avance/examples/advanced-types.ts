export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export type Task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
};

export function assertNever(value: never): never {
  throw new Error(`État inattendu : ${JSON.stringify(value)}`);
}

export function describeTask(task: Task): string {
  switch (task.status) {
    case "todo": return `À faire : ${task.title}`;
    case "doing": return `En cours : ${task.title}`;
    case "done": return `Terminée : ${task.title}`;
    default: return assertNever(task.status);
  }
}

export function parseTask(input: unknown): Result<Task, string> {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, error: "Objet attendu" };
  }
  const value = input as Record<string, unknown>;
  if (typeof value.id !== "string" || value.id.trim() === "") return { ok: false, error: "id invalide" };
  if (typeof value.title !== "string" || value.title.trim() === "") return { ok: false, error: "title invalide" };
  if (value.status !== "todo" && value.status !== "doing" && value.status !== "done") {
    return { ok: false, error: "status invalide" };
  }
  return { ok: true, value: { id: value.id, title: value.title, status: value.status } };
}
