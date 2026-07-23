import{test, expect} from '@playwright/test'

test.skip("To Have Title", async ({ page }) => {
    await page.goto("https://facebook.com")

    let title = await page.title();
    console.log(title)

    await expect(page).toHaveTitle(/Facebook/);
})

test.only ("To Have URL", async ({ page}) => {
    await page.goto("https://www.google.com");

    await expect(page).toHaveURL("https://www.google.com/")
})

// npx playwright test
// npx playwright test -g "To Have URL" --headed

test("Navigation Methods", async({ page }) => {
  
  await page.goto("https://facebook.com")
  await page.waitForTimeout(2000);  // Force wait

  await page.goto("https://google.com")
  await page.waitForTimeout(2000);  // Force wait

  await page.goBack();  // click on back button
  await expect(page).toHaveTitle("Facebook")
  await page.waitForTimeout(2000);  // Force wait

  await page.goForward();  // click on Go Forword
  await expect(page).toHaveTitle("Google")
  await page.waitForTimeout(2000);  // Force wait

  await page.reload();
  await expect(page).toHaveTitle("Google")
  await page.waitForTimeout(2000);  // Force wait

})

// Test Timeout --> 30 seconds
// Assertion Timeout --> 5 Sec

