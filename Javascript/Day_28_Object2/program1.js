let calculator = {
    add : function(a, b){
        return a + b ;
    }, 

    sub : function(a, b){
        return a - b ;
    },

    mul : function(a, b){
        return a * b; 

    }
}

console.log(calculator.add(10, 5))      // 15
console.log(calculator.sub(10, 5))      // 5
console.log(calculator.mul(10, 5))      // 50

// this keyword --> access the variable throghout the method / class / object

let userAccount = {
    accountHolder : "Vaibhav",
    balance : 50000,
    deposit(depositAmount){
        this.balance += depositAmount;
        return this.balance
    },
    checkbalance(){
        console.log(`You have deposited ${this.depositAmount} and currently have ${this.balance} `)
    }
}
console.log(userAccount);
console.log(userAccount.deposit(1111));     // 51111
console.log(userAccount.checkbalance());    // You have deposited undefined and currently have 51111 


//===================================================================================
let student = {
    name        : "Vaibhav", 
    age         : 25,
    grade       : "A",
    city        : "Pune"
}

// 1. print the Object using for loop
console.log("-----------------For in loop----------------------------")
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}

// 2.  Object.keys() --> return arrays of key
console.log("-----------------Object.keys()----------------------------")
let keys = Object.keys(student)
console.log(keys)                   // [ 'name', 'age', 'grade', 'city' ]

// 3.  Object.values() --> return arrays of key
console.log("-----------------Object.values()----------------------------")
let values = Object.values(student);
console.log(values)                 // [ 'Vaibhav', 25, 'A', 'Pune' ]

// 4. Object.entries() ---> gives you arrays of  ['key' , 'value'] both
console.log("-----------------Object.entries()----------------------------")
let entries = Object.entries(student);
console.log(entries) 

// 5. for of loop -- obejct.entries
for(let [key, value] of Object.entries(student)){
    console.log(`${key} : ${value}`)
}
