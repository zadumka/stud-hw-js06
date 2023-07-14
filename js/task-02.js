"use strict"
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const listItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];
  
  const listElements = document.createElement('li');
  listElements.classList.add('item');
  listElements.textContent = element;

  listItems.push(listElements);
}

list.append(...listItems);
console.log(list);

