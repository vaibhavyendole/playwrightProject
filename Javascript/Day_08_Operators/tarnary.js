// Ternary Operator --> Short hand for simple if else

let age = 20; 
let result = (age>=18)?"eligible for Vote" : "grown up kid first"; 
console.log(result) // eligible for vote

// Interview Questions
let name = "Vaibhav";
let package = 22.5;
let isMarried = true;
let list = [1, 2, 3]
let pass = null; 
let buy;
let info = {"Quality" : 5, 
            "Age" : 30}
function hi(){
    console.log("Hi Hello")
}

console.log(typeof name);        // string
console.log(typeof package);     // number
console.log(typeof isMarried);   // bolean
console.log(typeof list);       // object
console.log(typeof pass);       // object
console.log(typeof buy);        // undefined
console.log(typeof info);       // object
console.log(typeof hi());       // undefined

console.log("//--------------------------")
console.log(Boolean(false))     // false
console.log(Boolean(true))      // true
console.log(Boolean(""))        // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null))      // false
console.log(Boolean(NaN))       // false
console.log(Boolean("Hi"))      // true
console.log(1+"2"+3)            // 123
console.log(1+"2"-3)            // 9
console.log(true + true)        // 2
console.log(true + false)       // 1
console.log(false + false)      // 0
console.log(null + 1)           // 1
console.log(undefined + 1)      // NaN
console.log("Hello" + 1 + "Hi") // Hello1Hi
console.log("Hello" - 1 - "Hi") // NaN

// Type of Data Conversion
// 1. Implicit Conversion
//    - JavaScript automatically converts one data type to another when needed.
//    - Example: number + string becomes string concatenation, 1 + "2" -> "12".
//    - This happens during operations, comparisons, or context where a certain type is required.
// 2. Explicit Conversion
//    - The programmer converts data types intentionally using functions or methods.
//    - Example: Number("123") converts a string to a number, String(123) converts a number to a string.
//    - This gives more control and avoids unexpected results from implicit coercion.
// Theory of conversion:
//    - JavaScript has primitive types like string, number, boolean, null, undefined, symbol, bigint.
//    - When values of different types are used together, JS tries to convert them to a common type.
//    - Implicit conversion is also called type coercion. It can be useful but may produce surprising results.
//    - Explicit conversion is clearer and safer, because you specify exactly how to change the type.






