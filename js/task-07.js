const inputSizeControl = document.getElementById('font-size-control');
const textValue = document.getElementById('text');

const fontSizeControl = ({ currentTarget }) =>
  (textValue.style.fontSize = `${currentTarget.value}px`);

  inputSizeControl.addEventListener('input', fontSizeControl);