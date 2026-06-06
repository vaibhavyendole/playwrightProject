// 17. split() --> convert string into array
let csv = "apple,banana, cherry, blackberry and Mango"
console.log(csv.split(","))     // [ 'apple', 'banana', ' cherry', ' blackberry and Mango' ]                
console.log(csv.split("and"))   // [ 'apple,banana, cherry, blackberry ', ' Mango' ]
console.log(csv.split(" "))     // [ 'apple,banana,', 'cherry,', 'blackberry', 'and', 'Mango' ]
console.log(csv.split(""))      // [  'a', 'p', 'p', 'l', 'e', ',', 'b', ..............

let name = "Vaibhav"
console.log(name.split(""))     // [ 'V', 'a', 'i', 'b', 'h', 'a', 'v' ]

let date = "04/09/1990"
let days = date.split("/")
console.log(days)               // [ '04', '09', '1990' ]
console.log(days[0])            // 04
console.log(days[1])            // 09
console.log(days[2])            // 1990

// 18. join() --> convert array into string
let fruitArr = ["apple","banana", "cherry", "blackberry" , "Mango"]
console.log(fruitArr.join(" ")) // apple banana cherry blackberry Mango
console.log(fruitArr.join("-")) // apple-banana-cherry-blackberry-Mango
console.log(fruitArr.join(""))  // applebananacherryblackberryMango

// 19. concat() --> join to ore more strings / values
// 1st way --> use concat()
let part1 = "Hi Hello "
let part2 = 33 
let part3 = true
let joinedValues; 
console.log(part1.concat(part2))        // Hi Hello 33
console.log(part1.concat(part2,part3))  // Hi Hello 33true

// 2nd way  --> use + 
console.log(part1 + part2)              // Hi Hello 33
console.log(part1 + part2 + part3)      // Hi Hello 33true

// 3rd way --> use backticks
let method = "Get";
let endPoint = "/users"
let fullUrl = `https://reqres.in/api/${endPoint}`
console.log(`${method} : ${fullUrl}`)   // Get : https://reqres.in/api//users

// 20. String Comparision
console.log("Hello" == "Hello")     // true
console.log("Hello" == "hello")     // false

console.log("Hello" === "Hello")    // true
console.log("Hello" === "hello")    // false

console.log("5" == 5)               // true
console.log("5" === 5)              // false



