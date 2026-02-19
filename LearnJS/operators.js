
// 1. Arithematic Operators

const { delimiter } = require("path")

// 2. comparision operators 

// 3. Logical Operators

// 4. Assignment operators 

// 5. ternary / conditional operators 

// 1. Arithematic Operators

// +
// -
// *
// /
// % - remainder of 2 operands 
// ++ - Increment 
// --  decrement 

x = 11

y = 4 

// 3/2  = 1

// 7/3 =1

// 11/4 = 2

console.log(x%y)

z = 5 
z++  // z = z+1
z++ 
console.log(z)

p = 6

p--
p--
console.log(p)

// Coersion in JS 

console.log(6+"9")  //"69"

// type conversion 

console.log("Raju" + "G")

console.log("3"+4+5+6+"6"+4+5)  //3456645  //1869 //1869  //18645

//2200

//300 


//paymentvalue   = price (inventory) + deliveryfee (api)

price = 34567

deliveryfee = undefined  // NaN  - not a number 

totalamout = price+deliveryfee

console.log(totalamout)

//-, *, / ,%  string - that will convert to number 

console.log("34" * 2)

// // 2. comparision operators  - return true or false 

//  ==
//  ===
//>
//<
// >=
//<=

//!=


//= is not used  for comparision , used for Assignment 

//==

console.log(2 == "2") 


// Loose Equal 

// it will do type conversion , if the values are equal will return true 

//  It will compare only values but not data type

//===

//strict Equal 

//  It will compare not only values but also data type

console.log(2 === "2")

console.log(5>=5)

console.log(2 != 2)

// 3. Logical Operators

// && 
// ||
// !

//AND GATE
// x   y  result 

// t   f    f

// f   t    f

// f   f     f

// T   T     T

// &&

console.log( false && true )

//OR GATE
// x   y  result 

// t   f    T

// f   t    T

// f   f     f

// T   T     T

console.log( 2==2 || 4>5 )

// NOT GATE 

// x   result 

// t    f

// f    t


console.log(!true)

// 4. Assignment operators 

// = 
// +=
// -=
// *=
// /=
// %=

//x = 5 

x = 5

x+=6  // x = x+6

console.log(x)

y = 7

y*=3  // y = y*3

console.log(y)


// 5. ternary / conditional operators 

student1  = "Rajesh"

student2 = "Netra"

//condition - true / false 

//condition ? value1 : value2 

finalvalue =  2==="2"  ? student1 : student2

console.log(finalvalue)

//**

// 3^8 

// 3**8

// condtional statements 

// loops 