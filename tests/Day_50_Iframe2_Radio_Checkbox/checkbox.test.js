import{test, expect} from "@playwright/test";
test("Handle Checkbox & Radio Button", async ({ page }) => {

    // Open Application
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate Checkboxes
    const sundayCheckBox = page.locator("#sunday");
    const mondayCheckBox = page.locator("#monday");

    // Select Checkboxes
    await sundayCheckBox.check();
    await mondayCheckBox.check();

    console.log("Checkboxes Selected");

    // Validate Checkboxes
    await expect(sundayCheckBox).toBeChecked();
    await expect(mondayCheckBox).toBeChecked();

    // Unselect Sunday Checkbox
    await sundayCheckBox.uncheck();

    console.log("Sunday Checkbox Unchecked");

    // Validate Unchecked State
    await expect(sundayCheckBox).not.toBeChecked();

    // Locate Radio Button
    const maleRadio = page.locator("#male");

    // Select Radio Button
    await maleRadio.check();

    console.log("Male Radio Button Selected");

    // Validate Selected Radio Button
    await expect(maleRadio).toBeChecked();

    // Validate Other Radio Button is Not Selected
    const femaleRadio = page.locator("#female");

    await expect(femaleRadio).not.toBeChecked();

    console.log("Radio Button Validation Successful");

    await page.waitForTimeout(3000);
});