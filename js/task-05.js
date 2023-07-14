const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');
const currentPlaceholder = (event) => {
    outputName.textContent = inputName.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};
inputName.addEventListener('input', currentPlaceholder);