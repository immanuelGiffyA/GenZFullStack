// Print numbers from 1 to 10.

function Number(num){
for (let index = num; index <=10; index++) {
  console.log(index);
  
  
}
}
// Number(1)

// find the sum of [4,7,9]

function sum(count){
let total=0;
for (let i=0; i < count.length; i++) {
  total=total+count[i];
  
}
return total;
}
console.log(sum([4,7,9]));

// count how many numbers in the array [2,5,2,67,3,2,4]

function howmany(arr){
let total=0;
for(i=0;i<arr.length;i++){
  total=total+1;
}
return total;
}
console.log(howmany([2,5,2,6,3,2,4]));

// find vowels

function findVowels(value){
  // if(alpha==='a'||alpha==='e'||alpha==='i'||alpha==='o'||alpha==='u'){
  //   console.log('vowels')
  // }else
  //   console.log('not an vowels');
     let value=[a,e,i,o,u]
     for (let i = 0; i < array.length; i++) {
    
      
     }
}
findVowels('r');

// [1,2,3,4,5,6] even number should print

function even(arr){
  let total=0;
  for (i=0;i< arr.length;i++){
    if(arr[i] %2==0){
      total++
    }
  }
  return total;
}
console.log(even([1,2,3,4,5,6]));

// input 10 divisible 5

function checkDivisible(arr){
if(arr %5===0){
  console.log("dividible by 5");
  
}else{
  console.log("not divisible by 5");
  
}

}
checkDivisible(10);




