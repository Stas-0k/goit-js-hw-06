const inputEl = document.querySelector('#validation-input');
const length = document.querySelector('input[data-length]');



 const input = () => {console.log(inputEl.value.length) }
 inputEl.addEventListener("input", input)



const review = () => {
    for (let i = 0; i < 7; i++) { 
        if (inputEl.value.length!=length.dataset.length) {
            inputEl.classList.add("invalid")
        } else {
          inputEl.classList.remove("invalid")  
         inputEl.classList.add("valid")
     }
}
}
    
inputEl.addEventListener("blur", review)

