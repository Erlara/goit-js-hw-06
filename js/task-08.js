const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const user = {
      email,
      password,
    };
  if (email !== "" && password !== "") {
    console.log(user);
    event.currentTarget.reset();
  } else alert("Заповніть, будь ласка, всі поля форми!");
});
