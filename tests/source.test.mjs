import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage uses centralized content and typed data", async () => {
  const source = await read("app/page.tsx");
  assert.match(source, /@\/content\/de/);
  assert.match(source, /@\/data\/projects/);
  assert.match(source, /@\/data\/services/);
});

test("public navigation targets real routes", async () => {
  const content = await read("content/de.ts");
  for (const route of ["/leistungen", "/projekte", "/produkte", "/ueber-uns", "/kontakt"]) {
    assert.ok(content.includes(route), `missing route ${route}`);
  }
});

test("no fake testimonial or customer claims are present", async () => {
  const homepage = await read("app/page.tsx");
  assert.doesNotMatch(homepage, /testimonial|kundenstimmen|trusted by|100\+ kunden/i);
});

test("reduced motion is part of the design system", async () => {
  const css = await read("app/globals.css");
  assert.match(css, /prefers-reduced-motion:reduce/);
});
