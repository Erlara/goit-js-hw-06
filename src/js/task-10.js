function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  let boxesMarkup = ``;

  for (let i = 1; i <= amount; i++) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", boxesMarkup);
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
