import { execFileSync, spawnSync } from "node:child_process";

const allowDirty = process.argv.includes("--allow-dirty");

const CHECKS = [
  {
    label: "Astro project check",
    command: "npm",
    args: ["run", "check"]
  },
  {
    label: "Static site build",
    command: "npm",
    args: ["run", "build"]
  },
  {
    label: "Claims safety guard",
    command: "npm",
    args: ["run", "claims:guard"]
  },
  {
    label: "Staging health check",
    command: "npm",
    args: ["run", "health:staging"]
  },
  {
    label: "Staging content and viewport review",
    command: "npm",
    args: ["run", "review:staging"]
  },
  {
    label: "Pre-cutover DNS and staging audit",
    command: "npm",
    args: ["run", "audit:precutover"]
  }
];

function printSection(title) {
  console.log(`\n## ${title}`);
}

function safeExec(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8" }).trim();
  } catch (error) {
    return `unavailable: ${error.message}`;
  }
}

function runCheck({ label, command, args }) {
  printSection(label);
  console.log(`Command: ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32"
  });

  if (result.status === 0) {
    console.log(`PASS: ${label}`);
    return true;
  }

  console.log(`FAIL: ${label} exited with code ${result.status ?? "unknown"}.`);
  return false;
}

function gitDirtyFiles() {
  const output = safeExec("git", ["status", "--porcelain"]);
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

printSection("SCSDA formal-domain cutover readiness");
console.log(`Time: ${new Date().toISOString()}`);
console.log("Mode: read-only. This command does not modify DNS, GitHub Pages settings or registrar settings.");

printSection("Git state");
console.log(safeExec("git", ["status", "--short", "--branch"]));
console.log(`Latest commit: ${safeExec("git", ["log", "--oneline", "-1"])}`);

const dirtyFiles = gitDirtyFiles();
if (dirtyFiles.length > 0 && !allowDirty) {
  printSection("Result");
  console.log("FAIL: working tree is not clean. Commit or discard local changes before formal-domain cutover.");
  for (const file of dirtyFiles) {
    console.log(`- ${file}`);
  }
  process.exit(1);
}

if (dirtyFiles.length > 0 && allowDirty) {
  console.log("WARN: working tree is dirty, but --allow-dirty was supplied for local development verification.");
}

const failed = [];
for (const check of CHECKS) {
  if (!runCheck(check)) {
    failed.push(check.label);
    break;
  }
}

printSection("Manual gate");
console.log("Even if every check passes, do not modify scsda.cn DNS unless the user explicitly says:");
console.log("确认修改 scsda.cn DNS");

printSection("Result");
if (failed.length > 0) {
  console.log(`FAIL: cutover readiness failed at: ${failed.join(", ")}.`);
  process.exitCode = 1;
} else {
  console.log("PASS: staging is ready for user review and formal DNS cutover remains gated by explicit user approval.");
}
