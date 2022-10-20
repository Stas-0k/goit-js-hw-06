function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector('input')
const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

let pixels = 20;

function createBoxes(amount) {
  amount = numberEl.value;
  for (let i = 0; i < amount; i++) { 
    const divEl = document.createElement('div') 
    pixels += 10;
    divEl.style.width = `${pixels}px`;
    divEl.style.height = `${pixels}px`;
    divEl.style.backgroundColor = getRandomHexColor(); 
    divEl.classList.add("boxIn");
    boxes.prepend(divEl);  
  } 
}

function destroyBoxes() {
  boxes.innerHTML = ''
}

createButton.addEventListener("click", createBoxes)
destroyButton.addEventListener("click", destroyBoxes)
