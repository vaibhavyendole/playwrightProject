import { test, expect } from "@playwright/test";
import employeeData from "../../../Test_Data/employees.json";

test.describe("PIM - Add Employee (Data Driven)", () => {

    test.beforeEach(async ({ page }) => {

        // Open OrangeHRM Application
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Login
        await page.getByPlaceholder("Username").fill("Admin");
        await page.getByPlaceholder("Password").fill("admin123");
        await page.getByRole("button", { name: "Login" }).click();

        // Navigate to PIM Module
        await page.getByRole("link", { name: "PIM" }).click();

        // Click Add Employee
        await page.getByRole("button", { name: "Add" }).click();
    });

    // Execute Test for Each Employee
    for (const emp of employeeData) {

        test(`${emp.testCaseId} - ${emp.description}`, async ({ page }) => {
            // Step 1 - Fill Employee Details
            await test.step("Fill Personal Details", async () => {

                await page.getByPlaceholder("First Name").fill(emp.personal.firstName);
                await page.getByPlaceholder("Middle Name").fill(emp.personal.middleName);
                await page.getByPlaceholder("Last Name").fill(emp.personal.lastName);
            });

            // Step 2 - Save Employee and Verify
            await test.step("Save and Verify Employee", async () => {

                await page.getByRole("button", { name: "Save" }).click();

                // Verify Personal Details Page
                await expect(
                    page.getByRole("heading", { name: "Personal Details" })
                ).toBeVisible();

            });
        });
    }
});