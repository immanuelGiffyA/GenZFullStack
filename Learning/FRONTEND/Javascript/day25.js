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