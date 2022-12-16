const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
      if (Number(event.currentTarget.dataset.length) !== event.currentTarget.value.length)
        inputEl.classList.add("invalid");
  else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
});