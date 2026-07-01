import { execFileSync } from "node:child_process";
import { resolve4, resolveCname } from "node:dns/promises";

const REVIEW_URLS = [
  "https://ultraclaw.space/",
  "https://ultraclaw.space/en/",
  "https://ultraclaw.space/research/",
  "https://ultraclaw.space/projects/",
  "https://ultraclaw.space/robots.txt",
  "https://ultraclaw.space/sitemap.xml"
];

const DOMAINS = [
  "scsda.cn",
  "www.scsda.cn",
  "ultraclaw.space",
  "www.ultraclaw.space"
];

const PLANNED_RECORDS = [
  "A      @      185.199.108.153",
  "A      @      185.199.109.153",
  "A      @      185.199.110.153",
  "A      @      185.199.111.153",
  "CNAME  www    daguanghan.github.io"
];

function safeExec(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8" }).trim();
  } catch (error) {
    return `unavailable: ${error.message}`;
  }
}

async function dnsSnapshot(domain) {
  const result = { domain, a: [], cname: [] };
  try {
    result.cname = await resolveCname(domain);
  } catch {
    result.cname = [];
  }
  try {
    result.a = await resolve4(domain);
  } catch {
    result.a = [];
  }
  return result;
}

async function headCheck(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(15000)
    });
    return {
      url,
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      contentType: response.headers.get("content-type") || ""
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: 0,
      finalUrl: "",
      contentType: "",
      error: error.message
    };
  }
}

function printSection(title) {
  console.log(`\n## ${title}`);
}

printSection("SCSDA pre-cutover audit");
console.log(`Time: ${new Date().toISOString()}`);
console.log("Mode: read-only, no DNS or GitHub settings are modified.");

printSection("Git state");
console.log(safeExec("git", ["status", "--short", "--branch"]));
console.log(`Latest commit: ${safeExec("git", ["log", "--oneline", "-1"])}`);

printSection("Staging URL checks");
const urlResults = await Promise.all(REVIEW_URLS.map((url) => headCheck(url)));
for (const item of urlResults) {
  const marker = item.ok ? "PASS" : "FAIL";
  const extra = item.error ? ` error=${item.error}` : "";
  console.log(`${marker} ${item.status} ${item.url} -> ${item.finalUrl || "n/a"} ${item.contentType}${extra}`);
}

printSection("Current DNS snapshot");
const dnsResults = await Promise.all(DOMAINS.map((domain) => dnsSnapshot(domain)));
for (const item of dnsResults) {
  console.log(`${item.domain}`);
  console.log(`  CNAME: ${item.cname.length ? item.cname.join(", ") : "(none)"}`);
  console.log(`  A:     ${item.a.length ? item.a.join(", ") : "(none)"}`);
}

printSection("Planned scsda.cn DNS records after explicit approval");
for (const record of PLANNED_RECORDS) {
  console.log(record);
}

printSection("Manual gate");
console.log("Do not modify scsda.cn DNS unless the user explicitly says:");
console.log("确认修改 scsda.cn DNS");

const failures = urlResults.filter((item) => !item.ok);
if (failures.length > 0) {
  printSection("Result");
  console.log(`FAIL: ${failures.length} staging URL check(s) failed.`);
  process.exitCode = 1;
} else {
  printSection("Result");
  console.log("PASS: staging URLs responded successfully. DNS cutover still requires explicit user approval.");
}
