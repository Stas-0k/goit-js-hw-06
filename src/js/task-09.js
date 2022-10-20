function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpan = document.querySelector('.color')
const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')

function changeBackground() { 
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', changeBackground)