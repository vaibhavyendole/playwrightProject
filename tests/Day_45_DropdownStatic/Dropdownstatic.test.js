import {test, expect} from "@playwright/test"
// Dropdown static : to Handle it must have tagname select

// Common Methods use to select the value
// 1. Select by ValueAttribute/Label    --> locator.selectOption("value")
// 2. Select by Label                   --> locator.selectOption({ label: "Visible Text" })
// 3. Select by Index                   --> locator.selectOption({ index: 2 })


// 1. Select by ValueAttribute / Label
// 2. Select by Label
// 3. Select by Index
test('Dropdown2', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // step 1 : Identify the WebElement that need to be Handle and Store it in Variable
    let country = await page.locator("//select[@id='country']"); 

    // Step 2 and 3 : Use SelectOption method - select by Value / Label 
    let countryName = 'India';
    await country.selectOption(countryName)

    countryName = 'france'; 
    await country.selectOption(countryName)

    // 2.  Select by Label ( Text should be exact equal to Visible)
    await country.selectOption({label : 'Japan'})

    // 3. Select by Index - Indexing start with 0
    await country.selectOption({index : 0});

   // Validate the selected Value
   let selectedValue = await country.inputValue()
   await expect(country).toHaveValue(selectedValue)

   // Print All the Values 
   const countryOptionValues = await country.locator('option'); 
   const countryOptionCount = await countryOptionValues.count(); 

    for(let i = 0 ; i < countryOptionCount; i++){
        const optionText = await countryOptionValues.nth(i).textContent(); 
        console.log(`Option ${i+1} : ${optionText.trim()}`)
    }
})


test('Dropdown3', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")

    const yearDropdown =  await page.locator('#yearbox');
    const monthDropdown =  await page.locator("[placeholder='Month']"); 
    const dayDropdown = await page.locator('#daybox');

    // Validate Dropdown visibility
    await expect(yearDropdown).toBeVisible(); 
    await expect(monthDropdown).toBeVisible(); 
    await expect(dayDropdown).toBeVisible(); 

    // Print All the Values of Dropdown - All text At a time allTextContents() --> Array
    const yearOptions = await yearDropdown.locator('option').allTextContents()
    console.log(`Year values are`,yearOptions); 
    console.log(`year total count values are ${yearOptions.length}`)

    const monthOptions = await monthDropdown.locator('option').allTextContents()
    console.log(`Year values are `, monthOptions); 
    console.log(`year total count values are ${monthOptions.length}`)

    const dayOptions = await dayDropdown.locator('option').allTextContents()
    console.log(`Year values are`, dayOptions); 
    console.log(`year total count values are ${dayOptions.length}`)

    // Select Values
    await yearDropdown.selectOption('1993'); 
    await monthDropdown.selectOption({label : 'May'});
    await dayDropdown.selectOption({index : 3});

    // Validate Selected Values
    const selectedYear = await yearDropdown.inputValue(); 
    const selectedMonth = await monthDropdown.inputValue();
    const selectedDay = await dayDropdown.inputValue();

    console.log(`Selected Year ${selectedYear}`)
    console.log(`Selected Month ${selectedMonth}`)
    console.log(`Selected Day ${selectedDay}`)

    // Assertions
    await expect(yearDropdown).toHaveValue('1993')
    await expect(monthDropdown).toHaveValue('May')
    await expect(dayDropdown).toHaveValue('3')
})

test('Dropdown1', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")

    const yearDropdown =  await page.locator('#yearbox');
    const monthDropdown =  await page.locator("[placeholder='Month']"); 
    const dayDropdown = await page.locator('#daybox');

    const dateString= '2010/May/23'; 
    const [year, month, day] = dateString.split('/'); 

    async function selectDropdown(locator, value){
        console.log(`selecting value ${value}`); 
        await locator.selectOption({label : value}); 
    }

    await selectDropdown(yearDropdown, year);
    await selectDropdown(monthDropdown, month);
    await selectDropdown(dayDropdown, day);
})
