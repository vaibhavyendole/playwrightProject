import { test, expect } from "@playwright/test"

// Run only tests whose titles include the tag @lms1:
//   npx playwright test --grep "@lms1"
// This will search all test files in the project. To limit to this folder/file:
//   npx playwright test tests/Day_58_Grouping_Parameterization --grep "@lms1"

test("TC1 @lms1", async ({ page }) =>{
    console.log("TC01")
})

test("TC2 @lms1", async ({ page }) =>{
    console.log("TC02")
})

test("TC3 @lms1", async ({ page }) =>{
    console.log("TC03")
})

test("TC4 @lms2", async ({ page }) =>{
    console.log("TC04")
})

test("TC5 @lms2", async ({ page }) =>{
    console.log("TC05")
})

test("TC6 @lms2", async ({ page }) =>{
    console.log("TC06")
})

test("TC7 @lms1 lms2", async ({ page }) =>{
    console.log("TC07")
})

test("TC8 @lms1 @lms2", async ({ page }) =>{
    console.log("TC08")
})

test("TC9 @lms1 @lms2", async ({ page }) =>{
    console.log("TC09")
})





