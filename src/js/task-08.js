const loginForm = document.querySelector('.login-form')
const inputField = document.querySelectorAll('input')

function fSubmit(event) {
    event.preventDefault(event);
    const { 
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') { 
        alert("всі поля повинні бути заповнені")
    } 
    console.log(`Email: ${email.value}; Password: ${password.value}`)
    event.currentTarget.reset();
}
    loginForm.addEventListener("submit", fSubmit)