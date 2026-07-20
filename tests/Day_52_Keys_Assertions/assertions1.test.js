import { test, expect } from "@playwright/test";
// Assertion 1
test("assertion1", async ({ page }) => {
    // open the URL on webPage
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/", {waitUntil : "domcontentloaded"})

    // Validate label Name - 1. toHaveText()
    const heading = page.locator("h3")
    await expect(heading).toHaveText("Add/Remove Elements")

    // Validate element is visible - 2. toBeVisible()
    const AddElementButton = page.getByRole("button", {name : "Add Element"}); 
    await expect(AddElementButton).toBeVisible()

    // Validate the Count 3. toHaveCount(3)
    await AddElementButton.click({ clickCount: 3 });
    const deleteButton = page.locator("//button[normalize-space()='Delete']");
    await expect(deleteButton).toHaveCount(3);

    //Remove one Delete Button and validate count as 2
    await deleteButton.first().click();
    await expect(deleteButton).toHaveCount(2)
}) 

// Validate tabel values
test("Data Table Validation", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");
    const table =  page.locator("//table[@id='table1']");
    await expect(table).toBeVisible(); 

    //Validate Table Rows
    async function validateRecorsInRows(row, col, expectedValue){
        const cell = page.locator(`//table[@id="table1"]//tbody/tr[${row}]/td[${col}]`);
        const receievedValue = await cell.innerText()
        await expect(cell).toHaveText(expectedValue)
        await expect(receievedValue).toBe(expectedValue)
    }
    await validateRecorsInRows(1, 2, "John")

    // Validate Headers 
    const expectedHeaders = [ "Last Name", "First Name", "Email", "Due", "Web Site", "Action"];
    
    async function validateHeaders(headers) {
        const tableHeaders = page.locator("#table1 thead th");
        await expect(tableHeaders).toHaveCount(headers.length);
        
        for (let i = 0; i < headers.length; i++) {
            await expect(tableHeaders.nth(i)).toHaveText(headers[i]);
        }
    }
    await validateHeaders(expectedHeaders);
});


