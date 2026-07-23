import{test, expect} from "@playwright/test";
test('iframe3', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Open Nested iFrame section
    await page.locator("//a[contains(text(),'Iframe with in an Iframe')]").click();

    // Locate Outer iFrame
    const outerFrameElement = page.locator('//div[@id="Multiple"]/iframe');

    // Convert Locator into Frame
    const outerFrame = await outerFrameElement.contentFrame();

    // Read text from Outer Frame
    const outerText = await outerFrame.locator("//h5[contains(text(),'Nested iFrames')]").textContent();

    console.log("Outer Frame Text :", outerText);

    // Locate Inner iFrame
    const innerFrameElement = outerFrame.locator("iframe");

    // Convert Inner Locator into Frame
    const innerFrame = await innerFrameElement.contentFrame();

    // Enter text inside Inner Frame
    await innerFrame.locator('//input[@type="text"]').fill("JavaScript");

    console.log("Text entered inside Inner Frame");

    // Interact with Parent Page
    await page.locator("//a[contains(text(),'Home')]").click();

    await page.waitForTimeout(3000);
    
})

test("Handle Frames in DemoQA", async ({ page }) => {

    await page.goto("https://demoqa.com/frames");

    // Frame 1
    const frame1 = page.frameLocator("#frame1");

    const text1 = await frame1.locator("#sampleHeading").textContent();

    console.log("Frame 1 :", text1);

    await expect(frame1.locator("#sampleHeading"))
        .toHaveText("This is a sample page");

    // Frame 2
    const frame2 = page.frameLocator("#frame2");

    const text2 = await frame2.locator("#sampleHeading").textContent();

    console.log("Frame 2 :", text2);

    await expect(frame2.locator("#sampleHeading"))
        .toHaveText("This is a sample page");
});

// Print All Frames
test.only("Print All Frames", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    // Returns all frames available on the page
    const frames = page.frames();

    console.log("Total Frames :", frames.length);

    for (const frame of frames) {

        console.log("Frame Name :", frame.name());

        console.log("Frame URL :", frame.url());

        console.log("--------------------------");
    }
});
