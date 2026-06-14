// do while loop

// do{
//     //Code execute at least once then check condition
// }
// while(condition);

let d1 = 1; 
do
{
    console.log(` 4 X ${d1} is ${ 4 * d1}` );
    d1++;
} while (d1 <= 10);


// Pattern 
let rows = 5; 
for(let i = 1; i<= rows; i++){
    let pattern = "";
    for(let j = 1; j<= i; j++){
        pattern = pattern + "* "
    }
    console.log(pattern)
}




let rollStart = 3; 
do{
    console.log(rollStart);
    rollStart++
}
while(rollStart <=2)                // 3