function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  color: document.querySelector('.js-color'),
  change: document.querySelector('.js-change'),
  background: document.querySelector('.js-background')
}

elements.change.addEventListener('click', handlerClick);

function handlerClick() {
  const colorValue = getRandomHexColor();
  elements.background.style.backgroundColor = colorValue;
  elements.color.textContent = colorValue;
}