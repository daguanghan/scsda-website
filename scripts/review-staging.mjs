import { execFileSync } from "node:child_process";

const BASE_URL = "https://ultraclaw.space";

const PAGE_CHECKS = [
  {
    path: "/",
    includes: [
      "Smart Cities and Sustainable Development Academy",
      "Applied research academy established in Chongqing in 2019",
      "Research, education, and applied innovation",
      "Public Material Highlights"
    ]
  },
  {
    path: "/about/",
    includes: [
      "A research platform for smart cities and sustainable development.",
      "Research, education, and responsible applied innovation.",
      "Platform History",
      "Interview Record"
    ]
  },
  {
    path: "/leadership/",
    includes: [
      "Founding leadership and platform development.",
      "Strategic, academic, and industry-facing responsibilities."
    ]
  },
  {
    path: "/research/",
    includes: [
      "BIM, Digital Twins and Reality Capture",
      "Smart Infrastructure and Structural Health Monitoring"
    ]
  },
  {
    path: "/projects/",
    includes: [
      "SCSDA Platform Construction, 2019-2023",
      "BIM and Digital Twin Research Centre"
    ]
  },
  {
    path: "/outputs/",
    includes: [
      "Construction-Period Indicators",
      "46",
      "postgraduate and doctoral participants",
      "13",
      "incubation projects"
    ]
  },
  {
    path: "/legacy/",
    includes: [
      "Archive",
      "Earlier Chinese website materials are preserved as institutional records."
    ]
  },
  {
    path: "/contact/",
    includes: [
      "Contact",
      "info@scsda.cn"
    ]
  },
  {
    path: "/en/",
    includes: [
      "Smart Cities and Sustainable Development Academy",
      "/en/research/"
    ]
  },
  {
    path: "/robots.txt",
    includes: ["Sitemap: https://ultraclaw.space/sitemap.xml"]
  },
  {
    path: "/sitemap.xml",
    includes: [
      "https://ultraclaw.space/",
      "https://ultraclaw.space/research/"
    ],
    excludes: [
      "https://ultraclaw.space/evidence/",
      "https://ultraclaw.space/en/evidence/"
    ]
  }
];

const FORBIDDEN_POSITIVE_CLAIMS = [
  "government-authorized platform",
  "official government academy",
  "government decision platform",
  "public security platform",
  "military technology",
  "surveillance platform",
  "confidential technology",
  "technology transfer to China",
  ["academic", "applications"].join(" "),
  ["reviewer", "facing"].join("-"),
  ["evidence", "map"].join(" "),
  "From researcher to research-platform builder"
];

const FORBIDDEN_IMAGE_PATHS = [
  "/images/academy-launch.jpg",
  "/images/research-space.jpg",
  "/images/research-exhibition.jpg",
  "/images/lab-engagement.jpg"
];

const VIEWPORT_CHECKS = [
  { name: "desktop-home", path: "/", width: 1440, height: 1000 },
  { name: "mobile-home", path: "/", width: 390, height: 1000 },
  { name: "mobile-research", path: "/research/", width: 390, height: 1000 },
  { name: "mobile-outputs", path: "/outputs/", width: 390, height: 1000 }
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

async function fetchText(path) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(20000)
  });
  const text = await response.text();
  return {
    path,
    url,
    ok: response.ok,
    status: response.status,
    finalUrl: response.url,
    contentType: response.headers.get("content-type") || "",
    text
  };
}

function findForbiddenPositiveClaims(text) {
  const normalized = text.toLowerCase();
  return FORBIDDEN_POSITIVE_CLAIMS.filter((claim) => normalized.includes(claim.toLowerCase()));
}

function findForbiddenImagePaths(text) {
  return FORBIDDEN_IMAGE_PATHS.filter((imagePath) => text.includes(imagePath));
}

