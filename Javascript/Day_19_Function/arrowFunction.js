// Arrow function

const marks = [10,20,40,60,70,80,90,100]; 

// Syntax of Arrow function
// (paramter ) => {
//Code}

const result  = marks.filter(score => score>=60);
console.log(result)

// E.g 2
let test = () => {
    console.log("Hi")
}
test(); 

// E.g 2

let addition = (num1, num2) =>{
    console.log(num1 + num2)
}
addition(5, 6); // 11s
