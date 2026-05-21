// Type of variables
/*
var - Can be redeclare and re-assign
let - can not be redeclare | Can be re-assign
const - can not be redeclare and Can not re-assign


*/


//1.  Let 
let age = 20; 
console.log(age);   // 20

age = 30; 
console.log(age) // 30


//2. const 

const pi = 3.14 
console.log(pi)

// pi = 3.65; 
//console.log(pi); --> Assignment to Const variable : type Error

//3. var 
var name = "Sandesh"; 
console.log(name); // sandesh
var name = "Vaibhav"
console.log(name); // vaibhav

console.log("==========================");    //



let p = 5;
let q = 1;

p = p + q;  //  5 + 1 = 6 i,e p = 6
q = p - q   //  6 - 1 = 5 i.e q = 5
p = p - q;  //  6 - 5 = 1 i.e p = 1

console.log(p)  //1
console.log(q)  //5


function checkValue(value) {
    console.log("Value:", value);
    console.log("Datatype:", typeof value);
    console.log("Boolean:", Boolean(value));
    console.log("----------------");
}

checkValue(0); //  0 | number | false
checkValue(""); //   | String | false
checkValue(null);// null | Object | false
checkValue(undefined);// undefined | undefined | false
checkValue(NaN); // NaN | number | false
checkValue("hello"); // hello | string | true
checkValue(42);// 42 | number | true
checkValue([]); // [] | object | true
checkValue(false); // false | boolean | false





