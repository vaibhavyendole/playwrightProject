// Function 
// 1. Function Declaration
/*
    function functionName(parameter1, parameter2){
    //Code to execute
    return value; //optional
    }

        function --> Keyword used to create function
        functionName --> Name of the function
        parameters --> Inputs passed to function
        return --> Sends result back (optional)
*/

function greetUser(){
    console.log("Hello User, Welcome")
}
greetUser();            // Hello User, Welcome

function login(username, password){
    console.log(`Username is ${username} and password is ${password}`)
}
login("Vaibhav_Yendole", "Password@123")
            // Username is Vaibhav_Yendole and password is Password@123


function addition(a, b){
    let sum = a  + b;
    console.log(sum);
}

addition(5, 10)         // 15

function checkEvenOdd(num){
        if(num % 2 ==0){
            console.log(`Number ${num} is Even`)
        }
        else{
            console.log(`Number ${num} is Odd `)
        }
}
checkEvenOdd(15);       // Number 15 is Odd 
checkEvenOdd(16);       // Number 16 is Even

// Default paramter - Single 
function greetUser(name = "Guest"){
    console.log("Hi " + name)
}
greetUser();            // Hi Guest
greetUser("Akshay");    // Hi Akshay

// missing paramer 
function subtraction(a, b){
    console.log(a - b)
}
subtraction(5)  // b is undefined 
                // 5 - undefined  = NaN 


// 1. Function Definition --> Writing the function code is called function definition.
// 2. Function Call / Invocation  --> Executing a function is called function call.
// 3. Parameter --> Variables defined in function definition are called parameters.
// 4. Arguments --> Values passed during function call are called arguments.
// 5. Return Keyword --> return is used to send value back from function.
// 6. Reusable Code --> Functions allow us to reuse same logic multiple times.
// 7. Local Variables --> Variables declared inside function are accessible only inside function.
// 8. Function Naming Convention --> Function names should be meaningful and usually written in