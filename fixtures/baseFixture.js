// @ts-nocheck
/// <reference path="../playwright.d.ts" />

import { test as base, expect } from "@playwright/test"

import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import Logger from "../utils/Logger";
import { ROUTES, CREDS } from "../utils/constantsUtils";
import env from "../config/env.config";


const test = base.extend({
    
    loginPage : async ({ page }, use ) => { await use( new LoginPage( page) ) },
    inventoryPage : async ({ page }, use ) => { await use( new InventoryPage( page )) },

    loggedInToApp : async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        // Open the URL 
        await loginPage.open(ROUTES.LOGIN);
        // Enter ID Password
        //await loginPage.login(CREDS.standard_User, CREDS.password);
        await loginPage.login(env.users.standard, env.password);
        await page.waitForURL(/inventory/); 
        await use(page);
    }

})

test.beforeEach(() => {
  Logger.clear();
});

test.afterEach(async ({}, testInfo) => {
  Logger.flushFailureLog(testInfo);
});

export { test, expect }