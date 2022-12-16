const itemAll = document.querySelectorAll('.item');
console.log('Number of categories:', itemAll.length);


const ulEl = document.querySelector('#categories');
const firstItemEl = ulEl.firstElementChild;
const titleFirstEl = firstItemEl.firstElementChild;
console.log('Category:', firstItemEl.firstElementChild.textContent);
const ulFirstItemEl = firstItemEl.lastElementChild;
console.log('Elements:', ulFirstItemEl.children.length);

const secondItemEl = ulEl.children[1];
const titleSecondEl = secondItemEl.firstElementChild;
console.log('Category:', secondItemEl.firstElementChild.textContent);
const ulSecondItemEl = secondItemEl.lastElementChild;
console.log('Elements:', ulSecondItemEl.children.length);

const lastItemEl = ulEl.lastElementChild;
const titleLastEl = lastItemEl.firstElementChild;
console.log('Category:', lastItemEl.firstElementChild.textContent);
const ulLastItemEl = lastItemEl.lastElementChild;
console.log('Elements:', ulLastItemEl.children.length);
