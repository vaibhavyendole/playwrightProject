// Explicit Conversion
// First Method Of Conversion
console.log(String(123));   // 123
console.log(String(3.14));  // 3.14
console.log(String(true))  // true
// Note String --> S is capital

//Another Method of Conversion toString
let age = 25; 
console.log(typeof (age.toString())) // String
console.log(age.toString()) // 25
console.log((8).toString(2)) // 1000

// Convert to Number
let value = "13"
let num = "Thirteen"
console.log(Number(value))  // 13
console.log(Number(num))    // NaN
console.log(Number(""))     // 0
console.log(Number("  ")) //0 Whitespace
console.log(Number(false))  // 0
console.log(Number(undefined))  // NaN
console.log(Number(null))  // 0

// parseInt
console.log(parseInt(3.3333)) // 3
console.log(parseInt("3.3333")) // 3
console.log(parseInt("Hi")) // NaN
console.log(parseInt("45pixels")) // 45
console.log(parseInt("45pixels49")) // 45
console.log(parseInt("pixels49")) // NaN

//parseFloat
console.log(parseFloat("3.3333")) // 3.3333
console.log(parseFloat("3.14 is value of Pi")) // 3.14

