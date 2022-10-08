const form = document.getElementById("form");
const inputEmail = document.getElementById("input");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailrgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.value.match(emailrgx)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});
