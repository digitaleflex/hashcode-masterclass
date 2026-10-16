import { pathToFileURL } from "node:url";
export function healthStatus({ ready, dependencies }) {
  if (!ready) return { status: "starting" };
  const unavailable = dependencies.filter((dependency) => !dependency.healthy).map((dependency) => dependency.name);
  return unavailable.length ? { status: "degraded", unavailable } : { status: "ok" };
}
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(healthStatus({ ready: true, dependencies: [{ name: "database", healthy: true }] }));
}
