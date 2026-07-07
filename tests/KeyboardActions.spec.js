const { test, expect } = require('@playwright/test');



test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    const myPage = 'https://gotranscript.com/text-compare';
    await page.goto(myPage);
});



async function copyAndPaste(page) {
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab') ;
    await page.keyboard.press('Control+V');
}


test('Keyboard Actions test', async ({ page }) => {

    const fieldBox1 = page.locator('textarea[placeholder="Paste one version of the text here."]');
    const fieldBox2 = page.locator('textarea[placeholder="Paste another version of the text here."]');
    const myText = 'Some text';

    await fieldBox1.focus();
    await page.keyboard.type(myText);
    await copyAndPaste(page);

    await expect(fieldBox2).toHaveValue(myText);
    await page.waitForTimeout(5000);

});