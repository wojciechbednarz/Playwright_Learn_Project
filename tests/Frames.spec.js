const { test, expect } = require("@playwright/test");

test("Frames", async ({ page }) => {
  const myPage = "https://ui.vision/demo/webtest/frames/";
  await page.goto(myPage);

  const frame1InputLocator = page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']");
  await frame1InputLocator.fill("asd");

  //await page.waitForTimeout(5000)

  await frame1InputLocator.fill("");

  const pageFrameLocatorURL = page.frame({ url: /.*frame_1.*/ });
  await pageFrameLocatorURL.fill("input[name='mytext1']", "URL");
  await pageFrameLocatorURL.fill("input[name='mytext1']", "");

  await pageFrameLocatorURL.fill("input[name='mytext1']", "FILL");

  const allFrames = page.frames();
  console.log("Number of frames: ", allFrames.length);
});
