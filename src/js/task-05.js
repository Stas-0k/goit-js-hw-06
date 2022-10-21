const inputEnter = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

const nameFunc = () => {
    if (inputEnter.value === '') {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = inputEnter.value;
    }
    
}

inputEnter.addEventListener("input", nameFunc)

