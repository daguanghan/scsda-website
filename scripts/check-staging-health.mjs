import { execFileSync } from "node:child_process";

const BASE_URL = "https://ultraclaw.space";
const PAGE_PATHS = [
  "/",
  "/about/",
  "/leadership/",
  "/research/",
  "/projects/",
  "/outputs/",
  "/legacy/",
  "/contact/",
  "/en/",
  "/en/about/",
  "/en/leadership/",
  "/en/research/",
  "/en/projects/",
  "/en/outputs/",
  "/en/legacy/",
  "/en/contact/"
];

const SKIPPED_PROTOCOLS = new Set(["mailto:", "tel:", "javascript:", "data:"]);
const ALLOWED_EXTERNAL_BLOCK_STATUSES = new Set([401, 403, 429]);

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

async function fetchWithTimeout(url, options = {}) {
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(options.timeoutMs ?? 20000),
    ...options
  });
  return response;
}

async function fetchText(url) {
  try {
    const response = await fetchWithTimeout(url);
    return {
      url,
      finalUrl: response.url,
      status: response.status,
      ok: response.ok,
      contentType: response.headers.get("content-type") || "",
      text: await response.text()
    };
  } catch (error) {
    return {
      url,
      finalUrl: "",
      status: 0,
      ok: false,
      contentType: "",
      text: "",
      error: error.message
    };
  }
}

async function probeUrl(url, { external = false } = {}) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const response = await fetchWithTimeout(url, { method, timeoutMs: 15000 });
      const ok = response.ok || (external && ALLOWED_EXTERNAL_BLOCK_STATUSES.has(response.status));
      if (ok || method === "GET" || ![405, 403].includes(response.status)) {
        return {
          url,
          finalUrl: response.url,
          status: response.status,
          ok,
          method,
          contentType: response.headers.get("content-type") || "",
          externalBlocked: external && ALLOWED_EXTERNAL_BLOCK_STATUSES.has(response.status)
        };
      }
    } catch (error) {
      if (method === "GET") {
        return { url, finalUrl: "", status: 0, ok: false, method, contentType: "", error: error.message };
      }
    }
  }
}

function extractTags(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");
  return html.match(pattern) || [];
}

function extractAttribute(tag, name) {
  const pattern = new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, "i");
  return tag.match(pattern)?.[2] || "";
}

function extractLinks(html) {
  return extractTags(html, "a")
    .map((tag) => ({ href: extractAttribute(tag, "href"), text: tag.replace(/<[^>]+>/g, "").trim() }))
    .filter((item) => item.href);
}

