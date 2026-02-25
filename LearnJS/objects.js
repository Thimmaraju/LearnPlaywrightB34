

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


const emstatuses = {

    empstatus1 : "Part time Morning Shift",
    empstatus2 : "Part time Second Shift",
    empstatus3 : "Part time Night Shift",

}


for(let status  in emstatuses){

    console.log("Loop starts here")

    console.log(emstatuses[status])

       console.log("Loop ends here")
}


const employees = {

    emp1 : { firstname : "Netra", lastname : "L"},

    emp2: { firstname : "Naveen", lastname : "B"},

    emp3: { firstname : "Madhukar", lastname : "abc"},



}


for (emp in employees){

    console.log(employees[emp].firstname)

    console.log(employees[emp].lastname)
}