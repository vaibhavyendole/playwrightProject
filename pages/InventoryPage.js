// @ts-nocheck
import BasePage from "./BasePage";

class InventoryPage extends BasePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page){
        super(page)
        // Inventory Page Locators
        this.inventoryHeader = page.locator(".app_logo"); 
        this.productsTitle = page.locator(".title");
        this.itemCountNumber = page.locator("//a[@class='shopping_cart_link']/span");

    }

    /**
     * @param {string} itemName
     */
    async clickAddToCart(itemName){
        // find the inventory item container by name, then its Add to cart button
        const addButton = this.page.locator(
            `//div[normalize-space()="${itemName}"]/ancestor::div[contains(@class,'inventory_item')]//button[normalize-space()="Add to cart"]`
        );
        await addButton.click();
    }
   

}
export default InventoryPage;