import{test, expect} from "@playwright/test"

// Types of Screenshot 
// 1. Page screenshot       --> page.screenshot({ path: "file.png" })
// 2. Full Page Screenshot  --> page.screenshot({ path: "file.png", fullPage: true })
// 3. Element Screnshot     --> locator.screenshot({ path: "file.png" })
// 4. Screenshot on Error   --> try { } catch(error) 
//   { await page.screenshot({ path:"failure.png",fullPage: true }); throw error; }

// 1. Page screenshot
test('PageScreenshot', async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.screenshot({path : 'Screenshot/Facebook123.jpg'})
})

// 2. Full Page Screenshot
test('FullPageScreenshot', async({page})=>{
    await page.goto('https://automationtesting.in//')
    await page.screenshot({path : 'Screenshot/Facebook1234.jpg', fullPage : true })
})

// 3. Element Screnshot
test('ElementScreenshot', async({page})=>{
    await page.goto('https://www.facebook.com/')

    let logo = await page.locator("//img")
    await logo.screenshot({path : 'Screenshot/Facebook1235.jpg'})
})

// 4. Screenshot on Error
test('onError1', async({page})=>{
    try{
        await page.goto('https://www.facebook.com/')
        const logo = await page.locator("//img")
        await expect(logo).toBeEditable();
    }
    catch(error){
        await page.screenshot({path : 'Screenshot/Facebook12356.png', fullpage : true})
    }
    throw error
})


test('ConfigScreenshot', async({page})=>{
    await page.goto('https://www.facebook.com/')
    let logo = await page.locator("//img")
    await expect(logo).toBeEditable();

    
})





