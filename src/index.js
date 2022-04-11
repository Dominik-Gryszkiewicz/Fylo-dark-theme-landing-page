import {Navbar} from 'bootstrap'

const emailInput = document.querySelector('.access__box__form__input')
const submitBtn = document.querySelector('.access__box__form__btn')
const emailError = document.querySelector('.access__box__form__error')

function validateEmail(email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let emailInputValue = emailInput.value
    if (!validateEmail(emailInputValue)) {
        emailError.classList.add('active')
    } else {
        emailError.classList.remove('active')
    }
})

