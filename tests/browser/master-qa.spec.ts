import { expect, test, type Page } from "@playwright/test";

const viewports = [
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
] as const;

const criticalRoutes = [
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

function captureErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  return errors;
}

test.describe("OVARA master prompt browser gates", () => {
  for (const viewport of viewports) {
    test(`homepage remains usable at ${viewport.width}px`, async ({ page }) => {
      const errors = captureErrors(page);
      await page.setViewportSize(viewport);
      const response = await page.goto("/", { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator(".siteFooter")).toBeVisible();

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
      expect(errors).toEqual([]);

      if (viewport.width <= 1000) {
        const menuButton = page.locator(".menuButton");
        await expect(menuButton).toBeVisible();
        await menuButton.click();
        await expect(menuButton).toHaveAttribute("aria-expanded", "true");
        await expect(page.locator("#mobile-navigation")).toHaveClass(/isOpen/);
        await expect(page.locator("#mobile-navigation a").first()).toBeVisible();
        await page.keyboard.press("Escape");
        await expect(menuButton).toHaveAttribute("aria-expanded", "false");
      } else {
        await expect(page.locator(".desktopNav")).toBeVisible();
      }
    });
  }

  for (const route of criticalRoutes) {
    test(`${route} has no runtime errors or horizontal overflow`, async ({ page }) => {
      const errors = captureErrors(page);
      await page.setViewportSize({ width: 390, height: 844 });
      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("main")).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
      expect(errors).toEqual([]);
    });
  }

  test("keyboard skip link moves focus into main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.locator(".skipLink")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("reduced motion preference does not break the page", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("main h1")).toBeVisible();
  });
});
