const section = document.createElement("section")
const button = document.createElement("button")
const h2 = document.createElement("h2")
const section1 = document.createElement('section');
const counterH1 =document.querySelector('#counter h1');
const plusButton = document.querySelector('#counter button:nth-of-type(1)');
const minusButton = document.querySelector('#counter button:nth-of-type(2)');
console.log(plusButton);


document.body.appendChild(section)
section.appendChild(h2)
button.textContent = 'click' 
h2.textContent = 'Welcome'
section.appendChild(button)


function loadSomeEvent() {
    button.addEventListener('click', handleclick);
    section1.addEventListener('mouseover',handleMouseOver);
    section1.addEventListener('mouseout',handleMouseOut);
    plusButton.addEventListener('click',handleIncre);
    minusButton.addEventListener('click',handleDecre);


    
}
loadSomeEvent()

function handleclick() {
    if (h2.textContent === "Welcome") {
        h2.textContent = "Hello students"
    } else if (h2.textContent === "Hello students") {
        h2.textContent = "Welcome"
    }
    section.style.backgroundColor = "brown"
}

document.body.appendChild(section1)
section1.innerHTML=`<h1>MouseEvent</h1>`

function handleMouseOver() {
section1.style.backgroundColor="green"
    
}

function handleMouseOut() {
section1.style.backgroundColor="blue"
    
}

let count =0
counterH1.textContent=count;

function handleIncre(){
    count++;
    counterH1.textContent=count;
}


function handleDecre(){
count--;
counterH1.textContent=count;

}
