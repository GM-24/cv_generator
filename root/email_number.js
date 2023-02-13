const email = document.querySelector(".person-email");
const number = document.querySelector(".person-number");

const emailIcon = document.querySelector(".email-icon");
const phoneIcon = document.querySelector(".phone-icon");

const emailInput = document.querySelector(".email");
const numberInput = document.querySelector(".number");

let Email = sessionStorage.getItem("Email");
let Num = sessionStorage.getItem("Num");

if (!Email) {
  Email = "";
}

if (!Num) {
  Num = "";
}

email.innerHTML = Email;
number.innerHTML = Num;

if (sessionStorage.getItem("Email")) {
  emailIcon.classList.remove("hidden");
}

if (sessionStorage.getItem("Num")) {
  phoneIcon.classList.remove("hidden");
}

emailInput.onkeyup = () => {
  email.innerHTML = emailInput.value;
  sessionStorage.setItem("Email", emailInput.value);
  if (emailInput.value) {
    emailIcon.classList.remove("hidden");
  } else {
    emailIcon.classList.add("hidden");
  }
};

numberInput.onkeyup = () => {
  number.innerHTML = numberInput.value;
  sessionStorage.setItem("Num", numberInput.value);

  if (numberInput.value) {
    phoneIcon.classList.remove("hidden");
  } else {
    phoneIcon.classList.add("hidden");
  }
};
