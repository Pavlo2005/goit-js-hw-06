const elements = {
    input: document.querySelector('.js-input'),
    item: document.querySelector('.js-item')
}
elements.item.style.fontSize = `${elements.input.value}px`;
elements.input.addEventListener('input', handlerSize);

function handlerSize(evt) {
    elements.item.style.fontSize = `${evt.currentTarget.value}px`;
}