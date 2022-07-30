function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');


colorButton.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  console.log(currentColor);
  colorName.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
  console.log(currentColor);
})

