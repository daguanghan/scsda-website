import { site } from "@data/site";

export function GET() {
  const sitemap = new URL("/sitemap.xml", site.reviewDomain).toString();
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
