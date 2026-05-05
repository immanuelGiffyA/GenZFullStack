// using arrow function


const findOddorEven = num => num % 2 === 0 ? "even" : "odd"
console.log(findOddorEven(9));

// factorial of numbers

const factorial = num => num === 0 ? 1 : num * factorial(num - 1)
console.log(factorial(6));

// maximum of two numbers

function findMax(n) {
    let max = n[0]
    for (let num of n) {
        if (max < num) {
            max = num
        }
    }
    console.log(max);

}
findMax([12, 455, 22133, 45, 6777, 32, 1, 11223])

function findMin(n) {
    let min = n[0]
    for (let num of n) {
        if (min > num) {
            min = num
        }
    }
    console.log(min);

}
findMin([555, 34, 456, 2, 3456]);

// reverse the string 

let str = "Hello"
let reversed = ""
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]

}
console.log(reversed);

// palindrome 
function isPalindrome(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return str === reversed
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// square of numbers


let num = [1, 2, 3, 4, 5, 6, 7, 8];
let square = num.map(n => n * n)
// console.log(square);

const squareNum = n => n * n;
console.log(squareNum(3));



function a (num){
    return num * num 
}
// console.log(a(4));


// how many even numbers are there in the array

let arr = [1, 3, 6, 8, 10, 11];
function countEven(){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count;   
}
// console.log();

const user=[
    {id:1, name:"giffy", age:21},
    {id:2, name:"jeffy", age:23},
];

// Acessing Data
console.log(user[0]);
console.log(user[1].name);

// looping through array of object 

user.forEach( user =>
    {
        console.log(user.name)
});

// filtering 

const adult=user.filter(user=>user.age>=23);
console.log(adult);


// sort by age(acending)

user.sort((a,b)=>a.age-b.age);
console.log(user);

// sort by age (decending)

user.sort((a,b)=>b.age-a.age);
console.log(user);


// promise

const myPromise=new Promise ((resolve,reject)=>{
    let success=true;
    if (success){
        resolve("Data passed");
    }
    else{
        reject("Error Ocured");
    }
});

//  displayingm.then,.catch

myPromise.then(result =>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
}
)

// async await
function fetchData()
{
    return new Promise(resolve=>
    {
        setTimeout (()=>
        {
            resolve("Data Loaded")
    },2000);
});
}

fetchData ().then(result=>
{
    console.log(result)
}
);

async function getData(){
const result =await fetchData();
console.log(result)
}
getData();

// 
