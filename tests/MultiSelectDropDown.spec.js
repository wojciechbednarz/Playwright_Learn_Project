const { test, expect } = require("@playwright/test");

test("Multi Select Dropdown", async ({ page }) => {
  const myPage = "https://testautomationpractice.blogspot.com/";

  await page.goto(myPage);
  //await page.selectOption('#colors', ['Red', 'Blue'])
  const multiSelectDropdownLocator = await page.locator("#colors");
  await multiSelectDropdownLocator.selectOption(["Red", "Blue"]);
  await expect(multiSelectDropdownLocator).toHaveCount(1);

  const colorOptionsLocator = await page.locator("#colors option");
  await expect(colorOptionsLocator).toHaveCount(7);

  const arrayColorOptionsLocator = await page.$$("#colors option");
  console.log(arrayColorOptionsLocator.length);
  await expect(arrayColorOptionsLocator.length).toBe(7);

  for (const color of arrayColorOptionsLocator) {
    let colorContent = await color.textContent();
    console.log(colorContent);
  }

  const multiSelectDropdownTextLocator = await page
    .locator("#colors")
    .textContent();
  await expect(multiSelectDropdownTextLocator.includes("Red")).toBeTruthy();
  await expect(multiSelectDropdownTextLocator.includes("XYZ")).toBeFalsy();

  //await page.waitForTimeout(5000)
});
