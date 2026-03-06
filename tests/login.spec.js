import { test, expect } from '@playwright/test';
import { loginPage } from "..//pages/loginpage.po"
import data from "../testdata/login.json"

test.describe("Verify Login", () => {

    let login

    test.beforeEach( async ({page}) =>{
        
        login = new loginPage(page)
        await login.launchUrl()
        await login.verifyLogo()

    })

    test("verify login with valid creds", async () => {
         await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
         await login.loginSuccess()
    })

    test("verify login invlid user and valid password", async () => {

         await login.loginwithCreds(data.wrongusername, process.env.APP_PASSWORD)
         await login.loginfailure()
    })

    test("verify login valid user and invalid password", async () => {

         await login.loginwithCreds(process.env.APP_USERNAME, data.wrongpassword)
         await login.loginfailure()
    })

    test("verify login INvalid user and invalid password", async () => {
         await login.loginwithCreds(data.wrongusername, data.wrongpassword)
         await login.loginfailure()
    })
})