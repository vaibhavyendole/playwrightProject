import { test, expect } from "@playwright/test"; 

import userData from "../../Test_Data/userData.json";

// 1. Print using for Loop
for(let i = 0; i < userData.length; i++){

    test(`User Details of ${i+1} @lms59.1`, async() => {
        console.log("Username :", userData[i].username);
        console.log("Password :", userData[i].password);
    })
}

// 2.Use of For Of Loop
for(const data of userData) {
    test(`Test User Details of ${data.username} @lms59.1`, async() => {
        console.log("Username :", data.username);
        console.log("Password :", data.password);
    })
}
