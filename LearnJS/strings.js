str = "Username : Admin"

arr = str.split(" ")

console.log(arr[2])


str = "Javascript"

console.log(str.length)

console.log(str[0])

// arr = ["Raju", "naveen"]

// arr[0] = "Rajesh"

// console.log(arr)


str[0] = "j"

console.log(str)

str1 = "   Raju   ".trim()

//trimStart()
//trimEnd()

console.log(str1.length)

str2 = "This is simple sentence".toUpperCase()


str3 = "This Is Simple Sentence".toLowerCase()

console.log(str3)

str4 = "Python"

str4[0]

console.log(str4.charAt(0))


str5 = "This is simple sentence"

console.log(str5.includes("Naveen"))  //true

//"A" , "a"

str6 = "*Automation testing\n*Manual testing\n*API testing"

console.log(str6)


str5 = "This is simple sentence".replaceAll("i", "k")

console.log(str5)

st6 = str5.substring(0,4)

console.log(st6)

str = Number("₹73,990₹7".replaceAll("₹", "").replace(",", ""))

console.log(str)