let string="Hello,World"
console.log(string.length);
console.log(string.charAt(1))

let firstName = "IMMANUEL"
let lastName ="GIFFY"
let fullName=firstName.concat(lastName)
console.log(fullName);

let firstName1="iMMANUEL"
let lastName1="JEFFY"
let fullName1=firstName1.concat()
console.log(fullName1);


let email ="immanuelgif@gmail.com";
console.log(email.substring(0,21) );



let city="chennai";
console.log(city.toUpperCase());

let mail ="immanuel@gamil.com";
let name =mail.substring(0,6).toUpperCase();
console.log(name);
// map
let names=["immanuel","jeffy","giffy"]
let upperCaseNames=names.map(name=>name.toUpperCase())
console.log(upperCaseNames);

let arr=[1,2,3,4,5]
let squaredNumbers=arr.map(num=>num*num)
console.log(squaredNumbers);



// Extract Names: Given an array of objects [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], use map to extract just the names into a new array.

let array=[{name:'Alice',age:25},
{name:'Bob',age:30}]

let extractedNames=array.map(Value=>Value.name)
console.log(extractedNames);

// Uppercase Strings: Given an array of strings ['hello', 'world'], use map to convert each string to uppercase.

let string1=['hello','world']
let upperCaseString=string1.map(obj=>obj.toUpperCase())
console.log(upperCaseString);


// Add Tax to Prices: Given an array of prices [10, 20, 30], use map to add 10% tax to each price (round to 2 decimals).

let arr1=[10,20,30]
let pricesWithTax=arr1.map(price=>Math.round((price*1.1)*100)/100)
console.log(pricesWithTax)

// Extract Names: Given an array of objects [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], use map to extract just the names into a new array.

let array2=[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
let selection=array2.map(name=>name.name)
console.log(selection);




