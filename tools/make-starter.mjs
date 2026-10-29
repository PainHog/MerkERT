#!/usr/bin/env node
/**
 * Game Studio — make a new game's starter kit.
 *
 *   node tools/make-starter.mjs new --title "Don't Get Gobble Gobbled" [options]
 *       Stamps games/<id>/<Name>-Starter/ from templates/ and lessons/, with every
 *       game name filled in and <!-- FILL: … --> markers where the studio chat
 *       writes the game-specific parts (pitch, name check, flags, questions, art).
 *   node tools/make-starter.mjs todo games/<id>
 *       Lists the FILL markers and tokens still left in the starter.
 *   node tools/make-starter.mjs finish games/<id> [--skip-build]
 *       Refuses while anything is left to fill; otherwise tests a clean copy
 *       (npm install, npm run check, npm run build:book), then writes
 *       games/<id>/<Name>-Starter.zip and games/<id>/KICKOFF-PROMPT.md.
 *   node tools/make-starter.mjs selftest [--skip-build] [--keep]
 *       Stamps, auto-fills and finishes a dummy game in a temp folder.
 *
 * Options for `new` (all but --title are worked out from the title):
 *   --id kebab-id        Foundry system id, CSS class, flag scope   (dont-get-gobble-gobbled)
 *   --short GG           JS constant name, CONFIG key, lang prefix  (DGGG)
 *   --camel gobbleGame   game.<camel> API namespace                 (dontGetGobbleGobbled)
 *   --file Stem_Name     rulebook PDF file stem                     (Dont_Get_Gobble_Gobbled)
 *   --name Zip-Name      starter folder and zip name, plus -Starter (Dont-Get-Gobble-Gobbled)
 *   --owner PainHog      GitHub owner for the suggested repository
 *   --repo Owner/Repo    the game's repository                      (PainHog/DontGetGobbleGobbled)
 *   --date YYYY-MM-DD    pitch date                                  (today)
 *   --out games          where game folders go
 *   --force              replace an existing starter (filled docs are lost)
 *
 * Inside this studio repository the project rules file is PROJECT-CLAUDE.md, so
 * Claude never mistakes a game's rules for the studio's; `finish` renames it to
 * CLAUDE.md inside the zip.
 */

import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync, copyFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const KIT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_TEMPLATE = join(KIT, "templates", "project");
const DOC_TEMPLATES = join(KIT, "templates", "docs");
const LESSONS = join(KIT, "lessons");
const STUDIES = join(KIT, "reference", "studies");

const LEFTOVER = /<!--\s*FILL|__(?:GAME|PROJECT|GITHUB|REPO|STARTER|DATE|YEAR|NEXT|game)_?[A-Za-z_]*__/;
const SKIP_DIRS = new Set(["node_modules", ".git"]);

// Throw rather than exit, so `finally` blocks still clean up temp folders.
class StudioError extends Error {}
function fail(msg) { throw new StudioError(msg); }
const ok = msg => console.log(`✓ ${msg}`);

// ---------------------------------------------------------------- names

function deriveNames(o) {
  const title = (o.title ?? "").trim().replace(/’/g, "'");
  if (!title) fail("--title is required");
  if (/["\\<>`$]/.test(title)) fail(`the title can't contain " \\ < > \` or $ (it goes into JSON, HTML and code)`);
  const words = title.replace(/'/g, "").split(/[^A-Za-z0-9]+/).filter(Boolean);
  if (!words.length) fail("the title needs at least one letter or digit");
  const cap = w => w[0].toUpperCase() + w.slice(1);

  const id = o.id ?? words.map(w => w.toLowerCase()).join("-");
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(id)) fail(`--id "${id}" must be lower-case kebab-case starting with a letter`);
  const camel = o.camel ?? id.split("-").map((w, i) => (i ? cap(w) : w)).join("");
  if (!/^[a-z][A-Za-z0-9]*$/.test(camel)) fail(`--camel "${camel}" must be camelCase starting with a letter`);
  let short = o.short ?? (words.length > 1 ? words.map(w => w[0]).join("") : words[0].slice(0, 2)).toUpperCase();
  if (!o.short && !/^[A-Z]/.test(short)) short = `G${short}`;
  if (!/^[A-Z][A-Z0-9]{1,9}$/.test(short)) fail(`--short "${short}" must be 2–10 capital letters or digits, starting with a letter`);
  const file = o.file ?? words.join("_");
  if (!/^[A-Za-z0-9_-]+$/.test(file)) fail(`--file "${file}" may only use letters, digits, _ and -`);
  const name = o.name ?? words.map(cap).join("-");
  if (!/^[A-Za-z0-9_-]+$/.test(name)) fail(`--name "${name}" may only use letters, digits, _ and -`);
  const repo = o.repo ?? `${o.owner ?? "PainHog"}/${words.map(cap).join("")}`;
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) fail(`--repo "${repo}" must look like Owner/Repository`);
  const now = new Date();
  const date = o.date ?? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`--date "${date}" must be YYYY-MM-DD`);

  return { title, id, camel, short, file, name, repo, date };
}

