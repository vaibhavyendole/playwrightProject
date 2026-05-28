// 1. Array Property --> length
// 2. pop() --> remove last index value
// 3. push() --> add the value in array at last
// 4. shift() --> remove starting value
// 5. unshift() --> add single/multiple values at start


// 1. Array Property --> length
let rollNums = [1, 2, 3, 4, 5]
console.log(rollNums.length) // 5

// 2. push --> Add element in the last
rollNums.push(6, 7)
console.log(rollNums) // [1, 2, 3, 4, 5, 6, 7]

// 3. pop --> remove the last element
rollNums.pop()
console.log(rollNums) // [ 1, 2, 3, 4, 5, 6 ]

// 4. shift --> remove starting element
rollNums.shift();
console.log(rollNums) // [ 2, 3, 4, 5, 6 ]

// 5. unshift --> add vvalue in start
rollNums.unshift(1); 
console.log(rollNums)   //[ 1, 2, 3, 4, 5, 6 ]
rollNums.unshift(-2, -1, 0)
console.log(rollNums) // [-2, -1, 0, 1, 2, 3,  4, 5, 6 ]

