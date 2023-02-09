const nameInput = document.querySelector(".name-input");
const lnameInput = document.querySelector(".lname");
const EmailInput = document.querySelector(".email");
const jobInput = document.querySelector(".position-input");
const compinput = document.querySelector(".comp-name-input");
const fnameErr = document.querySelector(".fname-error");
const lnameErr = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const positionErr = document.querySelector(".fckingError");
const compErr = document.querySelector(".anotherFckingError");

const geoAlph = /^[ა-ჰ]+$/;
const validEmail = /^.*@redberry\.ge$/;

function validateData(input, error, minlength, regex) {
  if (input.value.length <= minlength) {
    error.classList.remove("hide");
    input.classList.remove("check");
  } else if (!regex.test(input.value)) {
    error.classList.remove("hide");
    input.classList.remove("check");
  } else {
    error.classList.add("hide");
    input.classList.add("check");
  }
}

nameInput.addEventListener("input", () => {
  validateData(nameInput, fnameErr, 2, geoAlph);
});

lnameInput.addEventListener("input", () => {
  validateData(lnameInput, lnameErr, 2, geoAlph);
});

EmailInput.addEventListener("input", () => {
  if (validEmail.test(EmailInput.value)) {
    emailError.classList.add("hide");
    EmailInput.classList.add("check");
  } else {
    EmailInput.classList.remove("check");
    emailError.classList.remove("hide");
  }
});

jobInput.addEventListener("input", () => {
  if (jobInput.value.length <= 2) {
    positionErr.classList.remove("hide");
  } else {
    positionErr.classList.add("hide");
  }
});
