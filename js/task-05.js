const elements = {
    input: document.querySelector('.js-input'),
    name: document.querySelector('.js-name')
}

elements.input.addEventListener('input', handlerSearch);

function handlerSearch(evt) {
    if (evt.currentTarget.value.trim().length > 0)
        elements.name.textContent = evt.currentTarget.value.trim();
    else
        elements.name.textContent = 'Anonymous';
}