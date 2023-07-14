"use strict"
const categoriesRef = document.querySelector('#categories');
//const titleCategories = categoriesRef.children;
//const lengthAmountCategories = titleCategories.length;
console.log(`Number of categories: `, categoriesList.children.length);

[...categoriesList.children].forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements:`, elem.lastElementChild.children.length);
});
