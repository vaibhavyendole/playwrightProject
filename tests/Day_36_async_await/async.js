console.log("Executed Line 1")

setTimeout(()=>{
    console.log("Executed Line 2")
}, 5000)

console.log("Executed Line 3")

// ================================

async function demo(){
    return "Hi"
}

console.log(demo())         // Promise { 'Hi' }

test("Navigation Methods", async({ page }) => {
    console.log('Navigation method in async class')
})