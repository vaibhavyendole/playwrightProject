function Information(){ 
    let sInfo = {
    name : "Vaibhav",
    age : 33,
    package : 22.5, 
    isMarried : true
    }
    return sInfo
}
console.log(Information());

let sInfo = {
    name        : "Vaibhav",
    age         : 33,
    package     : 22.5, 
    isMarried   : true,
    city        : ["Pune", "Buldana"], 
    config      : {
        browser : "Chrome", 
        laptop  : "Dell", 
        access  : ["Global", "Local"],
        run     : function(age){console.log("Age is "+age)}

    },
    favSports   : "Billiards"
}
console.log(sInfo)          
console.log(sInfo.name)
console.log(sInfo.config.access)        // [ 'Global', 'Local' ]
console.log(sInfo.config.run(18))       // Age is 18

sInfo.config.access.push('Private')
console.log(sInfo.config.access)        // [ 'Global', 'Local', 'Private' ]



let emptyObj = {};
console.log(Object.keys(emptyObj).length)   // 0
emptyObj.name = "Vaibhav Added Later";
console.log(emptyObj)                       // { name: 'Vaibhav Added Later' }

// How to Create Objects 
// Method 1 : Object Literal 
let literal = { browser : "Chrome", version : 138.15}
console.log(literal);                   // { browser: 'Chrome', version: 138.15 }

// Method 2 : using new object
let method2 = new Object(); 
method2.browser = "Edge"; 
method2.version = 300;
console.log(method2)                    // { browser: 'Edge', version: 300 }

// Accessing values in objkect 
// 1. dot notation      ----> console.log(method2.browser)
// 2. bracket notation -----> console.log(method2[browser])

let timestamp = new Date().toISOString();
let obj = {tsmp : timestamp}
console.log(obj)                        // { tsmp: '2026-06-06T16:48:42.937Z' }

// Add , Update Delete in Object
let info = {name : "Vaib", City :"Pune" }
console.log(info);                      // { name: 'Vaib', City: 'Pune' }

info.company = "Encora";
console.log(info);                      // { name: 'Vaib', City: 'Pune', company: 'Encora' }

info.company = "Coforge";
console.log(info);                      // { name: 'Vaib', City: 'Pune', company: 'Coforge' }

delete info.company
console.log(info);                      // { name: 'Vaib', City: 'Pune' }
