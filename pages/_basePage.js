export class _basePage{
    
    constructor (page){
        this.page = page;
    }

    // Navigate to URL 
    async navigateToUrl(url){
        // provide a valid waitUntil value: 'load', 'domcontentloaded' or 'networkidle'
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    // Add Value in using fill method
    async fillValue(locator, value){
        await locator.fill(value)
    }

    // Click on the element
    async clickOn(locator){
        await locator.click()
    }

    // Get Text from Element
    async getText(locator){
        return await locator.textContent
    }

    // Wait until an element is visible
    async waitForElementVisible(locator, timeoutValue){
        await locator.waitFor(({ visible: true, timeout: timeoutValue }));
    }

    // Get page title
    async getTitle() {
        return await this.page.title();
    }

    // Get current URL
    async getURL() {
        return this.page.url();
    }

    // Check whether an element is visible : true or false
    async isVisible(locator) {
        return await locator.isVisible();
    }

    // Clear an input field
    async clearInputField(locator) {
        await locator.clear();
    }

    // Press a keyboard key
    async pressKey(locator, key) {
        await locator.press(key);
    }

    // Select value from dropdown
    async selectByValue(locator, value) {
        await locator.selectOption(value);
    }

    // Check a checkbox
    async check(locator) {
        await locator.check();
    }

    // Uncheck a checkbox
    async uncheck(locator) {
        await locator.uncheck();
    }

    // Wait for page load
    async waitForLoad() {
        await this.page.waitForLoadState("load");
    }

    await 

}