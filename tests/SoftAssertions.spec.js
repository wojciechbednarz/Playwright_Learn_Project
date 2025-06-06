const { test, expect } = require("@playwright/test");

test("Soft Assertions", async ({ page }) => {
  const webSite = "https://practicesoftwaretesting.com/";

  await page.goto(webSite);
  const bannerLocator = await page.locator('[data-test="out-of-stock"]');
  const actualAlt = await bannerLocator.getAttribute("class");
  console.log(actualAlt);
  await expect.soft(bannerLocator).toHaveCSS("wrong data");
  await expect(bannerLocator).toHaveAttribute(
    "class",
    "float-start text-danger",
  );
});
