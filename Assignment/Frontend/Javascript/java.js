function testvar() {
    if (true) {
    var x = 10;
    }
    console.log(x);
    
}testvar();




function testlet() {
    if (true) {
    let y = 10;

    console.log(y);
    }
}testlet();



function loopvar() {
    for (var i = 0; i < 3; i++) 
        {
            // setTimeout is a function that executes a piece of code after a specified delay (in milliseconds). In this case, it will log the value of 'i' to the console after 1000 milliseconds (1 second).  
       setTimeout(function () {
        console.log(i);
       }, 1000);    
    }  
}  loopvar();   


function looplet() {
    for (let j = 0; j < 3; j++) 
        {
            // setTimeout is a function that executes a piece of code after a specified delay (in milliseconds). In this case, it will log the value of 'j' to the console after 1000 milliseconds (1 second).  
       setTimeout(function () {
        console.log(j);
       }, 1000);    
    }   
} looplet();   

