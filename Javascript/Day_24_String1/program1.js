let num1 = "Forty one";
let num2 = '42';
let num3 =  43;
console.log(num1+num2) // Forty one42
console.log(typeof(num1+num2))  // String
console.log(num2+num3) // 4243
console.log(typeof(num2+num3))  // String

// String are Immutable : characters cannot be modified, replaced, or deleted after the string is created.
// If you attempt an operation (like .replace() or .toUpperCase()), JavaScript discards the old string and allocates a brand new string

let name = "Vaibhav";
console.log(name[0])    // V
name[0] = "H"
console.log(name)   // Vaibhav

let newName = "B"+name.slice(1)
console.log(newName)    // Baibhav

// String Delcaration Types
// 1. single Quote --> let name = 'Vaibhav'
// 2. Double Quote --> let name = "Vaibhav"
// 3. Backticks -----> let name = `Vaibhav`

let qaTest = "qa.";
let stageTest = "stage";
let prodTest = "";

let baseUrl = `https://www.${stageTest}medcor.com`
console.log(baseUrl) // https://www.stagemedcor.com

//empty String
let empty1 = "";
console.log(empty1.length)  // 0 

let empty2 = '  '; // Added 2 white spaces
console.log(empty2.length)  // 2

let empty3 = ``;
console.log(empty3.length)  // 0


letter = "Akshara";
console.log(letter[0])  // A
console.log(letter[1])  // k
console.log(letter[2])  // s
console.log(letter[3])  // h
console.log(letter[4])  // a
console.log(letter[5])  // r
console.log(letter[6])  // a
console.log(letter[7])  // undefined
