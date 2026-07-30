import { test, expect } from "@playwright/test"; 
import { orangeLoginPage } from "../../pages/orangeLoginPage";


test("LoginValidate_C12345 @regression1.1", async({ page }) => {

    const loginPage = new orangeLoginPage(page)

    await loginPage.enterOrangeHrmUrl(); 

    await page.waitForTimeout(5000);

})