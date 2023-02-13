const positionErr = document.querySelector(".fckingError");
const compErr = document.querySelector(".anotherFckingError");
const jobInput = document.querySelector(".position-input");
const compinput = document.querySelector(".comp-name-input");

jobInput.addEventListener("input", () => {
  if (jobInput.value.length <= 2) {
    positionErr.classList.remove("hide");
    jobInput.classList.remove("check");
  } else {
    positionErr.classList.add("hide");
    jobInput.classList.add("check");
  }
});

compinput.addEventListener("input", () => {
  if (compinput.value.length <= 2) {
    compErr.classList.remove("hide");
    compinput.classList.remove("check");
  } else {
    compErr.classList.add("hide");
    compinput.classList.add("check");
  }
});
