const input = document.querySelector('.js-input');

input.addEventListener('blur', handlerSearch);

console.dir(input);

console.log(input.dataset.length);

function handlerSearch(evt) {

    console.log(`${evt.currentTarget.value.length} - ${input.dataset.length}`);
    
    if (evt.currentTarget.value.length > input.dataset.length) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}