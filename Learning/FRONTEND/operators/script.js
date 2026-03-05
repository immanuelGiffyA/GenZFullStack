if (20 <=21) {
    console.log(true);
}else{
    console.log(false);
}

let colour = "red" 

let result = colour === "red" ? console.log("stop") : colour === "yellow" ? console.log("awake") : colour === "green" ? console.log("goo"): "default"

   timeOfThings(22)                                                                 

let age = 60;

if (age<=12){
    console.log("ticket price $5");
}else if(age>=12 && age<=17){
    console.log("ticket price $10");
}else if(age>=18 && age<=59){
    console.log("ticket price $20");
}else{console.log("$15")}



function timeOfThings (hours){
    if (hours >=0 && hours <=12){
        console.log("GM");

    }
    else if(hours >=13 && hours<=18){
        console.log("GA");

    }else console.log("GE");
}

console.log(window);



function discountOfCalculator (dollor ){
  if (dollor>=100){
    console.log("20% discount");
 }
    else if (dollor >=50 && dollor<=99){
    console.log("10% discount");
 }
 else if (dollor <50)
    console.log("no discount");

}

discountOfCalculator(100)
discountOfCalculator(150)
discountOfCalculator(120)
discountOfCalculator(43)
discountOfCalculator(10)



for (let index =1; index<=10; index++) {
    // console.log(index);   
}

for (let i=1; i<=50;i++){
    if(i %2===0){
    // console.log(i);
    }
}




let index=10;

while (index >=1){
     console.log(index);
     index--;
}

for (let index = 5; index >=5; index++) {
    if (index*5) {
        console.log(index);


    }

}

let array = [1, 2, 3, 4, 5]
let double = array.map(value => value * 2)
console.log(double);

function toFindEvenNum(arr) {
    let dummArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            dummArr.push(arr[i]);
        }
    }
    console.log(dummArr.length);
}
toFindEvenNum([0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])

let c = 0;

for(let i = 0; i <=30; i++){
    if(i % 2 === 0){
        c++;
    }
}
console.log(c);

let array1 = [20,55,60,10,80,45];
for (let index = 0; index < array1.length; index++) {
    if (array1[index] > 50) {
        console.log(array1[index]);

    }

// }


let array1 = [20,55,60,10,80,45];
let emptyArr = [];
let double1= array1.map((value) => {
    if(value > 50){
        emptyArr.push(value);
    }
});
console.log(emptyArr);

let age = 17;

if (age >= 18){ 
    console.log("you are adult");
}else{
    console.log("you are minor");

}


let arr=[1,2,3,4,5]
arr.reverse();
console.log(arr);

function sumArray(arr){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}
let numbers =[1,2,3,4,5];
console.log(sumArray(numbers));

function findEntireNum(num) {
for (let i = num; i >= 1; i--) {
console.log(i);
}
}

// findEntireNum(10)


const name ={city:"chennai"}
name.city="Madurai"
console.log(name);

// second number change panniruken

let array = [5, 10, 15];
if (array.length > 1) {
    array[1] = 20
}

console.log(array);

// add num in the end

let arr1 = [1, 2, 3, 4, 5]
arr1[arr1.length] = 7;
arr1[arr1.length] = 8;
console.log(arr1);2]

let arr2= [10, 20, 30]
for (let i = arr2.length; i > 0; i--) {
    arr2[i] = arr2[i - 1]
}
arr2[0] = 99
console.log(arr2);


let num =-10;
if (num >=0) {
    console.log("positive");
} else if (num<= 0) {
    console.log("negavite")
}else{
    console.log("zero");
    
}

let arr3=[3,6,9,12,15]  
let newArr=[];
for (let index = 0; index < arr2.length; index++) {
     if (index === 2) {
        newArr.push(0);
        }
        newArr.push(arr3[index])
}
console.log(newArr);  





























