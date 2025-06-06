const { test, expect } = require("@playwright/test");

const myPage = "https://www.saucedemo.com/";

test("Locators", async ({ page }) => {
  await page.goto(myPage);
  await page.locator("id=user-name").fill("standard_user");
  await page.locator("id=password").fill("secret_sauce");
  await page.click("#login-button");
  //await page.locator('#loginusername').fill('uesrname')
  //await page.fill('#loginusername', 'username')
  //await page.locator('#loginpassword').fill('password')
  //await page.fill('#loginpassword', 'password')
  //await page.locator("button[onclick='logIn()']").click();
  const logo = page.locator(
    "//div[@class='app_logo' and contains(text(), 'Swag Labs')]",
  );
  await expect(logo).toBeVisible();

  await page.$$();

  //await expect(page.getByText('Log in')).toBeVisible();
  //await page.getByText('Log in').click();
});
