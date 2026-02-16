import { test, expect } from '@playwright/test';
import logindata from "../../testdata/login.json"
//import { faker } from '@faker-js/faker';

import ExcelJS from 'exceljs';
import path from 'path';

test('Verify Admin can create Employee with Mandatory details', async ({ page }) => {

   const workbook = new ExcelJS.Workbook();
  
  // Build file path
  const filePath = path.join(process.cwd(), 'testdata', 'addemp.xlsx');

  // Load file
  await workbook.xlsx.readFile(filePath);

  // Get first worksheet
  const sheet = workbook.getWorksheet(1);

  // Read values
  const firstName = sheet.getRow(1).getCell(2).value;
  const lastName = sheet.getRow(2).getCell(2).value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  //pIM 
  await page.locator('(//a[@class="oxd-main-menu-item"])[2]').click();


  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  // await page.getByRole('textbox', { name: 'First Name' }).fill(addempdata.firstname);
  // await page.getByRole('textbox', { name: 'Last Name' }).click();
  // await page.getByRole('textbox', { name: 'Last Name' }).fill(addempdata.lastname);


  // await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
  // await page.getByRole('textbox', { name: 'Last Name' }).click();
  // await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());

  // let r = (Math.random() + 1).toString(36).substring(7); // 5 Random chars 

  // await page.getByRole('textbox', { name: 'First Name' }).fill("Raju"+r);
  // await page.getByRole('textbox', { name: 'Last Name' }).click();
  // await page.getByRole('textbox', { name: 'Last Name' }).fill("G" +r);

  //excel 

  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);


  await page.waitForTimeout(6000)
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});