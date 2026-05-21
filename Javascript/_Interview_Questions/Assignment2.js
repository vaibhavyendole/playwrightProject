for(let i = 1; i<=10; i++)
{
    console.log(`7 * ${i} = ${ 7 * i}`)
}

let sum = 0;
for (let i = 1; i<=100; i++){
    sum += i;
}
console.log(sum)

// factorial of 7
let num  = 7;
let fact = 1;
for(let i = num; i>=1; i--){
fact = fact *  i; 
}
console.log(`factorial of 7! is ${fact} `)

// reverse a number
let num3 = 12345; 
let revNum = 0; 
while(num3>0)
{
    let digit = num3 % 10 ; 
    revNum = revNum*10 + digit; 
    num3 = Math.floor(num3/10);
}
console.log(revNum);

let num4 = 10; 
while(num4>=1)
{
    console.log(num4)
    num4--;
}

// Sum of number 
let num5 = 1345;
let sum1 = 0;
while(num5>0)
{
    let digit  = num5 % 10 ; 
    sum1 = sum1 + digit; 
    num5 = Math.floor(num5/10);
}
console.log(sum1)

let num6 = 121; 
let original = num6; 
let rev = 0;

while(num6>0){
    let digit = num6 % 10;
    rev  = rev*10 + digit;
    num6 = Math.floor(num6/10)
}
if(original===rev)
{
    console.log("Yes It is a Pallindrome Number")
}
else{
    console.log("Not a Pallindromes")
}

// pattern 
for(let i = 1 ; i<=5; i++)  // For loop for Rows
{
    let pattern = "";
    for(let j = 1; j<=i; j++) // for loop for Column
    {
     pattern = pattern + j+"";

    }
    console.log(pattern);
}

// pattern 
for(let i = 1 ; i<=5; i++)  // For loop for Rows
{
    let pattern = "";
    for(let j = 1; j<=i; j++) // for loop for Column
    {
     pattern = pattern + "* ";

    }
    console.log(pattern);
}

for(let i = 5 ; i>=1; i--)  // For loop for Rows
{
    let pattern = "";
    for(let j = 1; j<=i; j++) // for loop for Column
    {
     pattern = pattern + "* ";

    }
    console.log(pattern);
}