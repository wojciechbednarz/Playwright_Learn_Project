import { test, expect } from '@playwright/test';

const MY_USERNAME = 'username';
const MY_PASSWORD = 'PASSWORD';

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto('https://demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill(MY_USERNAME);
  await page.locator('#loginpassword').fill(MY_PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();

  // await expect(page.locator('#logout2')).toBeVisible();
});

test.afterEach(async () => {
    await page.locator('#logout2').click();
    // await expect(page.locator('#login2')).toBeVisible();
});

test.describe('Get Products', () => {
  test('Get all Samsung products', async ({ page }) => {
    const allproducts = await page.$$('.hrefch');
    for (let product of allproducts) {
      let text = await product.textContent();
      if (text.includes('Samsung')) {
        console.log(text);
      }
    }
  });

  test('Get all Sony products', async () => {
    const allproducts = await page.$$('.hrefch');
    for (let product of allproducts) {
      let text = await product.textContent();
      if (text.includes('Sony')) {
        console.log(text);
      }
    }
  });

  test('Add Product', async () => {
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();

    page.on('dialog', async dialog =>{
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    })
  })
});
