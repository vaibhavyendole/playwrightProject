import { _basePage } from "./_basePage";

export class orangeLoginPage extends _basePage{

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        super(page); // Calls the BasePage constructor and initializes this.page

        // Login Page Locators
        /** @type {import('@playwright/test').Locator} */
        this.userNameInput = page.getByRole("textbox", { name : 'Username'});
        this.passwordInput = page.getByRole("textbox", { name : 'Password'});
        this.loginBtn = page.getByRole("button", { name : 'Login'});

    }

    


}