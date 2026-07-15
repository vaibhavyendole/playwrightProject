import { test, expect } from "@playwright/test";

// process.platform --> It is a built-in Node.js property that returns the current operating system.

test("copyPaste", async ({ page }) => {
  // Open the URL on webpage
  await page.goto("https://www.facebook.com/", { waitUntil: "domcontentloaded" });

  // Store the username and password field locators.
  const userNameInputField = page.getByRole("textbox", { name: "Email address or mobile number" });
  const passwordInputField = page.getByRole("textbox", { name: "Password" });

  await expect(userNameInputField).toBeVisible();
  await expect(passwordInputField).toBeVisible();

  const textToCopy = "Vaibhav.Yendole";
  const modifier = process.platform === "darwin" ? "Meta" : "Control";

  // Pass the value in the username input field
  await userNameInputField.fill(textToCopy);

  // Select All, Copy, and Paste
  await userNameInputField.press(`${modifier}+A`);
  await userNameInputField.press(`${modifier}+C`);
  await passwordInputField.press(`${modifier}+V`);

  // Validation with built-in waiting
  await expect(passwordInputField).toHaveValue(textToCopy, { timeout: 10000 });
});

test("Keyboard Actions - Delete & Shift", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/key_presses", { waitUntil : "domcontentloaded"});
    const inputBox = page.locator("#target");
    const result = page.locator("#result");

    // DELETE KEY
    await inputBox.click();
    await inputBox.press("Delete");
    console.log(await result.textContent());
    await expect(result).toContainText("DELETE");
    console.log("DELETE key validated successfully.");

    //Shift key

    await inputBox.press("Shift");
    console.log(await result.textContent());
    await expect(result).toContainText("SHIFT");
    console.log("SHIFT key validated successfully.");
});
