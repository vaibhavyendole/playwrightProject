/// <reference path="../playwright.d.ts" />

// @ts-nocheck
import { test , expect } from "../fixtures/baseFixture"; 
import Logger from "../utils/Logger";

test("Click on Checkout {tag : @regression_11}", async({loggedInToApp, inventoryPage }) =>{
    Logger.testStart("Valid User Loggged In")
    await inventoryPage.clickAddToCart('Sauce Labs Backpack');
    Logger.step("Verify Inventory Page")
    await expect( inventoryPage.inventoryHeader).toBeVisible();
})

test("Validate Count, {tag : @regression_11}", async({loggedInToApp, inventoryPage }) =>{
    Logger.testStart("Valid User Loggged In")
    Logger.step("Step 1 : click on Add to cart")
    await inventoryPage.clickAddToCart('Sauce Labs Backpack');
    await expect( inventoryPage.inventoryHeader).toBeVisible();
    await expect( inventoryPage.itemCountNumber).toBeVisible(); 
    Logger.step("Step 2 : Veify Cart Icon")
    const countNum = await inventoryPage.itemCountNumber.innerText();
    await expect(countNum).toBe('1');
})