function tokensFor(n) {
  const artItems = [...readFileSync(join(LESSONS, "ART-CHECKLIST.md"), "utf8").matchAll(/^(\d+)\. /gm)].map(m => Number(m[1]));
  // Longer tokens first, so no token is ever replaced inside another.
  return [
    ["__GAME_TITLE_CURLY__", n.title.replace(/'/g, "’")],
    ["__GAME_TITLE_UPPER__", n.title.toUpperCase()],
    ["__GAME_TITLE__", n.title],
    ["__GAME_CAMEL__", n.camel],
    ["__GAME_SHORT__", n.short],
    ["__GAME_FILE__", n.file],
    ["__GAME_ID__", n.id],
    ["__game_short__", n.short.toLowerCase()],
    ["__GITHUB_REPO__", n.repo],
    ["__REPO_NAME__", n.repo.split("/")[1]],
    ["__STARTER_ZIP__", `${n.name}-Starter.zip`],
    ["__NEXT_ART_ITEM__", String(Math.max(0, ...artItems) + 1)],
    ["__DATE__", n.date],
    ["__YEAR__", n.date.slice(0, 4)],
  ];
}

const render = (text, tokens) => tokens.reduce((s, [k, v]) => s.split(k).join(v), text);

// ---------------------------------------------------------------- files

function* walk(dir, skip = SKIP_DIRS) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!skip.has(e.name)) yield* walk(join(dir, e.name), skip); }
    else yield join(dir, e.name);
  }
}

const isText = buf => !buf.includes(0);

function copyRendered(from, to, tokens) {
  for (const src of walk(from)) {
    const dest = join(to, render(relative(from, src), tokens));
    mkdirSync(dirname(dest), { recursive: true });
    const buf = readFileSync(src);
    writeFileSync(dest, isText(buf) ? render(buf.toString("utf8"), tokens) : buf);
  }
}

function writeRendered(src, dest, tokens, transform = s => s) {
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, transform(render(readFileSync(src, "utf8"), tokens)));
}

function leftovers(starter) {
  const found = [];
  for (const f of walk(starter, new Set([...SKIP_DIRS, "dist"]))) {
    const rel = relative(starter, f);
    if (LEFTOVER.test(rel)) found.push(`${rel} (file name)`);
    const buf = readFileSync(f);
    if (!isText(buf)) continue;
    buf.toString("utf8").split("\n").forEach((line, i) => {
      if (LEFTOVER.test(line)) found.push(`${rel}:${i + 1}: ${line.trim().slice(0, 100)}`);
    });
  }
  return found;
}

function loadGame(gameDir) {
  const dir = resolve(gameDir ?? "");
  const meta = join(dir, "game.json");
  if (!gameDir || !existsSync(meta)) fail(`no game.json in "${gameDir ?? ""}" (pass the games/<id> folder made by \`new\`)`);
  const game = JSON.parse(readFileSync(meta, "utf8"));
  const starter = join(dir, `${game.name}-Starter`);
  if (!existsSync(starter)) fail(`missing ${relative(process.cwd(), starter)}`);
  return { dir, game, starter };
}

// Chromium keeps a Unix socket in its temp profile, and socket paths are capped at
// about 107 characters: a long TMPDIR (a session scratchpad, say) makes it abort.
const childEnv = tmpdir().length > 40 && existsSync("/tmp") ? { ...process.env, TMPDIR: "/tmp" } : process.env;

