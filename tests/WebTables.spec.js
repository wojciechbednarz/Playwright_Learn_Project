const { test, expect } = require('@playwright/test');

test('WebTables', async ({ page }) => {
  const myPage = 'https://testautomationpractice.blogspot.com/';

  await page.goto(myPage);

  const webtableLocator = await page.locator('#productTable');

  const columns = webtableLocator.locator('thead tr th');
  console.log('Columns: ', await columns.count());
  //await expect(columns.count()).toBe(4)
  expect(await columns.count()).toBe(4);

  const rows = webtableLocator.locator('tbody tr');
  console.log('Rows:', await rows.count());
  //await expect(rows.count()).toBe(5)
  expect(await rows.count()).toBe(5);

  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    let row_text = await row.textContent();

    if (row_text?.includes('Smartwatch')) {
      const checkbox = row.locator('input[type="checkbox"]');
      await checkbox.check();
      break;
    }
  }

  // const matchedRow = rows.filter({
  //     has: page.locator('td'),
  //     hasText: "Tablet"
  // })
  // await matchedRow.locator('input[type="checkbox"]').check();

  await matchRow(rows, page, 'Tablet');
  await matchRow(rows, page, 'Wireless Earbuds');

  // print all product details using loop

  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator('td');
    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  // read the data from all the pages

  const pages = page.locator('.pagination li a');

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator('td');
      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
  }

  await page.waitForTimeout(5000);
});

async function matchRow(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name,
  });
  await matchedRow.locator('input').check();
}
