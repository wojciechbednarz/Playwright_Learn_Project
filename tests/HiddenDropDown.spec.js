const { test, expect } = require("@playwright/test");

test("Hidden Dropdowns", async ({ page }) => {
  const myPage =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(myPage);
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.click("//button[normalize-space()='Login']");
  await page.click("//span[normalize-space()='PIM']");

  //await page.getByText('-- Select --').nth(1).click();
  await page
    .locator(
      "div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
    )
    .click();

  await page.waitForSelector('//div[@role="listbox"]//span');
  const allJobs = await page.$$('//div[@role="listbox"]//span');

  for (let job of allJobs) {
    const jobText = await job.textContent();
    console.log(jobText?.trim());
    if (jobText.includes("QA Engineer")) {
      job.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
