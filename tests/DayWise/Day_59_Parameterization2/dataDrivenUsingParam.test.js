import { test, expect } from '@playwright/test'

// Use a relative path to the test data file
import loginData from "../../Test_Data/loginData.json";

for(const data of loginData){
    test(`LoginValidation with ${data.username} @lms59.3`, async({ page }) => {

        // Open the Page
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // Click on Username and Enter Username
        await page.getByPlaceholder("Username").fill(data.username);

        // Click on Password and Enter Password
        await page.getByPlaceholder("Password").fill(data.password); 

        // Click on Login
        await page.getByRole("button", { name : "Login"}).click(); 

        // Apply Assertions
        if( data.expected == "Dashboard"){
            await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();
            console.log("Login Successful"); 
        }
        else{
            await expect(page.locator("//div//p[normalize-space()='Invalid credentials']")).toBeVisible()
            console.log("Error Message Displayed"); 
        }
    })
}
//----------------------------------------------------------------------------------------------------------------//

import regData from "../../Test_Data/registerUsers.json"; 
for(const rData of regData){

    test(`Reg of ${rData.firstName} ${rData.lastName} @lms59.4`, async({ page }) => {
        // Open the URL
        await page.goto("https://demoqa.com/automation-practice-form"); 

        // Add First Name. 
        await page.locator("#firstName").fill(rData.firstName); 

        // Add Last Name
        await page.locator("#lastName").fill(rData.lastName); 

        // Add Last Email
        await page.locator("#userEmail").fill(rData.email); 

        // Add Last Mobile
        await page.locator("#userNumber").fill(rData.mobile); 

        // Add Last Gender
        await page.locator(`//label[normalize-space()='${rData.gender}']`).click();

        // Click on Submit
        await page.locator("#submit").click()

        // Assertion
        await expect(page.locator("(//div[normalize-space()='Thanks for submitting the form'])[1]")).toBeVisible(); 

        // click on Close
        await page.locator("#closeLargeModal").click();

    })
}