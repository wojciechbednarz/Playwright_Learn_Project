const { test, expect } = require('@playwright/test');

test('Auto Suggest Dropdowns', async ({ page }) => {
  const myPage = 'https://www.flixbus.pl/';
  await page.goto(myPage);

  const fromFieldLocator = await page.locator('#searchInput-from');
  await fromFieldLocator.fill('Warszawa');
  await page.waitForSelector(
    '//*[starts-with(@id, "hcr-autocomplete-:r1:-option-")]//span',
  );
  const placeOptionsLocator = await page.$$(
    '//*[starts-with(@id, "hcr-autocomplete-:r1:-option-")]//span',
  );

  for (let place of placeOptionsLocator) {
    const placeText = await place.textContent();
    console.log(placeText);
    if (placeText.includes('Młociny')) {
      await place.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
