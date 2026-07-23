import{test, expect} from "@playwright/test"

const autoSiteUrl = "https://demo.automationtesting.in/Register.html";
test("Xpath2All", async ({page})=>{

    // 1. //tagname[@attName = 'Att Value']
    let firstName = "//input[@placeholder='First Name']";

    // 2. //tagname[@text()='textValue']
    let hobbies1 = "//label[text()=' Cricket ']";

    // 3. //tagName[contains(text(), 'textValue')]
    let hobbies2 = "//label[contains(text(),'Hock')]";

    // 4. //tagName[contains(attributeName(), 'attributeValue')]
    let lastName = "//input[contains(@placeholder, 'Last')]";

    // 5 Index -->  (//tagname[@text()='textValue'])[1]

    await page.goto(autoSiteUrl); 

    await page.locator(firstName).fill("Virat");

    await page.locator(lastName).fill("Kohli");

    await page.locator(hobbies1).click();

    await expect(page).toHaveTitle(/Register/); 

    await page.locator(firstName).waitFor()

})