import { test, expect } from '@playwright/test';

import data from "../testdata/login.json"

let username 

let credentials = {

     username : "Admin",
     password : "admin123"
}



test('Login with Valid credentials', async ({ page }) => {


  
  username = "Admin"
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username, {timeout:50000});

  await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
  await page.getByRole("button", { name: 'Login' }).click();

  let menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Recruitment",
    menu5 : "Dashboard"
  }

  for( let modulename in menuitems ){

     await expect(page.getByText(menuitems[modulename])).toBeVisible();
  }


 // const ordernumber = await page.locator("xpath").textContent()

 // details['ordernumber'] = "efhbvgh"
}); 

test('Login with Valid username and Invalid password', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Login with Invalid username and valid password', async ({ page }) => {

  // Launch the URL 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //Entering Username 
  await page.getByRole('textbox', { name: 'Username' }).fill(data.wrongusername);
  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  //click on login button 
  await page.getByRole('button', { name: 'Login' }).click();
  //Verify Validation Messege is visible 
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});



test('Login with Invalid username and Invalid password', async ({ page }) => {

  let invalidusername = "nbdfrfhbhy"

  let invalidpassword = "jwerfbf"

  // Launch the URL 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //Entering Username 
  await page.getByRole('textbox', { name: 'Username' }).fill(invalidusername);
  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidpassword);
  //click on login button 
  await page.getByRole('button', { name: 'Login' }).click();
  //Verify Validation Messege is visible 
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});



