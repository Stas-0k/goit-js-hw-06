const inputEnter = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

const nameFunc = () => {
    outputName.textContent = inputEnter.value;
}

inputEnter.addEventListener("input", nameFunc)

