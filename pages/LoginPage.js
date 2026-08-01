import BasePage from "./BasePage";

class LoginPage extends BasePage{

    constructor(page){
        super(page);

        // Login Page locators
        this.username       = page.getByRole('textbox', { name: 'Username' });
        this.password       = page.getByRole('textbox', { name: 'Password' });
        this.loginButton    = page.getByRole("button", { name : "Login"});
        this.errorMessageBox = page.locator("//h3");
    }

    async open(value){
        await this.goto(value)
    }

    async login(username, password){

        await this.fill(this.username, username)
        await this.fill(this.password, password)
        await this.click(this.loginButton)
    }
}
export default LoginPage;