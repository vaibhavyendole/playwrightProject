import{test, expect} from "@playwright/test"
import { url } from "node:inspector";

const baseURL = "https://www.facebook.com/";
const allUrls = "//a[@href]"
test("Validate Urls", async({page})=>{
    // Navigate to Facebook
    await page.goto(baseURL);
    // Wait until DOM is completely loaded
    await page.waitForLoadState("domcontentloaded")
    
    // Playwright
    // locator() -> Returns a Locator object
    // count()   -> Returns total matching elements
    // nth()     -> Returns a specific matching element

    // Find the Count if the URLs
    const links = await page.locator(allUrls)
    const linksCount = await links.count();
    console.log(`Total Links Present on tab ${linksCount}`);

    // Print all the Links with Index, Text and Link Values
    let allLinks = []; 

    for(let i = 0; i < linksCount; i++){
        // nth(0) -> First Element
        // nth(1) -> Second Element
        // nth(2) -> Third Element
        const link = links.nth(i);

        // Get href attribute
        const href = await link.getAttribute('href')

        // Get visible text
        const text = await link.textContent();

        // Remove extra spaces
        const cleanText = await text.trim();

        // For Array
        allLinks.push({
            index   : i + 1, 
            url     : href,
            text    : cleanText
        });

        // Print Link Details
        console.log(`${i + 1} URL ${href}`);
        console.log(`text ${cleanText}`)
        console.log(`-------------------------------------------`)
        
        // Print Array
        console.log(allLinks)
    }
})

const instaUrl = "https://www.instagram.com/?hl=en"; 
const allLinks = "//a[@href]"; 

test("ValidateInstaUrls", async({page})=> {
    
    await page.goto(instaUrl); 

    await page.waitForLoadState("domcontentloaded")

    // Find the Count 
    const links = await page.locator(allLinks)
    const linksCount = await links.count(); 
    console.log(`Links Count is ${linksCount}`); 

    let linksInArray = []; 

    for(let i = 0; i < linksCount; i++){

        const link = links.nth(i);

        const href = link.getAttribute('href'); 

        const text = await link.textContent(); 

        const cleanText = await text.trim();

        console.log(`${i+1}. URL ${href}`)
        console.log(`${cleanText}`)

        linksInArray.push({
            index   : (i+1), 
            text    : cleanText, 
            url     : href
        })

        console.log(linksInArray); 
    }
})

// first()
// Returns first matching element.
//
// last()