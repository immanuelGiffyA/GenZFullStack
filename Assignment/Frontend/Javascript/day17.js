function nameOfFunction(name) {
    console.log('hello',name);  
}
nameOfFunction('Raju')

function add(a,b){
    return a+b
}
console.log(add(10,20));

//1. function declaration

function sayHi(){
    console.log('hi welcome');
}
sayHi()

// fun expression

let sayHiExpression = function(){
    console.log('hi welcome EXPRESSION');
}
sayHiExpression()

// undefined parameter

function greet(name='Guest'){
    return name
}
