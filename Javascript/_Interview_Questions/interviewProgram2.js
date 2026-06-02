// Find the Greatest number from 3 
let a = 100; 
let b = 125; 
let c = 125;

if(a>=b && a>=c){
    console.log(`a is greater number`)
}
else if(b>=a && b>=c){
    console.log(`b is greater number`)
}
else{
    console.log(`c is greater number`)
}
// b is greater number


// find the largest number from the array
let values = [13, 456, 789, 159, 978, 125, 4, 111]
let largestValue = values[0] // Assume first value is largest

for(let i = 0; i < values.length; i++){

    if (values[i] > largestValue){
        largestValue = values[i]
    }
}
console.log(largestValue)   //978

// count vowels in string
let text = "Automation testing";
let vowels = "aeiouAEIOU"
let count = 0; 

for(let i = 0; i < text.length; i++){
    if(vowels.includes(text[i])){
        count++
    }
}
console.log(`Vowels present in the ${text} is ${count}`)
// Vowels present in the Automation testing is 8