import{test, expect} from "@playwright/test"
 
// Useful Dialog Methods
// dialog.type()          -> Alert Type
// dialog.message()       -> Alert Message
// dialog.defaultValue()  -> Prompt Default Value
// dialog.accept()        -> Click OK
// dialog.dismiss()       -> Click Cancel

// Register dialog listener BEFORE clicking the button.
// page.on() listens for browser events.
// dialog event fires whenever alert(), confirm(),
// prompt() or before unload dialog appears.

test("Alert1", async({page})=>{
    // Open the URL
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Page.on --> Handle the Alert Popup (Listen Browser Evenet)
    page.on("dialog", async (dialog) => {
    
    // Validate the Message on Alert
    const alertMessage = dialog.message()
    await expect(alertMessage).toBe('I am a JS Alert');

    // Print the Type of Alert (alert)
    console.log("Alert Type is ", dialog.type());

    // Click on Ok on the Alert --> Dialog.accept();
    await dialog.accept();
    })

    // Trigger Alert
    await page.getByRole('button', {name : 'Click for JS Alert'}).click();

    // Verify message after user click on Ok on Alert
    await expect (page.locator('#result')).toHaveText('You successfully clicked an alert')
})

// 2. Click on Cancel
test("Alert2", async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on("dialog", async(dialog)=>{

        // Click on Cancel
        dialog.dismiss();
    })

    // Triger Alert
    await page.getByText("Click for JS Confirm").click(); 

    // Validate the Response
    await expect(page.locator('#result')).toHaveText("You clicked: Cancel")

})

// 3. Enter Value in the Textbox present on Alert
test("Alert3", async({page}) => {

    // Open the URL
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on("dialog", async(dialog)=>{

        // Enter Text and click on Accept
        dialog.accept("Value Added on Alert");
    })

    // Triger Alert
    await page.getByText("Click for JS Prompt").click(); 

    // Validate the Response
    await expect(page.locator('#result')).toHaveText("You entered: Value Added on Alert")
})