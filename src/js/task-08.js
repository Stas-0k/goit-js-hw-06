const loginForm = document.querySelector('.login-form')
const emailInput = loginForm[0]
const passwordInput = loginForm[1]

function fSubmit(event) {
    event.preventDefault(event);
    
    if (emailInput.value === '' || passwordInput.value === '') {
        alert("всі поля повинні бути заповнені")
    } else {
        const result = {
            [emailInput.name]: emailInput.value,
            [passwordInput.name]: passwordInput.value,
        } 
        console.log(result)
    }    
    
    
    event.currentTarget.reset();
}


    loginForm.addEventListener("submit", fSubmit)