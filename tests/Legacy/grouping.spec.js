import { test, expect } from '@playwright/test';



test.describe("Group 1", ()=> {

    

    test("test case 1 ", ()=>{

        test.fail()

        console.log("Test case 1")

        expect(5).toBe(8)
    })

     test("test case 2 ", ()=>{

        test.fixme()

        console.log("Test case 2")
    })

     test("test case 3 ", ()=>{

        console.log("Test case 3")
    })


    
     test.skip("test case 4 ", ()=>{

        console.log("Test case 4")
    })


})


test.describe("Group 2", ()=> {

    test.skip("test case 5 ", ()=>{

        console.log("Test case 5")


    })

     test("test case 6 ", ()=>{

        test.slow()

        console.log("Test case 6")
    })

     

})