// const sayHello=()=>{
//     alert("you clicked")
// }

// const form = document.getElementById("loginForm");

// form.addEventListener('submit', click);

// function click(e){
//     e.preventDefault();
//     console.log(e);
    
//     alert(`your email:${e.target.email.value} and password:${e.target.password.value}`)    
// }

// let c=[2,3,4,5,7]
// let d=[8,9,10]
// let e=[...c,...d]
// console.log(e);

// let student={}
// let updateStudent ={
//     ...student,
//     mark:450
// }
// let [first,...otherElement]=c

// console.log(first,'c -other element');
// console.log(otherElement,'c -otherElement');

// function sum(arr){
//     let total=0;
//     for(i=0;i<arr.length;i++){
//         total=total+arr[i];
//     }
//     return total;
// }
// console.log('The sum is :'+sum([2, 4, 6]));

function findHowManyNums(arr){
 let sum=0
 for(i=0; i <arr.length; i++){
    sum =sum+1;
}return sum


}console.log(findHowManyNums([2,3,4,5]));

