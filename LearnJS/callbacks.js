
// function printMessage(){

//     console.log("ABC")
// }


// function add(num1, num2){

//     console.log(num1+num2)
// }

// function substract(num1, num2){

//     console.log(num1-num2)
// }


// function multiply(num1, num2){

//     console.log(num1*num2)
// }


// function calculator(n1, n2, callback ){

//     const x = n1
//    const y = n2 

//    callback(x,y)

// }

// //If we are passing function as argument to another function - its called callback function 

// calculator(5,8, add)

// calculator(5,8, substract)

// calculator(5,8, multiply)

//Higher order function - a function which accepts another function as argument 

// closure function -  A callback is also called as closure when it accepts/ Access the data from higher order function 


// function greet(){

//     console.log("Hey Hi")
// }


// function PrintGreet(callback){

//     callback()

//     console.log("Raju")
// }

// PrintGreet(greet)


//anonymous function can be callback function 


// arr = [2,4,5,6,7]

// arr2 = arr.map( x => x*2)



// function processUserInput(callback) {
//     let name = "Raju";
//     callback(name);
// }

// processUserInput(function(name) {
//     console.log("Welcome " + name);
// });


//synchronous vs Asynchronous 

//to Make JS asynchronous callback functions Used

// console.log("Raju")


// setTimeout(function () {
//    console.log("Naveen") 
// }, 3000)



// console.log("Anitha")

//setTimeout(function, 2000)

// Callback Hell 

// fun1 
//  fun2 
//   fun3 
//    fun4 


function step1(value, callback) {
    callback(value + 10, false);
}

function step2(value, callback) {
    callback(value + 10, false);
}

function step3(value, callback) {
    callback(value + 10, false);  
}

step1(10, function (result1, boolvalue) {
    if (!boolvalue) {
        step2(result1, function (result2, boolvalue) {
            if (!boolvalue) {
                step3(result2, function (result3, boolvalue) {
                    if (!boolvalue) {
                        console.log("Results " + result3);
                    }
                })
            }
        })
    }
});


//Promises 

//Promise.all() working with Multiple Tabs 