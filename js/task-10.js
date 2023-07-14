"use strict"
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('controls');
const inputNamberRef = document.querySelector('[type=number]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtmRef = document.querySelector('button[data-destroy]');

const divBoxRef = document.getElementById('boxes');
divBoxRef.style.display = 'flex';
divBoxRef.style.flexWrap = 'wrap';
divBoxRef.style.alignItems = 'center';
divBoxRef.style.marginTop = '30px';


let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let arrDiv = [];
  let defaultDivSize = 30;
  for (let i = 0; i < amount; i+= 1) {
    defaultDivSize += 10;
    const divElement = document.createElement('div');
    divElement.classList = 'item';
    divElement.style.height = `${defaultDivSize}px`;
    divElement.style.width = `${defaultDivSize}px`;
    divElement.style.marginLeft = '20px';
    divElement.style.marginBottom = '20px';
    divElement.style.backgroundColor = getRandomHexColor();
    arrDiv.push(divElement);
  }
  return divBoxRef.append(...arrDiv);
}

function destroyBoxesMarkup() {
  inputNamberRef.value = '';
  return (divBoxRef.innerHTML = '');
}

inputNamberRef.addEventListener('input', toogleValue);
createBtnRef.addEventListener('click', () => {
  createBoxes(Number(inputNamberRef.value));
});
destroyBtmRef.addEventListener('click', destroyBoxesMarkup);