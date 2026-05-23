// 3. if(){} ...elseIf(){}...else{}
let marks = 35;

if(marks>90 && marks<100){
    console.log(`Congratulation for Scoring ${marks} Pass in A+`);
}
else if(marks>80 && marks<91){
    console.log(`Congratulation for Scoring ${marks} Pass in A`);
}
else if(marks>70 && marks<81){
    console.log(`Congratulation for Scoring ${marks} Pass in B`);
}
else if(marks>50 && marks<61){
    console.log(`Congratulation for Scoring ${marks} Pass in D`);
}
else if(marks>60 && marks<71){
    console.log(`Congratulation for Scoring ${marks} Pass in C`);
}
else if(marks<61){
    console.log(`Congratulation for Scoring ${marks}
But Minimum Passing Marks are 61 `);
}
else{
    console.log(`Enter the valid values`);
}





   
