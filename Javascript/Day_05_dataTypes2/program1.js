//3.  boolean 
isLogged = true; 
isPresent = false;
let age1 = 30; 
let isAdult =  age1>18; 
console.log(isAdult);       // true
console.log(isLogged);      // true
console.log(isPresent);     // true
console.log(typeof isPresent); // boolean

// 4. undefined 
let allowedInWishList; 
console.log(allowedInWishList);        // undefined
console.log(typeof allowedInWishList); // undefined

//5. null - keep intentionally empty 
let selectedValue = null;
console.log(selectedValue);        // null
console.log(typeof selectedValue)  // object

//6. bigInt - Add n to last
let largestNum = 9876468464975n;
const heavyValue = 746846468486n;
console.log(largestNum);
console.log(typeof largestNum);
console.log((0.1 + 0.2).toFixed(3));  //0.300
console.log(heavyValue); //
console.log(typeof heavyValue);
