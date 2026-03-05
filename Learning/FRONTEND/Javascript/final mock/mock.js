// Print numbers from 1 to 10.
function num(nums) {
    for (i = 1; i <= nums; i++) {
        console.log(i);
    }
}
num(10)

// Count how many times 3 appears in [1,3,4,3,5,3]
function count3(arr){
    let count=0;
 for(i=0;i<=arr.length;i++){
    if(arr[i]===3){
    count++
    }
 }
 return count;
}
console.log(count3([1,3,4,3,5,3]));

// Reverse the array [10, 20, 30].
function reverse(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverse([10, 20, 30]));

// Check if a number is positive or negative.
 
function findPositiveNegative(num){
 if(num>0){
     
     console.log("positive");
 }
else {
    console.log("negative");
    
}
    
}
findPositiveNegative(-78)

// Find the sum of [2, 4, 6]

function sum(arr){
    let total=0;
    for(i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    return total;
}
console.log('The sum is :'+sum([2, 4, 6]));

// Check if "a" is a vowel or consonant.
function checkVowel(char){
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
        console.log("vowel");
        
    }
    else{
        console.log("no vowel");
        
    }
}
checkVowel("a")
checkVowel("w")
checkVowel("z")

// Count how many numbers are in [4, 6, 8, 10].
function howmanyNumbers(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+1;}
    return sum;
}
console.log(howmanyNumbers([4, 6, 8, 10]));

// Find the largest number in [3, 7, 1].
function findLargest(arr){
    let large=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i];
        }
    }
    return large;
}
console.log('The largest number is :'+ findLargest([3, 7, 1]));

// Check if a person is eligible to vote (age ≥ 18).
function vote(age){
    if(age>=18){
        console.log("your age is:"+age+"=>"+"so you can eligible to vote");
        
    }
    else{
        console.log("your age is :"+age+""+"so you are not eligible to vote");
        
    }
}
vote(20)

// Add 5 to each element of [1, 2, 3].
function add5(arr){
    let added=[];
    for(i=0;i<arr.length;i++){
        added.push(arr[i]+5)
}
return added;
}   
console.log(add5([1, 2, 3]));

// Reverse the string "hello".
function reverseString(str){
    let reversed="";
    for(i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

// Count how many even numbers are in [1,2,3,4,5,6].
function evenNumbers(arr){
    let evenCount=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenCount=evenCount+1;

    }
}
return evenCount;
}
console.log(evenNumbers([1,2,3,4,5,6]));

// Check if 10 is divisible by 5.

function checkNum(nums){
if(nums%5===0){
    console.log(nums+" is divisible by 5"); 
}
else{    console.log(nums+" is not divisible by 5");
}
}
checkNum(10)
checkNum(80)
checkNum(99)

// Print each element of [7, 8, 9].
function printElements(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printElements([7, 8, 9])

// Find the smallest number in [12, 4, 6].
function findSmall(arr){
let small=arr[0];
for(i=1;i<arr.length;i++){
    if(small>arr[i]){
        small=arr[i];
    }
}
return small;       
}
console.log('The smallest number is :'+findSmall([12, 4, 6]))

// Count how many properties are in { a:1, b:2, c:3 }.
function countProp(obj){ 
    let count=0;

for(let key in obj){
    count=count+1;
}
return count;
}
console.log(countProp({ a:1, b:2, c:3 }))

// Create an array with only odd numbers from [1,2,3,4,5].
function onlyOdd(arr){
    let odd=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd.push(arr[i]);
       }
    }
    return odd;
}
console.log(onlyOdd([1,2,3,4,5]));

// Check if "name" exists in { name:"Anu", age:20 }
function checkName(obj){
    if("name" in obj){
        console.log("name exists in the object");
    }
    else{
        console.log("name does not exist in the object");   
    }
}
checkName({ name:"Anu", age:20 })

// Find the sum of numbers from 1 to 5.
function sumofNumbers(num){
 let sums=0;
 for(i=1;i<=num;i++){
        sums=sums+i;
}
return sums;
}
console.log(sumofNumbers(5));

// Reverse [5, 15, 25, 35].
function reverseArr(arr){
    let done=[];
    for (i=arr.length-1;i>=0;i--){
        done.push(arr[i]);
    }
    return done;
}
console.log(reverseArr([5, 15, 25, 35]));

// Count how many times "a" appears in "banana".
function findA(string){
    let count=0;
    for(i=0;i<string.length;i++){
        if(string[i]==='a'){
            count=count+1;
        }       
    }
    return count;
}
console.log(findA("banana"));

// Find the greater number between 8 and 3.
function greaterNum(num1,num2){
if(num1>num2){
    console.log(num1,"is greater");
    
}
else{
    console.log(num2,"is greater");
    
}
}
greaterNum(8,3)

// Print all even numbers between 1 and 10.
function printEven(num){
    for(i=1;i<=num;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
printEven(10)

// Find the smallest number in [9, 3, 7, 2].
function findsmall(arr){
    let small=arr[0];
    for(i=1;i<arr.length;i++){
        if(small>arr[i]){
            small=arr[i];
        }
    }
    return small;
}
console.log(findsmall([9, 3, 7, 2]))

// Reverse the string "world".
function reverseStr(str){
    let reversed="";
    for(i=str.length-1;i>=0;i--){
        //empty string 
        reversed=reversed+str[i];
    }
    return reversed;
}
console.log(reverseStr("world"))


// reverse the array [1, 2, 3, 4, 5].

function reverse(arr){
    let count=[];
    for (let i = 0; i < arr.length; i--) {
        count.push(arr[i]);
        
    }
return count;
}
// console.log(reverse([1,2,3,4,5]));



function vote(age){
if ( age >=18){
console.log("vote")
}else{
    console.log("cannot vote");
    
}

}
vote(19)


// Check if a number is even or odd.
function evenOdd(num){
    if(num%2==0){
        console.log(num+" is even");
    }
    else{
        console.log(num+" is odd");
    }
}
evenOdd(10)
evenOdd(15)


//let array = [1,2,3] add 5 to each element of the array and return the new array.
function variable(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 5);
    }
    return newArray;
}
console.log(variable([1, 2, 3]));





// 
function variable(array) {
newArray=[]
for (let index = 0; index < array.length; index++) {
    
    newArray.push(array[i]+5)
}
}
console.log(variable([1,2,3]));