function run(cmd, args, cwd) {
  console.log(`  $ ${cmd} ${args.join(" ")}`);
  const r = spawnSync(cmd, args, { cwd, stdio: "inherit", env: childEnv });
  if (r.error) return `${cmd} could not start (${r.error.message})`;
  return r.status === 0 ? null : `${cmd} ${args.join(" ")} exited with ${r.status}`;
}

// ---------------------------------------------------------------- commands

function cmdNew(o) {
  const n = deriveNames(o);
  const tokens = tokensFor(n);
  const gameDir = join(resolve(o.out ?? join(KIT, "games")), n.id);
  const starter = join(gameDir, `${n.name}-Starter`);
  if (existsSync(starter)) {
    if (!o.force) fail(`${relative(process.cwd(), starter)} already exists (use --force to replace it; its filled docs will be lost)`);
    rmSync(starter, { recursive: true, force: true });
  }

  copyRendered(PROJECT_TEMPLATE, starter, tokens);
  writeRendered(join(DOC_TEMPLATES, "PROJECT-CLAUDE.md"), join(starter, "PROJECT-CLAUDE.md"), tokens);
  writeRendered(join(DOC_TEMPLATES, "README.md"), join(starter, "README.md"), tokens);
  writeRendered(join(DOC_TEMPLATES, "DESIGN.md"), join(starter, "docs", "DESIGN.md"), tokens);
  writeRendered(join(DOC_TEMPLATES, "KICKOFF-PROMPT.md"), join(starter, "docs", "KICKOFF-PROMPT.md"), tokens);
  for (const f of ["DESIGN-RULES.md", "REVIEW-PROCEDURE.md"]) copyFileSync(join(LESSONS, f), join(starter, "docs", f));
  const artSection = render(readFileSync(join(DOC_TEMPLATES, "ART-PROJECT-SECTION.md"), "utf8"), tokens);
  writeRendered(join(LESSONS, "ART-CHECKLIST.md"), join(starter, "book", "art", "ART-CHECKLIST.md"), tokens, s => {
    const at = s.indexOf("## How to audit");
    if (at < 0) fail('lessons/ART-CHECKLIST.md needs its "## How to audit" heading (the project section goes before it)');
    return s.slice(0, at) + artSection + s.slice(at);
  });
  if (existsSync(STUDIES)) cpSync(STUDIES, join(starter, "docs", "reference"), { recursive: true });
  writeFileSync(join(gameDir, "game.json"), JSON.stringify(n, null, 2) + "\n");

  const rel = p => relative(process.cwd(), p);
  ok(`stamped ${rel(starter)}`);
  console.log(`  title ${n.title} · id ${n.id} · short ${n.short} · camel ${n.camel} · file ${n.file} · repo ${n.repo}`);
  console.log(`\nNext: fill every <!-- FILL: … --> marker (\`node tools/make-starter.mjs todo ${rel(gameDir)}\` lists them), then run \`node tools/make-starter.mjs finish ${rel(gameDir)}\`.`);
  return gameDir;
}

function cmdTodo(gameDir) {
  const { starter } = loadGame(gameDir);
  const left = leftovers(starter);
  if (!left.length) { ok("nothing left to fill"); return; }
  console.log(`${left.length} left to fill:`);
  for (const l of left) console.log(`  ${l}`);
}

