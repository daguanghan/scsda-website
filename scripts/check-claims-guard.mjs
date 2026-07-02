import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const TEXT_EXTENSIONS = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".txt",
  ".xml"
]);

const SCAN_ROOTS = [
  "src",
  "public",
  "CLAIMS_REGISTER.md",
  "PRODUCT.md",
  "DESIGN.md",
  "README.md",
  "CURRENT_STATUS_ZH.md",
  "USER_REVIEW_CHECKLIST_ZH.md",
  "GNAME_DNS_CUTOVER_RUNBOOK_ZH.md",
  "REVIEW_GUIDE.md",
  "LAUNCH_DECISION_PACKET.md",
  "STAGING_SIGNOFF.md",
  "COMPLETION_AUDIT.md",
  "dist"
];

const BUILT_PAGE_ROOT = "dist";
const REQUIRED_BUILT_PHRASES = [
  "public-facing",
  "non-confidential",
  "nonprofit applied research academy",
  "Research, education, and applied innovation",
  "Founding leadership and platform development"
];

const BUILT_FORBIDDEN_EXCEPTIONS = [
  "does not foreground",
  "does not imply official government authority",
  "does not imply official government authorization",
  "do not imply official government authority",
  "do not imply official government authorization",
  "no page implies official government authority",
  "public-security work",
  "military work",
  "surveillance",
  "confidential access",
  "confidential-technology",
  "public-security, military, confidential",
  "public-security, military, surveillance",
  "sensitive, public-security, military",
  "avoid sensitive, public-security, military",
  "sensitive public-security",
  "public-security or government-decision wording",
  "security-adjacent topics"
];

const GLOBAL_FORBIDDEN_EXCEPTIONS = [
  ...BUILT_FORBIDDEN_EXCEPTIONS,
  "Wording To Avoid",
  "Avoid",
  "Do not publish",
  "Don't publish",
  "Do not approve",
  "does not imply",
  "do not imply",
  "No page implies",
  "not a government",
  "not foreground",
  "not foregrounded",
  "excluded",
  "banned",
  "forbidden",
  "sensitive positive-claim traps",
  "sensitive or over-strong phrase",
  "government status or sensitive work",
  "Sensitive deployment claims",
  "Risk Rejection Criteria",
  "避免",
  "不要",
  "不得",
  "不是",
  "不应当",
  "不能",
  "不暗示",
  "不涉及",
  "没有",
  "尚未",
  "误读风险",
  "风险表述"
];

function printSection(title) {
  console.log(`\n## ${title}`);
}

function extensionOf(path) {
  const match = path.match(/\.[^.]+$/);
  return match ? match[0].toLowerCase() : "";
}

function walk(path) {
  if (!existsSync(path)) return [];
  const stat = statSync(path);
  if (stat.isFile()) return TEXT_EXTENSIONS.has(extensionOf(path)) ? [path] : [];
  if (!stat.isDirectory()) return [];
  return readdirSync(path).flatMap((entry) => walk(join(path, entry)));
}

function readText(path) {
  return readFileSync(path, "utf8");
}

function extractAvoidPhrases(registerText) {
  const section = registerText.match(/## Wording To Avoid([\s\S]*?)(?:\n## |\n$)/);
  if (!section) return [];
  return section[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);
}

function isException(line, exceptions) {
  const lower = line.toLowerCase();
  return exceptions.some((exception) => lower.includes(exception.toLowerCase()));
}

function findForbiddenHits(file, text, forbidden, exceptions) {
  if (file === "CLAIMS_REGISTER.md") return [];
  const hits = [];
  const lines = text.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    const lower = line.toLowerCase();
    for (const phrase of forbidden) {
      if (!phrase) continue;
      if (lower.includes(phrase.toLowerCase()) && !isException(line, exceptions)) {
        hits.push({
          file,
          line: index + 1,
          phrase,
          text: line.trim()
        });
      }
    }
  }
  return hits;
}

function filesForRoots(roots) {
  return [...new Set(roots.flatMap((root) => walk(root)))].sort();
}

const registerText = readText("CLAIMS_REGISTER.md");
const forbiddenPhrases = extractAvoidPhrases(registerText);
const scanFiles = filesForRoots(SCAN_ROOTS);
const builtFiles = filesForRoots([BUILT_PAGE_ROOT]).filter((file) => file.endsWith(".html"));

printSection("SCSDA claims guard");
console.log(`Time: ${new Date().toISOString()}`);
console.log("Mode: local read-only content safety check.");
console.log(`Forbidden phrases from Claims Register: ${forbiddenPhrases.length}`);
console.log(`Text files scanned: ${scanFiles.length}`);

printSection("Forbidden positive-claim scan");
const globalHits = scanFiles.flatMap((file) =>
  findForbiddenHits(file, readText(file), forbiddenPhrases, GLOBAL_FORBIDDEN_EXCEPTIONS)
);

if (globalHits.length === 0) {
  console.log("PASS: no unsupported positive use of Claims Register avoid-phrases found.");
} else {
  for (const hit of globalHits) {
    console.log(`FAIL ${hit.file}:${hit.line} "${hit.phrase}" ${hit.text}`);
  }
}

printSection("Built-site required safety phrases");
const builtText = builtFiles.map((file) => readText(file)).join("\n").toLowerCase();
const missingRequired = REQUIRED_BUILT_PHRASES.filter((phrase) => !builtText.includes(phrase.toLowerCase()));
if (missingRequired.length === 0) {
  console.log("PASS: required safety and leadership phrases are present in built pages.");
} else {
  for (const phrase of missingRequired) {
    console.log(`FAIL missing built phrase: ${phrase}`);
  }
}

printSection("Built-site avoid-phrase context check");
const builtHits = builtFiles.flatMap((file) =>
  findForbiddenHits(file, readText(file), forbiddenPhrases, BUILT_FORBIDDEN_EXCEPTIONS)
);

if (builtHits.length === 0) {
  console.log("PASS: built pages do not contain unsupported avoid-phrase contexts.");
} else {
  for (const hit of builtHits) {
    console.log(`FAIL ${hit.file}:${hit.line} "${hit.phrase}" ${hit.text}`);
  }
}

printSection("Result");
const failureCount = globalHits.length + missingRequired.length + builtHits.length;
if (failureCount > 0) {
  console.log(`FAIL: ${failureCount} claims guard issue(s) found.`);
  process.exitCode = 1;
} else {
  console.log("PASS: claims guard checks passed.");
}
