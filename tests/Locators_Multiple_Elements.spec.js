const { test, expect } = require('@playwright/test');

const myPage = 'https://www.saucedemo.com/';

test('Locators Multiple Elements', async ({ page }) => {
  page.goto(myPage);
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('id=password').fill('secret_sauce');
  await page.click('#login-button');

  const allLinks = await page.$$('a');

  for (const link of allLinks) {
    const linkText = await link.textContent();
    console.log(linkText);
  }

  page.waitForSelector("//div[@class='inventory_list']//div//a//div");

  const allProducts = await page.$$(
    "//div[@class='inventory_list']//div//a//div",
  );

  for (const product of allProducts) {
    const productName = await product.textContent();
    console.log(productName);
  }
});
