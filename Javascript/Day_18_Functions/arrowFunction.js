// Arrow Function
const hello = () => {
    console.log('Hi')
}
hello();

const sInfo = (name, contact, city) =>{
    console.log(`My name is ${name} , my Number is ${contact}
        belongs to ${city}`)
}

sInfo("Vaibhav", 9764963423, "Pune")

const multiply = (a, b) => a * b;
console.log(multiply(2, 4));
