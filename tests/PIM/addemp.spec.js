
import { test, expect } from '@playwright/test';

test('Verify add emp', {tag : [ "@smoke", "@PIM"]},async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.getByRole('heading', { name: 'RAju' })).toBeVisible();
    //pIM 
    await page.locator('(//a[@class="oxd-main-menu-item"])[2]').click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    //assrtion 
    await page.getByRole('textbox', { name: 'First Name' }).fill("Naveen");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Kumar");

    await page.locator('//input[@type="file"]').setInputFiles('testdata/Cat.jpg')
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

})