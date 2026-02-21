let num = 2;
switch(num){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("default case");
}
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid day");
}

for (let i = 0; i < 5; i++){
    console.log(i);
}

for (let i=0; i<5; ++i){
    console.log(i);
}
//  for (initialization; condition; increment/decrement){

for(let i = 1; i <= 15; i++){
    if(i%2===0){
        console.log("even:" + i);
}
}