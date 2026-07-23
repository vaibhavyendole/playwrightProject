import {test, expect} from "@playwright/test"
test('iframe1', async({page})=>{
    // Go to URl
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");

    // Locate the Iframe store in one variable
    const frame = await page.frameLocator("[name='iframeResult']");

    // click the button present on iframe. 
    await frame.locator("//button[normalize-space(.)='Click me to display Date and Time.']").click();

    // Validate the Text
    const demoText = await frame.locator("[id='demo']").textContent();
    
    // Extract Day, Month, Hour, and Minute
    const dateRegex = /^(\w+)\s+(\w+)\s+\d+\s+\d+\s+(\d+):(\d+):/;
    const match = demoText.match(dateRegex);
    
    expect(match).toBeTruthy();
    expect(match[1]).toBeTruthy(); // Day
    expect(match[2]).toBeTruthy(); // Month
    expect(match[3]).toBeTruthy(); // Hour
    expect(match[4]).toBeTruthy(); // Minute

})

test('iframe2', async({ page }) => {
    // Go to URl
    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Locate the Iframe store in one variable
   const frame = await page.frameLocator("#singleframe");

   //Enter value in textbox present on iframe. 
   await frame.locator("//input[@type='text']").fill("Playwright")
})

