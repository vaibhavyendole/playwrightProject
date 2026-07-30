
class BasePage{

    constructor(page){
        this.page = page;
    }

    async goto(path){
        await this.page.goto(path, { waitUntil: "domcontentloaded" });
    }

    async click(locator){
        await locator.click();
    }

    async fill(locator, text){
        await locator.fill(text);
    }

    async getText(){
        return await locator.innerText();
    }

    async waitForElementVisible(locator, timeoutValue){
        await locator.waitFor({state : "visible", timeout: timeoutValue })
    }
}

export default BasePage;