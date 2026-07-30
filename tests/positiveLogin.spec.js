import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { ROUTES } from "../utils/constantsUtils";


test("Login With Valid Cred", async({ page })=>{

    const loginPage = new LoginPage(page);
    
    // Open the URL 
    await loginPage.open(ROUTES.LOGIN);
    // Enter ID Password
    await loginPage.login("standard_user", "secret_sauce");
    // Validation
    await expect(page.locator(".title")).toHaveText("Products");
})
