import { test, expect } from '@playwright/test';

import data from "../testdata/login.json"

// let username

// let credentials = {

//   username: "Admin",
//   password: "admin123"
// }


test.describe("Login functionality", ()=> {

  test.beforeEach( async ({page}) => {
    await page.goto('/web/index.php/auth/login');

  }) 

  test('Login with Valid credentials', {tag : "@smoke"}, async ({ page }) => {

   
    await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username, { timeout: 50000 });

    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
    await page.getByRole("button", { name: 'Login' }).click();

    // let menuitems = {

    //   menu1: "Admin",
    //   menu2: "PIM",
    //   menu3: "Leave",
    //   menu4: "Recruitment",
    //   menu5: "Dashboard"
    // }

    // for (let modulename in menuitems) {

    //   await expect(page.getByText(menuitems[modulename])).toBeVisible();
    // }


    // const ordernumber = await page.locator("xpath").textContent()

    // details['ordernumber'] = "efhbvgh"
  });

  test('Login with Valid username and Invalid password', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill("data.wrongpassword");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });


  test('Login with Invalid username and valid password', async ({ page }) => {

    //Entering Username 
    await page.getByRole('textbox', { name: 'Username' }).fill("data.wrongusername");
    //Entering Password 
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
    //click on login button 
    await page.getByRole('button', { name: 'Login' }).click();
    //Verify Validation Messege is visible 
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });



  test('Login with Invalid username and Invalid password', async ({ page }) => {
     
    test.slow() // 135 sec 
    let invalidusername = "nbdfrfhbhy"

    let invalidpassword = "jwerfbf"

    //Entering Username 
    await page.getByRole('textbox', { name: 'bvnf' }).fill(invalidusername);
    //Entering Password 
    await page.getByRole('textbox', { name: 'Password' }).fill(invalidpassword);
    //click on login button 
    await page.getByRole('button', { name: 'Login' }).click();
    //Verify Validation Messege is visible 
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });


})


