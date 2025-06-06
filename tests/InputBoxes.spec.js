const { test, expect } = require("@playwright/test");

test("Input Boxes", async ({ page }) => {
  const myPage = "https://practice-automation.com/form-fields/";

  await page.goto(myPage);

  // Input boxes
  const nameInputLocator = await page.locator("#name-input");
  await expect(nameInputLocator).toBeVisible();
  await expect(nameInputLocator).toBeEmpty();
  await expect(nameInputLocator).toBeEditable();
  await expect(nameInputLocator).toBeEnabled();

  await nameInputLocator.fill("John");
  await expect(nameInputLocator).toHaveValue("John");
  await page.waitForTimeout(5000);
});
