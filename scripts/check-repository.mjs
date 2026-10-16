import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const errors = [];
const ignoredDirs = new Set([".git", "node_modules", ".next", "dist", "coverage"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function existsFile(file) {
  try { return stat(file).then(s => s.isFile()).catch(() => false); }
  catch { return Promise.resolve(false); }
}

function stripCodeFences(markdown) {
  return markdown.replace(/^\s*(?:\x60{3,}|~{3,})[^\n]*\n[\s\S]*?^\s*(?:\x60{3,}|~{3,})\s*$/gm, "");
}

function localTarget(fromFile, rawTarget) {
  const target = decodeURIComponent(rawTarget.split("#")[0].split("?")[0]);
  if (!target) return null;
  if (/^(?:[a-z]+:|\/\/)/i.test(target)) return null;
  const candidate = target.startsWith("/")
    ? path.join(root, target.slice(1))
    : path.resolve(path.dirname(fromFile), target);
  return candidate;
}

async function checkLinks(files) {
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)|\b(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  for (const file of files) {
    if (!/\.(?:md|html)$/i.test(file)) continue;
    let content = await readFile(file, "utf8");
    if (file.endsWith(".md")) content = stripCodeFences(content);
    for (const match of content.matchAll(linkPattern)) {
      const raw = (match[1] ?? match[2] ?? "").trim().replace(/^<|>$/g, "");
      if (!raw || raw.startsWith("#") || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(raw)) continue;
      const target = localTarget(file, raw);
      if (!target) continue;
      if (!await existsFile(target)) {
        errors.push(`Lien local introuvable : ${path.relative(root, file)} -> ${raw}`);
      }
    }
  }
}

async function checkAdvancedCatalog() {
  const catalogPath = path.join(root, "courses/advanced/curriculum.json");
  let catalog;
  try { catalog = JSON.parse(await readFile(catalogPath, "utf8")); }
  catch (error) {
    errors.push(`Catalogue avancé JSON invalide ou absent : ${error.message}`);
    return;
  }
  if (catalog.schemaVersion !== 1 || catalog.language !== "fr" || !Array.isArray(catalog.modules)) {
    errors.push("Le catalogue avancé ne respecte pas le contrat racine attendu.");
    return;
  }
  const ids = new Set();
  const numbers = new Set();
  for (const module of catalog.modules) {
    if (!module.id || ids.has(module.id)) errors.push(`Identifiant de module absent ou dupliqué : ${module.id}`);
    ids.add(module.id);
    if (!Number.isInteger(module.number) || numbers.has(module.number)) errors.push(`Numéro de module invalide ou dupliqué : ${module.number}`);
    numbers.add(module.number);
    if (!["planned", "presentation", "course", "complete"].includes(module.status)) errors.push(`Statut invalide pour ${module.id}`);
    if (!module.presentation) errors.push(`Présentation absente pour ${module.id}`);
    else if (!await existsFile(path.join(root, "courses/advanced", module.presentation))) {
      errors.push(`Présentation introuvable pour ${module.id}: ${module.presentation}`);
    }
    const resources = module.resources ?? {};
    for (const key of ["course", "examples", "labs", "exercises", "solutions", "quiz", "rubric"]) {
      const value = resources[key];
      if (value !== null && typeof value !== "string") errors.push(`Ressource ${key} invalide pour ${module.id}`);
      if (typeof value === "string" && !await existsFile(path.join(root, "courses/advanced", value))) {
        errors.push(`Ressource ${key} introuvable pour ${module.id}: ${value}`);
      }
    }
    if (["course", "complete"].includes(module.status) && ["course", "examples", "labs", "exercises", "solutions", "quiz", "rubric"].some(key => !resources[key])) {
      errors.push(`Le module ${module.id} est marqué ${module.status} mais des ressources requises manquent.`);
    }
    if (typeof resources.quiz === "string") {
      try {
        const quiz = JSON.parse(await readFile(path.join(root, "courses/advanced", resources.quiz), "utf8"));
        if (!Array.isArray(quiz.questions) || quiz.questions.length < 4) {
          errors.push(`Quiz invalide ou trop court pour ${module.id}.`);
        } else {
          const questionIds = new Set();
          for (const question of quiz.questions) {
            if (!question.id || questionIds.has(question.id)) errors.push(`ID de question absent/dupliqué dans le quiz de ${module.id}.`);
            questionIds.add(question.id);
            if (!Array.isArray(question.options) || !Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length || !question.explanation) {
              errors.push(`Question mal formée dans le quiz de ${module.id}: ${question.id}`);
            }
          }
        }
      } catch (error) {
        errors.push(`Quiz JSON invalide pour ${module.id}: ${error.message}`);
      }
    }
  }
  if (catalog.modules.length !== 7) errors.push(`Le catalogue avancé attend 7 modules, reçu : ${catalog.modules.length}`);
}

const files = await walk(root);
await checkLinks(files);
await checkAdvancedCatalog();

if (errors.length) {
  console.error(`Échec du contrôle du dépôt : ${errors.length} problème(s)\n`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Contrôle du dépôt réussi : ${files.length} fichiers parcourus, liens locaux et catalogue avancé valides.`);
}
