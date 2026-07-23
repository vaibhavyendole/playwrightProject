import { test, expect } from "@playWright/test"; 

import userData from "../../../Test_Data/sauceUsers.json";

for(const data of userData){
    test(`Login Validation ${data.testId} @regression60.1`, async({ page }) => {
        // Open the URL
        await page.goto("https://www.saucedemo.com/")

        // Enter Value in Username
        await page.getByRole("textbox", { name : "Username" }).fill(data.username); 

        // Enter Password in Password 
        await page.getByRole("textbox", { name : "Password" }).fill(data.password);

        // Click on Login 
        await page.getByRole("button", { name : "Login" }).click();

        // Assertions
        if (data.valid) {
                // Verify Successful Login
                await expect(page.locator(".title")).toHaveText("Products");

            } else if (data.username === "locked_out_user") {

                // Verify Locked Out User Message
                await expect(page.locator('[data-test="error"]'))
                    .toContainText("Sorry, this user has been locked out.");

            } else {

                // Verify Invalid Login Error
                await expect(page.locator('[data-test="error"]')).toBeVisible();
            }
    })
}