const { test, expect } = require('@playwright/test');

test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    const myPage = 'https://www.globalsqa.com/demo-site/draganddrop/';
    await page.goto(myPage);
});



test('Drag And Drop Action test', async ({ page }) => {
    // Trigger lazy-loading if needed (e.g. scroll or hover if applicable)
    await page.evaluate(() => {
        const iframe = document.querySelector('iframe.demo-frame.lazyloaded');
        if (iframe && iframe.dataset.src) {   // This accesses the value of the data-src attribute. In HTML, data-* attributes are accessible using the dataset object.
            iframe.src = iframe.dataset.src;  // This forces the iframe to actually load the real page by: Taking what's in data-src (../../demoSite/practice/droppable/photo-manager.html)

                                                //Assigning it to the iframe’s src attribute.
        }
    });

    // Wait for iframe to fully load
    const iframe = page.frameLocator('iframe[data-src="../../demoSite/practice/droppable/photo-manager.html"]');
    await iframe.locator('#trash').waitFor({ state: 'visible' });

    // Locate source image and target
    const source = iframe.locator('img[alt="The peaks of High Tatras"]');
    const target = iframe.locator('#trash');

    // Ensure both elements are ready
    await source.waitFor({ state: 'visible' });
    await target.waitFor({ state: 'visible' });

    // Drag and drop
    await source.dragTo(target);

    // Pause to observe result (optional)
    await page.waitForTimeout(3000);
});