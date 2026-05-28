// Heterogeneous Type
// Heterogeneous array with different types
let studentInfo = ['Vaibhav Y', 22.5, 33, { key: 'A' }, true, undefined, null, ''];
console.log('studentInfo =', studentInfo);
console.log('studentInfo.length =', studentInfo.length);

// Arrays can also contain other arrays and objects
let nested = [1, [2, 3], { name: 'Alice' }];
console.log('nested array =', nested);
console.log('nested[1][0] =', nested[1][0]);
console.log('nested[2].name =', nested[2].name);

let locators = new Array ("#loc1" , "#loc2" , '#loc3')
console.log(locators)

let pages = ["Login", "Procedure", "911", "Emergent", "Urgent", "Intervention", "summary"]

for(let i=0; i<=pages.length-1; i++){
    console.log(`Page ${[i]} : ${pages[i]}`);
}