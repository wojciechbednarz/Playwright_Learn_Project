const { test, expect } = require('@playwright/test');

test('Check Boxes', async ({ page }) => {
  const myPage = 'https://practice-automation.com/form-fields/';

  await page.goto(myPage);

  //const coffeeCheckboxLocator = page.locator('//input[@id="drink3"]')
  const coffeeCheckboxLocator1 = page.getByRole('checkbox', { name: 'Coffee' });
  const coffeeCheckboxLocator2 = page.getByTestId('drink3');
  await expect(coffeeCheckboxLocator1).not.toBeChecked();
  await expect(coffeeCheckboxLocator2).not.toBeChecked();
  await coffeeCheckboxLocator1.check();
  await expect(coffeeCheckboxLocator1).toBeChecked();
  await expect(coffeeCheckboxLocator1.isChecked()).toBeTruthy();

  await coffeeCheckboxLocator1.uncheck();
  const isChecked = await coffeeCheckboxLocator1.isChecked();
  await expect(isChecked).toBeFalsy();

  const checkboxLocators = [
    '#drink5',
    '#drink4',
    '#drink3',
    '#drink2',
    '#drink1',
  ];

  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
  }

  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});
