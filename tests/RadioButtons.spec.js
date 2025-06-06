const { test, expect } = require("@playwright/test");

test("Radio Buttons", async ({ page }) => {
  const myPage = "https://practice-automation.com/form-fields/";
  await page.goto(myPage);

  await expect(page.locator("#color1")).toBeVisible();

  const yellowRadioButtonLocator = page.locator("//input[@id='color3']");
  await expect(yellowRadioButtonLocator).toBeVisible();
  await yellowRadioButtonLocator.check();
  await expect(yellowRadioButtonLocator).toBeChecked();
  await expect(yellowRadioButtonLocator.isChecked).toBeTruthy();

  await expect(
    await page.getByRole("radio", { name: "#FFC0CB" }).isChecked(),
  ).toBeFalsy();

  await page.waitForTimeout(5000);
});
