// 4.  nested if (if else under if else)
let hasCrad = true;
let pinCorrect = 1234; 
let balance = 100000; // Convert formatted string "1,00,000" to number
let withdraw = 20000;

if(hasCrad){

    if(pinCorrect===1234){

        if(withdraw<=balance){

            let newBalance = balance - withdraw;
                console.log("Dispensing ₹ : " + withdraw);
                console.log("Remaining Balance : " + newBalance);
        }
        else{
            console.log("Insufficient Balance");
        }
    }
    else{
        console.log("Incorrect PIN : Try Again");
    }
}
else{
    console.log("Please insert your card");
}
