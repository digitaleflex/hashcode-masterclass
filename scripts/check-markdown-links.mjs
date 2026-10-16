import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const ignored = new Set(["node_modules", ".git", ".next", "dist", "coverage"]);
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && extname(entry.name).toLowerCase() === ".md") files.push(full);
  }
}
walk(root);

const failures = [];
const markdownLink = /!?(?:\[[^\]]*\])\(([^)]+)\)/g;
for (const source of files) {
  const text = readFileSync(source, "utf8");
  for (const match of text.matchAll(markdownLink)) {
    const raw = match[1].trim().replace(/^<|>$/g, "");
    if (!raw || raw.startsWith("#") || /^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(raw)) continue;
    const target = decodeURIComponent(raw.split("#")[0].split("?")[0]);
    if (!target) continue;
    const resolved = resolve(dirname(source), target);
    if (!resolved.startsWith(root)) {
      failures.push(`${relative(root, source)}: link escapes repository: ${raw}`);
    } else {
      try {
        statSync(resolved);
      } catch {
        failures.push(`${relative(root, source)}: missing target ${raw}`);
      }
    }
  }
}
if (failures.length) {
  console.error("Markdown link check failed:\n- " + failures.join("\n- "));
  process.exitCode = 1;
} else {
  console.log(`Markdown link check passed: scanned ${files.length} Markdown files.`);
}
