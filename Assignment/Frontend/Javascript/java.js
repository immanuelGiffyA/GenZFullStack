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


function add (a, b) {
    return a + b;
}
// using arrow function
const addArrow= (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
console.log(addArrow(5, 3)); // Output: 8


const array = [1, 2, 3, 4, 5];
array.push(6); // Adds 6 to the end of the array


const object = { name: "John" };
object.name = "Doe"; // Modifies the name property of the object


// const arr1 = [1, 2, 3];
// arr1= [4, 5, 6]; // Reassigning the entire array


// add two numbers using function using let

function addNumbers(a,b)
{
    let sum = a + b;
 return sum;
}
let result = addNumbers(5,3);
console.log(result); // Output: 8 


// incrementing a variable using let
function increment(num) 
{
    let newNum = num + 1;
    return newNum;
}
  let number = 9;
  number = increment(number);
  console.log(number); // Output: 10/


  let numbers = [1, 2, 3];
  let sum=0;
  for ( let num of numbers) {
    sum += num;
  }
  console.log("sum:", sum); // Output: 6


   let num = [10,20,30,40];
   let min = num[0];
   for (let n of num) {
    if (n < min) {
        min = n;
    }
   }
   console.log("min:", min); // Output: 10


   let num2 = [1, 2, 3, 4, 5, 6];
   let even2=num2.filter(n => n % 2 === 0);
   console.log("even numbers:", even2); // Output: [2, 4]


//    square of array elements 
let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = num3.map(n => n * n);
console.log("square of array elements:", square); // Output: [1, 4, 9, 16, 25, 36]


// in one array [1,2,3,4,5,6,]elements we need to multiply the numerber by 2 and then filter the number greater then 5
let num4 =[1, 2, 3, 4, 5, 6];
let doubled = num4.map(n =>n *2);
let filtered = doubled.filter(n => n > 5);
console.log("doubled and filtered numbers:", filtered); // Output: [6, 8, 10, 12]  


let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },       
    { name: "Charlie", age: 35 }
];
users.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});
let Bob= users.find(user => user.name === "Bob");
console.log("found user:", Bob); // Output: { name: "Bob", age: 30 }

