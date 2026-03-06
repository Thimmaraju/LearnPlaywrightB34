
import { test, expect } from '@playwright/test';




test.describe("Group 1", () => {


    test.afterAll(() => {

        console.log(" Execute only one time - AfterAll tests")

    })

    test.beforeEach(() => {

        console.log("Print Before Each test")
    })

    test.beforeAll(() => {

        console.log(" Execute only one time  - BeforeAll tests")

    })

    test.afterEach(() => {

        console.log("Print After Each test")
    })

    test("test case 1 ", () => {


        console.log("Test case 1")

        expect(5).toBe(5)
    })

    test("test case 2 ", () => {

        console.log("Test case 2")
    })

    test("test case 3 ", () => {

        console.log("Test case 3")
    })



    test("test case 4 ", () => {

        console.log("Test case 4")
    })


})


test.describe("Group 2", () => {


    


    test("test case 5 ", () => {

        console.log("Test case 5")


    })

    test("test case 6 ", () => {

        console.log("Test case 6")
    })



})