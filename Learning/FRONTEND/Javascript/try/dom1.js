// if i type something in the input it will act as a todo list.

// i need get elements in the documents means (HTML).

// i gonna take the form,button,section .

// now i gonna create a h3 tag in the js using creatElement




const form = document.querySelector("form")
const input = document.querySelector("input")
const container =document.querySelector("section")




function loadAllElements(){
form.addEventListener("submit",addTask)
}

loadAllElements()


function addTask(e){
    e.preventDefault()
    const h3 = document.createElement('h3')
    h3.textContent=input.value
    container.appendChild(h3)
    input.value = ""

    
    
}





