// Use of Break Statement

for(let i = 1; i<=10; i++){
    if(i == 5){
        console.log(`Found the Value ${i}, Breaking the Loop`)
        break;
    }
    console.log(i)
} 

// Use of Continue Keyword
for(let i = 1; i < 10; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i)      // 1 3 5 7 9
}

let result1 = ["Pass", "FAil", "PASS", "pAss", "Fail"]
let result = result1.map(item => item.toUpperCase());
console.log(result)     // [ 'PASS', 'FAIL', 'PASS', 'PASS', 'FAIL' ]
let passCount = 0;
for(i=0; i < result.length; i++){
    console.log( `TC${i+1} : Result ${result[i]}`)
    if(result[i] == "FAIL"){
        console.log(`TC${i+1} is Failed so Skipped`);
        continue
    }
    passCount++;
}
console.log(passCount)      // 3