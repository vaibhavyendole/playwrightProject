// 2. function expression
//      let/const variableName = function(parameters){
//      code
//      }
const greetUser = function(user){
    console.log("Hi "+user)
}
greetUser();            // Hi undefined
greetUser("Vaibhav")    // Hi Vaibhav

let multiply = function(a, b){
    console.log(a * b)
}
multiply(5, 10)     // 50

// Function Expression is not hoisting
// function can not call before initialization


//Function Declaration Hoisting
sayHi();
function sayHi() {
console.log("Hi");
}

//Function Expression Hoisting
// Function expressions are NOT accessible before initialization.
sayBye();   // call before initialization
const sayBye = function () {
console.log("Bye !!");
};
// Error: Reference Error
// Cannot access 'sayBye' before initialization
