// Multi Line String Declaration
// 1. Using Backticks
let multiline1 = `This is line1
This is line 2
This is line 3`
console.log("multiline1 : " + multiline1)

// 2. using /n
let multiline2 = "This is Line1\nThis is Line2\nThis line2" 
console.log("multiline2 : " + multiline2)

// 3. using conact + 
let multiline3 = "This is Line1 \n"+
"This is Line2 \n"+
"This is Line3 \n"
console.log("multiline3 : " + multiline3)

// String Property
let str1 = "welcome to Artbuddy4u"; 
console.log(str1.length)    // 21

let str2 = ""
console.log(str2.length)    // 0

let str3 = "   "
console.log(str3.length)    //3

// Access Character
let str4 = "Artbuddy4u"
console.log(str4[0])                // A
console.log(str4.length-1)          // 9
console.log(str4[str4.length-1])    // u

// String Class Methods

// 1. toUpperCase() --> Convert all character to Upper case
// 2. toLowerCase() --> Convert all character to Lower case
let word = "AksHara This is Complete StrinG";
console.log(word.toUpperCase())     // AKSHARA THIS IS COMPLETE STRING
console.log(word.toLowerCase())     // akshara this is complete string

// 3. trim()  --> remove whitespaces from both ends
let str5 = "    Contains white spaces at start and end    "
console.log(str5.trim())            // Contains white spaces at start and end

// 4. trimStart() --> remove whitespaces present at start only
// 5. trimEnd() ----> remove whitespaces present at end only
console.log(str5.trimStart())   // Contains white spaces at start and end
console.log(str5.trimEnd())     //    Contains white spaces at start and end

// Search Methods
// 6. includes() --> Check if substring exists --> true / false
let str6 = "the quick brown fox jump over the lazy fox"
console.log(str6.includes("fox"))       // true
console.log(str6.includes("Fox"))       // false

let errorMsg = "Invalid Credentails, Please Enter correct Creds"

if(errorMsg.toLowerCase().includes("invalid credentails")){
    console.log("Login Message displayed")
}                                       // Login Message displayed

// 7. indexOf() --> find the First Position index of substring
// 8. lastIndexOf() --> find the Last Position index of substring
let str7 = "Hello o Hi Hello Hi hello"
console.log(str7.indexOf("Hi"))         // 8 
console.log(str7.indexOf("H"))          // 0
console.log(str7.indexOf("h"))          // 20

console.log(str7.lastIndexOf("Hi"))     // 17
console.log(str7.lastIndexOf("i"))      // 18
console.log(str7.lastIndexOf("ZZ"))     // -1

// 9. startWith() --> check if string start with substring
// 10. endWith()--> check if string end with substring
let url = 'https://www.facebook.com'
console.log(url.startsWith("https"))    // true
console.log(url.startsWith("ttps"))     // false
console.log(url.endsWith(".com"))       // true
console.log(url.endsWith(".co"))        // false

// Extracting Methods
// 11. slice(startIndex, endIndex) --> Extract the values at indexes
// start --> inclusive|end --> exclusive | Negative Indexing Allowed
let word1 = "Hello5 User"
console.log(word1.slice(0, 5))      // Hello
console.log(word1.slice(7, 10))     // Use
console.log(word1.slice(3)) // remove first 4 indexes // lo5 User
console.log(word1.slice(-7))        // o5 User
console.log(word1.slice(-4))        // User   
console.log(word1.slice(-4, -1))    // Use   
console.log(word1.slice(-1, -4))    // empty


// 12. substring(startIndex, endIndex) --. negative indexing not allowed
let word2 = "Hello5 User"
console.log(word2.substring(0, 5))  // Hello
console.log(word2.substring(-7)) 
// Hello5 User --. complete string given which is wrong

// 13. charAt(i)--> specific character index values--> No negative Index
// 14. at(i)--> specific character index values--> supports negative Index
let str8 = "JavaScript"
console.log(str8.charAt(0))     // J
console.log(str8.charAt(-1))    // empty

console.log(str8.at(-1))        // t
console.log(str8.at(0))         // J


// 15. replace(" ")
// 16. replaceAll(" ")
let str9 = "Hi Peter, Is you House is Near Peter Gate"
console.log(str9.replace("Peter", "Jacob"))
// Hi Jacob, Is you House is Near Peter Gate

console.log(str9.replaceAll("Peter", "Jacob"))
//Hi Jacob, Is you House is Near Jacob Gate