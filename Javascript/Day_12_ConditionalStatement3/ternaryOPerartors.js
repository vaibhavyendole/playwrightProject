// Ternary Operator --> It is hsourt hand for if else condition
let age = 20; 
let result = age >= 18 ? "Eligible for Vote" : "Grow Kid"
console.log(result) //Eligible for Vote

// Chain Ternary --> else if conditions
let score = 72;
let grade   = score <100 && score > 90  ? "A"
            : score < 91 && score > 80  ? "B"
            : score < 81 && score > 70  ? "C"
            : score < 71 && score > 60  ? "D"
            : "Fail"
console.log(grade)      // C
