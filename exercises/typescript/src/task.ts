export interface Task {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

export function formatTaskTitle(title: string): string {
  return `Tâche : ${title.trim()}`;
}

export function removeTask(tasks: readonly Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

export function parseTask(value: unknown): Task {
  if (typeof value !== "object" || value === null) {
    throw new TypeError("La tâche doit être un objet.");
  }
  const candidate = value as Record<string, unknown>;
  if (!Number.isInteger(candidate.id) || typeof candidate.id !== "number") {
    throw new TypeError("L’identifiant doit être un entier.");
  }
  if (typeof candidate.title !== "string" || candidate.title.trim() === "") {
    throw new TypeError("Le titre est obligatoire.");
  }
  if (typeof candidate.completed !== "boolean") {
    throw new TypeError("Le statut completed doit être booléen.");
  }
  if (candidate.description !== undefined && typeof candidate.description !== "string") {
    throw new TypeError("La description doit être une chaîne.");
  }
  return {
    id: candidate.id,
    title: candidate.title,
    completed: candidate.completed,
    ...(candidate.description === undefined ? {} : { description: candidate.description }),
  };
}
