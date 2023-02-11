const expNextBtn = document.querySelector(".anotherNxtBtn");
const jobPosition = document.querySelector(".position-input");
const CompanyName = document.querySelector(".comp-name-input");
const startingDate = document.querySelector(".start-date");
const endingDate = document.querySelector(".end-date");

function checkClass() {
  if (
    jobPosition.classList.contains("check") &&
    CompanyName.classList.contains("check") &&
    startingDate.value != "" &&
    endingDate.value != ""
  ) {
    expNextBtn.disabled = false;
    expNextBtn.classList.remove("disabled");
  } else {
    expNextBtn.disabled = true;
    expNextBtn.classList.add("disabled");
  }
}

jobPosition.addEventListener("input", checkClass);
CompanyName.addEventListener("input", checkClass);
startingDate.addEventListener("input", checkClass);
endingDate.addEventListener("input", checkClass);
