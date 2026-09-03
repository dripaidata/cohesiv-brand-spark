// Runs after `vite build`. The app is a client-rendered SPA, so every URL would
// otherwise serve the homepage <head>. This writes a static HTML file per route
// (dist/<route>/index.html) whose head carries that route's own title,
// description, canonical, and Open Graph tags. Crawlers that do not execute JS
// see the correct metadata; the React app hydrates identically either way.

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { ALL_ROUTES, SITE_URL } from "../src/seo/routes";

const DIST = resolve("dist");
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const template = readFileSync(resolve(DIST, "index.html"), "utf8");

/** Remove the sitewide tags we are about to replace with per-route versions. */
const strip = (html: string) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="og:(title|description|url|type)"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="twitter:(title|description|card|image)"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="og:image"[^>]*>/gi, "");

let count = 0;

for (const route of ALL_ROUTES) {
  const url = `${SITE_URL}${route.path}`;
  const title = escape(route.title);
  const description = escape(route.description);

  const head = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    route.noindex ? `<meta name="robots" content="noindex" />` : null,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
    .filter(Boolean)
    .map((tag) => `    ${tag}`)
    .join("\n");

  const html = strip(template).replace(/<\/head>/i, `${head}\n  </head>`);

  const outPath =
    route.path === "/" ? resolve(DIST, "index.html") : resolve(DIST, `.${route.path}`, "index.html");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  count += 1;
}

console.log(`prerendered head for ${count} routes`);
