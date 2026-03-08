const form = document.querySelector("form")
const input = document.querySelector("input")
const container =document.querySelector("section")

// Event elutha porom

function loadAllEvent() {
    form.addEventListener("submit", addTask)
}
loadAllEvent()


function addTask(e) {
    e.preventDefault()
    const userTask=input.value
    
    // oru element create panna poren
    const task = document.createElement("h3")
    task.textContent=userTask
    console.log(task);

        container.appendChild(task)

        input.value = ""
    
    
    

}