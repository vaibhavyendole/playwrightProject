// 6. Concate() --> Merge 2 or more than 2 arrays
let smoke = ["TC1", "TC2", "TC3"]
let sanity = ["TC4", "TC5", "TC6"]
let regression = ["TC7", "TC8", "TC9"]

let joined1 = smoke.concat(sanity)
console.log(joined1)
// ["TC1","TC2","TC3","TC4","TC5","TC6"]

let joined2 = smoke.concat(sanity, regression)
console.log(joined2)
// [ 'TC1', 'TC2', 'TC3', 'TC4', 'TC5', 'TC6' , 'TC7', 'TC8', 'TC9']

let joined3 = smoke.concat(sanity.concat(regression))
console.log(joined3)
// [ 'TC1', 'TC2', 'TC3', 'TC4', 'TC5', 'TC6' , 'TC7', 'TC8', 'TC9']

// 7. join() --> saperate the arrays output
// syntax --> arrayName.join(saperator)
let city = ["Pune", 'Mumbai', "Nashik"]
console.log(city)
let cityFormat = city.join(" + ")
console.log(cityFormat)

// 8. reverse() --> reverse the sequence
let sNames = ["Akshay", 52, 22.5, "Xylin", true, "Lavinia"]
let revSNames = sNames.reverse()
console.log(revSNames) // [ 'Lavinia', true, 'Xylin', 22.5, 52, 'Akshay' ]

let rollNum = [1, 2, 3, 4, 5]
let revRollNum = rollNum.reverse();
console.log(revRollNum) // [ 5, 4, 3, 2, 1 ]


// 9. sort()
let City1 = ["Pune", 'Mumbai', 1.12, "Nashik", "", 14, null, undefined, false, true, "Buldana"]
let sortedCity = City1.sort()
console.log(sortedCity)
// [ '', 1.12, 14, 'Buldana', 'Mumbai', 'Nashik',  'Pune', false, null, true, undefined]
 
// Result need to sort desc
// arrayName.sort().reverse()

// 10. include --> verify the value include in the string
let City2 = ["Pune", 'Mumbai', "Nashik", "Buldana"]
let includeCity = City2.includes("Pune")
console.log(includeCity) // true

// 11.  indexOf() --> Find out the index of element
let browsers  = ["Chrome", "FireFox", "Safari", "QQ", "Chrome"]
console.log(browsers.indexOf("Chrome")) // 0
console.log(browsers.indexOf("QQ")) // 3
console.log(browsers.indexOf("UC Browser")) // -1

// 12. at() --> access element by index
let browsers2  = ["Chrome", "FireFox", "Safari", "QQ", "Chrome"]
console.log(browsers2.at(2))    // Safari
console.log(browsers2[2])       // Safari
console.log(browsers2.at(5))    // undefined
console.log(browsers2.at(-1))   // Chrome
