
let paragraph = `This is first line of paragraph
                the good thing using of backtick is 
                you can add code on multine`;
console.log(paragraph);

// 6. symbol
let id = Symbol("id"); 
let id2 = Symbol("id");
console.log(id);        //Symbol(UAE)
console.log(typeof id);    //symbol
console.log(id==id2)        //false


// Non Primitive
//2.1 Object - stores the key : value pair
let userInfo = {
                    name : "Akshay",
                    package : 22.5,
                    isNull : false
                }
console.log(userInfo) // { name: 'Akshay', package: 22.5, isNull: false }

let product = {
id: 1001,
name: "Maize Seeds",
sku: "ABC123",
price: 50,
units: 20,
category: "Seeds",
isAvailable: true
};
let totalValue = product.price * product.units;
console.log("Product: " + product.name); // Product: Maize Seeds
console.log("SKU: " + product.sku); // SKU: ABC123
console.log("Price: ₹" + product.price); // Price: ₹50
console.log("Units: " + product.units); // Units: 20
console.log("Total: ₹" + totalValue); // Total: ₹1000
console.log("Available: " + product.isAvailable); // Available: true
console.log("Category: " + product.category); // Category: Seed

//2.2 Array
let clientInfo = ['Vaibhav', 22.5, true, null ];
console.log(clientInfo);    //[ 'Vaibhav', 22.5, true, null ]
console.log(typeof clientInfo);  // Object
console.log(clientInfo.length); // 4
console.log(clientInfo[clientInfo.length-1]); // null
console.log(clientInfo[0]); // Vaibhav 
console.log(clientInfo[2]); // true
// push  --> Add to end  / pop - remove last
clientInfo.push("Crazzy Bro"); // [ 'Vaibhav', 22.5, true, null, 'Crazzy Bro' ]
console.log(clientInfo); 

clientInfo.pop();
console.log(clientInfo); // [ 'Vaibhav', 22.5, true, null ]


//2.3 function 
function hi()
{
    let addition = 5 + 10;
    console.log(addition);
}
hi();   //15