const form = document.querySelector('.js-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (email.value.length === 0 || password.value.length === 0) {
        alert("всі поля повинні бути заповнені");

        return;
    }

    const user = { email: email.value, password: password.value };

    console.log(user);

    form.reset();
}