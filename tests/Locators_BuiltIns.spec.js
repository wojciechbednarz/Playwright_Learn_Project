const { test, expect } = require('@playwright/test');
const myPage =
  'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('Locators Built In', async ({ page }) => {
  await page.goto(myPage);

  const logo = await page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { type: 'submit' }).click();

  await expect(await page.title()).toBe('OrangeHRM');
  const UserName = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();

  await expect(page.getByText(UserName)).toBeVisible();
});
