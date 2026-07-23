import { test, expect } from "@playwright/test";

import xlsx from "xlsx"; 

// Read Workbook
const workbook = xlsx.readFile("C:/VC Playwright/Test_Data/Excel.xlsx");

// Read Worksheet
const sheet = workbook.Sheets["TestData"]

// Convert Sheet into Json
const testData = xlsx.utils.sheet_to_json(sheet);

// Print Excel Data
console.log(testData);

//-------------------------------------------fetch Data using Xcel---------------------------

for (let index = 0; index < testData.length; index++) {
    const data = testData[index];

    test(`Login Test1 - ${data.username} (${index + 1})`, async ({ page }) => {

        // Open Application
        await page.goto("https://www.saucedemo.com/");

        // Enter Username
        await page.locator("#user-name").fill(data.username);

        // Enter Password
        await page.locator("#password").fill(data.password);

        // Click Login Button
        await page.locator("#login-button").click();

        // Validation
        if (data.expectedResult === "success") {

            // Successful Login Validation
            await expect(page.locator(".title")).toHaveText("Products");
            console.log(`✅ Login Successful : ${data.username}`);

        } else {
            // Invalid Login Validation
            await expect(page.locator('[data-test="error"]')).toBeVisible();
            console.log(`❌ Login Failed : ${data.username}`);

        }
    });
}
