const uniNameInput = document.querySelector(".uni-name-input");
const uniName = document.querySelector(".uni-name");
const header2 = document.querySelector(".header_2");
const select = document.querySelector(".option-container");
const option = document.querySelector(".degree");
const uniEndDateInput = document.querySelector(".uni_end_date");
const EndDateDisplay = document.querySelector(".uni-end-date-display");
const uniDesc = document.querySelector(".uni-desc");
const uniDescInput = document.querySelector(".education_desc");

const finishBtn = document.querySelector(".finishBtn");

const uniErr = document.querySelector(".uniErr");

let UNI_NAME = sessionStorage.getItem("UNI_NAME");
let UNI_END_DATE = sessionStorage.getItem("UNI_END_DATE");
let SELECTED = sessionStorage.getItem("SELECTED");
let UNI_DESC = sessionStorage.getItem("UNI_DESC");

if (!UNI_END_DATE) {
  UNI_END_DATE = "";
}

if (!UNI_NAME) {
  UNI_NAME = "";
}
if (!SELECTED) {
  SELECTED = "";
}

if (!UNI_DESC) {
  UNI_DESC = "";
}

uniName.innerHTML = UNI_NAME;
EndDateDisplay.innerHTML = UNI_END_DATE;
option.innerHTML = SELECTED;
uniDesc.innerHTML = UNI_DESC;

uniNameInput.onkeyup = () => {
  uniName.innerHTML = uniNameInput.value;
  sessionStorage.setItem("UNI_NAME", uniNameInput.value);

  if (uniNameInput.value) {
    header2.classList.remove("hidden");
  } else {
    header2.classList.add("hidden");
  }
};

uniDescInput.onkeyup = () => {
  uniDesc.innerHTML = uniDescInput.value;
  sessionStorage.setItem("UNI_DESC", uniDescInput.value);
};

uniEndDateInput.addEventListener("change", () => {
  EndDateDisplay.innerHTML = uniEndDateInput.value;
  sessionStorage.setItem("UNI_END_DATE", uniEndDateInput.value);
});

select.addEventListener("change", () => {
  option.innerHTML = select.value;
  sessionStorage.setItem("SELECTED", select.value);
});

uniNameInput.addEventListener("input", () => {
  if (uniNameInput.value.length <= 2) {
    uniErr.classList.remove("hide");
    uniNameInput.classList.remove("check");
  } else {
    uniErr.classList.add("hide");
    uniNameInput.classList.add("check");
  }
});

function checkClass() {
  if (
    uniNameInput.classList.contains("check") &&
    option.value != "" &&
    uniEndDateInput.value != ""
  ) {
    finishBtn.disabled = false;
    finishBtn.classList.remove("disabled");
  } else {
    finishBtn.disabled = true;
    finishBtn.classList.add("disabled");
  }
}

uniNameInput.addEventListener("input", checkClass);
option.addEventListener("input", checkClass);
uniEndDateInput.addEventListener("input", checkClass);
