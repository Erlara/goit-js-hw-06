const valueEl = document.querySelector("#value");
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

buttonIncrement.addEventListener("click", add);

function add() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

buttonDecrement.addEventListener("click", del);

function del() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}