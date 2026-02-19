import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the main page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.*/);
  });

  test("should have visible content", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
  });
});
