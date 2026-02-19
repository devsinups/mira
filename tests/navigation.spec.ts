import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should respond with OK status", async ({ request }) => {
    const response = await request.get("/");
    expect(response.ok()).toBeTruthy();
  });
});
