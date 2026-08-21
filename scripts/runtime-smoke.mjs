import assert from "node:assert/strict";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const routes = [
  "/",
  "/leistungen",
  "/projekte",
  "/projekte/webforge",
  "/projekte/stockpilot",
  "/produkte",
  "/produkte/stockpilot",
  "/ueber-uns",
  "/kontakt",
  "/robots.txt",
  "/sitemap.xml",
];

async function get(path) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  return { response, text: await response.text() };
}

for (const route of routes) {
  const { response, text } = await get(route);
  assert.equal(response.status, 200, `${route} returned ${response.status}`);
  assert.ok(text.length > 20, `${route} returned an unexpectedly small body`);
}

const { response: homeResponse, text: home } = await get("/");
assert.equal(homeResponse.headers.get("x-content-type-options"), "nosniff");
assert.equal(homeResponse.headers.get("x-frame-options"), "DENY");
assert.equal(homeResponse.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
assert.match(homeResponse.headers.get("permissions-policy") ?? "", /camera=\(\)/);
assert.doesNotMatch(home, /placeholder|product pipeline|architecture ready/i);

const internalLinks = new Set(
  [...home.matchAll(/href=["'](\/[a-z0-9äöüß\-_/]*)["']/gi)]
    .map((match) => match[1])
    .filter((href) => href && !href.startsWith("/_next")),
);

for (const href of internalLinks) {
  const { response } = await get(href);
  assert.ok(response.status >= 200 && response.status < 400, `homepage link ${href} returned ${response.status}`);
}

const notFound = await fetch(new URL("/__ovara_missing_route__", base), { redirect: "manual" });
assert.equal(notFound.status, 404, `missing route returned ${notFound.status}`);

console.log(`Runtime smoke passed for ${routes.length} routes and ${internalLinks.size} homepage links.`);
