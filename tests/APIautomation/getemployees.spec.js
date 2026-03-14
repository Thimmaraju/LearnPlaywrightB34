import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

import empdata from "../../testdata/addemppostres.json"

test("verify Get Employees API", async ({ request }) => {

    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"
    const getemployess = await request.get(url, {
        headers: {
            cookie: process.env.COOKIEVALUE,
        }
    })

    expect(getemployess.status()).toBe(200)
    console.log(await getemployess.json())

})


test("verify Create Employees API", async ({ request }) => {

    const url = "/web/index.php/api/v2/pim/employees"
    empdata['employeeId'] = faker.string.numeric(5)

    const startTime = Date.now();
    const createEmployee = await request.post(url, {
        headers: {
            cookie: process.env.COOKIEVALUE,
            origin: "https://opensource-demo.orangehrmlive.com",
            referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
        },


        data: empdata

    })
    const endTime = Date.now();
    expect(createEmployee.status()).toBe(200)

    const responseTime = endTime - startTime;

    console.log(responseTime)

    expect(responseTime).toBeLessThan(4000);

    console.log(await createEmployee.json())

    const jsonresponse = await createEmployee.json()

    expect(jsonresponse.data.firstName).toBe(empdata.firstName)

    expect(jsonresponse.data.lastName).toBe(empdata.lastName)

    expect(jsonresponse.data.middleName).toBe(empdata.middleName)

    expect(jsonresponse.data.employeeId).toBe(empdata.employeeId)


})