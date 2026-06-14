// FUNCTION SCOPE (LOCAL SCOPE)
// Variables declared inside a function
// are accessible only inside that function

function myFunction() {
let localVar = "I am local";
console.log(localVar);
}
myFunction()        // I am local
// console.log(localVar); // ReferenceError: localVar is not defined
// localVar cannot be accessed outside function


// let and const are block scoped
// var is function scoped
function testScope() {
if (true) {
// Accessible only inside block
let blockVar = "Block Scope Variable";
// Accessible only inside block
const constVar = "Constant Variable";
// Accessible in entire function
var funcVar = "Function Scope Variable";
console.log(blockVar);
console.log(constVar);
}
// console.log(blockVar); ❌ Error
// blockVar is not accessible outside block
// Accessible because var is function scoped
console.log(funcVar);
}
testScope();

// 6.  IIFE - Immidiately invoked Function Expression

(function(){
    console.log("Hi");      // Hi
})(); 

(function(sName, rollNo){
    console.log(sName + rollNo)
})("Vaib", 25)              // Vaib25