function extractImageSources(html) {
  const imgSources = extractTags(html, "img").map((tag) => ({
    src: extractAttribute(tag, "src"),
    alt: extractAttribute(tag, "alt"),
    tag
  }));
  const urlSources = Array.from(html.matchAll(/url\((["']?)([^"')]+)\1\)/gi)).map((match) => ({
    src: match[2],
    alt: "css-background",
    tag: "css url()"
  }));
  const metaImages = extractTags(html, "meta")
    .filter((tag) => /property\s*=\s*(["'])og:image\1/i.test(tag) || /name\s*=\s*(["'])twitter:image\1/i.test(tag))
    .map((tag) => ({ src: extractAttribute(tag, "content"), alt: "social-preview", tag }));
  const icons = extractTags(html, "link")
    .filter((tag) => /rel\s*=\s*(["'])icon\1/i.test(tag))
    .map((tag) => ({ src: extractAttribute(tag, "href"), alt: "icon", tag }));
  return [...imgSources, ...urlSources, ...metaImages, ...icons].filter((item) => item.src);
}

function extractMeta(html, nameOrProperty) {
  const tags = extractTags(html, "meta");
  const pattern = new RegExp(`(?:name|property)\\s*=\\s*(["'])${nameOrProperty}\\1`, "i");
  const tag = tags.find((item) => pattern.test(item));
  return tag ? extractAttribute(tag, "content") : "";
}

function extractTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
}

function extractH1s(html) {
  return Array.from(html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)).map((match) =>
    match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
}

function hasAnchor(html, hash) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return true;
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b(?:id|name)\\s*=\\s*(["'])${escaped}\\1`, "i").test(html);
}

function normalizeUrl(raw, baseUrl) {
  try {
    const url = new URL(raw, baseUrl);
    if (SKIPPED_PROTOCOLS.has(url.protocol)) return null;
    return url;
  } catch {
    return null;
  }
}

function sameOrigin(url) {
  return url.origin === BASE_URL;
}

function pageUrl(path) {
  return new URL(path, BASE_URL).toString();
}

printSection("SCSDA staging health check");
console.log(`Time: ${new Date().toISOString()}`);
console.log(`Base URL: ${BASE_URL}`);
console.log("Mode: read-only, no DNS or GitHub settings are modified.");

printSection("Git state");
console.log(safeExec("git", ["status", "--short", "--branch"]));
console.log(`Latest commit: ${safeExec("git", ["log", "--oneline", "-1"])}`);

const pageResults = [];
const failures = [];
const warnings = [];
const internalTargets = new Map();
const externalTargets = new Map();
const assetTargets = new Map();

printSection("Page metadata");
for (const path of PAGE_PATHS) {
  const url = pageUrl(path);
  const result = await fetchText(url);
  pageResults.push({ ...result, path });
  const title = extractTitle(result.text);
  const description = extractMeta(result.text, "description");
  const canonical = result.text.match(/<link\b[^>]*rel\s*=\s*(["'])canonical\1[^>]*>/i)?.[0] || "";
  const canonicalHref = canonical ? extractAttribute(canonical, "href") : "";
  const h1s = extractH1s(result.text);
  const pageOk =
    result.ok &&
    title.length > 0 &&
    description.length >= 50 &&
    canonicalHref.startsWith(BASE_URL) &&
    h1s.length === 1;
  console.log(`${pageOk ? "PASS" : "FAIL"} ${result.status} ${url} title="${title}" h1=${h1s.length}`);
  if (!pageOk) {
    failures.push({
      type: "page-metadata",
      url,
      detail: `status=${result.status} title=${title.length} description=${description.length} canonical=${canonicalHref} h1=${h1s.length}`
    });
  }
  if (!result.ok) continue;

  for (const link of extractLinks(result.text)) {
    const target = normalizeUrl(link.href, url);
    if (!target) continue;
    if (sameOrigin(target)) {
      const key = `${target.origin}${target.pathname}${target.search}`;
      if (!internalTargets.has(key)) internalTargets.set(key, { url: key, hashes: new Set(), sources: new Set() });
      internalTargets.get(key).sources.add(url);
      if (target.hash) internalTargets.get(key).hashes.add(target.hash);
    } else {
      const key = target.toString();
      if (!externalTargets.has(key)) externalTargets.set(key, { url: key, sources: new Set() });
      externalTargets.get(key).sources.add(url);
    }
  }

  for (const image of extractImageSources(result.text)) {
    const target = normalizeUrl(image.src, url);
    if (!target) continue;
    const key = target.toString();
    if (!assetTargets.has(key)) {
      assetTargets.set(key, { url: key, sources: new Set(), altProblems: [] });
    }
    assetTargets.get(key).sources.add(url);
    if (image.tag.startsWith("<img") && image.alt.trim().length === 0) {
      assetTargets.get(key).altProblems.push(url);
    }
  }
}

printSection("Internal links and anchors");
for (const target of internalTargets.values()) {
  const result = await fetchText(target.url);
  const missingHashes = [...target.hashes].filter((hash) => !hasAnchor(result.text, hash));
  const ok = result.ok && missingHashes.length === 0;
  console.log(`${ok ? "PASS" : "FAIL"} ${result.status} ${target.url}${missingHashes.length ? ` missingHash=${missingHashes.join(",")}` : ""}`);
  if (!ok) {
    failures.push({
      type: "internal-link",
      url: target.url,
      detail: `status=${result.status} missingHashes=${missingHashes.join(",")} sources=${[...target.sources].join(", ")}`
    });
  }
}

printSection("Images and static assets");
for (const target of assetTargets.values()) {
  const result = await probeUrl(target.url);
  const ok = result.ok && target.altProblems.length === 0;
  console.log(`${ok ? "PASS" : "FAIL"} ${result.status} ${target.url}`);
  if (!result.ok) {
    failures.push({
      type: "asset",
      url: target.url,
      detail: `status=${result.status} sources=${[...target.sources].join(", ")}`
    });
  }
  if (target.altProblems.length > 0) {
    failures.push({
      type: "image-alt",
      url: target.url,
      detail: `missing alt on ${target.altProblems.join(", ")}`
    });
  }
}

printSection("External links");
for (const target of externalTargets.values()) {
  const result = await probeUrl(target.url, { external: true });
  const marker = result.ok ? "PASS" : "FAIL";
  const note = result.externalBlocked ? " reachable-check-limited" : "";
  console.log(`${marker} ${result.status} ${target.url}${note}`);
  if (!result.ok) {
    failures.push({
      type: "external-link",
      url: target.url,
      detail: `status=${result.status} sources=${[...target.sources].join(", ")}`
    });
  } else if (result.externalBlocked) {
    warnings.push({
      type: "external-link-limited",
      url: target.url,
      detail: `status=${result.status}; likely bot or rate-limit response`
    });
  }
}

printSection("Summary");
console.log(`Pages checked: ${pageResults.length}`);
console.log(`Internal targets checked: ${internalTargets.size}`);
console.log(`Assets checked: ${assetTargets.size}`);
console.log(`External targets checked: ${externalTargets.size}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Failures: ${failures.length}`);

if (warnings.length > 0) {
  printSection("Warnings");
  for (const warning of warnings) {
    console.log(`${warning.type} ${warning.url} ${warning.detail}`);
  }
}

if (failures.length > 0) {
  printSection("Failures");
  for (const failure of failures) {
    console.log(`${failure.type} ${failure.url} ${failure.detail}`);
  }
  process.exitCode = 1;
} else {
  console.log("PASS: staging site health checks passed.");
}
