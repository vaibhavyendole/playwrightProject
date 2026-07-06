import{test, expect} from "@playwright/test"

// 1. page.getByRole("role", { name: "Accessible Name" })
// 2. getByLabel()          --> page.getByLabel("Label Text")
// 3. getByText()           --> page.getByText("Visible Text")
// 4. getByPlaceholder()    --> page.getByPlaceholder("Placeholder Text")
// 5. getByAltText()        --> page.getByAltText("Alt Text") Logo Image Alt
// 6. getByTitle()          --> page.getByTitle("title")
// 7. getByTestId()         --> page.getByTestId("testIdValue")

test("built_In_Selector", async({page})=>{

    // 1. getByRole(role, {name : "Accessible Name"})
    await page.goto("https://www.facebook.com")
    await page.getByRole('textbox', {name : "Email address or mobile number"})

    // 2. getByLabel()          --> page.getByLabel("Label Text")
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.getByLabel("Username").fill("tomsmith"); 

    // 3. getByText()           --> page.getByText("Visible Text")
    await page.goto('https://www.facebook.com/'); 
    await page.getByText('Create New Account').click(); 

    // 4. getByPlaceholder()    --> page.getByPlaceholder("Placeholder Text")
    await page.goto('https://www.amazon.in/'); 
    await page.getByPlaceholder('Search Amazon.in').fill('Iphone17');

    // 5. getByAltText()        --> page.getByAltText("Alt Text")
    await page.goto('https://playwright.dev/'); 
    const playWrightLogo = await page.getByAltText('Playwright logo');
    await expect(playWrightLogo).toBeVisible();

    // 6. getByTitle()          --> page.getByTitle("title")
    await page.goto('https://demo.automationtesting.in/Register.html'); 
    const demoButton = await page.getByTitle('Automation Demo Site');
    await expect(demoButton).toBeVisible();
})

test("getByRole", async({page})=>{

    await page.goto("https://www.facebook.com")
    await page.getByRole('textbox', {name : 'Email address or mobile number'}).fill("Vaibhav.Yendole"); 
    await page.waitForTimeout(2000); 

    await page.getByRole('textbox', {name : 'Password'}).fill('HAHAHA')
    await page.waitForTimeout(2000); 

    await page.getByRole('button', {name : 'Log in'})
    await page.waitForTimeout(2000); 
})

test("getByLabel", async({page})=>{
    // 2. getByLabel()          --> page.getByLabel("Label Text")
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.getByLabel("Username").fill("tomsmith"); 

    await page.getByLabel("Password").fill("SuperSecretPassword!");
    // Click Login
    await page.getByRole("button", { name: "Login" }).click();
    // Verify Heading
    await expect(page.getByRole("heading", { name: "SecureArea" })).toBeVisible();
    })

test("amazonEnter", async({page})=> {
    await page.goto('https://www.amazon.in/'); 
    await page.waitForTimeout(5000);
    await page.getByRole("searchbox", {name : 'Search Amazon.in'}).fill('Iphone18')
    await page.waitForTimeout(5000);
})

test("getByText", async({page})=> {

    await page.goto('https://www.facebook.com/'); 
    await page.getByText('Create New Account').click(); 
})

test("getByAltText", async({page})=> {

    await page.goto('https://playwright.dev/'); 
    const playWrightLogo = await page.getByAltText('Playwright logo');
    await expect(playWrightLogo).toBeVisible();

})

test("getByTitle", async({page})=> {

    await page.goto('https://demo.automationtesting.in/Register.html'); 
    const demoButton = await page.getByTitle('Automation Demo Site');
    await expect(demoButton).toBeVisible();
    await demoButton.click();

})


test('GetByRole3', async({page})=>{
    await page.goto('https://www.saucedemo.com/'); 

    await page.getByRole('textbox', {name : 'Username'}).fill('standard_user'); 
    await page.getByRole('textbox', {name : 'Password'}).fill('secret_sauce'); 
    await page.getByRole('button', {name : 'Login'}).click(); 

    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/Swag/)
})




