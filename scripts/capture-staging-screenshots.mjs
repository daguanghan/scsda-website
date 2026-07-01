import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = "https://ultraclaw.space";
const OUT_DIR = "qa-screenshots/current-staging";

const CAPTURES = [
  { name: "desktop-home", path: "/", width: 1440, height: 1100, fullPage: true },
  { name: "desktop-evidence", path: "/evidence/", width: 1440, height: 1100, fullPage: true },
  { name: "desktop-leadership", path: "/leadership/", width: 1440, height: 1100, fullPage: true },
  { name: "mobile-home", path: "/", width: 390, height: 1000, fullPage: true },
  { name: "mobile-evidence", path: "/evidence/", width: 390, height: 1000, fullPage: true },
  { name: "mobile-outputs", path: "/outputs/", width: 390, height: 1000, fullPage: true }
];

function nowIso() {
  return new Date().toISOString();
}

function markdownReport(results) {
  const lines = [
    "# Current Staging Screenshots",
    "",
    `Generated: ${nowIso()}`,
    "",
    `Base URL: ${BASE_URL}`,
    "",
    "These screenshots are visual review evidence for the staging site only.",
    "They do not imply approval to modify `scsda.cn` DNS.",
    "",
    "## Files",
    ""
  ];

  for (const result of results) {
    lines.push(
      `- ${result.name}: \`${result.file}\` (${result.width}x${result.height}, ${result.url})`
    );
  }

  lines.push(
    "",
    "## Review Boundary",
    "",
    "Formal-domain cutover still requires the explicit approval phrase:",
    "",
    "```text",
    "确认修改 scsda.cn DNS",
    "```",
    ""
  );

  return `${lines.join("\n")}\n`;
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (error) {
  console.error("Playwright is required for screenshot capture.");
  console.error(error.message);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const capture of CAPTURES) {
    const page = await browser.newPage({
      viewport: { width: capture.width, height: capture.height },
      deviceScaleFactor: 1
    });
    const url = `${BASE_URL}${capture.path}`;
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(url, { waitUntil: "networkidle" });
    const file = join(OUT_DIR, `${capture.name}.png`);
    await page.screenshot({ path: file, fullPage: capture.fullPage });
    await page.close();
    results.push({ ...capture, url, file });
    console.log(`Captured ${file}`);
  }
} finally {
  await browser.close();
}

writeFileSync(join(OUT_DIR, "README.md"), markdownReport(results), "utf8");
console.log(`Wrote ${join(OUT_DIR, "README.md")}`);
