import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2');
  await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('img').click();
  await expect(page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('img')).toBeVisible();
});