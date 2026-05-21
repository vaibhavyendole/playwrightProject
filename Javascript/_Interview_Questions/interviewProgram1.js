//1.  sum of consecutive 5 numbers
total = 0; 
for(let i = 1; i<=5; i++)
{
    total += i;
}
console.log(total);

//2. Find even odd
let num = 26; 
if(num%2==0){
    console.log("It is even")
}
else{
    console.log("It is Odd")
}

//3. factorial of 5
let fact = 1; 

for(let i = 5; i>=1; i--)
{
    fact *=i;
}
console.log(`factorial of number is `, fact)

//4. sum of all digits in number e.g 74785
let num3 = 12345;
let digitSum = 0;
let temp = num; 
while(temp>0)
{
    let digit = temp % 10; // 12345%10 --> 5
    digitSum = digitSum + digit; //--> 5 = 5+0
    temp = Math.floor(temp/10);  // provide you the output integer --> 12345/10 = 1234.5 i.e 1234
}
console.log(`Addition of Digir in number ${num3} is ${digitSum}`)

//5. // reverse a number 
let orgNum = 12345;
let revNum = 0;
let temp2 = orgNum; 
while(temp2>0)
{
    let digit = temp2 % 10 ; // 5
    revNum = revNum * 10 + digit; // 0 = 0*10 + 5 = 5
    temp2 = Math.floor(temp2/10) // 1234
}
console.log(`Reverse Number of Num ${orgNum} is ${revNum}`)



// Prime Number 
let num7 = 25;
let isPrime = true;

if(num7 <= 1){
    isPrime = false;
}
else{

    for(let i = 2; i < num; i++){

        if(num7 % i === 0){

            isPrime = true;
            break;
        }
    }
}

if(isPrime){
    console.log("Prime Number");
}
else{
    console.log("Not Prime Number");
}