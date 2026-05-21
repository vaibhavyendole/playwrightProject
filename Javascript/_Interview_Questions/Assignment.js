let age = 20; 
let eligibilityResult = age >= 18 ? "Adult" : "Minor";
console.log(eligibilityResult); // Adult


for(let i=1;i<=5;i++){
    if(i===3){                  // In this Case output is 1 2 
        break;                  // as i = 3 , i.e condition is true  it will break the loop 
    }
    console.log(i);
}

for(let i=1;i<=5;i++){
    if(i===3){                  // In this case output is 1 2 4 5 
        continue;               // when i = 3 ; It Skips current iteration.
        
    }
    console.log(i);
}

let num = 1.1;
if(num>0){
    console.log("Number is positive");
}
else if(num<0){
    console.log("Number is Negative");
}
else
{
    console.log("Number is 0 or Invalid Value");
}

let marks= 79;

if(marks>89){
    console.log("Student have scored A Grade");
}
else if(marks>79 && marks<90){
    console.log("Student have scored B Grade");
}
else if(marks>69 && marks<80){
    console.log("Student have scored C Grade");
}
else if(marks>59 && marks<70){
    console.log("Student have scored D Grade");
}
else if(marks<60){
    console.log("Student failed to clear exam");
}
else{
    console.log("Please Enter Valid Marks");
}


let x = 10;
if (x > 5) {
console.log("Greater");
} else if (x > 8) {
console.log("Much Greater");
} else {
console.log("Small");
}

//Write a Program for Leap year; 

let year = 2001; 
if(year % 4 == 0 ){
console.log(`Yes,  ${year} is a Leap year`)
}
else{
    console.log(`No,  ${year} is not a Leap year`)
}

let day = 7; 
switch(day)
{
    case 1 : 
    console.log("Monday");
    break;

    case 2 : 
    console.log("Tuesday");
    break;

    case 3 : 
    console.log("Wednesday");
    break;
    
    case 4 : 
    console.log("Thursday");
    break;

    case 5 : 
    console.log("Friday");
    break;
    
    case 6 : 
    console.log("Saturday");
    break;

    case 7 : 
    console.log("Sunday");
    break;

    default :
    console.log("Holiday");
}

let fruit = "apple";
switch (fruit) {
case "apple":
console.log("Apple selected");
case "banana":
console.log("Banana selected");
case "mango":
console.log("Mango selected");
break;
default:
console.log("Unknown fruit");
} 

let operator = "+" ; 
let num1 = 8;
let num2 = 6;

switch(operator){

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}

let num3 = 0;
let result = num3 > 0 ? "Positive" : num3 < 0 ? "Negative" : "Zero";
console.log(result);


