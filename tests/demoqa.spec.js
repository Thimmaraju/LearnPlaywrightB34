const { test, expect } = require('@playwright/test');
import data from "../testdata/demoqa.json"

test.describe('Automation - Working with Textbox', () => {


  test('Playwright Test Case - fill textbox', async ({ page }) => {

    await page.goto("https://demoqa.com/text-box")
    await page.locator('#userName').fill(data.fullname)

  })

})