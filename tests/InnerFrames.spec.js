const { test, expect } = require("@playwright/test");

test("Frames", async ({ page }) => {
  const myPage = "https://ui.vision/demo/webtest/frames/";
  await page.goto(myPage);

  const frame3Locator = page.frameLocator("frame[src='frame_3.html']");
  await frame3Locator.locator("input[name='mytext3']").fill("ASD");

  const frame3LocatorUrl = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  // Get child frames
  const childFramesLocator = await frame3LocatorUrl.childFrames();
  childFramesLocator[0]
    .locator('//span[contains(text(), "I am a human")]')
    .click();
  childFramesLocator[0]
    .locator("span.aDTYNe.snByac.OvPDhc.OIC90c", {
      hasText: "Hi, I am the UI.Vision IDE",
    })
    .click();
  childFramesLocator[0].getByText("Inne:").click();

  await page.waitForTimeout(5000);
});
