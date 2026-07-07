const { test, expect } = require('@playwright/test');

test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    const myPage = 'https://testautomationpractice.blogspot.com/';
    await page.goto(myPage);
});



test('Mouse Double Click Action test', async ({ page }) => {
    
    const copyText = page.locator('//button[normalize-space()="Copy Text"]');
    const field1 = page.locator('//input[@id="field1"]');
    const field2 = page.locator('//input[@id="field2"]');
    const field1Value = await field1.inputValue();

    await copyText.dblclick();

    const field2Value = await field2.inputValue();

    expect(field2Value).toBe(field1Value);
    await expect(field2).toHaveValue(field1Value);

    await page.waitForTimeout(5000);

});