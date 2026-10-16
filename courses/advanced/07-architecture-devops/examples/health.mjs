export function healthStatus({ ready, dependencies }) {
  if (!ready) return { status: "starting" };
  const unavailable = dependencies.filter((dependency) => !dependency.healthy).map((dependency) => dependency.name);
  return unavailable.length ? { status: "degraded", unavailable } : { status: "ok" };
}
if (import.meta.url === new URL(process.argv[1], "file:").href) {
  console.log(healthStatus({ ready: true, dependencies: [{ name: "database", healthy: true }] }));
}
