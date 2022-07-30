const form = document.querySelector('.login-form');
const login = document.querySelector('input[name=email]');
form.addEventListener("submit", formProcessing);

function formProcessing(e) {
    e.preventDefault();

    const { elements: { email, password } } = e.currentTarget;

    if (!email.value|| !password.value) {
        alert('Все поля должны быть заполнены');
        return;
    }

    const authData = {
        email: email.value,
        password: password.value
    }

    console.log(authData);
    form.reset();
}