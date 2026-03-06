import { test, expect } from '@playwright/test';


test('should perform a basic action', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const usermametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

    console.log(usermametext)

    const username = usermametext.split(" ")[2]

    const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

    console.log(passwordtext)

    const password = passwordtext.split(" ")[2]

      //Entering Username 
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  //Entering Password 
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.keyboard.press("Enter")



});

