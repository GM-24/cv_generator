const uniNameInput = document.querySelector(".uni-name-input");
const uniName = document.querySelector(".uni-name");
const header2 = document.querySelector(".header_2");
const select = document.querySelector(".option-container");
const option = document.querySelector(".degree");
const uniEndDateInput = document.querySelector(".uni_end_date");
const EndDateDisplay = document.querySelector(".uni-end-date-display");

let UNI_NAME = sessionStorage.getItem("UNI_NAME");
let UNI_END_DATE = sessionStorage.getItem("UNI_END_DATE");
let SELECTED = sessionStorage.getItem("SELECTED");

if (!UNI_END_DATE) {
  UNI_END_DATE = "";
}

if (!UNI_NAME) {
  UNI_NAME = "";
}
if (!SELECTED) {
  SELECTED = "";
}

uniName.innerHTML = UNI_NAME;
EndDateDisplay.innerHTML = UNI_END_DATE;
option.innerHTML = SELECTED;

uniNameInput.onkeyup = () => {
  uniName.innerHTML = uniNameInput.value;
  sessionStorage.setItem("UNI_NAME", uniNameInput.value);

  if (uniNameInput.value) {
    header2.classList.remove("hidden");
  } else {
    header2.classList.add("hidden");
  }
};

uniEndDateInput.addEventListener("change", () => {
  EndDateDisplay.innerHTML = uniEndDateInput.value;
});

select.addEventListener("change", () => {
  option.innerHTML = select.value;
  sessionStorage.setItem("SELECTED", select.value);
});
