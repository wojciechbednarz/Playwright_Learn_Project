const { test, expect } = require("@playwright/test");

test.skip("Simple Alert", async ({ page }) => {
  const myPage = "https://testautomationpractice.blogspot.com/";
  await page.goto(myPage);

  // Enabling the dialog event listener
  // to capture the alert dialog
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    console.log("Alert text:", dialog.message());
    await dialog.accept();
  });

  await page.locator("#alertBtn").click();

  await page.waitForTimeout(5000);
});

test.skip("Confirmation Alert", async ({ page }) => {
  const myPage = "https://testautomationpractice.blogspot.com/";
  await page.goto(myPage);

  // Enabling the dialog event listener
  // to capture the alert dialog
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain("Press a button!");
    console.log("Alert text:", dialog.message());
    await dialog.dismiss(); // or dialog.accept() to accept the alert
  });

  await page.locator("#confirmBtn").click();
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");

  await page.waitForTimeout(5000);
});

test("Prompt Alert", async ({ page }) => {
  const myPage = "https://testautomationpractice.blogspot.com/";
  await page.goto(myPage);

  // Enabling the dialog event listener
  // to capture the alert dialog
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toContain("Please enter your name");
    expect(dialog.defaultValue()).toBe("Harry Potter");
    console.log("Alert text:", dialog.message());

    const shouldAccept = true;

    if (shouldAccept) {
      await dialog.accept("John Doe");
      await expect(page.locator("#demo")).toHaveText(
        "Hello John Doe! How are you today?",
      );
    } else {
      await dialog.dismiss();
      await expect(page.locator("#demo")).toHaveText(
        "User cancelled the prompt.",
      );
    }
  });

  await page.locator("#promptBtn").click();
  await expect(page.locator("#demo")).toHaveText(
    "Hello John Doe! How are you today?",
  );

  await page.waitForTimeout(5000);
});