function cmdFinish(gameDir, o) {
  const { dir, game, starter } = loadGame(gameDir);
  const left = leftovers(starter);
  if (left.length) fail(`${left.length} left to fill before finishing:\n  ${left.join("\n  ")}`);
  if (existsSync(join(starter, "CLAUDE.md"))) fail("the starter has a CLAUDE.md: keep the project rules in PROJECT-CLAUDE.md (finish renames it in the zip)");
  if (!existsSync(join(starter, "PROJECT-CLAUDE.md"))) fail("the starter is missing PROJECT-CLAUDE.md");

  const tmp = mkdtempSync(join(tmpdir(), "studio-"));
  try {
    const skip = new Set([...SKIP_DIRS]);
    const filter = src => !skip.has(basename(src)) && relative(starter, src) !== join("book", "dist");
    const stage = join(tmp, "stage", basename(starter));
    cpSync(starter, stage, { recursive: true, filter });
    renameSync(join(stage, "PROJECT-CLAUDE.md"), join(stage, "CLAUDE.md"));

    if (!o["skip-build"]) {
      const test = join(tmp, "test");
      cpSync(stage, test, { recursive: true });
      console.log("Testing a clean copy of the starter:");
      for (const args of [["install", "--no-audit", "--no-fund", "--loglevel=error"], ["run", "check"], ["run", "build:book"]]) {
        const err = run("npm", args, test);
        if (err) fail(`${err}. The starter was not zipped.`);
      }
      const pdfs = existsSync(join(test, "book", "dist")) ? readdirSync(join(test, "book", "dist")).filter(f => f.startsWith(`${game.file}_v`) && f.endsWith(".pdf")) : [];
      if (!pdfs.length) fail(`the book build made no ${game.file}_v*.pdf. The starter was not zipped.`);
      ok(`npm install, npm run check and the book build all passed (${pdfs[0]})`);
    } else console.log("! Skipped the install, check and book build (--skip-build).");

    const zip = join(dir, `${game.name}-Starter.zip`);
    rmSync(zip, { force: true });
    let err = run("zip", ["-rqX", zip, basename(stage)], dirname(stage));
    if (err) err = run("python3", ["-m", "zipfile", "-c", zip, basename(stage)], dirname(stage));
    if (err) fail(`could not write the zip: ${err}`);
    copyFileSync(join(stage, "docs", "KICKOFF-PROMPT.md"), join(dir, "KICKOFF-PROMPT.md"));

    const rel = p => relative(process.cwd(), p);
    ok(`${rel(zip)} (${Math.round(statSync(zip).size / 1024)} KB)`);
    ok(`${rel(join(dir, "KICKOFF-PROMPT.md"))}`);
    console.log(`\nSend Richard both files. Suggested repository name: ${game.repo.split("/")[1]}.`);
    return zip;
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

function cmdSelftest(o) {
  const out = mkdtempSync(join(tmpdir(), "studio-selftest-"));
  try {
    const gameDir = cmdNew({ title: "Studio Self-Test", out });
    const { starter } = loadGame(gameDir);
    const before = leftovers(starter).length;
    if (!before) fail("the stamped starter had no FILL markers (the doc templates are broken)");
    for (const f of walk(starter)) {
      const s = readFileSync(f, "utf8");
      if (s.includes("<!--")) writeFileSync(f, s.replace(/<!--\s*FILL[\s\S]*?-->/g, "Self-test text."));
    }
    const left = leftovers(starter);
    if (left.length) fail(`tokens survived stamping:\n  ${left.join("\n  ")}`);
    ok(`${before} FILL markers stamped and filled; no tokens left`);
    const zip = cmdFinish(gameDir, o);
    const list = spawnSync("unzip", ["-Z1", zip], { encoding: "utf8" }).stdout ?? "";
    if (list) {
      const top = "Studio-Self-Test-Starter/";
      for (const must of ["CLAUDE.md", ".github/workflows/ci.yml", "docs/DESIGN.md", "docs/DESIGN-RULES.md", "book/art/ART-CHECKLIST.md", "module/studio-self-test.mjs"])
        if (!list.includes(`${top}${must}\n`)) fail(`the zip is missing ${must}`);
      if (list.includes("PROJECT-CLAUDE.md") || list.includes("node_modules/")) fail("the zip holds PROJECT-CLAUDE.md or node_modules");
      ok("the zip has CLAUDE.md, the workflows and the docs, and no node_modules");
    }
    ok("self-test passed");
  } finally {
    if (o.keep) console.log(`Kept ${out}`); else rmSync(out, { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------- main

const { values: o, positionals } = parseArgs({
  allowPositionals: true,
  options: Object.fromEntries([
    ...["title", "id", "short", "camel", "file", "name", "owner", "repo", "date", "out"].map(k => [k, { type: "string" }]),
    ...["force", "skip-build", "keep", "help"].map(k => [k, { type: "boolean" }]),
  ]),
});
const [cmd, target] = positionals;

try {
  if (o.help || !cmd) console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0].replace(/^#!.*\n\/\*\*\n?/, "").replace(/^ \* ?/gm, ""));
  else if (cmd === "new") cmdNew(o);
  else if (cmd === "todo") cmdTodo(target);
  else if (cmd === "finish") cmdFinish(target, o);
  else if (cmd === "selftest") cmdSelftest(o);
  else fail(`unknown command "${cmd}" (new, todo, finish or selftest)`);
} catch (e) {
  if (!(e instanceof StudioError)) throw e;
  console.error(`✗ ${e.message}`);
  process.exitCode = 1;
}
