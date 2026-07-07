import { test, expect } from '@playwright/test';



test.beforeEach('Open start URL', async ( {page} ) => {
    console.log(`Running ${test.info().title}`);
    const myPage = 'https://demo.opencart.com.pl/';
    await page.goto(myPage);
});


test ('Mouse Hover Action test', async ( {page} ) => {
    const desktopsLocator = page.locator('//a[@class="dropdown-toggle"][text()="Desktops"]');
    const macLocator = page.locator('//a[normalize-space()="Mac (1)"]');
    await desktopsLocator.hover();
    await macLocator.click();

    await page.waitForTimeout(5000);

});

