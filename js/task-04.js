const elements = {
    increnent: document.querySelector('.js-increnent'),
    valueElement: document.querySelector('.js-value'),
    decrement: document.querySelector('.js-decrement')
}

let counterValue = 0;

elements.increnent.addEventListener('click', handlerClickIncrenent);

function handlerClickIncrenent() {
    counterValue+=1;
    elements.valueElement.textContent = counterValue;
}

elements.decrement.addEventListener('click', handlerClickDecrement);

function handlerClickDecrement() {
    counterValue-=1;
    elements.valueElement.textContent = counterValue;
}