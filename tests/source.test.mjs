import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const exists = (path) => access(new URL(`../${path}`, import.meta.url));

test("homepage uses centralized locale content and typed data", async () => {
  const source = await read("app/page.tsx");
  assert.match(source, /@\/content/);
  assert.doesNotMatch(source, /@\/content\/de/);
  assert.match(source, /@\/data\/projects/);
  assert.match(source, /@\/data\/products/);
  assert.match(source, /@\/data\/services/);
});

test("locale architecture supports German primary and English expansion", async () => {
  const registry = await read("content/index.ts");
  await exists("content/de.ts");
  await exists("content/en.ts");
  assert.match(registry, /defaultLocale = "de"/);
  assert.match(registry, /supportedLocales = \["de", "en"\]/);
  assert.match(registry, /publishedLocales = \["de"\]/);
  assert.match(registry, /getDictionary/);
});

test("public German navigation targets real routes", async () => {
  const content = await read("content/de.ts");
  for (const route of ["/leistungen", "/projekte", "/produkte", "/ueber-uns", "/kontakt"]) {
    assert.ok(content.includes(route), `missing route ${route}`);
  }
});

test("product architecture has typed data and a dynamic detail route", async () => {
  await exists("data/products.ts");
  await exists("app/produkte/[slug]/page.tsx");
  const products = await read("data/products.ts");
  assert.match(products, /stockpilot/i);
  assert.match(products, /status: "Development"/);
});

test("no fake testimonial, fake customer or visible placeholder copy is present", async () => {
  const files = await Promise.all([
    read("app/page.tsx"),
    read("app/produkte/page.tsx"),
    read("app/projekte/[slug]/page.tsx"),
    read("components/site-footer.tsx"),
  ]);
  const source = files.join("\n");
  assert.doesNotMatch(source, /testimonial|kundenstimmen|trusted by|100\+ kunden/i);
  assert.doesNotMatch(source, /placeholder|product pipeline|architecture ready|rechtliche seiten werden/i);
});

test("no public component contains dead hash links", async () => {
  const files = await Promise.all([
    read("app/page.tsx"),
    read("components/site-header.tsx"),
    read("components/site-footer.tsx"),
  ]);
  assert.doesNotMatch(files.join("\n"), /href=["']#["']/);
});

test("reduced motion is part of the design system", async () => {
  const css = await read("app/globals.css");
  assert.match(css, /prefers-reduced-motion:reduce/);
});
