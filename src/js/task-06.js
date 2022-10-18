const inputEl = document.querySelector('#validation-input');
const length = document.querySelector('input[data-length]');



 const input = () => {console.log(inputEl.value.length) }
 inputEl.addEventListener("input", input)



 const review = () => {
     if (inputEl.value.length>length) {
        inputEl.classList.add("valid")
     } else {
         inputEl.classList.add("invalid")
     }
     }
inputEl.addEventListener("blur", review)


console.log(inputEl.value.length)





 