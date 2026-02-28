const moment = require('moment');



n1 = 5 
n2 = 10.45 

//2^53 

num1 = 678758756468346875634875683475674361n  //678758756468346875634875683475674366

num2 = 5n

console.log(num1+num2)

str = Number("10")  //10

num = String(10) // "10"

str = parseInt("10.6")  //10

str = parseFloat("12.8")  // 12.8


x = 34 -"Raju"  //NaN

console.log(isNaN(x))


y = String(20)

//y = 20.toString()  // string 



maxnum = Math.max(2,4,5,67,98,234,3,45,6,8,97,43)

console.log(maxnum)

minnum  = Math.min(2,4,5,67,98,234,3,45,6,8,97,43)

console.log(minnum)

// x = 45.67

// y = Math.trunc(x)

// console.log(y)

// x = 6.8

// y = Math.round(x)

// console.log(y)

// ========================

num1 = 6.9

result = Math.floor(num1)

console.log(result)


num1 = 6.1

result = Math.ceil(num1)

console.log(result)


z = Math.pow(2,6)

console.log(z)

//2**6

randomnum = Math.random()  //0 to 1 

console.log(randomnum)


console.log(Math.PI)

console.log(Math.sqrt(81))

//==========================================


x = moment().format('MMMM Do YYYY, h:mm:ss a')

console.log(x)

// date = moment().format('L')

// console.log(date)


const date = moment().format('YYYY/MM/DD');
console.log(date);

//fill(moment().format('YYYY/MM/DD'))