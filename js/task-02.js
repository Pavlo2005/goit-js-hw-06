const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('.js-ingredients');

const elements = ingredients.map(element => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add('item');

  return li;
});

list.append(...elements);


