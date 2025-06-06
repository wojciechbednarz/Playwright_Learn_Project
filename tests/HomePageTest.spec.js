const { test, expect } = require('@playwright/test');

const myPage = 'https://demoblaze.com/index.html';

test('homepage', async ({ page }) => {
  await page.goto(myPage);
  const pageTitle = await page.title();
  console.log('Page title is: ', pageTitle);
  await expect(page).toHaveTitle('STORE');
  const pageUrl = await page.url();
  console.log('Page URL is: ', pageUrl);
  await expect(page).toHaveURL(myPage);
  await page.close();
});

test('click on the first product', async ({ page }) => {
  await page.goto(myPage);
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  await expect(
    page.getByRole('heading', { name: 'Sony vaio i5' }),
  ).toBeVisible();
  await page.close();
});
