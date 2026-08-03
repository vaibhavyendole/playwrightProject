import { test, expect } from "../fixtures/baseFixture.js";
import { ROUTES, CREDS, MESSAGES } from "../utils/constantsUtils.js";

test("Validate Successful Login", async({ loggedInToApp  }) => {
    console.log("Login Validated")
})

test("Validate Error Message", async ({ loginPage }) => {

    await loginPage.open(ROUTES.LOGIN);
    await loginPage.login(CREDS.locked_out_user, CREDS.password);
    const receivedErrorMessage = await loginPage.errorMessageBox.innerText();
    expect(receivedErrorMessage).toBe(MESSAGES.INVALID_CREDENTIALS);
});