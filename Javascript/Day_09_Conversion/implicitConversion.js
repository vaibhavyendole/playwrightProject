// Implicit Conversion --> Conversion is done automatically


// 1. Numeric Conversion
console.log("10"-2);    // 8
console.log("10"/2);    // 5
console.log("10"/3);    // 3.333333335
console.log(("10"/3).toFixed(3));    //3.333
console.log("10"*2);     // 20    
console.log("10"**2);    // 100
console.log("10"-true);  //9
console.log("10"-false); // 10
console.log("10"-undefined); // NaN

// 2. Boolean Conversion
console.log(Boolean(false))     // false
console.log(Boolean(true))      // true
console.log(Boolean(""))        // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null))      // false
console.log(Boolean(NaN))       // false
console.log(Boolean("Hi"))      // true
console.log(Boolean('2'))       // true
console.log(Boolean({}))       // true
console.log(Boolean([]))       // true

// 3. Conversion with Comparartor operator
console.log("5" == 5)     // true
console.log(0 == false)   // true
console.log("" == false)  // false
console.log(null == 0)    // false
console.log(null == undefined)     // true
console.log(null === undefined)    // false



// 4. 
