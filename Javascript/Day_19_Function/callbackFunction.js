// callback function --> function as an argument to another function
// function mainFunction(callback){
// callback}

function greet(name){
    console.log("Hello "+ name)
}

function card(callback){
    callback("Vaib")
}

card(greet);    // Hello Vaib

//--------------------------------

function processData(data, callback){
    console.log("Processing "+ data)
    callback();
}

function done(){
    console.log("Processing Complete...");
}

processData("Test Data", done);  // processing test data
                                // Processing complete
