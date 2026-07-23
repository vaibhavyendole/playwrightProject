import { test, expect } from "@playwright/test";

test("XPath by Attribute - OrangeHRM Login", async ({ page }) => {

    // Navigate to OrangeHRM Login Page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter Username
    await page.locator("//input[@name='username']").fill("Admin");

    // Enter Password
    await page.locator("//input[@placeholder='Password']").fill("admin123");

    // Click Login Button
    await page.locator("//button[@type='submit']").click();

    // Validate Dashboard URL
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    console.log("Login Successful");
});

test.only("XPath by Attribute - Facebook Login Page", async ({ page }) => {

    // Navigate to Facebook Login Page
    await page.goto("https://www.facebook.com/");

    // Enter Email or Mobile Number
    await page.locator("//input[@autocomplete='username webauthn']").fill("Test@gmail.com");  //Identify Locator on screen

    // Enter Password
    await page.locator("//input[@type='password']").fill("Test@1234");

    console.log("Facebook Login Details Entered");
});

test("XPath by Text - Facebook Login", async ({ page }) => {

    // Navigate to Facebook Login Page
    await page.goto("https://www.facebook.com/");

    // Enter Email or Mobile Number
    await page.locator("//input[@autocomplete='username webauthn']").fill("Test@gmail.com");

    // Enter Password
    await page.locator("//input[@type='password']").fill("Test@1234");

    // Click Login Button using exact text
    await page.locator("//span[text()='Log in']").click();

    await page.waitForTimeout(2000);
});

test("XPath by Text - Automation Testing Demo Site", async ({ page }) => {

    // Navigate to Registration Page
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Select Male Radio Button using text
    await page.locator("//label[text()=' Male ']").click();

    // Click WebTable Link using text
    await page.locator("//a[text()='WebTable']").click();

    await page.waitForTimeout(4000);
});

test.only("Store Locator in Variable", async ({ page }) => {

    // Navigate to Registration Page
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Store locator in variable
    let firstName = await page.locator("//input[@placeholder='First Name']");

    // Enter First Value
    await firstName.fill("Rohit");

    await page.waitForTimeout(2000);

    // Replace existing value
    await firstName.fill("Virat");

    await page.waitForTimeout(2000);
});


test("XPath by Text and Contains Text", async ({ page }) => {

    // Navigate to Facebook Page
    await page.goto("https://www.facebook.com/");

    // Exact Text Example
    // await page.locator("//span[text()='Create new account']").click();

    // Partial Text Example using contains()
    await page.locator("//span[contains(text(),'Create')]").click();

    // Other Examples:

    // Forgot Password Link
    // await page.locator("//span[contains(text(),'Forgotten')]").click();

    // Login Button
    // await page.locator("//span[text()='Log in']").click();

    await page.waitForTimeout(3000);
});
