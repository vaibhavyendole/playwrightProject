import{test, expect} from "@playwright/test"

// Right Click on Element 
test("rightActions", async( {page} ) => {
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    const rightClickButton = page.locator("//span[contains(text(),'right click me')]");
    
    // Validate button is visible
    await expect(rightClickButton).toBeVisible();

    // Perform Right Click
    await rightClickButton.click({ button: "right" });

    console.log("Right Click Performed");

    // Validate Context Menu
    const contextMenu = page.locator(".context-menu-list");
    await expect(contextMenu).toBeVisible();

    // Count Menu Items
    const menuItems = contextMenu.locator("li");
    const count = await menuItems.count();
    console.log("Total Menu Items :", count);

    // Print Menu Items
    for (let i = 0; i < count; i++) {
        console.log(await menuItems.nth(i).innerText());
    }

    // Handle Alert
    page.on("dialog", async dialog => {
        console.log("Dialog Type :", dialog.type());
        console.log("Dialog Message :", dialog.message());
        await dialog.accept();
    });

    // Click Edit
    await page.locator("//span[text()='Edit']").click();
})

// Double Click
test("doubleClick", async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    
    // Register Listener Before Action
    page.on("dialog", async dialog => {
        console.log("Alert Message :", dialog.message());
        await expect(dialog.message()).toContain("double clicked");
        await dialog.accept();
    });

    const button = page.getByText("Double-Click Me To See Alert")
    await expect(button).toBeVisible();

    // Double Click on the button
    await button.dblclick();
})

// 3. Hover
test("hover", async({page})=>{
    // open URL
    await page.goto("https://www.amazon.in/"); 

    // hover on the element
    const signInElement = await page.locator("#nav-link-accountList")
    await signInElement.hover();

    // Click on the Second Element and Validate It
    const secondElement = await page.locator("//div[@id='nav-al-your-account']//li[2]"); 
    let valueOfSecondElement = await secondElement.textContent();
    await expect(valueOfSecondElement).toBe("Your Orders")

    // Click on second element
    await secondElement.click();
})

// 4. Drag and Drop 
test("dragAndDrop", async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2");

    // Handle I Frame 
    const frame = await page.frameLocator("iframe[name='iframeResult']"); 

    // Source & Target
    const source = await frame.locator("//div[@id='div1']/img[@id='img1']");
    const target = await frame.locator("//div[@id='div2']");

    // Validate source and target element visible
    await expect(source).toBeVisible();
    await expect(target).toBeVisible();

    // Drag & Drop
    await source.dragTo(target);
    console.log("Drag & Drop Successful");

    // Validation after drag and drop
    await expect(target.locator("img")).toHaveCount(1);
    console.log("Validation Passed");
    await page.waitForTimeout(3000);
})