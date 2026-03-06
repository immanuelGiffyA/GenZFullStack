const sayHello=()=>{
    alert("you clicked")
}

const form = document.getElementById("loginForm");

form.addEventListener('submit', click);

function click(e){
    e.preventDefault();
    console.log(e);
    
    alert(`your email:${e.target.email.value} and password:${e.target.password.value}`)    
}

let c=[2,3,4,5,7]
let d=[8,9,10]
let e=[...c,...d]
console.log(e);

let student={}
let updateStudent ={
    ...student,
    mark:450
}
let [first,...otherElement]=c

console.log(first,'c -other element');
console.log(otherElement,'c -otherElement');


