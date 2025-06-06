const { test, expect } = require("@playwright/test");

test("Dropdowns", async ({ page }) => {
  const myPage = "https://practice-automation.com/form-fields/";

  await page.goto(myPage);

  const dropDownLocator = await page.locator("#automation");

  // Multiple ways ot select
  await dropDownLocator.selectOption({ label: "Yes" });
  await dropDownLocator.selectOption({ value: "no" });
  await dropDownLocator.selectOption("Yes");
  await dropDownLocator.selectOption("no");
  await dropDownLocator.selectOption({ index: 3 });
  await dropDownLocator.selectOption({ label: "Undecided" });

  await page.selectOption("#automation", "Yes");

  // Check number of options in dropdown 1
  const allOptionsDropdown1 = await page.locator("#automation option");
  await expect(allOptionsDropdown1).toHaveCount(4);

  // Check number of options in dropdown 2 - array format
  const allOptionsDropdown2 = await page.$$("#automation option");
  console.log("Count of options: ", allOptionsDropdown2.length);
  await expect(allOptionsDropdown2.length).toBe(4);

  const textContentDropdown = await page.locator("#automation").textContent();
  await expect(textContentDropdown.includes("No")).toBeTruthy();

  for (const optionlocator of allOptionsDropdown2) {
    let locatorTextContent = await optionlocator.textContent();
    if (locatorTextContent.includes("Yes")) {
      console.log(locatorTextContent);
    }
  }

  /*
    let status = false;

    for ( const optionlocator of allOptionsDropdown2 ){
        let locatorTextContent = await optionlocator.textContent();
        if (locatorTextContent.includes("Yes")){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    //await page.waitForTimeout(5000);
    */

  for (const optionlocator of allOptionsDropdown2) {
    let locatorTextContent = await optionlocator.textContent();
    if (locatorTextContent.includes("Yes")) {
      await dropDownLocator.selectOption(locatorTextContent);
      break;
    }
  }
  await page.waitForTimeout(5000);
});
