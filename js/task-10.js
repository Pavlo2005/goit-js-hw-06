function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  input: document.querySelector('.js-input'),
  create: document.querySelector('.js-create'),
  destroy: document.querySelector('.js-destroy'),
  box: document.querySelector('.js-box')
}

elements.input.addEventListener('input', handlerValue);

let value = 0;

function handlerValue(evt) {
  value = evt.currentTarget.value;
  console.log(value);
}

elements.create.addEventListener('click', handlerClickCreate);

let size = 30;

function handlerClickCreate() {
  
 let markup = '';
  for (let i = 0; i < value; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px"></div>`;
    size += 10;
  }

  elements.box.insertAdjacentHTML('beforeend', markup);
}

elements.destroy.addEventListener('click', handlerClickDestroy);

function handlerClickDestroy() {
  size = 30;
  elements.box.textContent = '';
}