const sayHello=()=>{
    alert("you clicked")
}

const form = document.getElementById("loginForm");

form.addEventListener('submit', click);

function click(e){
    e.preventDefault();
    console.log(e);
    
}