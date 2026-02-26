import { test, expect } from '@playwright/test';


test("Get All text contents", async ({ page}) => {


    
        await page.goto('/web/index.php/auth/login')
    
        // Enter Username 
        await page.locator('input[name="username"]').fill(process.env.APP_USERNAME)
    
        // Enter Password 
    
        await page.locator("input[type='password']").fill(process.env.APP_PASSWORD)
    
        // click on login button
        await page.locator("button[type='submit']").click()
    
    
        // Verify dashboard url (Current URL)
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        await page.waitForLoadState()

        await page.waitForTimeout(5000)

        const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()

        console.log(menuitems)
    

        expect(menuitems.length).toBe(12)
           

})