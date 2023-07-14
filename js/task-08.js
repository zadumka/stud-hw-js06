"use strict"
const loginForm = document.querySelector('.login-form');

function handFormSubmit(params) {
    params.preventDefault();
    const {email, password} = params.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Please enter in all fields');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        params.currentTarget.reset();
    }
}

loginForm.addEventListener('submit', handFormSubmit);


