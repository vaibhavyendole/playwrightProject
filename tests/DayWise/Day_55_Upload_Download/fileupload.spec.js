import { test, expect } from "@playwright/test";
import fs from "fs";               // Used to work with files (Read, Write, Check existence)
import path from "path";           // Used to create platform-independent file paths
//import pdfParse from "pdf-parse";  // Used to extract text from PDF files

// 1. Upload Single File
test("singleUpload", async({ page }) => {
    
    // Open Upload File Application
    await page.goto("https://the-internet.herokuapp.com/upload", { waitUntil: "domcontentloaded" });

    //   const filepath   =  // Create absolute path of the file to upload
    //   __dirname        -> Current folder
    //   ../              -> Move one folder back
    //  const filePath = path.join(__dirname, "../../Test_Data/Javascript Notes.pdf")

    const filepath = path.resolve(process.cwd(), "Test_Data", "Javascript Notes.pdf")

    // Upload the file , provide the Filepath in setInputFiles()
    await page.locator("#file-upload").setInputFiles(filepath);
    console.log("File Path :", filepath);

    //Click on Upload
    await page.getByRole("button", { name : "Upload"}).click(); 

    // Wait Untill element is visible
    await page.locator("//h3").waitFor({ visible: true, timeout: 10000 })

    // Validate the Element 
    await expect( page.locator("//h3")).toHaveText("File Uploaded!")
})

// 2. Upload Multiple Files 
test("Upload Multiple Files", async({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/"); 

    // Create Fileath 1 and File Path 2 
    const filePath1 = path.resolve(process.cwd(), "Test_Data", "Javascript Notes.pdf")
    const filePath2 = path.resolve(process.cwd(), "Test_Data", "black-concrete-wall.jpg")

    // Upload Both the files
    await page.locator("#multipleFilesInput").setInputFiles([ filePath1, filePath2]); 

    // Click on Upload Multiple Files Button 
    //await page.locator("button", { has: page.locator("text=Upload Multiple Files") }).scrollIntoViewIfNeeded();
    await page.locator("//button[normalize-space(.)='Upload Multiple Files']").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name : "Upload Multiple Files"}).click();

    // Validation - Assertions 
    await expect(page.locator("#multipleFilesStatus")).toHaveText(/Multiple files selected:/)

})
