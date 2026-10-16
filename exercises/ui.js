const EXERCISES = [
{id:"EX-JS-001",title:"Calculer un panier",level:"INIT",domain:"JavaScript",duration:"15 min",prereq:"Variables et nombres",description:"Une boutique veut calculer le montant total d’une commande à partir du prix unitaire et de la quantité.",task:"Complète calculateCartTotal(unitPrice, quantity) pour renvoyer le total et refuser les entrées invalides.",criteria:["2500 × 3 renvoie 7500.","Un prix nul est accepté ; un prix négatif ou non fini est refusé.","La quantité doit être un entier strictement positif."],hints:["Vérifie le prix et la quantité séparément.","Utilise Number.isFinite et Number.isInteger.","Ne calcule le produit qu’après les validations."],solution:"Valide le prix comme nombre fini positif ou nul, puis la quantité comme entier supérieur ou égal à 1. Retourne ensuite leur produit.",code:"export function calculateCartTotal(unitPrice, quantity) {\n  if (typeof unitPrice !== \"number\" || !Number.isFinite(unitPrice) || unitPrice < 0) throw new RangeError(\"Prix invalide\");\n  if (!Number.isInteger(quantity) || quantity < 1) throw new RangeError(\"Quantité invalide\");\n  return unitPrice * quantity;\n}",guide:"EXERCICES.md"},
{id:"EX-JS-002",title:"Transformer et totaliser des prix",level:"INIT",domain:"JavaScript",duration:"20 min",prereq:"Tableaux et fonctions fléchées",description:"Analyse une liste de prix et transforme, filtre puis additionne ses éléments.",task:"Utilise map pour augmenter les prix de 10 %, filter pour conserver les prix d’au moins 1500, puis reduce pour calculer la somme.",criteria:["Les prix transformés sont [1100, 2750, 1650, 550].","Les prix filtrés sont [2500, 1500].","Le total filtré est 4000."],hints:["map transforme chaque élément.","filter garde les éléments qui satisfont une condition.","reduce accumule une valeur ; indique une valeur initiale."],solution:"Les trois méthodes ont des responsabilités distinctes et ne mutent pas le tableau source.",code:"const prices = [1000, 2500, 1500, 500];\nconst withTax = prices.map(price => Math.round(price * 1.1));\nconst selected = prices.filter(price => price >= 1500);\nconst total = selected.reduce((sum, price) => sum + price, 0);",guide:"EXERCICES.md"},
{id:"EX-JS-003",title:"Diagnostiquer les conversions",level:"INIT",domain:"JavaScript",duration:"15 min",prereq:"Types primitifs",description:"Une valeur provenant d’un formulaire peut être du texte même si elle représente un nombre.",task:"Prédit les sorties de l’addition avec une chaîne, de la soustraction, de l’égalité stricte et d’une conversion Number explicite.",criteria:["Explique pourquoi \"5\" + 2 donne \"52\".","Explique pourquoi \"5\" - 2 donne 3.","Distingue la comparaison stricte des conversions implicites."],hints:["L’opérateur + peut concaténer.","La soustraction convertit ses opérandes en nombres.","Number(value) rend la conversion explicite."],solution:"Les opérateurs appliquent des règles de coercition différentes ; préfère une conversion explicite et une comparaison stricte.",code:"console.log(\"5\" + 2);\nconsole.log(\"5\" - 2);\nconsole.log(5 === \"5\");\nconsole.log(Number(\"5\") + 2);",guide:"EXERCICES.md"},
{id:"EX-TS-001",title:"Modéliser une tâche",level:"INIT",domain:"TypeScript",duration:"20 min",prereq:"Objets JavaScript",description:"Définis un modèle fiable pour une tâche dans une application de gestion.",task:"Crée une interface Task avec id, title, completed et une description optionnelle.",criteria:["id est number, title string, completed boolean.","description peut être absente.","Explique pourquoi une interface ne valide pas un JSON à l’exécution."],hints:["Les propriétés obligatoires n’ont pas de point d’interrogation.","Une propriété optionnelle s’écrit description?: string.","Les données externes doivent être vérifiées à l’exécution."],solution:"L’interface décrit les attentes statiques du code. Les données inconnues doivent être validées à l’exécution.",code:"interface Task {\n  id: number;\n  title: string;\n  completed: boolean;\n  description?: string;\n}",guide:"EXERCICES.md"},
{id:"EX-TS-002",title:"Écrire une fonction typée",level:"INIT",domain:"TypeScript",duration:"15 min",prereq:"Fonctions et types",description:"Une interface a besoin d’un titre de tâche formaté uniformément.",task:"Écris formatTaskTitle(title: string): string qui renvoie « Tâche : » suivi du titre.",criteria:["La fonction accepte une chaîne.","La fonction renvoie une chaîne.","Le compilateur signale un appel avec un nombre."],hints:["Le type du paramètre suit les deux-points.","Le type de retour suit les parenthèses.","Une fonction qui renvoie une valeur utilise return."],solution:"Le contrat de la fonction exprime le type attendu en entrée et en sortie.",code:"function formatTaskTitle(title: string): string {\n  return \"Tâche : \" + title;\n}",guide:"EXERCICES.md"},
{id:"EX-JS-004",title:"Valider une quantité",level:"CORE",domain:"JavaScript",duration:"25 min",prereq:"Conversion et validation",description:"Une quantité issue d’un formulaire doit être convertie et validée.",task:"Implémente parseQuantity(value) pour accepter une chaîne ou un nombre représentant un entier positif.",criteria:["Les chaînes vides, NaN et Infinity sont refusés.","Les décimaux, zéro et nombres négatifs sont refusés.","Une chaîne numérique valide est convertie."],hints:["Refuse une chaîne vide avant Number(value).","Teste Number.isFinite puis Number.isInteger.","Vérifie que le résultat est au moins 1."],solution:"Valide le type, la chaîne vide, puis la conversion et les contraintes numériques.",code:"const quantity = Number(value);\nif (!Number.isFinite(quantity) || !Number.isInteger(quantity) || quantity < 1) throw new RangeError();\nreturn quantity;",guide:"EXERCICES.md"},
{id:"EX-JS-005",title:"Déboguer une fonction de total",level:"CORE",domain:"JavaScript",duration:"25 min",prereq:"reduce et tests",description:"Une fonction de total doit rester fiable pour un tableau vide ou une valeur invalide.",task:"Écris sumPrices(prices), sans modifier le tableau initial et en refusant les prix invalides.",criteria:["La somme d’un tableau vide est zéro.","Chaque prix est fini et positif ou nul.","Le tableau source reste inchangé."],hints:["Vérifie que l’entrée est un tableau.","Utilise reduce avec 0 comme valeur initiale.","Valide chaque prix avant de l’ajouter."],solution:"La valeur initiale 0 gère le tableau vide. Le reducer valide chaque élément et renvoie un nouveau résultat sans muter le tableau.",code:"return prices.reduce((sum, price) => {\n  if (typeof price !== \"number\" || !Number.isFinite(price) || price < 0) throw new RangeError();\n  return sum + price;\n}, 0);",guide:"EXERCICES.md"},
{id:"EX-TS-003",title:"Supprimer une tâche par identifiant",level:"CORE",domain:"TypeScript",duration:"25 min",prereq:"Tableaux et objets",description:"Une liste doit supprimer une tâche sans modifier accidentellement les autres éléments.",task:"Implémente removeTask(tasks, id) qui renvoie une nouvelle liste sans la tâche ciblée.",criteria:["La tâche ciblée est retirée.","Un identifiant inconnu laisse la liste inchangée.","Le tableau initial n’est pas muté."],hints:["filter crée un nouveau tableau.","Compare les identifiants avec ===.","Teste le tableau vide et un identifiant inconnu."],solution:"Une solution immuable filtre les tâches dont l’identifiant diffère de celui recherché.",code:"function removeTask(tasks, id) {\n  return tasks.filter(task => task.id !== id);\n}",guide:"EXERCICES.md"},
{id:"EX-ASYNC-001",title:"Traiter une réponse HTTP",level:"CORE",domain:"Asynchrone",duration:"30 min",prereq:"Promises et async/await",description:"Une requête HTTP peut échouer au niveau réseau ou renvoyer le statut 404/500.",task:"Écris fetchJson(url, fetchImpl) qui vérifie response.ok, traite les rejets réseau et les JSON invalides.",criteria:["Les statuts 404 et 500 produisent une erreur explicite.","Les rejets réseau sont distingués des erreurs HTTP.","Les tests utilisent un fetch simulé, sans réseau."],hints:["fetch ne rejette pas automatiquement sur 404.","Vérifie response.ok avant response.json().","Injecte fetch pour tester hors ligne."],solution:"Sépare les erreurs réseau, les statuts HTTP et l’échec de décodage JSON.",code:"if (!response.ok) throw new Error(\"Erreur HTTP \" + response.status);\nreturn await response.json();",guide:"EXERCICES.md"},
{id:"EX-TEST-001",title:"Tester une fonction de remise",level:"CORE",domain:"Tests",duration:"25 min",prereq:"Conditions et tests unitaires",description:"La boutique applique 10 % de remise lorsque le sous-total atteint 10 000.",task:"Implémente calculateDiscount(subtotal) et couvre le seuil et les valeurs invalides.",criteria:["9999 donne 0.","10000 donne 1000.","Les montants négatifs et non finis sont refusés."],hints:["Le seuil est inclusif.","Teste juste en dessous et exactement au seuil.","Ajoute un test de régression."],solution:"Valide le sous-total, puis applique 10 % à partir du seuil inclusif.",code:"return subtotal >= 10000 ? subtotal * 0.1 : 0;",guide:"EXERCICES.md"},
{id:"EX-SEC-001",title:"Afficher une saisie en sécurité",level:"CORE",domain:"DOM & sécurité",duration:"25 min",prereq:"DOM et événements",description:"Une saisie utilisateur ne doit pas être interprétée comme du balisage HTML.",task:"Affiche une valeur utilisateur comme du texte brut et compare textContent à innerHTML.",criteria:["Utilise textContent pour le texte brut.","Ne construis pas de HTML depuis la saisie.","Explique le risque XSS."],hints:["Le texte brut n’a pas besoin d’être analysé comme HTML.","Utilise element.textContent = value.","Teste avec une chaîne qui ressemble à une balise."],solution:"textContent affecte la valeur comme texte ; innerHTML demande au navigateur d’interpréter du balisage.",code:"element.textContent = String(userInput);",guide:"EXERCICES.md"},
{id:"EX-PROJ-001",title:"Mini-projet : gestionnaire de tâches",level:"PRO",domain:"Projet complet",duration:"90 min",prereq:"JavaScript, TypeScript, DOM et tests",description:"Combine modélisation, validation, affichage DOM, accessibilité et tests.",task:"Construis une application permettant d’ajouter, terminer, filtrer et supprimer des tâches.",criteria:["TypeScript strict et validation des titres.","Pas d’injection HTML de données non fiables.","Tests métier et contrôles accessibles au clavier."],hints:["Commence par le modèle et les fonctions métier.","Teste chaque règle avant de connecter les événements.","Ajoute le DOM et l’accessibilité ensuite."],solution:"Sépare modèle, fonctions métier, présentation DOM et tests. Le cahier donne les contraintes et la grille d’évaluation.",code:"// 1. Définir Task et valider les entrées\n// 2. Implémenter add / toggle / filter / remove\n// 3. Tester les règles métier\n// 4. Connecter le DOM avec textContent\n// 5. Vérifier clavier et lecteurs d’écran",guide:"EXERCICES.md"}
];
const STORE_KEY = "hashcode-masterclass.exercise-progress.v1";
const $ = (s) => document.querySelector(s);
let selectedId = EXERCISES[0].id;
let hintIndex = 0;
let completed = loadProgress();
function loadProgress() {
  try { const v = JSON.parse(localStorage.getItem(STORE_KEY) || "[]"); return new Set(Array.isArray(v) ? v.filter((id) => EXERCISES.some((e) => e.id === id)) : []); }
  catch { return new Set(); }
}
function saveProgress() { try { localStorage.setItem(STORE_KEY, JSON.stringify([...completed])); } catch {} }
function renderList() {
  const query = $("#search").value.trim().toLocaleLowerCase("fr");
  const level = $("#level-filter").value;
  const status = $("#status-filter").value;
  const filtered = EXERCISES.filter((e) => (e.id + " " + e.title + " " + e.domain).toLocaleLowerCase("fr").includes(query) && (level === "ALL" || e.level === level) && (status === "ALL" || (status === "DONE" ? completed.has(e.id) : !completed.has(e.id))));
  const list = $("#exercise-list");
  list.replaceChildren();
  filtered.forEach((e) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "exercise-card" + (completed.has(e.id) ? " is-done" : "");
    button.setAttribute("role", "listitem");
    button.setAttribute("aria-current", String(e.id === selectedId));
    const index = document.createElement("span");
    index.className = "exercise-index";
    index.textContent = completed.has(e.id) ? "✓" : String(EXERCISES.indexOf(e) + 1).padStart(2, "0");
    const copy = document.createElement("span");
    copy.className = "card-copy";
    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = e.title;
    const meta = document.createElement("span");
    meta.className = "card-meta";
    const tag = document.createElement("span");
    tag.className = "mini-tag";
    tag.textContent = e.level;
    const domain = document.createElement("span");
    domain.textContent = e.domain;
    meta.append(tag, domain);
    copy.append(title, meta);
    button.append(index, copy);
    button.addEventListener("click", () => { selectedId = e.id; hintIndex = 0; renderList(); renderDetail(); });
    list.append(button);
  });
  $("#visible-count").textContent = String(filtered.length);
  $("#empty-state").hidden = filtered.length > 0;
}
function renderProgress() {
  const percent = Math.round(completed.size / EXERCISES.length * 100);
  $("#total-count").textContent = String(EXERCISES.length);
  $("#done-count").textContent = String(completed.size);
  $("#progress-percent").textContent = percent + "%";
  $("#progress-bar").style.width = percent + "%";
  $("#progress-track").setAttribute("aria-valuenow", String(percent));
}
function renderDetail() {
  const e = EXERCISES.find((item) => item.id === selectedId) || EXERCISES[0];
  $("#detail-id").textContent = e.id;
  $("#detail-level").textContent = e.level;
  $("#detail-level").className = "level " + e.level.toLowerCase();
  $("#detail-title").textContent = e.title;
  $("#detail-description").textContent = e.description;
  $("#detail-duration").textContent = e.duration;
  $("#detail-domain").textContent = e.domain;
  $("#detail-prereq").textContent = "Prérequis : " + e.prereq;
  $("#detail-task").textContent = e.task;
  const criteria = $("#detail-criteria");
  criteria.replaceChildren();
  e.criteria.forEach((text) => { const li = document.createElement("li"); li.textContent = text; criteria.append(li); });
  hintIndex = Math.min(hintIndex, e.hints.length);
  $("#hint-title").textContent = "Indice progressif" + (hintIndex ? " · " + hintIndex + "/" + e.hints.length : "");
  $("#hint-text").textContent = hintIndex ? e.hints[hintIndex - 1] : "Essaie d’abord seul. Chaque clic révèle un indice supplémentaire.";
  $("#next-hint").disabled = hintIndex >= e.hints.length;
  $("#next-hint").textContent = hintIndex >= e.hints.length ? "Tous les indices révélés" : "Révéler un indice";
  $("#solution-explanation").textContent = e.solution;
  $("#solution-code").textContent = e.code;
  $("#solution-content").hidden = true;
  $("#solution-toggle").setAttribute("aria-expanded", "false");
  $("#solution-toggle").innerHTML = "Afficher le corrigé <span>＋</span>";
  $("#complete-toggle").checked = completed.has(e.id);
  $("#guide-link").href = "./" + e.guide;
  renderProgress();
}
$("#search").addEventListener("input", renderList);
$("#level-filter").addEventListener("change", renderList);
$("#status-filter").addEventListener("change", renderList);
$("#reset-filters").addEventListener("click", () => { $("#search").value = ""; $("#level-filter").value = "ALL"; $("#status-filter").value = "ALL"; renderList(); $("#search").focus(); });
$("#next-hint").addEventListener("click", () => { const e = EXERCISES.find((item) => item.id === selectedId); if (hintIndex < e.hints.length) hintIndex++; renderDetail(); });
$("#solution-toggle").addEventListener("click", () => {
  const open = !$("#solution-content").hidden;
  $("#solution-content").hidden = open;
  $("#solution-toggle").setAttribute("aria-expanded", String(!open));
  $("#solution-toggle").innerHTML = open ? "Afficher le corrigé <span>＋</span>" : "Masquer le corrigé <span>−</span>";
});
$("#complete-toggle").addEventListener("change", (event) => { if (event.target.checked) completed.add(selectedId); else completed.delete(selectedId); saveProgress(); renderList(); renderProgress(); });
$("#clear-progress").addEventListener("click", () => { const dialog = $("#confirm-clear"); if (typeof dialog.showModal === "function") dialog.showModal(); else if (window.confirm("Effacer toute la progression ?")) { completed.clear(); saveProgress(); renderList(); renderDetail(); } });
$("#cancel-clear").addEventListener("click", () => $("#confirm-clear").close());
$("#confirm-clear-button").addEventListener("click", () => { completed.clear(); saveProgress(); renderList(); renderDetail(); $("#confirm-clear").close(); });
renderList();
renderDetail();
