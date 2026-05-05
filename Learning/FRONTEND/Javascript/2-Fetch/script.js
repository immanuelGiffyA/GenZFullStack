// // // const fetchUser = async () => {
// // //   try {
// // //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
// // //     const users = await response.json();

// // //     const ul = document.getElementById("ul");

// // //     ul.innerHTML = ""; // clear old data

// // //     users.forEach(user => {
// // //       const li = document.createElement("li");
// // //       li.textContent = user.username; // 👈 correct field
// // //       ul.appendChild(li); // 👈 element add pannum 
// // //     });

// // //   } catch (err) {
// // //     console.log(err);
// // //   }
// // // };

// // // // button click
// // // document.getElementById("btn").addEventListener("click", fetchUser);

// // const person =[
// //   Name = ["Giffy"],
// //   age = 21,
// //   email = "immanuel123@gmail.com",
// //   address = [
// //     city = "parappadi",
// //     state = "TN",
// //     pincode = 627110,
// //   ]
  
// // ];


// // // const [Name, age, email, address ] = person

// // console.log(person[0])

// // const [one,two,three] = person
// // console.log(one);

// // one.map(val => console.log(val))

// // const user = [{},{},{}];

// // const [giffy,...] = user;
// // console.log(giffy)
// // console.log(remainingUser)


// // print 1 to 10 numbers 

// // function num (num){
// // for (let i =1 ; i<=10 ; i++){
// // console.log(i)
// // }
// // }
// // num(10)

// // // Count how many times 3 appears in [1,3,4,3,5,3]

// // function count3(num){
// //   let count = 0
// // for(let i = 1 ; i<=num.length ; i++){
// //   if( num[i]===3){
// //   count ++
// // }
// // }
// // return count ;
// // }
// // console.log(count3([1,3,4,3,5,3]))

// // function sum(arr){
// //     let total=0;
// //     for(i=0;i<arr.length;i++){
// //         total += arr[i];
// //     }
// //     return total;
// // }
// // console.log('The sum is :'+sum([2, 4, 6]));

// // Count how many numbers are in [4, 6, 8, 10].
// function howmanyNumbers(arr){
//     let sum=0;
//     for(i=0;i<arr.length;i++){
//         sum=sum+1;}
//     return sum;
// }
// console.log(howmanyNumbers([4, 6, 8, 10]));

function isPalindrome (str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("giffy"));
console.log(isPalindrome("racecar"));

