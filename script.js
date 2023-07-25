//show password error
const password_error = document.querySelector('#password_error_msg');
const submit = document.querySelector('#submit');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');

function validate_password(){
    if(password.value !== confirm_password.vaue){
        password.style.cssText = 'border: 1px solid #e0113c;';
        confirm_password.style.cssText = 'border: 1px solid #e0113c;';

        password_error.style.cssText = 'display: unset;';
    }
}

submit.addEventListener('click', validate_password);

