function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");


changeColorBtn.addEventListener("click", () => {
  const bgColorFunction = getRandomHexColor();
  bodyEl.style.backgroundColor = bgColorFunction;
  colorEl.textContent = bgColorFunction;
});
