import { test, expect } from '@playwright/test';

import data from "../testdata/login.json"

test('Login with Valid credentials', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
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

  // Launch the URL 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //Entering Username 
  await page.getByRole('textbox', { name: 'Username' }).fill(data.wrongusername);
  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(data.wrongpassword);
  //click on login button 
  await page.getByRole('button', { name: 'Login' }).click();
  //Verify Validation Messege is visible 
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});



