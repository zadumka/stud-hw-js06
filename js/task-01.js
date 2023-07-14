"use strict"
const categoriesRef = document.querySelector("#categories");
//const titleCategories = categoriesRef.children;
//const lengthAmountCategories = titleCategories.length;
console.log("Number of categories: ", categoriesList.children.length);

for (let category of titleCategories) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
}
