
function printMessage(){

    console.log("ABC")
}


function add(num1, num2){

    console.log(num1+num2)
}

function substract(num1, num2){

    console.log(num1-num2)
}


function multiply(num1, num2){

    console.log(num1*num2)
}


function calculator(n1, n2, callback ){

    const x = n1
   const y = n2 

   callback(x,y)

}

//If we are passing function as argument to another function - its called callback function 

calculator(5,8, add)

calculator(5,8, substract)

calculator(5,8, multiply)

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