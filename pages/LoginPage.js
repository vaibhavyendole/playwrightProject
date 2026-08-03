import BasePage from "./BasePage";

class LoginPage extends BasePage{
    
    /**  
    * @param {import('playwright').Page} page
    */
    constructor(page){
        super(page);

        // Login Page locators
        this.username       = page.getByRole('textbox', { name: 'Username' });
        this.password       = page.getByRole('textbox', { name: 'Password' });
        this.loginButton    = page.getByRole("button", { name : "Login"});
        this.errorMessageBox = page.locator("//h3");
    }

     /**
     * @param {string} value
     */
    async open(value){
        await this.goto(value)
    }

    /**
     * @param {string} username
     * @param {string} password
     */
    async login(username, password){

        await this.fill(this.username, username)
        await this.fill(this.password, password)
        await this.click(this.loginButton)
    }
}
export default LoginPage;