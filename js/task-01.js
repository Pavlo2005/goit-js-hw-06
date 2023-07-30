const categories = document.querySelector('.js-categories');

const children = document.querySelectorAll('.js-item');

console.log(`Number of categories: ${children.length}`);

children.forEach(child => {
    console.log(`Category: ${child.children[0].textContent}`);
    console.dir(`Elements: ${child.children[1].children.length}`);
})