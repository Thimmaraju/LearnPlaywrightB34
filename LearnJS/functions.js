// // function functionname(){

// //     //block of code
// // }


// function printnames(){

//     console.log("Raju")

    
//     console.log("Rajesh")

    
//     console.log("Naveen")
// }


// printnames()

// printnames()

// printnames()


// // function add(num1, num2){

// //     console.log(num1)
// //     console.log(num2)

// //     console.log(num1+num2)
// // }

// // add(5,6)

// // add(34,67)


// function printgreetmessage(name="Raju", value2 = "G"){  // Default parameter

//     console.log("Hey Hi " + name + value2)
// }

// printgreetmessage("rajesh", "K")

// with params 

//without params 


// with return
// // with params 

// //without params 


function add(){

     return 4+7
}


console.log(add())   // 11


function randomPhoneNumber() {
    let firstDigit = Math.floor(Math.random() * 4) + 6; // 6–9
    let remaining = Math.floor(100000000 + Math.random() * 900000000);
    return firstDigit + remaining.toString();
}

console.log(randomPhoneNumber());

//utilities 


function randomCharacters(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

console.log(randomCharacters(10))


// arrow functions 

// call back function 

// higer order function 

// closure function 

// Anonimous function 

// function (num){

//     console.log(num*2)
// }



// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(result);  
// [2, 4, 6, 8, 10]