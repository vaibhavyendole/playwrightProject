// For loop

// print the addition of sequencial numbers 1 to 5
let total = 0; 
for(let num = 1; num <=5; num++){
    total = total + num;
}
console.log(total)  // 15


// String Index Access
let word1 = "Walia Kumar";
// .length --> gives you string size
console.log(word1.length)   // 11
console.log(word1[0])       // W
console.log(word1[1])       // a
console.log(word1[2])       // l
for(let i=0; i<=word1.length; i++)
{
    console.log(`indix ${i} : ${word1[i]}`)
}

// Factorial of a Number
let num = 6; 
let fact = 1; 
for(let i = num; i>=1; i--){
    fact = fact * i; 
}
console.log(fact)   //720

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



// find the largest number from the array
let values = [13, 456, 789, 159, 978, 125, 4, 111]
let largestValue = values[0] // Assume first value is largest

for(let i = 0; i < values.length; i++){

    if (values[i] > largestValue){
        largestValue = values[i]
    }
}
console.log(largestValue)   //978


// find the largest value from the Array 
let val = [123, 1, ,258, 4777, 1, 0]
let laValue = val[0]

for(let i = 0; i < val.length; i++){
    if(val[i] > laValue){
        laValue = val[i]
    }
}
console.log("Large Value "+ laValue) 


