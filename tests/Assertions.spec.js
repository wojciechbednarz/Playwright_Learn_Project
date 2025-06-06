const { test, expect } = require("@playwright/test");

const myPage = "https://practicesoftwaretesting.com/auth/login/";

test("Assertions test", async ({ page }) => {
  await page.goto(myPage);

  await expect(page).toHaveURL(
    "https://practicesoftwaretesting.com/auth/login",
  );
  await expect(page).toHaveTitle(
    "Login - Practice Software Testing - Toolshop - v5.0",
  );

  const logoLocator = await page.locator("#Layer_1");
  await expect(logoLocator).toBeVisible();

  const emailLocator = await page.locator("#email");
  await expect(emailLocator).toBeEnabled();

  await page.goto("https://practicesoftwaretesting.com/");
  const HandToolsLocator = await page.locator(
    '[data-test="category-01JVW4PY19G0YMS1YV9ATFT9Y5"]',
  );
  HandToolsLocator.check();
  await expect(HandToolsLocator).toBeChecked();

  const CombinationPliers = await page.locator(
    "//h5[normalize-space()='Combination Pliers']",
  );
  await expect(CombinationPliers).toHaveAttribute("data-test", "product-name");

  await expect(CombinationPliers).toHaveText("Combination Pliers");

  const brandLocator = await page.locator(
    "//h4[normalize-space()='By brand:']",
  );
  await expect(brandLocator).toContainText("By brand:");
  await expect(brandLocator).toContainText("brand");

  const measuresLocator = page.locator("//label[normalize-space()='Measures']");
  await expect(measuresLocator).toHaveValue("01JVW4PY1QDN3X62SCX7FARBF4");

  const searchLocator = page.locator("#search-query");
  searchLocator.fill("Some text");
  await expect(searchLocator).toHaveValue("Some text");

  const formSelectLocator = page.locator("[data-test='sort'] option");
  await expect(formSelectLocator).toHaveCount(5);
  await expect(formSelectLocator).not.toHaveCount(30);
});
