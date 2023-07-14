const categoriesRef = document.getElementById("categories");
const titleCategories = categoriesRef.children;
const lengthAmountCategories = titleCategories.length;
console.log("Number of categories: ", lengthAmountCategories);

for (let category of titleCategories) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
}