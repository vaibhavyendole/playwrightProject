//3. Assignment Operator 
//  = +=  -=  *=   *=  %=

let score = 100;
score +=50;
console.log(score) //150
score -=20;
console.log(score) // 130
score /=10;
console.log(score) //13
score *=2;
console.log(score) //26
score %=100; 
console.log(score) //26
score %=5; 
console.log(score) //1

//4. Comparision Operaror
//  ==      lose equal (ignores data type)
//  ===     strict equal   (considers data type)
//  !=      lose not equal
//  !==       strict not equal
//  >       greater than
//  <       less than
//  >=      greater than equal to
//  <=      less than equal to
let a = 10
let b = "10"
let c = 20
console.log(a == b) // true
console.log(a ===c) // false
console.log(a != c) // true
console.log(a !== c)// true
console.log(a > c)  // false
console.log(a < c)  // true
console.log("3" != 3)   // false
console.log("3" !== 3)  // true

// Interview Question.
console.log("-----------------------")
console.log(0==false);// true
console.log(0=="")     // true
console.log(0=="Hi")    //false
console.log(0==null)    //false
console.log(0==undefined)  // false

