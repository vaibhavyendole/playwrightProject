
import{test, expect} from "@playwright/test";

const baseUrl = "https://login.yahoo.com";
let username = "#username";
let signInCheckbox = "//input[@id='persistent']";

test("Login flow With Validation", async({page})=>{
    // Open the Browser and Enter the URL
    await page.goto(baseUrl);
    let userNameField = await page.locator(username);

    // apply assertion
    await expect(userNameField).toBeVisible();
    await expect(userNameField).toBeEditable();
    await expect(userNameField).toBeEnabled();

    // Click on Username Field to Validate it is Focused
    await userNameField.click(); 
    await expect(userNameField).toBeFocused(); 

    // Enter Value in  Username Field and Validate the Value
    await userNameField.fill("Vaibhav.Yendole"); 
    let value = await userNameField.inputValue();
    await expect(value).toBe("Vaibhav.Yendole");

    // Uncheck the Checkbox if enabled
    let siCheckbox = await page.locator(signInCheckbox); 
    if (await siCheckbox.isChecked()) {
        await siCheckbox.click();
        await page.waitForTimeout(4000);
    }
    await expect(siCheckbox).not.toBeChecked();
})

test("Login flow With Validation2", async({page})=>{
    // Validate Title
    await page.goto(baseUrl);
    expect (page).toHaveTitle(/Yahoo/);
    
    // click on Input Field and Validate Assertions
    const userNameInputfield = await page.locator(username);
    await expect(userNameInputfield).toBeEditable(); 
    await expect(userNameInputfield).toBeFocused();
    await expect(userNameInputfield).toBeEnabled(); 
    await expect(userNameInputfield).not.toBeDisabled(); 

    // Add Value in the UserName input field and Validate
    await userNameInputfield.fill("Vaibhav"); 
    const value = await userNameInputfield.inputValue();
    await expect(value).toBe('Vaibhav')
})