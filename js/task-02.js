const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const item= ingredients.map((element) => {
  const newIngredient = document.createElement('li');
  
  newIngredient.textContent = element;
  newIngredient.classList.add('item');

  return newIngredient;
});

list.append(...item);
