const enteredName = document.querySelector('#name-output')
const inputName = document.querySelector('#name-input')

inputName.addEventListener('input', (event) => {
    if (inputName.value.length === 0) {
        enteredName.textContent = 'Anonymous';
        return;
    }
   enteredName.textContent = event.currentTarget.value
})

