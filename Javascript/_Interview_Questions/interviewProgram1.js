// sum of 5 numbers
total = 0; 
for(let i = 1; i<=5; i++)
{
    total += i;
}
console.log(total);

// even odd
let num = 26; 
if(num%2==0){
    console.log("It is even")
}
else{
    console.log("It is Odd")
}

// factorial of 5
let fact = 1; 

for(let i = 5; i>=1; i--)
{
    fact *=i;
}
console.log(`factorial of number is `, fact)