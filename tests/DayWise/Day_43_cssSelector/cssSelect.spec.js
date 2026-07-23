import{test, expect} from "@playwright/test"

// CSS Selectors syntax:

// 1. ID value:                     --> Example: #username
// 2. TagName with ID value:        --> Example: input#username
// 3. Attribute and Value :         --> Example: [attribute="value"]
// 4. Tagname with Attribute :      --> Example: input[attribute="value"]
// 5. Element selector: tagname     --> Example: div
// 6. Class selector: .classname    --> Example: .active

test("CSS Selector", async({page})=>{
    await page.goto("https://www.saucedemo.com/"); 

    // 1. ID value:                     --> Example: #username
    await page.locator("#user-name").fill("Vaibhav"); 

    await page.goto("https://demo.nopcommerce.com/");
    // 2. TagName with ID value:        --> Example: input#username
    await page.locator("input#small-searchterms")

    await page.goto("https://www.facebook.com/");
    // 3. Attribute and Value :         --> Example: [attribute="value"]
    await page.locator("[name='email']").fill("Vaibhav")
    await page.locator("[name='email']").clear();

    // 4. Tagname with Attribute :      --> Example: input[attribute="value"]
    await page.locator("input[name='email']").fill("Walia")

    // 5. Class Selector :              --> Example: .className
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator(".oxd-input").first().fill("Admin");

    // 6. Tag Name with Class :         --> Example: tagname.classname
    await page.locator("button.login-btn").click();
})