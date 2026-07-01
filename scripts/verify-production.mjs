import { execFileSync } from "node:child_process";
import { resolve4, resolveCname } from "node:dns/promises";

const EXPECTED_GITHUB_PAGES_IPS = [
  "185.199.108.153",
  "185.199.109.153",
  "185.199.110.153",
  "185.199.111.153"
];

const PRODUCTION_URLS = [
  "https://scsda.cn/",
  "https://www.scsda.cn/",
  "https://scsda.cn/en/",
  "https://www.scsda.cn/en/",
  "https://scsda.cn/evidence/",
  "https://www.scsda.cn/evidence/",
  "https://scsda.cn/robots.txt",
  "https://scsda.cn/sitemap.xml"
];

const CONTENT_CHECKS = [
  {
    url: "https://scsda.cn/",
    includes: "Smart Cities and Sustainable Development Academy"
  },
  {
    url: "https://scsda.cn/evidence/",
    includes: "institutional research-platform website"
  }
];

function safeExec(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8" }).trim();
  } catch (error) {
    return `unavailable: ${error.message}`;
  }
}

function printSection(title) {
  console.log(`\n## ${title}`);
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

function hasExpectedGithubPagesARecords(records) {
  return EXPECTED_GITHUB_PAGES_IPS.every((ip) => records.includes(ip));
}

async function headCheck(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(20000)
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

async function contentCheck({ url, includes }) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000)
    });
    const text = await response.text();
    return {
      url,
      ok: response.ok && text.includes(includes),
      status: response.status,
      finalUrl: response.url,
      includes
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: 0,
      finalUrl: "",
      includes,
      error: error.message
    };
  }
}

printSection("SCSDA production-domain verification");
console.log(`Time: ${new Date().toISOString()}`);
console.log("Mode: read-only, no DNS or GitHub settings are modified.");
console.log("Use this after formal DNS cutover has been approved and applied.");

printSection("Git state");
console.log(safeExec("git", ["status", "--short", "--branch"]));
console.log(`Latest commit: ${safeExec("git", ["log", "--oneline", "-1"])}`);

printSection("Expected DNS");
console.log("scsda.cn A records:");
for (const record of EXPECTED_GITHUB_PAGES_IPS) {
  console.log(`  ${record}`);
}
console.log("www.scsda.cn CNAME:");
console.log("  daguanghan.github.io");

printSection("Current DNS snapshot");
const [apexDns, wwwDns] = await Promise.all([
  dnsSnapshot("scsda.cn"),
  dnsSnapshot("www.scsda.cn")
]);

for (const item of [apexDns, wwwDns]) {
  console.log(`${item.domain}`);
  console.log(`  CNAME: ${item.cname.length ? item.cname.join(", ") : "(none)"}`);
  console.log(`  A:     ${item.a.length ? item.a.join(", ") : "(none)"}`);
}

const apexDnsOk = hasExpectedGithubPagesARecords(apexDns.a);
const wwwDnsOk =
  wwwDns.cname.some((record) => record.replace(/\.$/, "") === "daguanghan.github.io") ||
  hasExpectedGithubPagesARecords(wwwDns.a);

console.log(`Apex DNS check: ${apexDnsOk ? "PASS" : "FAIL"}`);
console.log(`www DNS check: ${wwwDnsOk ? "PASS" : "FAIL"}`);

printSection("HTTPS URL checks");
const urlResults = await Promise.all(PRODUCTION_URLS.map((url) => headCheck(url)));
for (const item of urlResults) {
  const marker = item.ok ? "PASS" : "FAIL";
  const extra = item.error ? ` error=${item.error}` : "";
  console.log(`${marker} ${item.status} ${item.url} -> ${item.finalUrl || "n/a"} ${item.contentType}${extra}`);
}

printSection("Content checks");
const contentResults = await Promise.all(CONTENT_CHECKS.map((item) => contentCheck(item)));
for (const item of contentResults) {
  const marker = item.ok ? "PASS" : "FAIL";
  const extra = item.error ? ` error=${item.error}` : "";
  console.log(`${marker} ${item.status} ${item.url} includes "${item.includes}"${extra}`);
}

const failures = [
  !apexDnsOk,
  !wwwDnsOk,
  ...urlResults.map((item) => !item.ok),
  ...contentResults.map((item) => !item.ok)
].filter(Boolean);

printSection("Result");
if (failures.length > 0) {
  console.log(`FAIL: production domain is not fully verified yet (${failures.length} failed check(s)).`);
  console.log("If DNS was just changed, wait for propagation and GitHub Pages HTTPS provisioning.");
  console.log("If failures persist after propagation, follow CUTOVER_CHECKLIST.md rollback guidance.");
  process.exitCode = 1;
} else {
  console.log("PASS: scsda.cn and www.scsda.cn appear to serve the verified GitHub Pages site.");
}
