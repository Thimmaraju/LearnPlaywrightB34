// Primitive datatypes

//1. Number 

    x = 19.5

// 2. string 

 y =  `Rajesh's place is "Bangalore"`

 console.log(y)
console.log(typeof(y))

//3 . Boolean 

 z = true 

 p = false

 console.log(typeof(z))
  console.log(typeof(p))


  //4. undefined 

    var stname ;

    console.log(stname)

    console.log(typeof(stname))

    var tr1 = undefined

    // 5. Null - empty 

    orderstatus = null

    console.log(typeof(orderstatus))  //null  // Object

  //  javascript - C language 

// Non Promitives datatypes 

// 1. Arrays

   arr1 = [2, "Raju", true, undefined, null]

   console.log(arr1[1])

   arr2 = [3,6,7,8,9,5]

   console.log(typeof(arr1[1]))


// 2. Objects

 car = {

    model : 2026,
    make : "KIA",
    tramission: "Manual",
    orderstatus : true
 }

 console.log(car.model)

// 3. Reg ex

// 4. functions 



// Javascript is Dynamically typed language 

//===============================================================

// mutable  - non primitive datatypes are mutable 
// Immutable - Primitive data types immutable 



arr = [1,32,4,5,6]  //Java 

arr[1] = "Raju"

console.log(arr)

// Mutable 

str = "JavaScript"

console.log(str.charAt(0))

str[0] = "k"

console.log(str)

// Immutable 

//JS Object 
student = {

   firstname: "Suchita",
   lastname : "Kumar",
   place: "USA "
}

student.firstname = "Naveeen"


console.log(student)
//===================================================



printnames()