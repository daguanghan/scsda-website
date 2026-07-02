import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const sourceFiles = execFileSync("rg", ["--files", "src"], { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean);

const assetPattern = /\/(?:images|media)\/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg|mp4)/g;

const bannedVisuals = new Map([
  ["/images/academy-launch.jpg", "launch or signing event"],
  ["/images/research-space.jpg", "launch or signing event"],
  ["/images/research-exhibition.jpg", "reception or visitor tour"],
  ["/images/lab-engagement.jpg", "reception or visitor tour"]
]);

const duplicateIgnores = new Set(["/images/scsda-logo.jpg", "/favicon.svg"]);

const occurrences = new Map();
const bannedHits = [];

for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(assetPattern)) {
    const asset = match[0];
    const line = text.slice(0, match.index).split("\n").length;
    if (bannedVisuals.has(asset)) {
      bannedHits.push({ asset, file, line, reason: bannedVisuals.get(asset) });
    }
    if (duplicateIgnores.has(asset) || file === "src/data/site.ts") {
      continue;
    }
    const refs = occurrences.get(asset) || [];
    refs.push({ file, line });
    occurrences.set(asset, refs);
  }
}

const duplicates = Array.from(occurrences.entries()).filter(([, refs]) => refs.length > 1);

if (bannedHits.length === 0 && duplicates.length === 0) {
  console.log("PASS visual assets: no banned reception/signing visuals and no duplicate content image references.");
  process.exit(0);
}

if (bannedHits.length > 0) {
  console.log("FAIL banned visual assets:");
  for (const hit of bannedHits) {
    console.log(`- ${hit.asset} (${hit.reason}) at ${hit.file}:${hit.line}`);
  }
}

if (duplicates.length > 0) {
  console.log("FAIL duplicate content image references:");
  for (const [asset, refs] of duplicates) {
    console.log(`- ${asset}`);
    for (const ref of refs) {
      console.log(`  - ${ref.file}:${ref.line}`);
    }
  }
}

process.exit(1);
