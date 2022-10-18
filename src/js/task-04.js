let counterValue = 0;
const decrButton = document.querySelector('[data-action = "decrement"]');
const incrButton = document.querySelector('[data-action = "increment"]')
let valueView = document.querySelector('#value')

decrButton.addEventListener("click", minus)
incrButton.addEventListener("click", plus)

function plus() { 
    counterValue += 1;
    valueView.textContent = counterValue; 
}

function minus() { 
    counterValue -= 1; 
    valueView.textContent  = counterValue;
}