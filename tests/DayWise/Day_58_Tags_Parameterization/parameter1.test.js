import { test, expect } from "@playwright/test"

const user = require("C:/VC Playwright/Test_Data/adminUserData.json");

test("Login Test", async () => {

    console.log("Name :", user.name);
    console.log("Email :", user.email);
    console.log("Role :", user.role);
});