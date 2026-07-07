const { test, expect } = require('@playwright/test');






test ('Date Picker fill test', async ( {page} ) => {
    // Arrange
    const webSite = 'https://testautomationpractice.blogspot.com/';
    const dateLocator = page.locator('#datepicker');
    const myDate = '01/01/2025'

    // Act
    await page.goto(webSite);
    await dateLocator.fill(myDate);
    //await page.waitForTimeout(5000);

    // Assert
    await expect(dateLocator).toHaveValue(myDate);

});


test ('Date Picker while loop test', async ( {page} ) => {
    const webSite = 'https://testautomationpractice.blogspot.com/';
    const year = '2025';
    const month = 'June';
    const day = '11';
    
    await page.goto(webSite);
    // opens calendar
    await page.click("#datepicker");

    while ( true ) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if ( currentYear == year && currentMonth == month ) {
            break;
        } else {
            await page.click('a[title="Next"]');
        }
    }

    const allDatesLocator = await page.$$('.ui-state-default')

    for ( const dt of allDatesLocator ) {
        if ( await dt.textContent() == day ) {
            await dt.click();
            break;
        } 
    }

    await page.waitForTimeout(5000);

});


test.only ('Date Picker without loop test', async ( {page} ) => {
    const webSite = 'https://testautomationpractice.blogspot.com/';
    const dateLocator = page.locator('#datepicker');
    const year = '2026';
    const month = 'January';
    const day = '11';

    await page.goto(webSite);
    await dateLocator.click();
    while ( true ) {
        const dateMonth = await page.locator('.ui-datepicker-month').textContent(); 
        const dateYear = await page.locator('.ui-datepicker-year').textContent();

        if ( dateMonth === month && dateYear === year ) {
            const allDates = await page.$$('.ui-state-default');
            for ( let date of allDates ) {
                const text = await date.textContent();
                if ( text === day ) {
                    await date.click();
                    break
                }
            }
            break;
        } else {
            await page.locator('a[title="Next"]').click();
            await page.waitForTimeout(300);
        }
    }
    //await page.click(`//a[@class="ui-state-default"][text()="${day}"]`); 

    await page.waitForTimeout(5000);

});