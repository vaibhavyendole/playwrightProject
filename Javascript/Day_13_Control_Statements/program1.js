let access = "basicUser"; 
let isLogged = false; 

if(isLogged){
    if(access == "manager"){
        console.log("Has Manager Access")
    }
    else{
        console.log("Has Clerk Access")
    }
}
else{
    console.log("Please Log in")
}
// Please Log in