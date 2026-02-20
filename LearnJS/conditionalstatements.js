
// {

//     line1
//     line2

// if(await page.locator(xpath).isVisible()){

//     //     line3
//    //     line4
//    //     line5
//    //     line6

// }

// else{


//     //     //     line7
// //    //     line8
// //    //     line9
// //    //     line10

// }





// }

// if(condition){

//     line3
//     line4
//     line5
//     line6

// }


if (true) {


    console.log("Raju")

    if (false) {
        console.log("Naveen")
    }

    console.log("Rajesh")
}
else {

    console.log("Sandya")
    console.log("Suchta")
    console.log("Chetana")

}


//================================================

// if(condition){

//     //block 1
// }
// else if(condition2){

//     //block2
// }

// else if(condition3){

//     //block3
// }
// else{

//     // block 4 
// }


let marks = 20;

if (marks > 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks > 70 && marks <= 90) {
    console.log("Grade: A");
}
else if (marks > 60 && marks <= 70) {
    console.log("Grade: First Class");
}
else if (marks > 35 && marks <= 60) {
    console.log("Grade: Pass");
}
else {
    console.log("Fail");
}


// "Naveen"

// "block1"

// "Rajesh"
// "block2"

// "Manoj"

// "block3"

// default

switch ("qa") {
    case "qa": {

        console.log("QA Environment")
    }

        break;

    case "preprod": {

        console.log("Preprod Environment")
    }

        break;

    case "staging": {

        console.log("Staging Environment")
    }

        break;

    default:
        console.log("No Environment Matched")
        break;
}