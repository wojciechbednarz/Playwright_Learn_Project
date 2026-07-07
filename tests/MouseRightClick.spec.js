const { test, expect } = require('@playwright/test');

test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    const myPage = 'https://swisnl.github.io/jQuery-contextMenu/demo.html';
    await page.goto(myPage);
});



test('Mouse Right Click Action test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const rightClickButton = page.locator('.context-menu-one.btn.btn-neutral');
    await rightClickButton.click({ button: 'right' });

    const contextMenu = page.locator('.context-menu-list.context-menu-root');
    await expect(contextMenu).toBeVisible();

    const editOption = contextMenu.locator('.context-menu-item.context-menu-icon.context-menu-icon-edit');
    await expect(editOption).toBeVisible();

    // Prepare to handle the dialog BEFORE clicking
    const dialogPromise = page.waitForEvent('dialog');

    // Slight delay ensures jQuery animations complete
    await page.waitForTimeout(300);  // Optional, helps with flakiness

    // Now click the menu item
    await editOption.click();

    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('edit');
    await dialog.accept();
});