async function runPageChecks() {
  printSection("HTTP and content checks");
  const results = [];
  for (const check of PAGE_CHECKS) {
    const result = await fetchText(check.path);
    const normalizedText = result.text.toLowerCase();
    const missing = check.includes.filter((needle) => !normalizedText.includes(needle.toLowerCase()));
    const unexpected = (check.excludes || []).filter((needle) =>
      normalizedText.includes(needle.toLowerCase())
    );
    const forbidden = findForbiddenPositiveClaims(result.text);
    const forbiddenImages = findForbiddenImagePaths(result.text);
    const ok =
      result.ok &&
      missing.length === 0 &&
      unexpected.length === 0 &&
      forbidden.length === 0 &&
      forbiddenImages.length === 0;
    results.push({ ...result, missing, unexpected, forbidden, forbiddenImages, ok });
    const marker = ok ? "PASS" : "FAIL";
    console.log(`${marker} ${result.status} ${result.url} ${result.contentType}`);
    if (missing.length > 0) {
      console.log(`  missing: ${missing.join(" | ")}`);
    }
    if (unexpected.length > 0) {
      console.log(`  unexpected: ${unexpected.join(" | ")}`);
    }
    if (forbidden.length > 0) {
      console.log(`  forbidden positive claim: ${forbidden.join(" | ")}`);
    }
    if (forbiddenImages.length > 0) {
      console.log(`  forbidden image path: ${forbiddenImages.join(" | ")}`);
    }
  }
  return results;
}

async function runViewportChecks() {
  printSection("Viewport checks");
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.log("SKIP: Playwright is not installed in this environment.");
    return [];
  }

  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const check of VIEWPORT_CHECKS) {
      const page = await browser.newPage({
        viewport: { width: check.width, height: check.height }
      });
      await page.goto(`${BASE_URL}${check.path}`, { waitUntil: "networkidle" });
      const result = await page.evaluate(() => {
        const doc = document.documentElement;
        const h1 = document.querySelector("h1");
        const h1Box = h1?.getBoundingClientRect();
        const hero = document.querySelector(".hero")?.getBoundingClientRect();
        const navTops = Array.from(document.querySelectorAll(".main-nav a")).map((a) =>
          Math.round(a.getBoundingClientRect().top)
        );
        const overflowing = Array.from(document.querySelectorAll("body *"))
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            return rect.right > window.innerWidth + 1 || rect.left < -1;
          })
          .slice(0, 5)
          .map((el) => ({
            tag: el.tagName,
            className: String(el.className || ""),
            text: el.textContent?.trim().slice(0, 80) || ""
          }));

        return {
          title: document.title,
          overflowX: doc.scrollWidth > doc.clientWidth + 1,
          overflowing,
          navRows: new Set(navTops).size,
          h1Text: h1?.textContent?.trim() || "",
          h1Overflow:
            h1Box && hero ? h1Box.right > hero.right + 1 || h1Box.left < hero.left - 1 : false
        };
      });
      await page.close();
      const ok = !result.overflowX && result.overflowing.length === 0 && !result.h1Overflow;
      results.push({ ...check, ...result, ok });
      const marker = ok ? "PASS" : "FAIL";
      console.log(
        `${marker} ${check.name} ${check.width}x${check.height} navRows=${result.navRows} title="${result.title}"`
      );
      if (!ok) {
        console.log(`  overflowX=${result.overflowX} h1Overflow=${result.h1Overflow}`);
        console.log(`  overflowing=${JSON.stringify(result.overflowing)}`);
      }
    }
  } finally {
    await browser.close();
  }
  return results;
}

printSection("SCSDA staging review");
console.log(`Time: ${new Date().toISOString()}`);
console.log(`Base URL: ${BASE_URL}`);
console.log("Mode: read-only, no DNS or GitHub settings are modified.");

printSection("Git state");
console.log(safeExec("git", ["status", "--short", "--branch"]));
console.log(`Latest commit: ${safeExec("git", ["log", "--oneline", "-1"])}`);

const pageResults = await runPageChecks();
const viewportResults = await runViewportChecks();

const failures = [
  ...pageResults.filter((result) => !result.ok),
  ...viewportResults.filter((result) => !result.ok)
];

printSection("Result");
if (failures.length > 0) {
  console.log(`FAIL: ${failures.length} staging review check(s) failed.`);
  process.exitCode = 1;
} else {
  console.log("PASS: staging site content and viewport checks passed.");
}
