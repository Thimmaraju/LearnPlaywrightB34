

// objectname = {

//     propertyname : propertyvale,

//     propertyname : propertyvale
// }


student = {

    firstname : "Raju",
    lastname : "G",
    rollnum : 418,
    place: "Bangalore",
    religion : "xyz",
    details : { fathername : "Govindappa", place : "Blr"}
}

console.log(student.details.fathername)

console.log(student['lastname'])

console.log(student['details'].fathername)

student['clg'] = "ABC clg"


student['Dept'] = "ECE"


console.log(student)

student['lastname'] = "Govindappa"

console.log(student)

delete student.firstname

console.log(student)

console.log(student.firstname)

//=================================

menuitems= {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Recruitment",
    menu5 : "Dashboard"
}


// await page.locator(menu1).toBeVisible()
// await page.locator(menu2).toBeVisible()
// await page.locator(menu3).toBeVisible()
// await page.locator(menu1).toBeVisible()
// await page.locator(menu1).toBeVisible()


//for in


for(let item in menuitems){

    console.log("Loop starts here")

    console.log(menuitems[item])

       console.log("Loop ends here")
}