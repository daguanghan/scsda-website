import { site } from "@data/site";

const paths = [
  "/",
  "/about/",
  "/leadership/",
  "/research/",
  "/projects/",
  "/outputs/",
  "/join/",
  "/message/",
  "/contact/",
  "/en/",
  "/en/about/",
  "/en/leadership/",
  "/en/research/",
  "/en/projects/",
  "/en/outputs/",
  "/en/join/",
  "/en/message/",
  "/en/contact/"
];

export function GET() {
  const urls = paths
    .map((path) => {
      const loc = new URL(path, site.reviewDomain).toString();
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
