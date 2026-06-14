// Types of Functions
// 1. Function Declaration
// 2. Function Expression
// 3. Anonymous Function
// 4. Arrow Function
// 5. callback function
// 6. IIFE (Immidiately Invoked Function Expression)


// 1. Function Declaration
function greet(){
    console.log("Hi Hellow");
}
greet();

//-------------------------------------

function multiply(a, b){
   let mul =  a * b;
   return mul
}
multiply(5,4);
console.log(multiply(5,4)); //  20  if return is not given then output is undfined


//-------------------------------------
function hi(){
    console.log("Hi There")
}
let outp = hi()
console.log(outp)  // undefined
hi();               // hi there

//-------------------------------------
console.log("-----------Withh Return-------------")
function hi1(){
    
    let value =  "Hello"
    return value

}
let outp2 = hi1();
console.log(outp2)  // Hello
hi1(); // No output

console.log("-----------Withh Return object-------------")
function getUser(){
    return{name : 'Vaib', package : 22.5, Role : 'SQA'}
}
getUser() //-->No output
let userInfo = getUser()
console.log(userInfo) // { name: 'Vaib', package: 22.5, Role: 'SQA' }
console.log(userInfo.name) // vaib

console.log("-----------Withh Return Arrays-------------")
function getColors(){
    return ["Red", "Green", "Yellow"];
}

let colors = getColors();
console.log(colors)  // [ 'Red', 'Green', 'Yellow' ]
console.log(colors[1]) // Green


// Code After Return is Unreachable : Once return executes, function execution stops immediately.
function test() {
// This line executes
console.log("This runs");
return "Hello";
// Unreachable Code
// This line never executes
console.log("Hi");
}
let test1 = test();
console.log(test1);