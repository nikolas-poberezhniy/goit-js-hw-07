const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const valueField = document.querySelector('#value') 


let value = 0;

function increment () {
    valueField.textContent = value += 1;
}

function decrement () {
    valueField.textContent = value-=1
}

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);