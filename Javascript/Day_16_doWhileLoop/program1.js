// While loop

// add the sum of all numbers
let num = 12345;
let digitSum = 0;
let temp = num; 
while(temp>0)
{
    let digit = temp % 10; // 12345%10 --> 5
    digitSum = digitSum + digit; //--> 5 = 5+0
    temp = Math.floor(temp/10);  // provide you the output integer --> 12345/10 = 1234.5 i.e 1234
}
console.log(`Addition of Digir in number ${num} is ${digitSum}`)

// reverse a number 
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



// reverse Num 
let orgNum1 = "12345";
let revNum1 = 0;
let temp1 = orgNum1;

while (temp1 > 0){
    let digit1 =  temp1 % 10;    // 5 
    revNum1 = revNum1*10 + digit1;
    temp1 = Math.floor(temp1 / 10)  // 1234

}
console.log(revNum1)

// Addition of Number 
let nBefAdd = 12345;
let nAftAdd  = 0; 
let temp3 = nBefAdd;

while(temp3 > 0){
    digit = temp3 % 10 ; // 5
    nAftAdd = nAftAdd + digit ;
    temp3 = Math.floor(temp3 / 10);
}
console.log(nAftAdd)