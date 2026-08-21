import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

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
] as const;

test.describe("WCAG browser gates", () => {
  for (const route of routes) {
    test(`${route} has no serious or critical axe violations`, async ({ page, browserName }) => {
      test.skip(browserName !== "chromium", "Axe gate runs once in Chromium; WebKit is covered by layout/runtime QA.");
      await page.goto(route, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      const blocking = results.violations.filter((violation) =>
        violation.impact === "critical" || violation.impact === "serious",
      );
      expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
    });
  }

  test("mobile navigation is keyboard operable", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const menu = page.locator(".menuButton");
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeFocused();
  });
});
