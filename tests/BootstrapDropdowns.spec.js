const { test, expect } = require("@playwright/test");

test("Booststrap Dropdowns", async ({ page }) => {
  const myPage = "https://www.jquery-az.com/boots/demo.php?ex=63.0_2";
  await page.goto(myPage);

  await page.locator(".multiselect");
  const dropdownLocator = await page.locator("ul > li > a > label > input");
  await expect(dropdownLocator).toHaveCount(11);

  const dropdownArrayLocator = await page.$$("ul > li > a > label > input");
  await expect(dropdownArrayLocator.length).toBe(11);

  const dropdownArrayLabelLocator = await page.$$("ul > li > a > label");
  for (let option of dropdownArrayLabelLocator) {
    const optionTextContent = await option.textContent();
    if (
      optionTextContent.includes("Angular") ||
      optionTextContent.includes("Java")
    ) {
      await option.click();
    }
  }

  //deselect
  for (let option of dropdownArrayLabelLocator) {
    const optionTextContent = await option.textContent();
    if (
      optionTextContent.includes("Angular") ||
      optionTextContent.includes("Java")
    ) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
