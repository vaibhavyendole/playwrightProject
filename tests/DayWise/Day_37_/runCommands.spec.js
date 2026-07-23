// 1. Run all tests
// npx playwright test

// 2. Run a specific test file
// npx playwright test tests/example.spec.js

// 3. Run tests in headed mode (browser visible)
// npx playwright test --headed

import{test, expect} from "playwright/test";

test.only("Page URL 1", async ({ page }) => {
// Navigate to OrangeHRM Login Page
await page.goto( "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// Validate current URL
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});
