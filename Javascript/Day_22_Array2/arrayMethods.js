

console.log("----------for loop--------------")
// Array Iteration
// 1. Using for loop
for(let i = 0; i<rollNums.length; i++){
    console.log(rollNums[i]);
}

console.log("----------while loop--------------")
// 2. while loop
let j = 0;
while(j < rollNums.length){
    console.log(rollNums[j]);
    j++;
}

console.log("----------do while loop--------------")
// 3. do while loop
let k = 0;
do{
    console.log(rollNums[k])
    k++;
}
while(k<rollNums.length)

console.log("----------for of loop--------------")
// 4. for of loop
// for(let/const varName of arrayName){
// code }

for(let position of rollNums){
    console.log(position)
}

console.log("----------for in loop--------------")

// 5. for in loop
// for(let/const varName in  arrayName){
// code }

for(let position in rollNums){
    console.log( `Starting Pos is ${position} and Value is ${rollNums[position]}`)
}












let rank = new Array("First", "Second", "Third", "Fourth", "Fifth")


console.log("----------for loop--------------")
for(let i = 0; i < rank.length; i++){
    console.log(`Rank of ${i+1} position is ${rank[i]}`)
}

console.log("----------for while loop--------------")
let n = 0;
while(n < rank.length){
    console.log(`Rank of ${n+1} position is ${rank[n]}`)
    n++;
}

console.log("----------do while loop--------------")
let m = 0;
do{
    console.log(`Rank of ${m+1} position is ${rank[m]}`)
    m++;
}
while(m < rank.length)