// Multi Dimensional Array - 2D Array
let table1 = [
    ["Name",    "Age", "City"],       // Row 0
    ["Vaib",    33,    "Buldana"],    // Row 1
    ["Sagar",   35,    "Nashik"],     // Row 2
    ["Sandesh", 30,    "Bangalore"],  // Row 3
    ["Anand",   32,    "Pune"]        // Row 4
]

console.log(table1[0])      // prints the entire Row 0 array
console.log(table1[2][1])   // 35
console.log(table1.length)  // 5 --> Total Number of Rows
console.log(table1[0].length)   // 3 --> Total Number of Cols


for(let row = 0; row < table1.length; row++){
    for(let col = 0; col < table1[0].length; col++){
        // console.log(table1[row][col]); // every element on next line
        process.stdout.write(table1[row][col] + " ")  // ✅ bracket fix
    }
    console.log();
}

// Example 2

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [9]
]

for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++){
        process.stdout.write(matrix[row][col]+ " ");
    }
    console.log();
}

// Convert Array String into Number
let values = ["10", "20", "30", "40", "Forty", "50.25"]
let numValues = values.map(Number)
console.log(numValues) // ["10", "20", "30", "40", "Forty", "50.25"]